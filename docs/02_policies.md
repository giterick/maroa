# Policies - Maroa Pilot (v0.1)

---

## 1. Cancellation Policy

| Scenario | Rule | Action |
|----------|------|--------|
| Client cancels >24h before | Free cancellation | Reschedule with priority |
| Client cancels <24h before | Warning issued | Log in Sheet; 2nd occurrence = deposit required |
| Client cancels <2h before | Possible fee | Evaluate case; may charge 50% visit fee |

**Concierge script:** "Entendemos que surgen imprevistos. Para mantener la calidad del servicio, cancelaciones con menos de 24 horas pueden requerir un cargo parcial en futuras citas."

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
| Bank transfer | Primary | Provide account details after service |
| Payment link | Secondary | If integrated |
| Cash | Last resort | Technician does NOT collect cash |

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

1. Exact visit fee amount for late cancellation?
2. Pre-payment/deposit amount for repeat offenders?
3. Policy for clients who dispute rework eligibility?
4. Cash handling protocol if client insists?
