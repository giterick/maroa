# Google Sheets Setup Guide

> **Time needed:** 30-45 minutes
> **What you'll create:** One Google Sheet with 8 tabs for all pilot operations

---

## Step 1: Create the Master Spreadsheet

1. Go to [sheets.google.com](https://sheets.google.com)
2. Click **Blank** to create new spreadsheet
3. Name it: `Maroa Pilot - Operations`
4. Create 8 tabs (click + at bottom):
   - LEADS
   - SERVICES
   - TECHNICIANS
   - PAYMENTS
   - COSTS
   - INCIDENCIAS
   - REFERRALS
   - WEEKLY_METRICS

---

## Step 2: Set Up Each Tab

### Tab 1: LEADS

**Copy these headers into Row 1:**
```
Lead_ID | Fecha_Entrada | Nombre | Telefono | Email | Direccion | Zona | Num_Unidades | Ultimo_Mtto | Fuente | Estado | Proxima_Accion | Fecha_Proxima | Notas | Owner
```

**Column formats:**
- A (Lead_ID): Text, format `L-001`
- B (Fecha_Entrada): Date
- D (Telefono): Plain text (to preserve leading zeros)
- K (Estado): Dropdown (see below)
- O (Owner): Dropdown

**Estado dropdown values (Data > Data validation):**
```
Outreach, Interesado, Intake, Agendado, Completado, Pagado, No Fit, Waitlist, Referido, Cancelado, Perdido
```

**Owner dropdown values:**
```
Gabby, Erick
```

---

### Tab 2: SERVICES

**Copy these headers into Row 1:**
```
Service_ID | Lead_ID | Fecha_Servicio | Hora_Inicio | Hora_Fin | Tecnico | Tipo_Servicio | Num_Unidades | Estado | Hora_EnRuta | Hora_Llegada | Hora_Completado | Monto_Cobrar | Monto_Pagado | Fecha_Pago | Link_Fotos | CSAT | Notas
```

**Column formats:**
- A (Service_ID): Text, format `SVC-001`
- C (Fecha_Servicio): Date
- D, E, J, K, L: Time
- I (Estado): Dropdown (see below)
- M, N: Currency (RD$)
- Q (CSAT): Number 1-5

**Estado dropdown values:**
```
Agendado, Confirmado, En Ruta, En Sitio, Completado, Pagado, Cancelado, No Show, Reprogramado
```

**Tipo_Servicio dropdown:**
```
Preventivo, Correctivo Menor, Rework
```

---

### Tab 3: TECHNICIANS

**Copy these headers into Row 1:**
```
Tech_ID | Nombre | Telefono | Zona_Cobertura | Especialidad | Estado | Servicios_Completados | Rating_Promedio | Notas
```

**Estado dropdown:**
```
Activo, Inactivo, Onboarding
```

**Rating formula for H2 (copy down):**
```
=IFERROR(AVERAGEIF(SERVICES!F:F,B2,SERVICES!Q:Q),"N/A")
```

**Services count formula for G2:**
```
=COUNTIF(SERVICES!F:F,B2)
```

---

### Tab 4: PAYMENTS

**Copy these headers into Row 1:**
```
Pay_ID | Service_ID | Fecha | Monto | Metodo | Comprobante | Notas
```

**Metodo dropdown:**
```
Transferencia, Link de Pago, Efectivo
```

---

### Tab 5: COSTS

**Copy these headers into Row 1:**
```
Cost_ID | Service_ID | Fecha | Tipo | Descripcion | Monto | Pagado | Fecha_Pago | Notas
```

**Tipo dropdown:**
```
Pago Tecnico, Materiales, Combustible, Marketing, Otro
```

**Pagado dropdown:**
```
Si, No, Pendiente
```

---

### Tab 6: INCIDENCIAS

**Copy these headers into Row 1:**
```
Inc_ID | Fecha | Service_ID | Lead_ID | Tipo | Severidad | Descripcion | Causa_Raiz | Accion_Tomada | Estado | Owner
```

**Tipo dropdown:**
```
Queja Cliente, Rework, No Show Tecnico, No Show Cliente, Retraso, Problema Pago, Otro
```

**Severidad dropdown:**
```
Baja, Media, Alta, Critica
```

**Estado dropdown:**
```
Abierta, En Proceso, Resuelta, Cerrada
```

---

### Tab 7: REFERRALS

**Copy these headers into Row 1:**
```
Ref_ID | Fecha | Referrer_Lead_ID | Referrer_Nombre | New_Lead_ID | New_Lead_Nombre | New_Lead_Telefono | Estado | Notas
```

**Estado dropdown:**
```
Pendiente, Contactado, Convertido, No Interesado
```

---

### Tab 8: WEEKLY_METRICS

**Copy these headers into Row 1:**
```
Semana | Fecha_Inicio | Fecha_Fin | Leads_Nuevos | Leads_Calificados | Servicios_Agendados | Servicios_Completados | Servicios_Pagados | Ingresos | Costos | Margen | Conversion_Rate | SLA_Compliance | CSAT_Promedio | Incidencias | Notas
```

**Formulas (put in Row 2, copy down for each week):**

For **D2 (Leads_Nuevos):**
```
=COUNTIFS(LEADS!B:B,">="&B2,LEADS!B:B,"<="&C2)
```

For **E2 (Leads_Calificados):**
```
=COUNTIFS(LEADS!B:B,">="&B2,LEADS!B:B,"<="&C2,LEADS!K:K,"<>"&"No Fit",LEADS!K:K,"<>"&"Outreach")
```

For **F2 (Servicios_Agendados):**
```
=COUNTIFS(SERVICES!C:C,">="&B2,SERVICES!C:C,"<="&C2)
```

For **G2 (Servicios_Completados):**
```
=COUNTIFS(SERVICES!C:C,">="&B2,SERVICES!C:C,"<="&C2,SERVICES!I:I,"Completado")+COUNTIFS(SERVICES!C:C,">="&B2,SERVICES!C:C,"<="&C2,SERVICES!I:I,"Pagado")
```

For **H2 (Servicios_Pagados):**
```
=COUNTIFS(SERVICES!C:C,">="&B2,SERVICES!C:C,"<="&C2,SERVICES!I:I,"Pagado")
```

For **I2 (Ingresos):**
```
=SUMIFS(PAYMENTS!D:D,PAYMENTS!C:C,">="&B2,PAYMENTS!C:C,"<="&C2)
```

For **J2 (Costos):**
```
=SUMIFS(COSTS!F:F,COSTS!C:C,">="&B2,COSTS!C:C,"<="&C2)
```

For **K2 (Margen):**
```
=IF(I2>0,(I2-J2)/I2,"N/A")
```

For **L2 (Conversion_Rate):**
```
=IF(D2>0,H2/D2,"N/A")
```

For **N2 (CSAT_Promedio):**
```
=IFERROR(AVERAGEIFS(SERVICES!Q:Q,SERVICES!C:C,">="&B2,SERVICES!C:C,"<="&C2),"N/A")
```

For **O2 (Incidencias):**
```
=COUNTIFS(INCIDENCIAS!B:B,">="&B2,INCIDENCIAS!B:B,"<="&C2)
```

---

## Step 3: Format & Protect

### Conditional Formatting (recommended)

**For LEADS Estado column (K):**
- Green: Completado, Pagado
- Yellow: Agendado, Intake
- Red: No Fit, Perdido, Cancelado
- Blue: Interesado, Outreach

**For SERVICES Estado column (I):**
- Green: Completado, Pagado
- Yellow: Agendado, Confirmado
- Red: Cancelado, No Show

### Freeze Header Rows

1. Select Row 1
2. View > Freeze > 1 row

### Protect Formulas (optional)

1. Select cells with formulas
2. Data > Protect sheets and ranges
3. Set to "Show a warning when editing"

---

## Step 4: Create Views (optional but helpful)

### Filtered View: Active Leads Only
1. Data > Create a filter
2. Filter Estado column to exclude: No Fit, Perdido, Cancelado

### Filtered View: Today's Services
1. On SERVICES tab, Data > Filter views > Create new
2. Filter Fecha_Servicio = TODAY()

---

## Step 5: Share & Bookmark

1. Click **Share** button (top right)
2. Add team members:
   - Gabby: Editor access
   - Erick: Editor access
3. Copy the link
4. Bookmark in browser as "Maroa Operations"

---

## Quick Reference: ID Formats

| Type | Format | Example |
|------|--------|---------|
| Lead | L-XXX | L-001 |
| Service | SVC-XXX | SVC-001 |
| Technician | T-XX | T-01 |
| Payment | PAY-XXX | PAY-001 |
| Cost | CST-XXX | CST-001 |
| Incident | INC-XXX | INC-001 |
| Referral | REF-XXX | REF-001 |

---

## Troubleshooting

**Formulas showing errors:**
- Check that column letters match your actual sheet
- Make sure date formats are consistent
- IFERROR wraps prevent #DIV/0 errors

**Dropdowns not working:**
- Data > Data validation > must select the correct range
- Make sure there are no extra spaces in values

**Can't see all columns:**
- Use horizontal scroll
- Or hide columns you don't need daily

---

## Time Estimate

| Task | Time |
|------|------|
| Create tabs and headers | 10 min |
| Set up dropdowns | 15 min |
| Add formulas | 10 min |
| Conditional formatting | 5 min |
| Share and test | 5 min |
| **Total** | **~45 min** |
