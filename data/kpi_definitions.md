# KPI Definitions - Maroa Pilot

---

## Primary KPIs (Go/No-Go Decisions)

### KPI-1: Conversion Rate (Demand Validation)

| Attribute | Value |
|-----------|-------|
| **Definition** | % of qualified leads that result in a paid service |
| **Formula** | `(# Paid Services / # Qualified Leads) x 100` |
| **Qualified Lead** | Lead with complete intake + in pilot zone + service type in scope |
| **Measurement Window** | 0-7 days from first contact |
| **Data Source** | LEADS sheet (Estado = Pagado) / LEADS sheet (Estado in Intake, Agendado, Completado, Pagado) |
| **Cadence** | Weekly |
| **Threshold - Go** | >= 20% |
| **Threshold - Pivot** | 10-19% |
| **Threshold - Stop** | < 10% |
| **Target** | 25% |
| **Owner** | Gabby (measurement), Erick (operation) |

---

### KPI-2: SLA Compliance Rate (Operations)

| Attribute | Value |
|-----------|-------|
| **Definition** | % of tickets meeting all SLA requirements |
| **Formula** | `(# Tickets meeting all SLAs / # Total Tickets) x 100` |
| **SLAs Included** | Response <24h, Scheduling <48h, Arrival within 1h window |
| **Measurement Window** | Per ticket + weekly aggregate |
| **Data Source** | SERVICES sheet timestamps, INCIDENCIAS sheet (SLA breaches) |
| **Cadence** | Weekly |
| **Threshold - Go** | >= 90% |
| **Threshold - Pivot** | 75-89% |
| **Threshold - Stop** | < 75% |
| **Target** | 92% |
| **Owner** | Gabby |

---

### KPI-3: First-Time Fix Rate (Quality)

| Attribute | Value |
|-----------|-------|
| **Definition** | % of services completed without rework within 7 days |
| **Formula** | `(# Services without rework / # Total Services) x 100` |
| **Rework** | Return visit to address issue caused by original service |
| **Excluded** | New issues unrelated to original service |
| **Measurement Window** | 0-7 days post-service |
| **Data Source** | SERVICES sheet, INCIDENCIAS sheet (Tipo = Rework) |
| **Cadence** | Weekly |
| **Threshold - Go** | >= 90% |
| **Threshold - Pivot** | 80-89% |
| **Threshold - Stop** | < 80% |
| **Target** | 92% |
| **Owner** | Gabby (measurement), Tech Lead (operation) |

---

### KPI-4: Gross Margin per Service (Unit Economics)

| Attribute | Value |
|-----------|-------|
| **Definition** | Average profit margin per completed service |
| **Formula** | `(Revenue - Direct Costs) / Revenue x 100` |
| **Direct Costs** | Technician payment + transport + materials + rework costs |
| **Measurement Window** | Per service + weekly aggregate |
| **Data Source** | SERVICES sheet (Monto_Pagado), COSTS tracking |
| **Cadence** | Weekly |
| **Threshold - Go** | >= 20% |
| **Threshold - Pivot** | 5-19% |
| **Threshold - Stop** | < 5% |
| **Target** | 25% |
| **Owner** | Erick |

---

### KPI-5: Retention Intent (Customer Satisfaction)

| Attribute | Value |
|-----------|-------|
| **Definition** | % of clients expressing intent to use Maroa again |
| **Formula** | `(# "Yes" to continue / # Survey Responses) x 100` |
| **Survey Question** | "Usarias Maroa de nuevo?" (Yes/No/Maybe) |
| **Measurement Window** | 24-48h post-service |
| **Data Source** | Follow-up messages, SERVICES sheet (CSAT column) |
| **Cadence** | Weekly |
| **Threshold - Go** | >= 60% |
| **Threshold - Pivot** | 40-59% |
| **Threshold - Stop** | < 40% |
| **Target** | 70% |
| **Owner** | Gabby |

---

## Secondary KPIs (Operational Health)

### KPI-6: Response Time

| Attribute | Value |
|-----------|-------|
| **Definition** | Average time from client message to first useful response |
| **Formula** | `SUM(Response Times) / # Responses` |
| **Target** | < 12 hours average |
| **Data Source** | WhatsApp timestamps |

### KPI-7: Scheduling Time

| Attribute | Value |
|-----------|-------|
| **Definition** | Average time from triage complete to confirmed appointment |
| **Formula** | `SUM(Scheduling Times) / # Appointments` |
| **Target** | < 36 hours average |
| **Data Source** | LEADS/SERVICES sheet timestamps |

### KPI-8: On-Time Arrival Rate

| Attribute | Value |
|-----------|-------|
| **Definition** | % of services where technician arrived within communicated window |
| **Formula** | `(# On-Time Arrivals / # Services) x 100` |
| **Target** | >= 85% |
| **Data Source** | SERVICES sheet (Hora_Llegada vs window) |

### KPI-9: Evidence Compliance

| Attribute | Value |
|-----------|-------|
| **Definition** | % of services with complete photo documentation |
| **Formula** | `(# Services with 3+ photos / # Services) x 100` |
| **Target** | >= 95% |
| **Data Source** | SERVICES sheet (Link_Fotos populated + verified) |

### KPI-10: Incident Rate

| Attribute | Value |
|-----------|-------|
| **Definition** | # of incidents per 10 services |
| **Formula** | `(# Incidents / # Services) x 10` |
| **Target** | < 1 incident per 10 services |
| **Data Source** | INCIDENCIAS sheet |

---

## Red Flags (Immediate Pause Triggers)

| Flag | Trigger | Action |
|------|---------|--------|
| Safety incident | Any safety/security event | STOP operations, investigate |
| >20% "didn't understand offer" | Repeated confusion about scope | Pause acquisition, revise offer |
| 2 consecutive weeks below pivot threshold | Sustained underperformance | Escalate to pilot lead |
| Technician no-show pattern | 2+ no-shows in 2 weeks | Replace technician |
| Cash flow negative | Unable to pay technicians | Pause new services |

---

## Minimum Sample Sizes

| KPI | Minimum N | Notes |
|-----|-----------|-------|
| Conversion Rate | 30 qualified leads OR 10 paid services | Whichever comes first |
| SLA Compliance | 20 tickets | Before drawing conclusions |
| First-Time Fix Rate | 15 services | Separate preventive vs corrective |
| Gross Margin | 15 services with complete cost data | All costs tracked |
| Retention Intent | 80% response rate on 15 services | Follow-up must happen |

---

## Weekly Reporting Format

```
WEEK [#] - Maroa Pilot Metrics

PRIMARY KPIs
- Conversion Rate: [X]% (Go/Pivot/Stop)
- SLA Compliance: [X]% (Go/Pivot/Stop)
- FTFR: [X]% (Go/Pivot/Stop)
- Gross Margin: [X]% (Go/Pivot/Stop)
- Retention Intent: [X]% (Go/Pivot/Stop)

VOLUME
- New Leads: [#]
- Services Completed: [#]
- Revenue: RD$ [Amount]

INCIDENTS
- Total: [#]
- Critical: [#]

TOP ACTIONS FOR NEXT WEEK
1. [Action]
2. [Action]
3. [Action]
```

---

## Open Questions

1. CSAT score (1-5) vs binary retention intent - which to prioritize?
2. Should referral rate be a primary KPI?
3. Exact cost breakdown template for margin calculation?
