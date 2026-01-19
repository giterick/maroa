# Consistency Audit Report - Maroa Pilot

**Date:** 2026-01-19
**Scope:** Internal consistency across pilot definition, scripts, policies, checklists, and data schemas

---

## Executive Summary

This audit identifies inconsistencies between the pilot's operational documents. The primary issues are: (1) pipeline state mismatches between flow diagrams and sheet schemas, (2) missing data structures referenced by KPIs, and (3) terminology inconsistencies in DoD definitions.

---

## Top 10 Inconsistencies

### 1. Missing "Confirmado" State in Lead Pipeline Diagram

**Location:** `docs/01_service_flow_v0_1.md:75` vs `data/pipeline_states_and_sheet_schema.md:5-16`

**Issue:** The service flow states DoD as `status = "Confirmed"` after T-24h confirmation, but the pipeline diagram jumps directly from `Agendado → En ruta` without showing `Confirmado`.

**Evidence:**
- Flow DoD (line 75): *"Both client and technician confirmed; status = 'Confirmed'"*
- Pipeline diagram (lines 7-8): `OUTREACH → INTERESADO → INTAKE → AGENDADO → COMPLETADO → PAGADO`
- Services dropdown includes "Confirmado" but lead pipeline doesn't show this transition

**Recommended Fix:** Add `Confirmado` between `Agendado` and execution states in the pipeline diagram:
```
AGENDADO → CONFIRMADO → EN RUTA → EN SITIO → COMPLETADO → PAGADO
```

---

### 2. "Clients Sheet" vs "LEADS Sheet" Naming Inconsistency

**Location:** `docs/01_service_flow_v0_1.md:34` vs `data/pipeline_states_and_sheet_schema.md:38`

**Issue:** The service flow references a "Clients sheet" that doesn't exist in the schema.

**Evidence:**
- Flow (line 34): *"Log in Clients sheet"*
- Schema defines: LEADS, SERVICES, TECHNICIANS, INCIDENCIAS, PAYMENTS, WEEKLY_METRICS

**Recommended Fix:** Replace "Clients sheet" with "LEADS sheet" in `01_service_flow_v0_1.md`.

---

### 3. Missing COSTS Sheet for Margin Calculation

**Location:** `data/kpi_definitions.md:70` vs `data/pipeline_states_and_sheet_schema.md`

**Issue:** KPI-4 (Gross Margin) references "COSTS tracking" but no such sheet is defined in the schema.

**Evidence:**
- KPI-4 data source (line 70): *"SERVICES sheet (Monto_Pagado), COSTS tracking"*
- Schema lists only 6 sheets; COSTS is not among them
- Schema open questions (line 197): *"Include a separate COSTS sheet for technician payments + materials?"*

**Recommended Fix:** Either:
- (a) Define a COSTS sheet schema with columns: Cost_ID, Service_ID, Fecha, Tipo (Tecnico/Material/Transporte), Monto, Notas
- (b) Add cost columns to SERVICES sheet: Costo_Tecnico, Costo_Materiales, Costo_Transporte

---

### 4. Conflicting Response Time SLA Targets

**Location:** `docs/03_slas.md:9` vs `data/kpi_definitions.md:107`

**Issue:** Two different response time targets are defined.

**Evidence:**
- SLA document (line 9): *"Response Time: <24 hours"*
- KPI-6 (line 107): *"Target: < 12 hours average"*

**Recommended Fix:** Align on a single target. Options:
- SLA = <24h (compliance threshold), Target = <12h (aspirational)
- Clarify that SLA is max threshold and KPI-6 tracks average performance

---

### 5. "En Ruta" / "En Sitio" States Mixed Between Lead and Service Entities

**Location:** `docs/01_service_flow_v0_1.md:122-126` vs `data/pipeline_states_and_sheet_schema.md:157-166`

**Issue:** The flow status transition diagram shows `En ruta → En sitio` as part of the lead journey, but these are actually service-level states.

**Evidence:**
- Flow shows one unified state diagram mixing lead and service states
- Schema correctly separates: Lead states (11 values) vs Service states (9 values)
- `En Ruta` and `En Sitio` appear only in Services Estado dropdown

**Recommended Fix:** Split the flow diagram into two clear sections:
1. Lead lifecycle: `Outreach → Interesado → Intake → Agendado/No Fit/Waitlist`
2. Service lifecycle: `Agendado → Confirmado → En Ruta → En Sitio → Completado → Pagado`

---

### 6. Missing Script for <2h Cancellation Scenario

**Location:** `docs/02_policies.md:11` vs `templates/whatsapp_scripts.md`

**Issue:** Policy defines a <2h cancellation scenario with possible fee, but no WhatsApp script exists for this case.

**Evidence:**
- Policy (line 11): *"Client cancels <2h before: Possible fee - Evaluate case; may charge 50% visit fee"*
- Script #16 covers only general late cancellation (<24h), not the stricter <2h scenario
- No script for communicating potential fees

