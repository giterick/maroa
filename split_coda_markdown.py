#!/usr/bin/env python3
"""
Split a single Coda Markdown export into multiple page files.

Parses the delimiter format:
================================================================================
Page: [Page Name]
Path: [Hierarchy Path]
Depth: [Level]
================================================================================
[Content]
"""

import re
import json
from pathlib import Path


def sanitize_filename(name: str) -> str:
    """Convert page name to a safe filename."""
    # Replace problematic characters
    replacements = {
        '/': '_',
        '\\': '_',
        ':': '_',
        '*': '_',
        '?': '_',
        '"': '_',
        '<': '_',
        '>': '_',
        '|': '_',
        '\n': ' ',
        '\r': '',
    }
    result = name
    for old, new in replacements.items():
        result = result.replace(old, new)
    # Trim whitespace and limit length
    result = result.strip()
    if len(result) > 100:
        result = result[:100]
    return result


def parse_coda_markdown(content: str) -> list:
    """
    Parse the Coda markdown export and extract pages.

    Returns a list of dicts with: name, path, depth, content
    """
    # Pattern to match page headers
    delimiter = '=' * 80

    # Split by delimiter
    parts = content.split(delimiter)

    pages = []
    i = 0
    while i < len(parts):
        part = parts[i].strip()

        # Look for page header pattern
        if part.startswith('Page:'):
            lines = part.split('\n')
            page_info = {}

            for line in lines:
                line = line.strip()
                if line.startswith('Page:'):
                    page_info['name'] = line[5:].strip()
                elif line.startswith('Path:'):
                    page_info['path'] = line[5:].strip()
                elif line.startswith('Depth:'):
                    try:
                        page_info['depth'] = int(line[6:].strip())
                    except ValueError:
                        page_info['depth'] = 0

            # Get content from next part
            if i + 1 < len(parts):
                page_info['content'] = parts[i + 1].strip()
            else:
                page_info['content'] = ''

            if 'name' in page_info:
                pages.append(page_info)

        i += 1

    return pages


def create_markdown_file(page: dict, output_dir: Path) -> str:
    """Create a markdown file for a page and return the filename."""
    name = page.get('name', 'Untitled')
    safe_name = sanitize_filename(name)

    # Build markdown content
    lines = [f"# {name}", ""]

    content = page.get('content', '')
    if content:
        # Remove the title if it's duplicated at the start
        if content.startswith(f"# {name}"):
            content = content[len(f"# {name}"):].strip()
        lines.append(content)

    # Add metadata footer
    lines.extend([
        "",
        "---",
        f"*Path: {page.get('path', 'unknown')}*",
        f"*Depth: {page.get('depth', 0)}*"
    ])

    # Handle duplicate filenames
    filename = f"{safe_name}.md"
    filepath = output_dir / filename
    counter = 1
    while filepath.exists():
        filename = f"{safe_name}_{counter}.md"
        filepath = output_dir / filename
        counter += 1

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))

    return filename


def build_hierarchy(pages: list) -> list:
    """Build a hierarchical index from the flat page list."""
    index = []

    for page in pages:
        entry = {
            'name': page.get('name', 'Untitled'),
            'path': page.get('path', ''),
            'depth': page.get('depth', 0),
            'file': page.get('filename', '')
        }
        index.append(entry)

    return index


def main():
    # Paths
    source_file = Path('sources/coda/pages/Coda Markdown 2026-01-19.md')
    output_dir = Path('sources/coda/pages')

    if not source_file.exists():
        print(f"Error: Source file not found: {source_file}")
        return

    print(f"Reading source file: {source_file}")
    with open(source_file, 'r', encoding='utf-8') as f:
        content = f.read()

    print("Parsing pages...")
    pages = parse_coda_markdown(content)
    print(f"Found {len(pages)} pages")

    # Create individual files
    print("Creating individual markdown files...")
    for page in pages:
        filename = create_markdown_file(page, output_dir)
        page['filename'] = filename
        print(f"  Created: {filename}")

    # Build and save index
    print("Building index...")
    index = build_hierarchy(pages)

    index_path = output_dir / 'index.json'
    with open(index_path, 'w', encoding='utf-8') as f:
        json.dump(index, f, indent=2, ensure_ascii=False)
    print(f"Index saved to: {index_path}")

    # Optionally remove the source file (keep it for now)
    # source_file.unlink()

    print(f"\nDone! Created {len(pages)} page files.")


if __name__ == '__main__':
    main()
