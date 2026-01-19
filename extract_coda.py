#!/usr/bin/env python3
"""
Coda API Data Extractor

Extracts tables and pages from a Coda document and saves them to the sources folder.

Folder structure:
    sources/coda/
        ├── metadata.json          # Document metadata
        ├── pages/                  # Markdown files for each page
        │   ├── index.json         # Pages index with hierarchy
        │   └── *.md               # Individual page content
        └── tables/                # Table data
            ├── index.json         # Tables index
            ├── *.json             # Full table data with metadata
            └── *.csv              # Table data in CSV format

Usage:
    python extract_coda.py

Environment variables (can be set in .env file):
    CODA_API_TOKEN: Your Coda API token
    CODA_DOC_ID: The document ID to extract
"""

import os
import json
import csv
import re
import time
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configuration
CODA_API_TOKEN = os.getenv('CODA_API_TOKEN')
CODA_DOC_ID = os.getenv('CODA_DOC_ID')
CODA_API_BASE = 'https://coda.io/apis/v1'

# Output directories
BASE_DIR = Path(__file__).parent
SOURCES_DIR = BASE_DIR / 'sources' / 'coda'
PAGES_DIR = SOURCES_DIR / 'pages'
TABLES_DIR = SOURCES_DIR / 'tables'


def api_request(endpoint: str, params: dict = None) -> dict:
    """Make an authenticated request to the Coda API."""
    url = f"{CODA_API_BASE}{endpoint}"

    if params:
        query_string = '&'.join(f"{k}={v}" for k, v in params.items())
        url = f"{url}?{query_string}"

    headers = {
        'Authorization': f'Bearer {CODA_API_TOKEN}',
        'Content-Type': 'application/json'
    }

    request = Request(url, headers=headers)

    try:
        with urlopen(request) as response:
            return json.loads(response.read().decode('utf-8'))
    except HTTPError as e:
        print(f"HTTP Error {e.code}: {e.reason}")
        print(f"URL: {url}")
        if e.code == 429:
            # Rate limited - wait and retry
            retry_after = int(e.headers.get('Retry-After', 10))
            print(f"Rate limited. Waiting {retry_after} seconds...")
            time.sleep(retry_after)
            return api_request(endpoint, params)
        raise
    except URLError as e:
        print(f"URL Error: {e.reason}")
        raise


def paginated_request(endpoint: str, items_key: str = 'items') -> list:
    """Handle paginated API responses."""
    all_items = []
    page_token = None

    while True:
        params = {}
        if page_token:
            params['pageToken'] = page_token

        response = api_request(endpoint, params if params else None)
        items = response.get(items_key, [])
        all_items.extend(items)

        page_token = response.get('nextPageToken')
        if not page_token:
            break

        # Small delay to avoid rate limiting
        time.sleep(0.2)

    return all_items


def sanitize_filename(name: str) -> str:
    """Convert a name to a safe filename."""
    # Replace problematic characters
    safe_name = re.sub(r'[<>:"/\\|?*]', '_', name)
    # Replace multiple spaces/underscores with single underscore
    safe_name = re.sub(r'[\s_]+', '_', safe_name)
    # Remove leading/trailing underscores
    safe_name = safe_name.strip('_')
    # Limit length
    if len(safe_name) > 100:
        safe_name = safe_name[:100]
    return safe_name or 'unnamed'


def get_doc_info() -> dict:
    """Get document metadata."""
    print("Fetching document info...")
    return api_request(f"/docs/{CODA_DOC_ID}")


def get_pages() -> list:
    """Get all pages from the document."""
    print("Fetching pages...")
    return paginated_request(f"/docs/{CODA_DOC_ID}/pages")


def get_page_content(page_id: str) -> dict:
    """Get content for a specific page."""
    return api_request(f"/docs/{CODA_DOC_ID}/pages/{page_id}")


def get_tables() -> list:
    """Get all tables from the document."""
    print("Fetching tables...")
    return paginated_request(f"/docs/{CODA_DOC_ID}/tables")


def get_table_columns(table_id: str) -> list:
    """Get columns for a specific table."""
    return paginated_request(f"/docs/{CODA_DOC_ID}/tables/{table_id}/columns")


def get_table_rows(table_id: str) -> list:
    """Get all rows from a table."""
    return paginated_request(f"/docs/{CODA_DOC_ID}/tables/{table_id}/rows")


def extract_cell_value(cell_value):
    """Extract the display value from a cell."""
    if cell_value is None:
        return ''
    if isinstance(cell_value, (str, int, float, bool)):
        return str(cell_value)
    if isinstance(cell_value, dict):
        # Handle rich cell values (links, images, etc.)
        if '@type' in cell_value:
            if cell_value['@type'] == 'ImageUrlValue':
                return cell_value.get('url', '')
            elif cell_value['@type'] == 'PersonValue':
                return cell_value.get('name', cell_value.get('email', ''))
            elif cell_value['@type'] == 'CurrencyValue':
                return f"{cell_value.get('currencyCode', '$')}{cell_value.get('amount', 0)}"
        # Default: try to get a string representation
        return str(cell_value.get('value', cell_value.get('name', str(cell_value))))
    if isinstance(cell_value, list):
        # Handle multi-value cells
        return ', '.join(extract_cell_value(v) for v in cell_value)
    return str(cell_value)


