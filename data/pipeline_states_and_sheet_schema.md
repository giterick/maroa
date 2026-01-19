# Pipeline States & Google Sheet Schema - Maroa Pilot

---

## Lead Pipeline States

```
OUTREACH ──> INTERESADO ──> INTAKE ──> AGENDADO ──> COMPLETADO ──> PAGADO
                              │            │
                              │            └──> REPROGRAMADO
                              │            └──> NO-SHOW
                              │            └──> CANCELADO
                              │
                              └──> NO FIT (out of zone, not qualified)
                              └──> WAITLIST (zone expansion pending)
```

### State Definitions

| State | Definition | Next Action |
|-------|------------|-------------|
| **Outreach** | Initial contact made, no response yet | Follow up in 48h |
| **Interesado** | Responded, but incomplete info | Send triage questions |
| **Intake** | Info collected, pending qualification | Verify zone + capacity |
| **No Fit** | Doesn't qualify (zone, service type) | Inform client, close |
| **Waitlist** | Qualified but no capacity / outside zone | Notify when available |
| **Agendado** | Appointment confirmed | Execute on scheduled date |
| **Reprogramado** | Rescheduled (client or Maroa) | New date confirmed |
| **Cancelado** | Cancelled (no reschedule) | Log reason, close |
| **No-Show** | Client or tech didn't show | Reschedule or close |
| **Completado** | Service done, pending payment | Request payment |
| **Pagado** | Payment confirmed, service closed | Follow-up in 24-48h |

---

## Google Sheets Structure

### Sheet 1: LEADS

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| Lead_ID | Text | Yes | Auto: L-001, L-002... |
| Fecha_Entrada | Date | Yes | When lead came in |
| Nombre | Text | Yes | Client name |
| Telefono | Text | Yes | WhatsApp number |
| Email | Text | No | Optional |
| Direccion | Text | Yes | Full address |
| Zona | Text | Yes | Neighborhood/residential |
| Num_Unidades | Number | Yes | # of A/C units |
| Ultimo_Mtto | Text | No | Last maintenance date |
| Fuente | Dropdown | Yes | Referido / WhatsApp Group / Directo / Admin |
| Estado | Dropdown | Yes | Pipeline state |
| Proxima_Accion | Text | Yes | What to do next |
| Fecha_Proxima | Date | Yes | When to do it |
| Notas | Text | No | Additional notes |
| Owner | Dropdown | Yes | Gabby / Erick |

### Sheet 2: SERVICES

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| Service_ID | Text | Yes | Auto: SVC-001, SVC-002... |
| Lead_ID | Text | Yes | Link to LEADS sheet |
| Fecha_Servicio | Date | Yes | Scheduled date |
| Hora_Inicio | Time | Yes | Start of window |
| Hora_Fin | Time | Yes | End of window |
| Tecnico | Dropdown | Yes | Assigned technician |
| Tipo_Servicio | Dropdown | Yes | Preventivo / Correctivo |
| Num_Unidades | Number | Yes | # units serviced |
| Estado | Dropdown | Yes | Service state |
| Hora_EnRuta | Time | No | When tech sent "en ruta" |
| Hora_Llegada | Time | No | When tech arrived |
| Hora_Completado | Time | No | When service finished |
| Monto_Cobrar | Currency | Yes | Amount to charge |
| Monto_Pagado | Currency | No | Amount received |
| Fecha_Pago | Date | No | When paid |
| Link_Fotos | URL | No | Google Drive folder link |
| CSAT | Number | No | Client satisfaction (1-5) |
| Notas | Text | No | Service notes |

### Sheet 3: TECHNICIANS

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| Tech_ID | Text | Yes | T-001, T-002... |
| Nombre | Text | Yes | Full name |
| Telefono | Text | Yes | WhatsApp number |
| Zona_Cobertura | Text | Yes | Areas they cover |
| Especialidad | Text | No | AC type specialty |
| Estado | Dropdown | Yes | Activo / Backup / Inactivo |
| Servicios_Completados | Number | Auto | Count from SERVICES |
| Rating_Promedio | Number | Auto | Avg from SERVICES |
| Notas | Text | No | Notes |

### Sheet 4: INCIDENCIAS

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| Inc_ID | Text | Yes | INC-001, INC-002... |
| Fecha | Date | Yes | When it occurred |
| Service_ID | Text | No | Related service |
| Lead_ID | Text | No | Related lead |
| Tipo | Dropdown | Yes | SLA Breach / Complaint / No-Show / Rework / Other |
| Severidad | Dropdown | Yes | Menor / Mayor / Critico |
| Descripcion | Text | Yes | What happened |
| Causa_Raiz | Text | Yes | Why it happened |
| Accion_Tomada | Text | Yes | What was done |
| Estado | Dropdown | Yes | Abierto / Resuelto / Escalado |
| Owner | Dropdown | Yes | Who is handling |

### Sheet 5: PAYMENTS

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| Pay_ID | Text | Yes | PAY-001, PAY-002... |
| Service_ID | Text | Yes | Related service |
| Fecha | Date | Yes | Payment date |
| Monto | Currency | Yes | Amount |
| Metodo | Dropdown | Yes | Transferencia / Efectivo / Link |
| Comprobante | URL | No | Screenshot/receipt link |
| Notas | Text | No | Notes |

### Sheet 6: WEEKLY_METRICS (Auto-Calculated)

| Column | Type | Description |
|--------|------|-------------|
| Semana | Text | Week identifier |
| Leads_Nuevos | Number | Count of new leads |
| Leads_Convertidos | Number | Leads that became services |
| Servicios_Agendados | Number | Services scheduled |
| Servicios_Completados | Number | Services completed |
| Servicios_Pagados | Number | Services paid |
| Ingresos | Currency | Total revenue |
| SLA_Respuesta_% | Percentage | % responses in SLA |
| SLA_Agenda_% | Percentage | % scheduled in SLA |
| On_Time_% | Percentage | % on-time arrivals |
| CSAT_Promedio | Number | Average satisfaction |
| Incidencias | Number | Count of incidents |

---

## Dropdown Values Reference

### Estado (Leads)
- Outreach
- Interesado
- Intake
- No Fit
- Waitlist
- Agendado
- Reprogramado
- Cancelado
- No-Show
- Completado
- Pagado

### Estado (Services)
- Agendado
- Confirmado
- En Ruta
- En Sitio
- Completado
- Pagado
- Reprogramado
- Cancelado
- No-Show

### Tipo_Servicio
- Preventivo
- Correctivo

### Fuente
- Referido
- WhatsApp Group
- Directo
- Admin/Aliado

### Severidad (Incidencias)
- Menor
- Mayor
- Critico

---

## Data Entry Rules

1. **Every lead gets an ID** - No duplicates
2. **Every service links to a lead** - Traceability
3. **Status changes logged with date** - Use Notas column
4. **Photos required before marking "Completado"** - Link must exist
5. **Weekly metrics sheet auto-updates** - Use formulas (COUNTIF, SUMIF)

---

## Open Questions

1. Include a separate COSTS sheet for technician payments + materials?
2. Add a REFERRALS sheet to track referral conversions?
3. Formula templates for auto-calculations needed?
