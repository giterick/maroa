# Guia de Onboarding - Marcia Diaz

**Rol:** Gerente de Operaciones y Administracion
**Empresa:** Maroa - Servicio de Mantenimiento de A/C
**Fecha:** Febrero 2026

---

## Bienvenida

Bienvenida a Maroa! Este documento es tu mapa para aprender todo lo que necesitas para manejar el negocio dia a dia.

**Que es Maroa:** Un servicio de mantenimiento preventivo de aires acondicionados en Punta Cana. Operamos con un modelo "concierge" — nosotros coordinamos todo (tecnico, agenda, cobro, seguimiento) para que el cliente no tenga que perseguir a nadie. La experiencia que vendemos es "cero drama".

**Tu rol:** Eres la persona que maneja TODO el dia a dia del negocio. Desde que entra un cliente interesado hasta que se completa el servicio y se cobra. Erick te da soporte en sistemas, datos y decisiones estrategicas, pero la operacion es tuya.

**Donde estamos:** En fase de pre-piloto. Eso significa que primero vamos a hacer unos servicios de prueba en casas de familia para validar que el proceso funciona, y luego abrimos al publico general.

---

## Como Usar Esta Guia

- Esta guia es un **MAPA** de la documentacion que ya existe
- **NO duplica contenido** — te dice QUE leer y EN QUE ORDEN
- Cada dia tiene lecturas + ejercicios practicos
- Marca tu progreso a medida que avanzas
- Si algo no se entiende, anota la duda para revisarla con Erick

**Tiempo estimado:** 2 semanas (Semana 1: aprendizaje, Semana 2: practica)

---

## Semana 1: Aprendizaje Intensivo

### Dias 1-2: Entender Maroa (Que somos y que hacemos)

**Objetivo:** Que puedas explicar Maroa a cualquier persona en 30 segundos.

#### Lecturas:

- [ ] **`docs/00_pilot_definition.md`** — Definicion completa del piloto
  - Que vas a aprender: objetivos, hipotesis, zona de cobertura, limites del piloto
  - Presta atencion a: las 5 hipotesis que estamos validando (H1-H5)

- [ ] **`CLAUDE.md`** — Vision general del proyecto
  - Que vas a aprender: estructura del equipo, KPIs principales, herramientas
  - Presta atencion a: la tabla de KPIs Go/Pivot/Stop (es nuestra brujula)

- [ ] **`docs/05_pricing_system.md`** — Sistema de precios
  - Que vas a aprender: como cotizar, tabla de precios, cuanto le pagamos al tecnico, margenes
  - Presta atencion a: Seccion 3 (precios al cliente) y Seccion 3.4 (payout al tecnico)

#### Ejercicios:

- [ ] **Cotizar 3 escenarios** (sin ver el documento):
  - Cliente con 1 mini-split: RD$______
  - Cliente con 2 mini-splits: RD$______
  - Cliente con 4 mini-splits: RD$______

- [ ] **Escribir con tus palabras:** "Que es Maroa y por que es diferente a llamar un tecnico directo" (3-4 oraciones)

- [ ] **Responder:** "Cuanto le pagamos al tecnico por un servicio de 3 unidades?" RD$______

#### Tabla de Precios para Memorizar

| Unidades | Precio al Cliente | Pago al Tecnico | Margen Maroa |
|----------|-------------------|-----------------|--------------|
| 1 | RD$2,700 | RD$1,700 | RD$1,000 (37%) |
| 2 | RD$4,500 | RD$2,900 | RD$1,600 (36%) |
| 3 | RD$6,300 | RD$4,100 | RD$2,200 (35%) |
| 4 | RD$8,100 | RD$5,300 | RD$2,800 (35%) |

---

### Dias 3-4: Entender las Operaciones (Como funciona el dia a dia)

**Objetivo:** Que sepas exactamente que hacer desde que entra un lead hasta que se cierra el servicio.

#### Lecturas:

- [ ] **`docs/01_service_flow_v0_1.md`** — Flujo de servicio end-to-end
  - Que vas a aprender: los 8 pasos del servicio, quien hace que en cada paso
  - Presta atencion a: el diagrama de flujo y los triggers de cada paso

