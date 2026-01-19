# Service Flow v0.1 - Maroa Pilot

**Operation mode:** Concierge-first (WhatsApp + Sheets)

---

## End-to-End Flow

```
LEAD ──> INTAKE ──> TRIAGE ──> SCHEDULE ──> CONFIRM ──> EXECUTE ──> CLOSE ──> FOLLOW-UP
```

---

## Stage Details

### 1. LEAD CAPTURE
**Trigger:** Message via WhatsApp / referral / community group

| Action | Owner | Tool | SLA |
|--------|-------|------|-----|
| Respond with welcome + triage questions | Concierge | WhatsApp | <24h |

**DoD:** Lead logged in Sheet with source, name, contact, timestamp

---

### 2. INTAKE
**Trigger:** Lead responds to triage questions

| Action | Owner | Tool |
|--------|-------|------|
| Collect: Name, address, # of A/C units, last maintenance date, photos (optional) | Concierge | WhatsApp / Form |
| Log in LEADS sheet | Concierge | Google Sheets |

**DoD:** Complete client record with minimum fields filled

---

### 3. TRIAGE
**Trigger:** Intake complete

| Action | Owner |
|--------|-------|
| Verify address is in pilot zone | Concierge |
| Confirm service type (preventive/corrective) | Concierge |
| Check capacity for requested week | Concierge |

**DoD:** Service request classified as: Accept / Out of scope / Waitlist

---

### 4. SCHEDULE
**Trigger:** Triage = Accept

| Action | Owner | Tool | SLA |
|--------|-------|------|-----|
| Propose 2-3 available slots | Concierge | WhatsApp | <48h |
| Client confirms slot | Client | WhatsApp | - |
| Assign technician | Concierge | Sheet | Same day |

**DoD:** Confirmed date + time window + technician assigned + logged in Services sheet

---

### 5. CONFIRM (T-24h and T-2h)
**Trigger:** Day before service / 2 hours before

| Action | Owner | Tool |
|--------|-------|------|
| Send reminder with details | Concierge | WhatsApp |
| Confirm client availability | Concierge | WhatsApp |
| Confirm technician availability | Concierge | WhatsApp |

**DoD:** Both client and technician confirmed; Service status = "Confirmado"

---

### 6. EXECUTE
**Trigger:** Service day

| Action | Owner | Tool |
|--------|-------|------|
| Technician sends "En ruta" | Technician | WhatsApp |
| Technician sends "Llegue" | Technician | WhatsApp |
| Execute service per checklist | Technician | Paper/Digital checklist |
| Take before/after photos | Technician | Phone camera |
| Client signs off (verbal OK) | Client | WhatsApp voice note / message |

**DoD:** Service completed, photos captured, client confirmation received

---

### 7. CLOSE
**Trigger:** Execution complete

| Action | Owner | Tool |
|--------|-------|------|
| Update Services sheet (status, notes, photos) | Concierge | Google Sheets |
| Send payment link/instructions | Concierge | WhatsApp |
| Confirm payment received | Concierge | Bank / Sheet |

**DoD:** Service transitions from "Completado" → "Pagado" upon payment confirmation; photos archived

---

### 8. FOLLOW-UP (T+24-48h)
**Trigger:** Service closed

| Action | Owner | Tool |
|--------|-------|------|
| Send thank you + satisfaction check | Concierge | WhatsApp |
| Ask for referral (with script) | Concierge | WhatsApp |
| Log feedback in Sheet | Concierge | Google Sheets |

**DoD:** Feedback logged, referral request sent

---

## Status Transitions

### Lead Status (LEADS sheet)
```
Outreach → Interesado → Intake → Agendado → Completado → Pagado
                          │           │
                          │           └──→ Reprogramado / No-Show / Cancelado
                          │
                          └──→ No Fit / Waitlist
```

### Service Status (SERVICES sheet)
```
Agendado → Confirmado → En Ruta → En Sitio → Completado → Pagado
               │
               └──→ Reprogramado / No-Show / Cancelado
```

**Note:** A Service record is created when a Lead reaches "Agendado". Lead and Service statuses are tracked separately.

---

## Open Questions

1. Exact wording for "En ruta" and "Llegue" status updates?
2. Payment method priorities (transfer vs. card link)?
3. What happens if client not home at service time?
