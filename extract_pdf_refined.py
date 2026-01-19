#!/usr/bin/env python3
"""
Advanced PDF extraction for Maroa 100 Startup Tasks
Extracts text with proper formatting and tables as structured data
"""

import pdfplumber
import re
import json
import csv
from pathlib import Path

def fix_spacing(text):
    """Fix the character spacing issue where letters are separated by spaces"""
    # Pattern: single letter followed by space, repeated
    # Example: "T a s k" -> "Task"

    # First, let's handle the common pattern of spaced-out words
    # Match sequences like "a b c d" where each is a single char
    def collapse_spaced_letters(match):
        return match.group(0).replace(' ', '')

    # Look for pattern of single letter/char + space + single letter/char
    # This is a bit tricky because we don't want to collapse normal spaces between words
    # We'll use a heuristic: if we see 3+ instances of "char space char" in sequence, collapse them

    lines = text.split('\n')
    fixed_lines = []

    for line in lines:
        # Check if line has the spaced character pattern
        # Count single-char words
        words = line.split()
        single_char_count = sum(1 for w in words if len(w) == 1)

        # If more than 30% are single chars, likely has spacing issue
        if len(words) > 0 and single_char_count / len(words) > 0.3:
            # Collapse spaces between single characters
            # But preserve spaces before/after multi-char words
            result = []
            i = 0
            while i < len(words):
                if len(words[i]) == 1:
                    # Collect consecutive single-char words
                    single_chars = []
                    while i < len(words) and len(words[i]) == 1:
                        single_chars.append(words[i])
                        i += 1
                    result.append(''.join(single_chars))
                else:
                    result.append(words[i])
                    i += 1
            fixed_lines.append(' '.join(result))
        else:
            fixed_lines.append(line)

    return '\n'.join(fixed_lines)

def extract_tables(pdf_path, output_dir):
    """Extract tables from PDF and save as CSV files"""
    tables_data = []

    print("Extracting tables...")
    with pdfplumber.open(pdf_path) as pdf:
        for page_num, page in enumerate(pdf.pages, 1):
            tables = page.extract_tables()

            if tables:
                print(f"  Found {len(tables)} table(s) on page {page_num}")

                for table_idx, table in enumerate(tables):
                    if table and len(table) > 0:
                        # Filter out empty rows
                        table = [row for row in table if any(cell and str(cell).strip() for cell in row)]

                        if len(table) > 1:  # At least header + 1 row
                            tables_data.append({
                                'page': page_num,
                                'table_index': table_idx,
                                'data': table
                            })

    # Save each table as a separate CSV
    output_dir = Path(output_dir)
    output_dir.mkdir(exist_ok=True)

    for idx, table_info in enumerate(tables_data):
        csv_path = output_dir / f"table_page{table_info['page']}_idx{table_info['table_index']}.csv"

        with open(csv_path, 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerows(table_info['data'])

        print(f"  Saved: {csv_path}")

    # Also save a JSON index of all tables
    json_path = output_dir / "tables_index.json"
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(tables_data, f, indent=2, ensure_ascii=False)

    print(f"\nTotal tables extracted: {len(tables_data)}")
    print(f"Tables index saved to: {json_path}")

    return tables_data

def extract_text_refined(pdf_path, output_path):
    """Extract text with better formatting and spacing fixes"""
    print("Extracting text with pdfplumber...")

    full_text = []

    with pdfplumber.open(pdf_path) as pdf:
        total_pages = len(pdf.pages)

        for page_num, page in enumerate(pdf.pages, 1):
            print(f"  Processing page {page_num}/{total_pages}")

            # Extract text with layout preservation
            text = page.extract_text(layout=True)

            if text:
                # Fix spacing issues
                text = fix_spacing(text)

                # Add page marker
                full_text.append(f"--- Page {page_num} ---")
                full_text.append(text)
                full_text.append("")  # Blank line between pages

    # Write to file
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(full_text))

    print(f"\nText extracted to: {output_path}")
    return output_path

def create_structured_export(pdf_path, output_path):
    """Create a structured JSON export with both text and tables"""
    print("Creating structured export...")

    structured_data = {
        'document': 'Maroa 100 Startup Tasks',
        'total_pages': 0,
        'pages': []
    }

    with pdfplumber.open(pdf_path) as pdf:
        structured_data['total_pages'] = len(pdf.pages)

        for page_num, page in enumerate(pdf.pages, 1):
            print(f"  Processing page {page_num}/{len(pdf.pages)}")

            page_data = {
                'page_number': page_num,
                'text': None,
                'tables': []
            }

            # Extract text
            text = page.extract_text(layout=True)
            if text:
                page_data['text'] = fix_spacing(text)

            # Extract tables
            tables = page.extract_tables()
            if tables:
                for table in tables:
                    if table and len(table) > 0:
                        # Filter empty rows
                        filtered_table = [row for row in table if any(cell and str(cell).strip() for cell in row)]
                        if filtered_table:
                            page_data['tables'].append(filtered_table)

            structured_data['pages'].append(page_data)

    # Save JSON
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(structured_data, f, indent=2, ensure_ascii=False)

    print(f"\nStructured data saved to: {output_path}")
    return output_path

def main():
    pdf_path = "sources/Maroa 100 Startup Tasks.pdf"
    base_name = "sources/Maroa 100 Startup Tasks"

    print("=" * 60)
    print("Advanced PDF Extraction - Maroa 100 Startup Tasks")
    print("=" * 60)
    print()

    # 1. Extract cleaned text
    print("\n[1/3] Extracting cleaned text...")
    text_output = f"{base_name}_cleaned.txt"
    extract_text_refined(pdf_path, text_output)

    # 2. Extract tables to CSV
    print("\n[2/3] Extracting tables to CSV...")
    tables_dir = "sources/tables"
    extract_tables(pdf_path, tables_dir)

    # 3. Create structured JSON export
    print("\n[3/3] Creating structured JSON export...")
    json_output = f"{base_name}_structured.json"
    create_structured_export(pdf_path, json_output)

    print("\n" + "=" * 60)
    print("Extraction Complete!")
    print("=" * 60)
    print(f"\nOutputs:")
    print(f"  1. Cleaned text: {text_output}")
    print(f"  2. Tables (CSV): {tables_dir}/")
    print(f"  3. Structured data (JSON): {json_output}")

    # File size comparison
    import os
    original_size = os.path.getsize(pdf_path)
    text_size = os.path.getsize(text_output)
    json_size = os.path.getsize(json_output)

    print(f"\nFile sizes:")
    print(f"  Original PDF: {original_size / (1024*1024):.2f} MB")
    print(f"  Cleaned text: {text_size / 1024:.2f} KB")
    print(f"  Structured JSON: {json_size / 1024:.2f} KB")

if __name__ == "__main__":
    main()