- [ ] **`ops/concierge_checklists.md`** — Los 10 checklists del concierge
  - Que vas a aprender: que hacer cada manana, cuando entra un lead, al agendar, durante el servicio, al cobrar, al hacer follow-up
  - **ESTE ES TU DOCUMENTO MAS IMPORTANTE** — lo vas a usar todos los dias

- [ ] **`data/pipeline_states_and_sheet_schema.md`** — Estados del pipeline y estructura de datos
  - Que vas a aprender: como se mueve un lead por los estados (Outreach → Interesado → Intake → Agendado → Completado → Pagado)
  - Presta atencion a: las 8 hojas de Google Sheets y que columnas tiene cada una

#### Ejercicios:

- [ ] **Simular un lead completo** (en papel o en voz alta):
  1. "Llega un mensaje de WhatsApp: 'Hola, me interesa el servicio de mantenimiento de A/C'. Que hago?"
  2. Escribir paso a paso que harias, que preguntas haces, que registras
  3. Llegar hasta el cierre del servicio y follow-up

- [ ] **Practicar los estados:** Escribir la secuencia correcta de estados de un lead que se convierte en servicio pagado

- [ ] **Identificar:** En cual de los 10 checklists estarias en cada situacion:
  - Son las 8am y abres WhatsApp → Checklist #___
  - Llega un mensaje nuevo de un desconocido → Checklist #___
  - Faltan 24 horas para un servicio agendado → Checklist #___
  - El tecnico te dice "ya termine" → Checklist #___

---

### Dia 5: Entender las Reglas (Politicas y SLAs)

**Objetivo:** Saber que hacer cuando las cosas no salen como se planearon.

#### Lecturas:

- [ ] **`docs/02_policies.md`** — Politicas de cancelacion, garantia, pagos
  - Que vas a aprender: que hacer si el cliente cancela, si el tecnico no llega, como funciona la garantia de 7 dias, politica de pago
  - Presta atencion a: Seccion 4 (Garantia) y Seccion 3 (No-show)

- [ ] **`docs/03_slas.md`** — Tiempos de respuesta y compromisos
  - Que vas a aprender: cuanto tiempo tienes para responder, para agendar, para resolver incidentes
  - Presta atencion a: Protocolo de escalacion (Level 1, 2, 3)

- [ ] **`data/kpi_definitions.md`** — Metricas que medimos
  - Que vas a aprender: que estamos midiendo y cuales son los umbrales de Go/Pivot/Stop
  - Presta atencion a: los 5 KPIs principales y sus objetivos

#### Ejercicios:

- [ ] **Responder estos escenarios** (sin ver los documentos):
  1. "Un cliente cancela 12 horas antes del servicio. Que haces?"
  2. "Un tecnico no llega a un servicio agendado. Que haces?"
  3. "Un cliente te escribe a las 10pm. Cuando respondes?"
  4. "Un cliente reporta que su aire no enfria bien, 5 dias despues del servicio. Esta cubierto por garantia?"
  5. "Un cliente quiere pagar en efectivo. Que le dices?"

---

### Dias 6-7: Dominar las Herramientas

**Objetivo:** Tener WhatsApp Business configurado, Google Sheet listo, y scripts practicados.

#### Lecturas:

- [ ] **`templates/whatsapp_scripts.md`** — 18 scripts para WhatsApp
  - Que vas a aprender: que escribir en cada situacion (bienvenida, triage, agendar, recordatorios, cobro, follow-up, quejas)
  - **Accion:** Guardar los 5 scripts mas usados como respuestas rapidas en WhatsApp

- [ ] **`templates/scripts_redes_sociales.md`** — Scripts para Instagram/Facebook
  - Que vas a aprender: como responder en redes sociales y llevar al prospecto a WhatsApp

- [ ] **`templates/scripts_reclutamiento_tecnicos.md`** — Scripts para reclutar tecnicos
  - Que vas a aprender: como contactar tecnicos, que explicarles, que informacion recopilar

- [ ] **`setup/google_sheets_setup.md`** — Como configurar Google Sheets
  - Que vas a aprender: las 8 hojas, que columnas tiene cada una, formulas

