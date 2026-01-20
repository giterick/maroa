# Flujo Operativo End-to-End — Piloto Maroa (v0.2)

# Flujograma







# Objetivo del flujo

Operar un ciclo completo y repetible desde **generación activa de leads → intake → agendamiento → servicio → cierre → feedback → referidos**, con evidencia, control de calidad y aprendizaje semanal.



# 1) Entradas del flujo

**Canales de entrada**

- Outreach manual (WhatsApp directo) ✅
- Grupos de WhatsApp / comunidades ✅
- Administradores / property managers / aliados ✅
- Referidos ✅
- Landing/formulario (si existe) ✅

**Tipos de solicitud**

- A) Preventivo
- B) Avería / Correctivo ligero
- C) “No sé qué necesito” (triage)



# 2) Roles (piloto)

- **Concierge (CX/Ops):** punto único con cliente, triage, agenda, comunicación, cierre y encuesta.
- **Ops / Coordinación de técnicos:** asignación, validación de evidencia, costos/materiales, retrabajos.
- **Técnico:** ejecución + evidencia + recomendaciones.
- **QA ligero (puede ser Ops/CEO):** auditoría de muestra + llamadas de control.

*(En piloto, Concierge y Ops pueden ser la misma persona.)*



# 3) Herramientas mínimas

- WhatsApp Business (plantillas)
- Tablero “Piloto” (Sheet/Coda): pipeline + agenda + costos + incidencias
- Formulario Intake (opcional) + Formulario Post-servicio (CSAT)
- Plantillas: cotización, confirmación, reporte final, políticas (reprogramación/garantía)



# 4) Flujo por etapas

## Etapa 0 — Marketing Mínimo Viable (Outreach + Referidos) (siempre activa)

**Objetivo:** alimentar el piloto con un flujo mínimo de leads semanal (sin depender de inbound).

**Pasos**

1. Definir “gancho” (1 párrafo): **alcance + promesa “cero drama” + zona + cupo**.
2. Ejecutar outreach diario (WhatsApp-first):

  - mensajes a red cercana
  - posts en grupos
  - mensajes a admins/aliados

1. Registrar cada contacto en el tracker:

  - estatus + próximo paso + fecha

1. Follow-ups con cadencia (ej. 48h y 7 días).
2. Activar referidos en dos momentos:

  - al confirmar/agendar
  - post-servicio si CSAT alto

**Output:** Lead con interés → pasa a Intake.

**Estados sugeridos (adquisición)**  
`Outreach → Interesado → Intake`



## Etapa 1 — Intake (captura mínima)

**Trigger:** lead responde interesado o entra por formulario.

**Pasos**

1. Concierge envía bienvenida + confirma zona/alcance del piloto.
2. Captura datos mínimos:

  - nombre, ubicación, tipo de inmueble
  - cantidad de A/C, tipo (split/inverter), BTU si se sabe
  - motivo (preventivo/correctivo), urgencia
  - ventanas de horario

1. Registrar en tablero (estatus: `Triage`).

**Output:** lead completo listo para triage.



## Etapa 2 — Triage y clasificación

**Objetivo:** decidir preventivo vs correctivo ligero vs diagnóstico.

**Pasos**

1. Concierge hace preguntas estándar.
2. Si es correctivo: pedir fotos/video/código de error si aplica.
3. Clasificar:

  - `Preventivo`
  - `Correctivo probable`
  - `Diagnóstico requerido`

1. Priorizar (según capacidad): normal / rápida / urgente.

**Output:** tipo de servicio + prioridad + siguiente acción.



## Etapa 3 — Oferta, precio y expectativas

**Objetivo:** alinear alcance y condiciones antes de agendar.

**Pasos**

1. Enviar cotización:

  - preventivo: precio fijo (por unidad / paquete)
  - correctivo: diagnóstico + reparación aprobada luego

1. Aclarar políticas: reprogramación/no-show, garantía/retrabajos (piloto).
2. Confirmar aceptación por WhatsApp.

**Output:** aceptación + autorización para agendar.



## Etapa 4 — Agendamiento y asignación de técnico

