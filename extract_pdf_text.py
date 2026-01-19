#!/usr/bin/env python3
"""Extract text from Maroa 100 Startup Tasks PDF"""

import PyPDF2
import sys

def extract_pdf_text(pdf_path, output_path):
    """Extract text from PDF and save to text file"""
    try:
        with open(pdf_path, 'rb') as pdf_file:
            pdf_reader = PyPDF2.PdfReader(pdf_file)
            num_pages = len(pdf_reader.pages)

            print(f"Processing {num_pages} pages...")

            text_content = []
            for page_num in range(num_pages):
                page = pdf_reader.pages[page_num]
                text = page.extract_text()
                text_content.append(f"--- Page {page_num + 1} ---\n{text}\n")
                print(f"Extracted page {page_num + 1}/{num_pages}")

            # Write to output file
            with open(output_path, 'w', encoding='utf-8') as output_file:
                output_file.write('\n'.join(text_content))

            print(f"\nSuccessfully extracted text to: {output_path}")
            print(f"Total pages processed: {num_pages}")

    except Exception as e:
        print(f"Error extracting PDF: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    pdf_path = "sources/Maroa 100 Startup Tasks.pdf"
    output_path = "sources/Maroa 100 Startup Tasks.txt"
    extract_pdf_text(pdf_path, output_path)