- [ ] **`ops/tech_evidence_requirements.md`** — Que evidencia pedir a tecnicos
  - Que vas a aprender: minimo 3 fotos, status por WhatsApp (en ruta, llegue, completado)

- [ ] **`setup/quick_reference_card.md`** — Tarjeta de referencia rapida
  - **Accion:** Imprimir o tener a mano — tiene todo resumido en 1 pagina

#### Ejercicios Practicos:

- [ ] **Configurar WhatsApp Business** (numero nuevo para Maroa):
  - Nombre de perfil: Maroa
  - Descripcion: Mantenimiento de A/C en Punta Cana
  - Horario de atencion: L-V 9-6, Sab 9-12
  - Mensaje de ausencia: "Gracias por escribirnos. Respondemos en horario de servicio: L-V 9AM-6PM, Sab 9AM-12PM."

- [ ] **Crear Google Sheet** con las 8 pestanas siguiendo `setup/google_sheets_setup.md`:
  1. LEADS
  2. SERVICES
  3. TECHNICIANS
  4. PAYMENTS
  5. COSTS
  6. INCIDENCIAS
  7. REFERRALS
  8. WEEKLY_METRICS

- [ ] **Crear estructura en Google Drive:**
  ```
  Maroa_Pilot_Photos/
    2026-02/
      (aqui iran las carpetas por servicio)
  ```