**Objetivo:** agendar con ventana y asignar técnico adecuado.

**Pasos**

1. Ofrecer 2–3 opciones de fecha/ventana.
2. Ops asigna técnico (disponibilidad, zona, complejidad, desempeño).
3. Confirmación al cliente: fecha + ventana + identificación del técnico + recomendaciones.
4. Brief al técnico: dirección, contacto, tipo de servicio, checklist, notas.
5. Estatus: `Agendado`.

**Output:** cita confirmada y asignada.



## Etapa 5 — Pre-visita (día del servicio)

**Objetivo:** reducir ausencias y asegurar puntualidad.

**Pasos**

1. Recordatorio al cliente 2–4h antes (confirmar acceso).
2. Técnico confirma salida + ETA.
3. Concierge comunica ETA al cliente.

**Output:** cliente listo + técnico en ruta.



## Etapa 6 — Ejecución en campo

**Objetivo:** ejecutar estándar técnico + estándar experiencia.

**Pasos del técnico (resumen)**

1. Llegada: saludo + identificación + explicación breve.
2. Servicio (preventivo/correctivo ligero).
3. Evidencia obligatoria: fotos antes/durante/después + notas + recomendaciones.
4. Si hay correctivo adicional: técnico reporta a Ops/Concierge para aprobación (cliente no negocia directo).

**Output:** servicio ejecutado + evidencia + hallazgos.



## Etapa 7 — Control de calidad y cierre (mismo día)

**Objetivo:** cerrar con evidencia, pago y reporte.

**Pasos**

1. Técnico envía evidencia.
2. Ops valida checklist/evidencia:

  - OK / incompleto / requiere retrabajo

1. Concierge envía “Reporte Maroa” (resumen + evidencias + recomendaciones).
2. Cobro según política del piloto.
3. Estatus: `Completado` o `Pendiente pago` / `Pendiente aprobación` / `Retrabajo`.

**Output:** cierre administrativo + reporte.



## Etapa 8 — Post-servicio (24–48h)

**Objetivo:** medir satisfacción, resolver fricciones, activar referidos.

**Pasos**

1. Enviar encuesta (≤ 1 minuto): CSAT + pregunta abierta.
2. Si CSAT bajo: abrir `Incidencia` + llamada breve + plan de solución.
3. Si CSAT alto:

  - pedir testimonio (texto corto)
  - activar referido con script (1 vecino/amigo)
  - (si aplica) ofrecer continuidad/renovación

**Output:** feedback + mejora + crecimiento vía referidos.



## Etapa 9 — Retrabajos y garantías (si aplica)

**Trigger:** reclamo, QA detecta defecto, evidencia incompleta.

**Pasos**

1. Clasificar causa: técnico / expectativa / condición previa / materiales.
2. Definir acción: retrabajo sin costo / visita con costo / crédito piloto (si aplica).
3. Ejecutar y cerrar ticket con causa raíz + prevención.

**Output:** resolución + aprendizaje documentado.



## Etapa 10 — Ritual semanal de aprendizaje (1 hora)

**Objetivo:** iterar rápido el piloto.

**Revisión**

- adquisición: outreach → interesados → agendados → completados (+ referidos)
- operación: tiempos, puntualidad, reprogramaciones
- calidad: retrabajos, evidencia completa, fallas comunes
- economía: costos, margen, materiales
- CX: CSAT/NPS, fricciones
- acciones: 3 mejoras concretas + responsables + fecha



# 5) SLAs sugeridos (piloto)

- Respuesta a lead: < 30 min (horario operativo)
- Triage completo: < 4 horas
- Cotización: mismo día
- Agendamiento: 48–72h (normal)
- Puntualidad en ventana: ≥ 85%
- Reporte/cierre: mismo día
- Encuesta post-servicio: < 24h



# 6) Estados del tablero (end-to-end)

**Adquisición:** `Outreach → Interesado → Intake`  
**Operación:** `Triage → Cotizado → Aceptado → Agendado → En ruta → En servicio → Pendiente pago/aprobación → Completado → Incidencia/Retrabajo → Cerrado`

---
*Path: 0.2.1.3.4.1*
*Depth: 5*