def save_table_as_csv(table_name: str, columns: list, rows: list, filepath: Path):
    """Save table data as CSV."""
    # Create column mapping (id -> name)
    col_map = {col['id']: col['name'] for col in columns}
    col_ids = [col['id'] for col in columns]
    col_names = [col['name'] for col in columns]

    with open(filepath, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        # Write header
        writer.writerow(col_names)
        # Write data rows
        for row in rows:
            values = row.get('values', {})
            row_data = [extract_cell_value(values.get(col_id, '')) for col_id in col_ids]
            writer.writerow(row_data)


def save_table_as_json(table_info: dict, columns: list, rows: list, filepath: Path):
    """Save table data as JSON with full metadata."""
    # Create column mapping
    col_map = {col['id']: col['name'] for col in columns}

    # Process rows to use column names instead of IDs
    processed_rows = []
    for row in rows:
        values = row.get('values', {})
        processed_values = {}
        for col_id, value in values.items():
            col_name = col_map.get(col_id, col_id)
            processed_values[col_name] = extract_cell_value(value)
        processed_rows.append({
            'id': row.get('id'),
            'name': row.get('name', ''),
            'index': row.get('index'),
            'values': processed_values,
            'browserLink': row.get('browserLink', '')
        })

    data = {
        'table': {
            'id': table_info.get('id'),
            'name': table_info.get('name'),
            'type': table_info.get('tableType'),
            'rowCount': table_info.get('rowCount'),
            'browserLink': table_info.get('browserLink', '')
        },
        'columns': [
            {
                'id': col['id'],
                'name': col['name'],
                'type': col.get('format', {}).get('type', 'text')
            }
            for col in columns
        ],
        'rows': processed_rows
    }

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)


def page_content_to_markdown(page: dict) -> str:
    """Convert page content to markdown format."""
    lines = []

    # Title
    name = page.get('name', 'Untitled')
    lines.append(f"# {name}")
    lines.append("")

    # Subtitle if present
    subtitle = page.get('subtitle')
    if subtitle:
        lines.append(f"*{subtitle}*")
        lines.append("")

    # Content (Coda returns HTML-like content)
    content_html = page.get('contentHtml', '')
    if content_html:
        # Basic HTML to markdown conversion
        content = content_html
        # Convert common HTML tags
        content = re.sub(r'<h1[^>]*>(.*?)</h1>', r'# \1\n', content, flags=re.DOTALL)
        content = re.sub(r'<h2[^>]*>(.*?)</h2>', r'## \1\n', content, flags=re.DOTALL)
        content = re.sub(r'<h3[^>]*>(.*?)</h3>', r'### \1\n', content, flags=re.DOTALL)
        content = re.sub(r'<p[^>]*>(.*?)</p>', r'\1\n\n', content, flags=re.DOTALL)
        content = re.sub(r'<br\s*/?>', '\n', content)
        content = re.sub(r'<strong>(.*?)</strong>', r'**\1**', content, flags=re.DOTALL)
        content = re.sub(r'<b>(.*?)</b>', r'**\1**', content, flags=re.DOTALL)
        content = re.sub(r'<em>(.*?)</em>', r'*\1*', content, flags=re.DOTALL)
        content = re.sub(r'<i>(.*?)</i>', r'*\1*', content, flags=re.DOTALL)
        content = re.sub(r'<li[^>]*>(.*?)</li>', r'- \1\n', content, flags=re.DOTALL)
        content = re.sub(r'<ul[^>]*>|</ul>', '', content)
        content = re.sub(r'<ol[^>]*>|</ol>', '', content)
        content = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', r'[\2](\1)', content, flags=re.DOTALL)
        content = re.sub(r'<code>(.*?)</code>', r'`\1`', content, flags=re.DOTALL)
        content = re.sub(r'<pre[^>]*>(.*?)</pre>', r'```\n\1\n```', content, flags=re.DOTALL)
        # Remove remaining HTML tags
        content = re.sub(r'<[^>]+>', '', content)
        # Clean up whitespace
        content = re.sub(r'\n{3,}', '\n\n', content)
        content = content.strip()
        lines.append(content)

    # Metadata footer
    lines.append("")
    lines.append("---")
    lines.append(f"*Page ID: {page.get('id', 'unknown')}*")
    if page.get('browserLink'):
        lines.append(f"*[View in Coda]({page.get('browserLink')})*")

    return '\n'.join(lines)


def setup_directories():
    """Create output directories."""
    SOURCES_DIR.mkdir(parents=True, exist_ok=True)
    PAGES_DIR.mkdir(parents=True, exist_ok=True)
    TABLES_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Output directories created at: {SOURCES_DIR}")


