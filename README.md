# Maroa Pilot - Operations Repository

**Punta Cana | A/C Maintenance | Concierge-First**

---

## What is This?

This repository contains all operational documentation for the Maroa pilot in Punta Cana. The pilot validates demand, operations, and unit economics for A/C maintenance services using minimal tools (WhatsApp Business + Google Forms + Google Sheets).

**Horizon:** 4 weeks | **Focus:** Validate, not scale

---

## Quick Links

### Core Documents
| Document | Purpose |
|----------|---------|
| [Pilot Definition](docs/00_pilot_definition.md) | Scope, hypotheses, success criteria |
| [Service Flow](docs/01_service_flow_v0_1.md) | End-to-end service process |
| [Policies](docs/02_policies.md) | Cancellation, rework, guarantee rules |
| [SLAs](docs/03_slas.md) | Response times, targets, escalation |

### Operations
| Document | Purpose |
|----------|---------|
| [Concierge Checklists](ops/concierge_checklists.md) | Daily/weekly operational checklists |
| [Tech Evidence Requirements](ops/tech_evidence_requirements.md) | Photo and status documentation |

### Templates
| Document | Purpose |
|----------|---------|
| [WhatsApp Scripts](templates/whatsapp_scripts.md) | Copy-paste message templates |

### Data
| Document | Purpose |
|----------|---------|
| [Pipeline & Sheet Schema](data/pipeline_states_and_sheet_schema.md) | Lead states, Google Sheets structure |
| [KPI Definitions](data/kpi_definitions.md) | Metrics definitions and thresholds |

### Rituals
| Document | Purpose |
|----------|---------|
| [Weekly Review](rituals/weekly_review.md) | Meeting agenda, prep, actions |

### Meetings & Tracking
| Document | Purpose |
|----------|---------|
| [Meetings Index](meetings/README.md) | Meeting notes, templates, how to use |
| [Decision Log](meetings/logs/decisions-log.md) | Historical record of all decisions |
| [Project Log](meetings/logs/project-log.md) | Chronological project progress |
| [Tasks Backlog](meetings/logs/tasks-backlog.md) | Pending tasks consolidated |

---

## Pilot Constraints

- **No custom app** - All operations via WhatsApp + Sheets
- **Single zone** - Punta Cana pilot area only
- **Limited volume** - Max 20 services during pilot
- **A/C only** - Preventive maintenance + minor correctives

---

## Success Criteria (Go/Pivot/Stop)

| KPI | Go | Pivot | Stop |
|-----|-----|-------|------|
| Conversion Rate | >=20% | 10-19% | <10% |
| SLA Compliance | >=90% | 75-89% | <75% |
| First-Time Fix Rate | >=90% | 80-89% | <80% |
| Gross Margin | >=20% | 5-19% | <5% |
| Retention Intent | >=60% | 40-59% | <40% |

---

## Team

| Role | Owner | Responsibilities |
|------|-------|------------------|
| Operations Lead | Gabby | Concierge, SLAs, client communication |
| Systems Lead | Erick | Data, sheets, metrics, reporting |
| Tech Lead | TBD | Service quality, technician coordination |

---

## Tools Stack

| Tool | Purpose |
|------|---------|
| WhatsApp Business | Client + technician communication |
| Google Forms | Lead intake (optional) |
| Google Sheets | CRM, services tracking, metrics |
| Google Drive | Photo storage |

---

## START HERE: 2-Day Launch

If you're new to this repo or setting up the pilot:

| Step | Document | Time |
|------|----------|------|
| 1 | [2-Day Launch Plan](setup/2_day_launch_plan.md) | Overview |
| 2 | [Decisions Checklist](docs/04_pilot_decisions_checklist.md) | 2 hours |
| 3 | [Google Sheets Setup](setup/google_sheets_setup.md) | 45 min |
| 4 | [Quick Reference Card](setup/quick_reference_card.md) | Print/save |

---

## How to Use This Repo

1. **Launching the pilot?** Start with [2-Day Launch Plan](setup/2_day_launch_plan.md)
2. **Making decisions?** Use [Decisions Checklist](docs/04_pilot_decisions_checklist.md)
3. **Setting up tools?** Follow [Google Sheets Setup](setup/google_sheets_setup.md)
4. **Handling a lead?** Follow [Service Flow](docs/01_service_flow_v0_1.md) + use [WhatsApp Scripts](templates/whatsapp_scripts.md)
5. **Client issue?** Check [Policies](docs/02_policies.md)
6. **Tracking performance?** Use [KPI Definitions](data/kpi_definitions.md)
7. **Weekly sync?** Follow [Weekly Review](rituals/weekly_review.md) agenda
8. **Quick reference?** Print [Quick Reference Card](setup/quick_reference_card.md)
9. **Recording a meeting?** Use [Meeting Template](meetings/templates/meeting-notes-template.md)
10. **Looking for a past decision?** Check [Decision Log](meetings/logs/decisions-log.md)

---

## Repository Structure

```
maroa/
├── README.md                           # This file
├── docs/
│   ├── 00_pilot_definition.md          # Scope & success criteria
│   ├── 01_service_flow_v0_1.md         # End-to-end process
│   ├── 02_policies.md                  # Rules & policies
│   ├── 03_slas.md                      # Service level agreements
│   └── 04_pilot_decisions_checklist.md # Decisions before launch
├── setup/                              # NEW: Launch preparation
│   ├── 2_day_launch_plan.md            # Step-by-step launch guide
│   ├── google_sheets_setup.md          # Create your operations sheet
│   └── quick_reference_card.md         # Print-friendly reference
├── ops/
│   ├── concierge_checklists.md         # Daily operations checklists
│   └── tech_evidence_requirements.md   # Photo/documentation requirements
├── templates/
│   └── whatsapp_scripts.md             # Message templates
├── data/
│   ├── pipeline_states_and_sheet_schema.md  # Data structure
│   └── kpi_definitions.md              # Metrics definitions
├── rituals/
│   └── weekly_review.md                # Meeting structure
├── meetings/                           # Meeting notes & tracking
│   ├── README.md                       # Index and how to use
│   ├── templates/                      # Reusable templates
│   ├── logs/                           # Decision log, project log, tasks
│   └── YYYY-MM/                        # Meeting notes by month
├── research/                           # Market research files
│   └── *.docx                          # Pricing & payment research
└── sources/
    └── coda/                           # Source data from Coda
        ├── metadata.json               # Document metadata
        ├── pages/                      # Markdown files for each page
        └── tables/                     # Table data (JSON + CSV)
```

---

## Data Extraction (Technical)

### Setup

```bash
pip install -r requirements.txt
cp .env.example .env
# Edit .env with CODA_API_TOKEN and CODA_DOC_ID
```

### Extract from Coda

```bash
python extract_coda.py
```

---

## Open Questions (Consolidated)

See individual documents for context. Key open items:

1. Exact pilot zone boundaries?
2. Pricing for multi-unit homes confirmed?
3. Backup technician onboarded?
4. Legal waiver template ready?
5. Payment method priorities finalized?

---

**Version:** 0.1 | **Last Updated:** January 2026
