# WhatsApp Scripts - Maroa Pilot

---

## 1. Initial Response (Welcome)

**Trigger:** New inquiry from potential client

```
Hola [Nombre], gracias por escribir a Maroa!

Somos un servicio de mantenimiento de aires acondicionados en Punta Cana y Ciudad La Palma. Coordinamos todo por ti: tecnico verificado, horario que te funcione, fotos del trabajo y garantia de 7 dias. Tranquilidad cero drama.

Para darte mejor info, me puedes decir:
1. Tu direccion o residencial
2. Cuantas unidades de A/C tienes?
3. Hace cuanto no les dan mantenimiento?

Gracias!
```

---

## 2. Triage Questions (If Needed)

**Trigger:** Client hasn't provided complete info

```
Perfecto, gracias por la info!

Solo para completar:
- Direccion exacta (incluyendo numero de villa/apto)?
- Alguna foto de las unidades (opcional pero ayuda)?

Con esto te confirmo si estas en nuestra zona de cobertura y te paso opciones de fecha.
```

---

## 3. Out of Zone Response

**Trigger:** Client address is outside pilot zone

```
Gracias por tu interes en Maroa!

Por ahora estamos en una fase piloto y solo cubrimos Ciudad La Palma, Punta Cana Village/Resort y Cap Cana. Tu direccion queda fuera de nuestra cobertura actual.

Te podemos avisar cuando expandamos a tu zona. Quieres que te guardemos en la lista de espera?
```

---

## 4. Scheduling Options

**Trigger:** Client qualifies, ready to schedule

```
Excelente! Estas en nuestra zona de cobertura.

Tengo disponibilidad para:
- [Dia 1] entre [Hora inicio] y [Hora fin]
- [Dia 2] entre [Hora inicio] y [Hora fin]
- [Dia 3] entre [Hora inicio] y [Hora fin]

Cual te funciona mejor? Llegamos en una ventana de 2 horas.
```

---

## 5. Appointment Confirmation

**Trigger:** Client selects a slot

```
Perfecto, confirmado!

Tu mantenimiento de A/C:
- Fecha: [Dia, Fecha]
- Hora: entre [Hora inicio] y [Hora fin]
- Direccion: [Direccion completa]
- Unidades: [#] aires acondicionados

Nuestro tecnico te escribira cuando vaya en ruta. Te mando un recordatorio un dia antes.

Alguna instruccion especial para acceso?
```

---

## 6. Reminder T-24h (Day Before)

**Trigger:** 24 hours before service

```
Hola [Nombre]!

Recordatorio: Manana tienes tu mantenimiento de A/C con Maroa.

- Fecha: [Dia]
- Hora: entre [Hora inicio] y [Hora fin]
- Tecnico: [Nombre Tecnico]

Todo bien para manana? Confirmame con un "Si" para tenerlo listo.
```

---

## 7. Reminder T-2h (Same Day)

**Trigger:** 2 hours before service

```
Hola [Nombre]!

Nuestro tecnico estara llegando en aproximadamente 2 horas. Te escribira cuando este en ruta.

Alguna pregunta antes del servicio?
```

---

## 8. En Ruta (From Technician)

**Trigger:** Technician leaving for client

```
Hola [Nombre], soy [Nombre Tecnico] de Maroa.

Voy en ruta hacia tu direccion. Llego aproximadamente en [X] minutos.
```

---

## 9. Llegue (From Technician)

**Trigger:** Technician arrives

```
Llegue a [Direccion]. Estoy en la entrada.
```

---

## 10. Service Complete (From Technician)

**Trigger:** Service finished

```
Listo [Nombre]!

Ya termine el mantenimiento de tus [#] aires. Todo quedo funcionando bien.

Te mando las fotos del antes y despues. Cualquier pregunta me dices.
```

---

## 11. Payment Request (From Concierge)

**Trigger:** Service marked complete

```
Hola [Nombre]!

Que bueno que todo quedo bien con tu mantenimiento!

Para completar, el total es [RD$ Monto]. Puedes hacer transferencia a:

Banco: [Banco]
Cuenta: [Numero]
Nombre: [Nombre/Razon Social]
Concepto: Mantenimiento A/C - [Nombre Cliente]

Cuando hagas la transferencia, enviame el comprobante aqui. Gracias!
```

