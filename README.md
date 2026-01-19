# Maroa

Knowledge base and data repository for the Maroa project.

## Project Structure

```
maroa/
├── sources/
│   ├── coda/                    # Coda document extracts
│   │   ├── metadata.json        # Document metadata
│   │   ├── pages/               # Markdown files for each page
│   │   │   └── index.json       # Pages index with hierarchy
│   │   └── tables/              # Table data (JSON + CSV)
│   │       └── index.json       # Tables index
│   ├── tables/                  # PDF-extracted tables
│   ├── Maroa 100 Startup Tasks.pdf
│   └── ...
├── extract_coda.py              # Coda API extraction script
├── extract_pdf_text.py          # PDF text extraction
├── extract_pdf_refined.py       # PDF table extraction
└── requirements.txt             # Python dependencies
```

## Setup

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Configure Environment

Copy `.env.example` to `.env` and set your Coda API token:

```bash
cp .env.example .env
```

Edit `.env` with your credentials:
- `CODA_API_TOKEN`: Get your API token from https://coda.io/account
- `CODA_DOC_ID`: The document ID to extract (from the Coda document URL)

## Extracting Data from Coda

Run the extraction script to pull all tables and pages from your Coda document:

```bash
python extract_coda.py
```

This will:
- Extract all pages as Markdown files in `sources/coda/pages/`
- Extract all tables as both JSON and CSV in `sources/coda/tables/`
- Create index files for easy navigation
- Save document metadata

## Data Sources

### PDF Sources
- **Maroa 100 Startup Tasks**: Extracted text and tables from the startup tasks PDF

### Coda Sources
- Tables: Structured data exported as JSON (with metadata) and CSV (for compatibility)
- Pages: Document pages converted to Markdown format
