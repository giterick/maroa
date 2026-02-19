# Policies - Maroa Pilot (v0.1)

> **Context:** These policies support Maroa's transforming purpose of delivering "tranquilidad y confianza" through organized, preventive maintenance (see `imm-doulab/05-refinando-proposito-transformador.md`). Each policy aims to reduce the "drama" that customers currently experience with informal technicians — one of the core pain points identified in the IMM program.

---

## 1. Cancellation Policy

> **Nota:** Fees de cancelación por definir en PR separado (research de mercado). Estructura acordada 2026-01-21.

| Scenario | Rule | Action |
|----------|------|--------|
| Client cancels >48h before | Free cancellation | Reschedule with priority |
| Client cancels <48h before | Fee nivel 1 | _Fee por definir_ |
| Client cancels <24h before | Fee nivel 2 (más alto) | _Fee por definir_ |
| Client no-show (técnico fue, no abrieron) | Fee nivel 3 (más alto) | _Fee por definir_ |

**Concierge script:** "Entendemos que surgen imprevistos. Para mantener la calidad del servicio, cancelaciones con menos de 48 horas pueden requerir un cargo parcial."

---

## 2. Rescheduling Policy

| Scenario | Rule |
|----------|------|
| Client requests reschedule >24h | Free, offer next 2-3 slots |
| Client requests reschedule <24h | Free once, log it |
| Multiple reschedules (3+) | Require confirmed slot + deposit |

**Limit:** Max 2 free reschedules per client per service

---

## 3. No-Show Policy

### Client No-Show
| Trigger | Action |
|---------|--------|
| Client not available at confirmed time | Wait 15 min, call 2x, leave WhatsApp voice note |
| After 15 min no response | Log as "No-show Cliente", reschedule |
| Repeat no-show (2+) | Require pre-payment for next service |

### Technician No-Show
| Trigger | Action |
|---------|--------|
| Technician doesn't arrive on time | Concierge contacts immediately |
| Technician no-show confirmed | Apologize to client, reschedule priority, activate backup |
| Log incident | Mandatory incident report, review with technician |

---

## 4. Guarantee & Rework Policy

### Service Guarantee
- **Coverage:** 7 days from service date
- **Scope:** Same issue that was addressed in original service
- **Condition:** Client must report issue within 7 days

### Rework (No Extra Charge)
| Applies When |
|--------------|
| Issue is directly related to work performed |
| Technician error or incomplete work |
| Reported within 7 days |

### NOT Covered (New Issue - Requires Quote)
| Scenario |
|----------|
| Different component/problem than original |
| User damage after service |
| Normal wear unrelated to maintenance |
| Reported after 7-day window |

**Decision flow:**
```
Client reports issue
    ↓
Within 7 days? ──NO──> Quote new service
    ↓ YES
Same issue addressed? ──NO──> Quote new service
    ↓ YES
Schedule rework (no charge)
```

---

## 5. Payment Policy

| Method | Priority | Notes |
|--------|----------|-------|
| Bank transfer | Primary | Múltiples cuentas disponibles (ver tabla abajo) |
| Payment link | No disponible | No para el piloto |
| Cash | **No aceptado** | Cliente debe depositar, no cash |

**Cuentas Bancarias Disponibles:**

| Banco | Titular | Número | Tipo |
|-------|---------|--------|------|
| Banco Popular | _Por agregar_ | _Por agregar_ | Personal |
| BHD | _Por agregar_ | _Por agregar_ | Personal |
| Qik | _Por agregar_ | _Por agregar_ | Personal |
| Scotiabank | _Por agregar_ | _Por agregar_ | Personal |

> **Nota:** Completar tabla con detalles de cuentas. Titulares: Erick Santana o Gabriella Bairan.

**Rule:** Payment must be confirmed within 48h of service completion

---

## 6. Scope & Scope Creep Policy

### Included in Preventive Maintenance
- Filter cleaning
- Coil cleaning (indoor/outdoor)
- General inspection
- Basic diagnostics

### NOT Included (Quoted Separately)
- Part replacement
- Gas recharge
- Electrical repairs
- Units beyond agreed quantity

**Scope creep prevention:**
- Technician identifies additional work
- Does NOT proceed without concierge approval
- Concierge quotes to client
- Work only proceeds with explicit client approval

---

## 7. Access & Safety Protocol

| Requirement |
|-------------|
| Technician must carry Maroa ID (improvised for pilot) |
| Announce arrival via WhatsApp before entering |
| Photos before/after mandatory |
| No service if no adult present (unless pre-authorized) |

---

## Open Questions

1. Exact visit fee amount for late cancellation? → **Pendiente:** PR de política de cancelación (research mercado)
2. Pre-payment/deposit amount for repeat offenders? → **Pendiente**
3. Policy for clients who dispute rework eligibility? → **Pendiente**
4. ~~Cash handling protocol if client insists?~~ → **Resuelto 2026-01-21:** No cash, cliente debe depositar
