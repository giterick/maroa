# SLAs - Maroa Pilot (v0.1)

---

## Internal SLAs

| SLA | Definition | Target | Measurement | Escalation |
|-----|------------|--------|-------------|------------|
| **Response Time** | Time from client message to first useful response (not just "received") | <1 hora (durante horario operativo) | WhatsApp timestamps → Sheet log | If >1h: mark "SLA roto", prioritize, log root cause |
| **Time to Schedule** | Time from triage complete to confirmed appointment | <48 hours | "Triage complete" timestamp → "Confirmed" timestamp | If >48h: offer 2 concrete slots, activate backup tech |
| **Arrival Window** | Technician arrives within communicated window | 2-hour window | Confirmation message vs. "Llegue" timestamp | If outside window: proactive client notice + option to reschedule |
| **Service Completion** | Service finished and logged same day | 100% | Services sheet status | If incomplete: log reason, next-day priority |
| **Payment Confirmation** | Payment confirmed post-service | <48 hours | Bank confirmation / Sheet update | If >48h: follow-up message, log delay reason |

---

## Target Compliance Rates

| Metric | Minimum (Go) | Target | Stretch |
|--------|--------------|--------|---------|
| % Responses within SLA | 90% | 92% | 95% |
| % Services without reschedule | 85% | 88% | 92% |
| % On-time arrivals | 85% | 88% | 92% |
| % Services within scope | 100% | 100% | 100% |

---

## SLA Tracking Method

### Data Sources
- WhatsApp timestamps (screenshots or manual log)
- Google Sheets: Leads, Services, Incidencias tabs

### Weekly Review
- Count tickets by SLA compliance
- Calculate % met for each SLA
- Identify patterns in breaches

### Logging SLA Breaches
Add to **Incidencias** sheet:

| Field | Description |
|-------|-------------|
| Date | Date of breach |
| SLA Type | Which SLA was broken |
| Service ID | Link to service |
| Cause | Why it happened |
| Action Taken | What was done |
| Owner | Who is responsible |

---

## Exception Handling

| Valid Exceptions |
|------------------|
| Client requests specific future date (not availability issue) |
| Force majeure (weather, emergency) |
| Residential access restrictions (guard delay, no entry) |
| Missing information from client (documented request made) |

| NOT Valid Exceptions |
|---------------------|
| "Busy" without documentation |
| Technician overbooked |
| Forgot to respond |

---

## Escalation Protocol

### Level 1: Concierge
- Standard delay, handled same day
- Notify client proactively
- Document in Sheet

### Level 2: Operations Lead (Marcia)
- Repeated SLA breach (2+ same week)
- Client complaint
- Technician pattern issue

### Level 3: Pilot Lead (Erick)
- Critical incident (safety, reputation)
- >2 weeks below threshold
- Decision to pause/pivot

---

## Operating Hours for SLA

| Day | Hours (AST) | Notes |
|-----|-------------|-------|
| Monday - Friday | 9:00 AM - 6:00 PM | Slots regulares: 9-11, 11-1, 2-4, 4-6 |
| Saturday | 9:00 AM - 12:00 PM | Solo hasta mediodía |
| Sunday | Closed (emergency only) | |

**Slots con surcharge:** 7-9 AM, 6-8 PM
**Fuera de horario:** Requiere aprobación del técnico + surcharge más alto

Messages received outside hours: SLA clock starts next business day at 9:00 AM. Mensajes después de 6pm se responden entre 9-10am del día siguiente.

---

## Open Questions

1. ~~Should response SLA be <12h instead of <24h for competitive advantage?~~ → **Resuelto 2026-01-21:** SLA es <1h durante horario operativo
2. Define "emergency" criteria for Sunday service? → **Pendiente**
3. How to handle WhatsApp timestamp discrepancies (phone time vs. actual)? → **Pendiente**
