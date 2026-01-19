# Technical Evidence Requirements - Maroa Pilot

---

## Purpose

Ensure every service is documented with traceable evidence for quality control, guarantee claims, and client trust.

---

## Mandatory Evidence Per Service

### 1. Photos

| Photo Type | When | Requirements | DoD |
|------------|------|--------------|-----|
| **Before (exterior)** | Before starting | Show A/C unit exterior, label if visible | Clear, well-lit photo |
| **Before (filter)** | Before cleaning | Show filter condition | Visible dirt/debris level |
| **During (optional)** | If relevant | Any issue found during service | Documents problem |
| **After (filter)** | After cleaning | Show cleaned filter | Visibly clean |
| **After (exterior)** | After service | Show A/C unit after service | Clean, orderly |

**Minimum:** 3 photos per service (Before exterior, Before filter, After filter)

**Ideal:** 5 photos per service (all above)

---

### 2. Status Updates via WhatsApp

| Status | When to Send | Message Format |
|--------|--------------|----------------|
| **En ruta** | Leaving for client location | "En ruta hacia [Client Name]" |
| **Llegue** | Arrived at location | "Llegue a [Address]" |
| **Completado** | Service finished | "Servicio completado para [Client Name]" |

**DoD:** All 3 status messages sent with timestamps

---

### 3. Verbal/Written Client Sign-Off

| Method | How |
|--------|-----|
| WhatsApp voice note | Client says "conforme" or equivalent |
| WhatsApp text | Client responds "OK" or "Gracias, todo bien" |
| In-person | Technician reports client verbal confirmation |

**DoD:** Client acknowledgment logged (screenshot or note)

---

## Photo Standards

### Technical Requirements
- **Format:** JPG/PNG (standard phone camera)
- **Resolution:** Minimum 1MP (standard phone quality)
- **Lighting:** Sufficient to see details clearly
- **Angle:** Show the relevant component fully

### What Makes a GOOD Photo
- Component clearly visible
- No blur
- Good lighting (natural or flash)
- Shows context (which unit if multiple)

### What Makes a BAD Photo (redo required)
- Blurry or out of focus
- Too dark to see details
- Wrong component/unit
- Cropped too much

---

## Storage & Naming Convention

### Folder Structure
```
/Maroa_Pilot_Photos
  /[YYYY-MM]
    /[Service_ID]_[Client_Name]
      - before_exterior.jpg
      - before_filter.jpg
      - after_filter.jpg
      - after_exterior.jpg
```

### File Naming
`[Service_ID]_[PhotoType]_[Date].jpg`

Example: `SVC-001_before_filter_2024-01-15.jpg`

**Storage:** Google Drive shared folder (link in Sheet)

---

## Checklist for Technician

| # | Item | Done |
|---|------|------|
| 1 | Take BEFORE photo (exterior) | [ ] |
| 2 | Take BEFORE photo (filter) | [ ] |
| 3 | Send "En ruta" message | [ ] |
| 4 | Send "Llegue" message | [ ] |
| 5 | Complete service per checklist | [ ] |
| 6 | Take AFTER photo (filter) | [ ] |
| 7 | Take AFTER photo (exterior) | [ ] |
| 8 | Get client sign-off | [ ] |
| 9 | Send "Completado" message | [ ] |
| 10 | Send all photos to concierge | [ ] |

**DoD for service:** All 10 items complete, photos received by concierge

---

## Quality Audit Criteria

Weekly random audit (20% of services):

| Criterion | Pass | Fail |
|-----------|------|------|
| All required photos present | 3+ photos | <3 photos |
| Photos are clear/usable | Can see details | Blurry/dark |
| Status messages sent | All 3 statuses | Missing any |
| Client sign-off documented | Yes | No |
| Photos match service notes | Consistent | Contradictory |

**Target:** 95% of services pass audit

---

## Handling Missing Evidence

| Scenario | Action |
|----------|--------|
| Missing photos after service | Concierge requests from tech same day |
| Tech forgot "En ruta" message | Log as SLA breach, remind tech |
| No client sign-off | Concierge follows up with client |
| Photos unusable | Tech retakes if still on-site, otherwise note exception |

---

## Evidence for Rework/Guarantee Claims

If client reports issue within 7 days:

| Required Evidence |
|-------------------|
| Original service photos (before/after) |
| Original client sign-off |
| Client's report of issue (WhatsApp messages) |
| Technician's assessment (if revisit done) |

**Decision:** Compare original evidence with reported issue to determine if covered under guarantee

---

## Open Questions

1. Should technicians use a standardized photo app or just native camera?
2. How to handle services where client refuses photos (privacy)?
3. Backup if Google Drive is inaccessible?
