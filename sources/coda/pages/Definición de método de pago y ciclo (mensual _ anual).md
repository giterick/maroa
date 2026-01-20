# Definición de método de pago y ciclo (mensual / anual)

## Arquitectura del piloto (concepto clave)

**Dos momentos distintos:**

1. **Pre-suscripción (captura intención + método de pago)**
2. **Activación (solo tras inspección y aprobación física)**

Eso se implementa con un **estado** en tu CRM y una **acción de cobro** que SOLO ocurre cuando el estado pasa a “APROBADO”.



# Plan A (si MIO logra resolver adquirencia local): “Local-first”

### Stack mínimo

1. **MIO Ecommerce** para cobrar online (links / checkout / API).
2. **Backoffice/CRM**: Airtable (ideal) o Google Sheets
3. **WhatsApp Business**: comunicación + plantillas
4. **(Opcional) Make/Zapier**: automatizar cambios de estado y recordatorios

> Nota: PixelPay como “orquestador” igual depende de un “método de pago” (terminal virtual del banco) para que los pagos aterricen a cuenta bancaria; su propio material habla de conectarse a terminales/bancos con los que trabajen.  
En RD, típicamente los adquirentes grandes incluyen Azul, CardNET y Visanet (listados por el Banco Central).

### Qué puedes hacer con este plan sin ingeniería pesada

- **Cobro recurrente real**: solo si MIO (o el adquirente que usen) soporta “recurrente” o algún mecanismo equivalente.
- Si **NO** soporta recurrente: haces **mensual semi-manual** con link (sigue siendo válido para el experimento si mides fricción).



# Plan B (robusto aunque sea “internacional”): Stripe-first

### Realidad importante

Stripe publica que está disponible en países/regiones específicas, y **República Dominicana no aparece** en esa lista.  
Por tanto, para usar Stripe “bien” normalmente necesitas **entidad bancaria/empresa en un país soportado** (p. ej., EE. UU.; Stripe también empuja Atlas como vía).

### Stack mínimo (Stripe)

1. **Stripe Billing** (suscripciones) + **Checkout**
2. **CRM operativo**: Airtable/Sheets
3. **WhatsApp Business**
4. **Email** (opcional) para recibos/confirmaciones



# SOPs (comunes a Plan A y Plan B) con tu regla de “aprobación técnica”

Los SOPs están diseñados para que puedas operar **ya**, aunque el método de cobro sea link manual al inicio.

## SOP 1 — Pre-suscripción (sin activar aún)

**Objetivo:** el cliente deja su “intención” y tú reduces fricción futura, pero **no hay suscripción activa**.

**Pasos:**

1. Concierge envía mensaje “Pre-suscripción” con:

  - precio mensual
  - aclaración: *“La suscripción inicia solo tras inspección y aprobación”*

1. Cliente completa:

  - **Plan B Stripe:** deja tarjeta con Checkout (idealmente “guardar método” / checkout setup)
  - **Plan A local:** paga **visita de inspección** o deja un “depósito” (si no puedes guardar tarjeta sin cobrar)

**En CRM, marcar:**

- `Estado = PRE-SUSCRITO / PENDIENTE_INSPECCIÓN`
- `Unidad = creada`
- `Fecha inspección = agendada`

> Si no puedes guardar tarjeta sin cobrar en Plan A, **cobra la inspección** como producto separado (monto fijo) y listo. La mensualidad sigue bloqueada hasta APROBADO.



## SOP 2 — Inspección en sitio + dictamen

**Objetivo:** aprobar/no aprobar la unidad.

**Técnico ejecuta:**

- checklist de inspección
- puede hacer preventivo o trabajo menor

**Al cierre:**

- `Dictamen = APROBADO` o `NO APROBADO`
- “qué falta para aprobar” si no aprueba
- evidencia mínima (foto/nota)



## SOP 3 — Activación de suscripción (SOLO si APROBADO)

**Objetivo:** aquí es donde empieza el cobro mensual.

**Pasos:**

1. Ops cambia en CRM: `Estado = APROBADO`
2. Activar cobro mensual:

  - **Stripe:** crear/activar la suscripción usando el método guardado
  - **Local (MIO/adquirente):** activar recurrente si existe; si no existe, programar “cobro link mensual”

1. Guardar en CRM:

  - `fecha_activación`
  - `próximo cobro`
  - `ID suscripción` (si aplica)



## SOP 4 — Cobro mensual y conciliación (ritual simple)

**Objetivo:** que el piloto no se te vuelva contabilidad.

**Diario (10 minutos):**

1. Revisar “Pagos del día” en pasarela
2. En CRM:

  - `Pagado = Sí/No`
  - `Último intento`

1. Si falló:

  - disparar SOP 5



## SOP 5 — Fallo de pago (reintentos + suspensión)

**Regla piloto recomendada:**

- Día 0: falla → WhatsApp “actualiza método”
- Día 3: reintento / nuevo link
- Día 7: reintento final
- Día 10: `Estado = SUSPENDIDO` (no se agenda mantenimiento)



# Campos mínimos en Airtable/Sheets (para que esto sea operable)

**Tabla Unidades**

- Cliente, dirección, tipo de unidad, ubicación
- `Estado suscripción`: Pendiente inspección / Aprobado / Activa / En mora / Suspendida / Cancelada
- `Fecha inspección`, `Fecha aprobación`, `Fecha activación`, `Próximo cobro`

**Tabla Pagos**

- unidad, mes, monto, método, status, referencia



# Copy obligatorio (1 línea que te evita problemas)

En toda comunicación de venta/cobro:

> “Puedes pre-suscribirte hoy, pero **la suscripción se activa únicamente después de una inspección y aprobación física** por un técnico Maroa.”



## Recomendación práctica para “empezar mañana” (sin depender de nadie)

1. Implementa el flujo **PRE-SUSCRITO → INSPECCIÓN → APROBADO → ACTIVA** en Airtable/Sheets.
2. Cobra **inspección** por link (Plan A) o captura método (Plan B).
3. Solo cuando apruebe: activas mensualidad (automática si Stripe; semi-manual si local no da recurrente).

---
*Path: 0.2.1.3.3.4*
*Depth: 5*