**Recommended Fix:** Add Script #16b for very late cancellation:
```
[Nombre], entendemos que surgen imprevistos de ultimo momento.

Como ya teniamos un tecnico asignado para tu visita, necesitamos revisar si aplica un cargo parcial segun nuestra politica.

Te contactamos en breve para confirmar los proximos pasos.
```

---

### 7. Missing REFERRALS Tracking Sheet

**Location:** `ops/concierge_checklists.md:128` vs `data/pipeline_states_and_sheet_schema.md`

**Issue:** Checklists and scripts reference referral tracking, but no sheet structure exists.

**Evidence:**
- Follow-up checklist (line 128): *"Log any referral leads - New leads captured"*
- Script #14 asks for referrals with specific tracking (*"mencionando tu nombre"*)
- Schema open questions (line 198): *"Add a REFERRALS sheet to track referral conversions?"*

**Recommended Fix:** Define REFERRALS sheet schema:
| Column | Type | Description |
|--------|------|-------------|
| Ref_ID | Text | REF-001, REF-002... |
| Fecha | Date | When referral was made |
| Referrer_Lead_ID | Text | Who made the referral |
| New_Lead_ID | Text | The referred lead |
| Estado | Dropdown | Pendiente / Convertido / No Convertido |

---

### 8. Tech Lead Role Referenced but Marked TBD

**Location:** `docs/00_pilot_definition.md:58` vs `data/kpi_definitions.md:58`

**Issue:** KPI-3 assigns ownership to "Tech Lead (operation)" but pilot definition shows this role as TBD.

**Evidence:**
- Pilot definition (line 58): *"Technical Lead: TBD / Backup"*
- KPI-3 owner (line 58): *"Gabby (measurement), Tech Lead (operation)"*

**Recommended Fix:** Either:
- (a) Assign a specific person to Tech Lead role in pilot definition
- (b) Update KPI-3 ownership to reflect current reality (e.g., "Backup Tech / TBD")

---

### 9. Close Stage DoD Ambiguity (Completado vs Pagado)

**Location:** `docs/01_service_flow_v0_1.md:103`

**Issue:** The CLOSE stage DoD says service is marked "Completado" but also requires payment confirmed, which should trigger transition to "Pagado".

**Evidence:**
- Line 103: *'Service marked "Completado", payment confirmed, photos archived'*
- If payment is confirmed, status should be "Pagado" per state definitions
- State definition (line 32): *"Pagado: Payment confirmed, service closed"*

**Recommended Fix:** Clarify that CLOSE stage has two sub-steps:
1. Service complete → Status = "Completado"
2. Payment confirmed → Status = "Pagado"

Update DoD to: *"Service transitions from Completado to Pagado upon payment confirmation, photos archived"*

---

### 10. Inconsistent Language: "Confirmed" (English) vs "Confirmado" (Spanish)

**Location:** Multiple files

**Issue:** Status names switch between English and Spanish across documents.

**Evidence:**
- `01_service_flow_v0_1.md:75`: `status = "Confirmed"` (English)
- `ops/concierge_checklists.md:66`: `Status = "Confirmado"` (Spanish)
- Schema uses Spanish: Completado, Pagado, Agendado

**Recommended Fix:** Standardize all status names in Spanish throughout all documents since:
- Sheet column names are in Spanish
- Client-facing scripts are in Spanish
- Operation is in Dominican Republic

Replace "Confirmed" with "Confirmado" in `01_service_flow_v0_1.md`.

---

## Summary of Missing Definitions

| Item | Referenced In | Status |
|------|---------------|--------|
| COSTS sheet | KPI-4 formula | Not defined |
| REFERRALS sheet | Follow-up checklist | Not defined |
| Backup technician protocol | Policies, SLAs | Partially defined |
| Exact pilot zone boundaries | Pilot definition | Listed as open question |
| <2h cancellation script | Policy | Not created |
| Pricing for 2/3/4 units | Pilot definition | Listed as open question |
| Legal waiver template | Pilot definition | Listed as open question |
| Cash handling protocol | Policy | Listed as open question |

---

## Recommended Priority Actions

1. **High Priority:** Add COSTS tracking (columns or sheet) - blocks KPI-4 measurement
2. **High Priority:** Align pipeline diagrams with schema state definitions
3. **Medium Priority:** Standardize all status names to Spanish
4. **Medium Priority:** Add missing <2h cancellation script
5. **Low Priority:** Consolidate open questions across documents into single backlog

---

## Audit Methodology

Files reviewed:
- `docs/00_pilot_definition.md`
- `docs/01_service_flow_v0_1.md`
- `docs/02_policies.md`
- `docs/03_slas.md`
- `data/pipeline_states_and_sheet_schema.md`
- `data/kpi_definitions.md`
- `ops/concierge_checklists.md`
- `ops/tech_evidence_requirements.md`
- `templates/whatsapp_scripts.md`

Cross-checked:
- Pipeline states across flow diagrams and sheet dropdowns
- DoD definitions across service flow and checklists
- Script triggers vs policy scenarios
- KPI data sources vs defined sheet columns