def main():
    """Main extraction function."""
    # Validate configuration
    if not CODA_API_TOKEN:
        print("Error: CODA_API_TOKEN not set. Please set it in .env file or environment.")
        return
    if not CODA_DOC_ID:
        print("Error: CODA_DOC_ID not set. Please set it in .env file or environment.")
        return

    print(f"Starting Coda extraction for document: {CODA_DOC_ID}")
    print("=" * 60)

    # Setup directories
    setup_directories()

    # Get and save document metadata
    doc_info = get_doc_info()
    doc_metadata = {
        'id': doc_info.get('id'),
        'name': doc_info.get('name'),
        'owner': doc_info.get('owner', {}).get('name', 'Unknown'),
        'createdAt': doc_info.get('createdAt'),
        'updatedAt': doc_info.get('updatedAt'),
        'browserLink': doc_info.get('browserLink', ''),
        'extractedAt': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())
    }

    with open(SOURCES_DIR / 'metadata.json', 'w', encoding='utf-8') as f:
        json.dump(doc_metadata, f, indent=2, ensure_ascii=False)
    print(f"Document: {doc_metadata['name']}")
    print(f"Owner: {doc_metadata['owner']}")

    # Extract pages
    print("\n" + "=" * 60)
    print("EXTRACTING PAGES")
    print("=" * 60)

    pages = get_pages()
    print(f"Found {len(pages)} pages")

    pages_index = []
    for i, page in enumerate(pages, 1):
        page_id = page.get('id')
        page_name = page.get('name', 'Untitled')
        print(f"  [{i}/{len(pages)}] {page_name}")

        # Get full page content
        try:
            page_content = get_page_content(page_id)

            # Convert to markdown and save
            markdown_content = page_content_to_markdown(page_content)
            safe_name = sanitize_filename(page_name)
            md_filepath = PAGES_DIR / f"{safe_name}.md"

            # Handle duplicate names
            counter = 1
            while md_filepath.exists():
                md_filepath = PAGES_DIR / f"{safe_name}_{counter}.md"
                counter += 1

            with open(md_filepath, 'w', encoding='utf-8') as f:
                f.write(markdown_content)

            pages_index.append({
                'id': page_id,
                'name': page_name,
                'file': md_filepath.name,
                'browserLink': page.get('browserLink', ''),
                'parentPageId': page.get('parent', {}).get('id')
            })

            time.sleep(0.2)  # Rate limiting

        except Exception as e:
            print(f"    Error extracting page: {e}")

    # Save pages index
    with open(PAGES_DIR / 'index.json', 'w', encoding='utf-8') as f:
        json.dump(pages_index, f, indent=2, ensure_ascii=False)
    print(f"Pages saved to: {PAGES_DIR}")

    # Extract tables
    print("\n" + "=" * 60)
    print("EXTRACTING TABLES")
    print("=" * 60)

    tables = get_tables()
    print(f"Found {len(tables)} tables")

    tables_index = []
    for i, table in enumerate(tables, 1):
        table_id = table.get('id')
        table_name = table.get('name', 'Untitled')
        table_type = table.get('tableType', 'table')
        row_count = table.get('rowCount', 0)

        print(f"  [{i}/{len(tables)}] {table_name} ({table_type}, {row_count} rows)")

        try:
            # Get columns and rows
            columns = get_table_columns(table_id)
            rows = get_table_rows(table_id)

            safe_name = sanitize_filename(table_name)

            # Save as JSON
            json_filepath = TABLES_DIR / f"{safe_name}.json"
            counter = 1
            while json_filepath.exists():
                json_filepath = TABLES_DIR / f"{safe_name}_{counter}.json"
                counter += 1
            save_table_as_json(table, columns, rows, json_filepath)

            # Save as CSV
            csv_filepath = TABLES_DIR / f"{safe_name}.csv"
            counter = 1
            while csv_filepath.exists():
                csv_filepath = TABLES_DIR / f"{safe_name}_{counter}.csv"
                counter += 1
            save_table_as_csv(table_name, columns, rows, csv_filepath)

            tables_index.append({
                'id': table_id,
                'name': table_name,
                'type': table_type,
                'rowCount': row_count,
                'columnCount': len(columns),
                'jsonFile': json_filepath.name,
                'csvFile': csv_filepath.name,
                'browserLink': table.get('browserLink', '')
            })

            time.sleep(0.3)  # Rate limiting

        except Exception as e:
            print(f"    Error extracting table: {e}")

    # Save tables index
    with open(TABLES_DIR / 'index.json', 'w', encoding='utf-8') as f:
        json.dump(tables_index, f, indent=2, ensure_ascii=False)
    print(f"Tables saved to: {TABLES_DIR}")

    # Summary
    print("\n" + "=" * 60)
    print("EXTRACTION COMPLETE")
    print("=" * 60)
    print(f"Document: {doc_metadata['name']}")
    print(f"Pages extracted: {len(pages_index)}")
    print(f"Tables extracted: {len(tables_index)}")
    print(f"Output location: {SOURCES_DIR}")


if __name__ == '__main__':
    main()