- [ ] **Guardar respuestas rapidas** en WhatsApp Business (minimo 5):
  1. Bienvenida (Script #1)
  2. Preguntas de triage (Script #2)
  3. Opciones de horario (Script #4)
  4. Confirmacion de cita (Script #5)
  5. Solicitud de pago (Script #11)

---

## Semana 2: Practica y Ejecucion

### Dias 8-9: Dry Run Completo con Erick

**Objetivo:** Simular un servicio completo de principio a fin, sin tecnico real.

**Referencia:** `setup/2_day_launch_plan.md` (seccion de Dry Run)

#### Simulacion:
1. Erick envia mensaje como "cliente nuevo" por WhatsApp
2. Marcia responde con script de bienvenida
3. Marcia hace triage (zona, unidades, etc.)
4. Marcia registra en Google Sheet (hoja LEADS)
5. Marcia propone horarios y "agenda" servicio
6. Marcia registra en Google Sheet (hoja SERVICES)
7. Marcia envia recordatorio T-24h (Script #6)
8. Erick simula tecnico: "en ruta" → "llegue" → "completado" + fotos
9. Marcia monitorea y registra timestamps en Sheet
10. Marcia envia solicitud de pago (Script #11)
11. Erick confirma "pago" — Marcia registra en PAYMENTS
12. Marcia envia follow-up de satisfaccion (Script #13)

#### Evaluar:
- [ ] Los mensajes sonaron naturales?
- [ ] El Google Sheet quedo bien llenado? (todos los campos)
- [ ] Los tiempos de respuesta fueron rapidos?
- [ ] Algo fue confuso o falto?
- [ ] Anotar todo lo que se puede mejorar

---

### Dias 10-11: Reclutamiento de Tecnicos

**Objetivo:** Contactar tecnicos y tener al menos 1 listo para servicio de prueba.

**Referencia:** `templates/scripts_reclutamiento_tecnicos.md`

#### Tareas:
- [ ] Identificar 5-10 tecnicos candidatos (referidos, FB, ferreterias)
- [ ] Hacer primeras llamadas/WhatsApp usando los scripts
- [ ] Completar fichas de alta de los interesados
- [ ] Hacer llamada de onboarding con al menos 2
- [ ] Seleccionar 1 tecnico para el primer servicio de prueba

---

### Dias 12-14: Primeros Servicios de Prueba

**Objetivo:** Ejecutar 2-3 servicios reales en casas de familia/amigos.

**Referencia:** `setup/plan_pre_piloto_marcia.md` (plan detallado)

Para cada servicio de prueba:
- [ ] Tratar como servicio real (todo el flujo, todo registrado)
- [ ] Verificar calidad del tecnico (puntualidad, trabajo, fotos)
- [ ] Recopilar feedback del "cliente" de prueba
- [ ] Documentar que funciono y que no

---

## Referencia Rapida de Documentos

| Documento | Ubicacion | Cuando Consultarlo |
|-----------|-----------|-------------------|
| Definicion del Piloto | `docs/00_pilot_definition.md` | Dudas sobre alcance del piloto |
| Flujo de Servicio | `docs/01_service_flow_v0_1.md` | Dudas sobre el proceso |
| Politicas | `docs/02_policies.md` | Cancelaciones, garantia, pagos |
| SLAs | `docs/03_slas.md` | Tiempos de respuesta |
| Pricing | `docs/05_pricing_system.md` | Cotizar servicios |
| Job Description | `docs/06_job_description_gerente_operaciones.md` | Tu rol y responsabilidades |
| Scripts WhatsApp | `templates/whatsapp_scripts.md` | Que escribir a clientes (18 scripts) |
| Scripts Redes Sociales | `templates/scripts_redes_sociales.md` | Responder en Instagram/Facebook |
| Reclutamiento Tecnicos | `templates/scripts_reclutamiento_tecnicos.md` | Buscar y dar de alta tecnicos |
| Checklists Concierge | `ops/concierge_checklists.md` | **Uso diario** — que hacer en cada momento |
| Evidencia Tecnicos | `ops/tech_evidence_requirements.md` | Que pedir al tecnico (fotos, status) |
| Google Sheets Setup | `setup/google_sheets_setup.md` | Configurar o consultar estructura de datos |
| Tarjeta Referencia | `setup/quick_reference_card.md` | Consulta rapida (1 pagina) |
| Pipeline y Schema | `data/pipeline_states_and_sheet_schema.md` | Estados del pipeline y columnas del Sheet |
| KPIs | `data/kpi_definitions.md` | Entender las metricas que medimos |
| Plan Pre-Piloto | `setup/plan_pre_piloto_marcia.md` | Plan de accion para servicios de prueba |
| Revision Semanal | `rituals/weekly_review.md` | Formato de reunion semanal |

---

## Contactos Clave

| Quien | Rol | Para Que | Contacto |
|-------|-----|----------|----------|
| Erick Santana | Director / Estrategia y Sistemas | Dudas estrategicas, problemas con sistemas, decisiones importantes | _WhatsApp_ |
| Gabby Bairan | Backup Operativo | Respaldo cuando Marcia no este disponible | _WhatsApp_ |
| Tecnico Principal | Por definir | Coordinacion de servicios | _WhatsApp_ |
| Tecnico Backup | Por definir | Cuando tecnico principal no este disponible | _WhatsApp_ |

---

## Preguntas Frecuentes

| Pregunta | Respuesta |
|----------|-----------|
| Como cotizo un servicio? | Ver tabla de precios arriba o `docs/05_pricing_system.md`. Formula: RD$500 base + RD$2,200 primera unidad + RD$1,800 por unidad 2-4. |
| Que zonas cubrimos? | Ciudad La Palma, Punta Cana Village/Resort, Cap Cana. Todo lo demas es "fuera de zona" por ahora. |
| Como cobro? | Transferencia bancaria solamente. NO efectivo. Ver datos en `docs/02_policies.md` seccion 5. |
| Que hago si el tecnico no llega? | Contactar al tecnico inmediatamente. Si no responde, disculparse con el cliente, reprogramar con prioridad, activar tecnico backup. Registrar como incidencia. Ver `docs/02_policies.md` seccion 3. |
| Que hago si el cliente cancela? | Depende de cuando cancela. >48h: sin costo, reprogramar. <48h: ver politica. Ver `docs/02_policies.md` seccion 1. |
| Que incluye la garantia? | 7 dias. Si el mismo problema reportado fue tratado en el servicio original, volvemos sin costo. Ver `docs/02_policies.md` seccion 4. |
| Que hago si el cliente quiere pagar en efectivo? | "El pago es por transferencia. Aceptamos Popular, BHD, Scotiabank y Qik." No hacer excepciones. |
| A que hora respondo mensajes fuera de horario? | Siguiente dia laboral entre 9-10 AM. Solo emergencias fuera de horario. |
| Como escalo un problema? | L1 (tu): manejar mismo dia. L2 (tu): problemas repetidos o quejas. L3 (Erick): solo incidentes criticos de seguridad o reputacion. |