---

## 12. Payment Confirmation

**Trigger:** Payment received

```
Recibido, gracias [Nombre]!

Tu servicio queda completamente cerrado. Tu garantia de 7 dias empieza hoy.

Si tienes cualquier problema con el A/C en estos 7 dias, escribenos y lo revisamos sin costo adicional.

Gracias por confiar en Maroa!
```

---

## 13. Follow-Up + Satisfaction Check (T+24-48h)

**Trigger:** 1-2 days after service

```
Hola [Nombre]!

Como va todo con el A/C despues del mantenimiento? Todo bien?

Tu opinion nos ayuda mucho a mejorar.
```

---

## 14. Referral Request

**Trigger:** After positive feedback or at follow-up

```
Que bueno que todo quedo bien!

Si conoces a alguien en [Zona Piloto] que necesite mantenimiento de A/C, nos puedes recomendar. Solo que nos escriban mencionando tu nombre.

Gracias por ser parte de Maroa!
```

---

## 15. Cancellation Acknowledgment

**Trigger:** Client cancels >24h before

```
Entendido, [Nombre]. Cancelamos tu cita del [Fecha].

Cuando quieras reprogramar, solo escribeme y buscamos otra fecha.
```

---

## 16. Late Cancellation Response (<24h)

**Trigger:** Client cancels <24h but >2h before

```
Entendido, [Nombre].

Como es con poca anticipacion, te pedimos avisarnos con mas tiempo en el futuro para poder coordinar mejor con los tecnicos.

Cuando quieras reprogramar, me dices.
```

---

## 16b. Very Late Cancellation Response (<2h)

**Trigger:** Client cancels <2h before scheduled service

```
[Nombre], entendemos que surgen imprevistos de ultimo momento.

Como ya teniamos un tecnico asignado para tu visita, necesitamos revisar si aplica un cargo parcial segun nuestra politica.

Te contactamos en breve para confirmar los proximos pasos.
```

**Note:** Per policy, evaluate case-by-case for possible 50% visit fee. Follow up with decision.

---

## 17. Issue/Complaint Response

**Trigger:** Client reports problem

```
Gracias por avisarnos, [Nombre].

Lamento que tengas ese problema. Me puedes dar mas detalles sobre que esta pasando?

- Que sintoma tiene el A/C?
- Cuando empezo?
- Alguna foto o video?

Lo revisamos de inmediato.
```

---

## 18. Rework Scheduling

**Trigger:** Issue covered under guarantee

```
[Nombre], revisamos y esto esta cubierto por la garantia.

Te agendo una visita de revision sin costo adicional. Tengo disponibilidad:
- [Opcion 1]
- [Opcion 2]

Cual te funciona?
```

---

## 19. Subscription Offer (Post-First-Service — IMM Experiment #1)

**Trigger:** 3-5 days after first service, if client satisfaction was positive

> **Context:** This script supports IMM Experiment #1 (subscription preference validation). See `imm-doulab/08-experimentacion-y-pruebas.md`. Track responses in LEADS sheet column "Interes_Suscripcion". Success threshold: >=50% conversion within 7 days.

```
Hola [Nombre]! Como van los aires despues del mantenimiento? Todo bien?

Queria contarte que tenemos un Plan Piloto Maroa para clientes como tu: 2 mantenimientos al ano, coordinacion total con tecnicos verificados, y prioridad si surge algo urgente. Todo por un pago mensual fijo.

Te interesa que te cuente los detalles?
```

**If client says yes:**

```
El Plan Piloto Maroa incluye:

- 2 mantenimientos preventivos al ano (cada 6 meses)
- Prioridad en correctivos (respuesta en menos de 48h)
- Tecnico asignado que ya conoce tus equipos
- Pago mensual fijo por transferencia
- Garantia en cada visita

El precio del plan depende de cuantos aires tienes. Te paso la cotizacion?
```

---

## Open Questions

1. ~~Should scripts be in formal "usted" or informal "tu"?~~ → **Resuelto 2026-01-21:** Informal pero alegre, sin "tú" explícito (conjugar verbos sin pronombre)
2. Include emojis for friendlier tone? → **Pendiente:** Evaluar
3. ~~Standard response for out-of-hours messages?~~ → **Resuelto 2026-01-21:** Next morning (9-10am) + Emergency only
