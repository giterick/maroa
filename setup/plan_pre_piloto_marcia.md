# Plan de Pre-Piloto - Marcia Diaz

**Objetivo:** Ejecutar 2-3 servicios de prueba en casas de familia y amigos cercanos ANTES de abrir el piloto al publico general, para validar que el proceso funciona end-to-end y que Marcia domina las operaciones.

**Duracion estimada:** 2 semanas
**Responsable:** Marcia Diaz (Gerente de Operaciones)
**Soporte:** Erick Santana (Director / Estrategia y Sistemas)

---

## Meta del Pre-Piloto

Al final de estas 2 semanas, debemos tener:

- [ ] Marcia manejando el flujo de servicio completo con confianza
- [ ] Al menos 1 tecnico activo y evaluado con servicio de prueba
- [ ] Al menos 1 tecnico backup identificado
- [ ] WhatsApp Business configurado y funcionando
- [ ] Google Sheets con datos reales de los servicios de prueba
- [ ] 2-3 servicios completados exitosamente
- [ ] Feedback de los "clientes" de prueba recopilado
- [ ] Fricciones principales identificadas y corregidas

---

## Fase 1: Preparacion (Dias 1-5)

### 1.1 Estudio de Documentacion

Seguir la guia de onboarding (`setup/onboarding_marcia.md`) dias 1-5:

| Dia | Tema | Documentos | Criterio de Exito |
|-----|------|-----------|-------------------|
| 1-2 | Entender Maroa | `docs/00_pilot_definition.md`, `CLAUDE.md`, `docs/05_pricing_system.md` | Puede cotizar de memoria 1-4 unidades. Puede explicar Maroa en 30 seg. |
| 3-4 | Operaciones | `docs/01_service_flow_v0_1.md`, `ops/concierge_checklists.md`, `data/pipeline_states_and_sheet_schema.md` | Puede describir el flujo completo de un servicio. Sabe que checklist usar en cada momento. |
| 5 | Politicas y SLAs | `docs/02_policies.md`, `docs/03_slas.md`, `data/kpi_definitions.md` | Sabe que hacer si el tecnico no llega, si el cliente cancela, o si hay una queja. |

### 1.2 Configurar Herramientas (Dias 6-7 del onboarding, pero empezar desde Dia 3)

| Tarea | Referencia | Criterio de Exito |
|-------|-----------|-------------------|
| Configurar WhatsApp Business (numero nuevo) | `setup/onboarding_marcia.md` Dias 6-7 | Perfil completo: nombre "Maroa", descripcion, horario, mensaje de ausencia |
| Crear Google Sheet con 8 pestanas | `setup/google_sheets_setup.md` | Las 8 hojas creadas con headers y dropdowns |
| Crear carpetas en Google Drive | `ops/tech_evidence_requirements.md` | Estructura: `Maroa_Pilot_Photos/2026-02/` |
| Guardar 5+ respuestas rapidas en WhatsApp | `templates/whatsapp_scripts.md` | Bienvenida, triage, horarios, confirmacion, cobro |
| Leer scripts de redes sociales | `templates/scripts_redes_sociales.md` | Sabe como responder en Instagram/Facebook |

### 1.3 Buscar y Evaluar Tecnicos (Empezar desde Dia 3, en paralelo)

| Tarea | Referencia | Criterio de Exito |
|-------|-----------|-------------------|
| Identificar canales de busqueda (referidos, FB, ferreterias) | `templates/scripts_reclutamiento_tecnicos.md` Seccion 1 | Lista de 5-10 candidatos potenciales |
| Hacer primeras llamadas/WhatsApp | Secciones 2 y 3 del doc de reclutamiento | 5-8 contactos realizados |
| Completar fichas de alta de interesados | Seccion 4 (Ficha de Alta) | 2-3 fichas completas |
| Hacer llamada de onboarding (15-20 min) | Seccion 6 (Proceso de Onboarding) | Al menos 2 tecnicos entienden el modelo |
| Seleccionar 1 tecnico para servicio de prueba | Evaluacion basica: zona, disponibilidad, actitud | 1 tecnico listo |

**Tip para buscar tecnicos rapido:**
1. Preguntar a vecinos y familia: "Quien le da mantenimiento al aire?" (mas efectivo)
2. Preguntar a administradores de residenciales
3. Publicar en grupos de Facebook de Punta Cana
4. Visitar ferreterias locales

---

## Fase 2: Dry Run Interno (Dias 6-7)

### 2.1 Simulacion Completa (Sin Tecnico Real)

**Participantes:** Marcia (concierge) + Erick (simula cliente Y tecnico)

Simular un servicio completo de principio a fin:

| Paso | Quien | Que Hace | Donde Registrar |
|------|-------|----------|-----------------|
| 1 | Erick (cliente) | Envia mensaje: "Hola, me interesa mantenimiento de A/C" | - |
| 2 | Marcia | Responde con Script #1 (bienvenida) | - |
| 3 | Marcia | Hace triage: zona, unidades, datos | LEADS sheet |
| 4 | Marcia | Propone 2-3 horarios | - |
| 5 | Erick (cliente) | Confirma horario | - |
| 6 | Marcia | Registra servicio y asigna "tecnico" | SERVICES sheet |
| 7 | Marcia | Envia confirmacion (Script #5) | - |
| 8 | Marcia | Envia recordatorio T-24h (Script #6) | - |
| 9 | Marcia | Envia recordatorio T-2h (Script #8) | - |
| 10 | Erick (tecnico) | Envia "En ruta hacia [cliente]" | - |
| 11 | Marcia | Registra timestamp en SERVICES | SERVICES sheet |
| 12 | Erick (tecnico) | Envia "Llegue a [direccion]" | - |
| 13 | Marcia | Registra timestamp | SERVICES sheet |
| 14 | Erick (tecnico) | Envia "Completado" + fotos (puede ser fotos cualquiera) | - |
| 15 | Marcia | Registra, guarda fotos en Drive | SERVICES + Drive |
| 16 | Marcia | Envia solicitud de pago (Script #11) | - |
| 17 | Erick (cliente) | "Pago realizado" | - |
| 18 | Marcia | Registra pago | PAYMENTS sheet |
| 19 | Marcia | Actualiza estado a "Pagado" | SERVICES + LEADS |
| 20 | Marcia | Envia follow-up de satisfaccion (Script #13) | - |
| 21 | Marcia | Pide referidos (Script #14) | - |

### 2.2 Evaluacion del Dry Run

Despues de la simulacion, revisar juntos:

| Que Evaluar | Resultado | Notas |
|-------------|-----------|-------|
| Marcia respondio fluido con los scripts? | Si / No / Parcial | |
| Los mensajes sonaron naturales? | Si / No | |
| Google Sheet quedo bien llenado? | Si / No | Revisar cada campo |
| Las fotos se guardaron correctamente en Drive? | Si / No | |
| Cuanto tiempo tomo el proceso completo? | ___ minutos | |
| Algo fue confuso o faltante? | | |
| Que mejorar para el servicio real? | | |

**Si hay problemas serios:** Repetir el dry run antes de pasar a servicios reales.

---

## Fase 3: Servicios de Prueba Reales (Dias 8-14)

### 3.1 Identificar Casas de Prueba

Llenar esta tabla con 2-3 casas de familia o amigos cercanos:

| # | Quien | Relacion | Direccion | Zona | Unidades | WhatsApp | Disponibilidad |
|---|-------|----------|-----------|------|----------|----------|----------------|
| 1 | | | | | | | |
| 2 | | | | | | | |
| 3 | | | | | | | |

**Requisitos para casas de prueba:**
- Idealmente en zona de cobertura (CLP, PC Village, Cap Cana) o cercana
- Tener al menos 1 aire acondicionado que necesite mantenimiento
- Persona dispuesta a dar feedback honesto despues del servicio
- Disponible en horario de servicio (L-V 9-6, Sab 9-12)

**Importante:** Aunque sean familia/amigos, ejecutar el flujo COMPLETO como si fueran clientes reales. El objetivo es probar el proceso, no hacer un favor.

### 3.2 Ejecutar Cada Servicio de Prueba

Para CADA servicio, seguir este checklist completo:

#### Antes del Servicio
- [ ] Crear lead en hoja LEADS (tratar como cliente real)
- [ ] Enviar mensaje de bienvenida por WhatsApp (Script #1)
- [ ] Hacer triage y recopilar info (Script #2)
- [ ] Registrar en Sheet con todos los campos
- [ ] Coordinar con tecnico: confirmar fecha, hora, direccion
- [ ] Crear fila en hoja SERVICES
- [ ] Enviar confirmacion al cliente (Script #5)

#### Dia Anterior (T-24h)
- [ ] Enviar recordatorio al cliente (Script #6)
- [ ] Enviar recordatorio al tecnico
- [ ] Confirmar que ambos estan listos
- [ ] Actualizar estado a "Confirmado"

#### Dia del Servicio (T-2h)
- [ ] Enviar mensaje T-2h al cliente (Script #8)
- [ ] Confirmar que tecnico esta en camino

#### Durante el Servicio
- [ ] Recibir "En ruta" del tecnico — registrar timestamp
- [ ] Recibir "Llegue" del tecnico — registrar timestamp
- [ ] Estar disponible por WhatsApp por si hay cualquier problema
- [ ] Recibir "Completado" + fotos del tecnico
- [ ] Verificar que las fotos cumplan requisitos (minimo 3, claras, antes/despues)
- [ ] Registrar hora de completado

#### Despues del Servicio
- [ ] Guardar fotos en Google Drive (carpeta del servicio)
- [ ] Enviar agradecimiento al cliente (Script del Checklist #7)
- [ ] Enviar solicitud de pago (Script #11) — puede ser simulado en prueba
- [ ] Registrar pago en PAYMENTS (si aplica)
- [ ] Actualizar estado del servicio a "Completado" o "Pagado"
- [ ] Registrar pago al tecnico en COSTS

#### Follow-up (24-48h despues)
- [ ] Enviar mensaje de satisfaccion (Script #13)
- [ ] Recopilar feedback usando formulario (ver seccion 3.3)
- [ ] Registrar CSAT en hoja SERVICES
- [ ] Pedir referidos (Script #14)

### 3.3 Formulario de Feedback para el "Cliente" de Prueba

Despues de cada servicio, pedirle al familiar/amigo que responda honestamente:

| # | Pregunta | Respuesta |
|---|----------|-----------|
| 1 | Del 1 al 10, que tan satisfecho quedaste con el servicio? | ___ / 10 |
| 2 | El tecnico fue puntual? (llego dentro de la ventana de horario) | Si / No |
| 3 | El tecnico fue profesional y respetuoso? | Si / No |
| 4 | El aire quedo funcionando bien despues del servicio? | Si / No |
| 5 | La comunicacion por WhatsApp fue clara y oportuna? | Si / No / Mas o menos |
| 6 | Te parecio facil el proceso de agendar y coordinar? | Si / No / Mas o menos |
| 7 | Pagarias RD$[precio] por este servicio? | Si / No / Depende |
| 8 | Recomendarias Maroa a un vecino o amigo? | Si / No / Depende |
| 9 | Que fue lo que mas te gusto? | (texto libre) |
| 10 | Que mejorarias del proceso? | (texto libre) |

### 3.4 Evaluar al Tecnico Despues de Cada Servicio

| Criterio | Servicio 1 | Servicio 2 | Servicio 3 |
|----------|-----------|-----------|-----------|
| Llego dentro de la ventana? | Si/No | Si/No | Si/No |
| Envio "En ruta"? | Si/No | Si/No | Si/No |
| Envio "Llegue"? | Si/No | Si/No | Si/No |
| Envio "Completado"? | Si/No | Si/No | Si/No |
| Fotos claras y completas (3+)? | Si/No | Si/No | Si/No |
| Calidad del trabajo (1-5)? | /5 | /5 | /5 |
| Trato profesional con cliente? | Si/No | Si/No | Si/No |
| Intento cobrar directo al cliente? | Si/No | Si/No | Si/No |
| Nota general | | | |

---

## Fase 4: Evaluacion y Ajustes (Dias 14-15)

### 4.1 Tabla de Resultados

| Metrica | Servicio 1 | Servicio 2 | Servicio 3 |
|---------|-----------|-----------|-----------|
| Fecha | | | |
| Cliente (nombre) | | | |
| Unidades | | | |
| Tecnico | | | |
| Tiempo de respuesta primer mensaje | | | |
| Tiempo desde lead hasta agendado | | | |
| Tecnico llego en ventana? | | | |
| Fotos completas? | | | |
| Pago registrado correctamente? | | | |
| Follow-up enviado en 24-48h? | | | |
| Satisfaccion cliente (1-10) | | | |
| Pagaria el precio real? | | | |
| Recomendaria a alguien? | | | |

### 4.2 Revision de Fricciones

Despues de los servicios de prueba, listar las principales fricciones:

| # | Friccion Encontrada | Impacto (Alto/Medio/Bajo) | Solucion Propuesta | Responsable |
|---|---------------------|---------------------------|---------------------|-------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |

### 4.3 Checklist Go/No-Go para Piloto Real

#### Personas
- [ ] Marcia domina el flujo de servicio completo y se siente segura
- [ ] Al menos 1 tecnico activo y evaluado con servicios de prueba
- [ ] Al menos 1 tecnico backup identificado (puede estar en "Onboarding")
- [ ] Erick disponible como soporte L3

#### Herramientas
- [ ] WhatsApp Business configurado y funcionando
- [ ] Google Sheet con datos de los servicios de prueba (funciona)
- [ ] Google Drive con fotos de los servicios de prueba (funciona)
- [ ] Scripts accesibles como respuestas rapidas en WhatsApp
- [ ] Cuentas bancarias listas para recibir pagos

#### Proceso
- [ ] 2+ servicios de prueba completados exitosamente
- [ ] Feedback de clientes de prueba promedio >= 7/10
- [ ] Fricciones principales identificadas y corregidas (o plan para corregirlas)
- [ ] Cotizacion y cobro funcionan sin problemas
- [ ] Flujo de fotos funciona (tecnico -> WhatsApp -> Drive)

#### Decision
- [ ] Marcia dice: "Estoy lista para atender clientes reales"
- [ ] Erick dice: "Los sistemas y procesos estan listos"
- [ ] Si ambos dicen SI → **GO: Abrir piloto al publico**
- [ ] Si hay dudas → Hacer 1-2 servicios de prueba adicionales y re-evaluar

---

## Timeline Sugerido

| Semana | Dias | Fase | Actividades Principales |
|--------|------|------|------------------------|
| **Semana 1** | 1-2 | Preparacion | Estudiar docs: que es Maroa, precios, equipo |
| | 3-4 | Preparacion | Estudiar docs: operaciones, checklists, pipeline. **Empezar busqueda de tecnicos en paralelo** |
| | 5 | Preparacion | Estudiar docs: politicas, SLAs, KPIs |
| | 6-7 | Preparacion + Dry Run | Configurar herramientas + simulacion completa con Erick |
| **Semana 2** | 8-9 | Servicios de Prueba | Servicio de prueba #1 y #2 |
| | 10-11 | Servicios de Prueba | Servicio de prueba #3 (si necesario). Seguir reclutando tecnicos. |
| | 12-13 | Evaluacion | Revisar resultados, recopilar feedback, corregir fricciones |
| | 14 | Decision | Reunion Go/No-Go con Erick. Decidir si abrimos piloto. |

---

## Presupuesto Estimado del Pre-Piloto

| Concepto | Costo Estimado | Notas |
|----------|---------------|-------|
| Pago a tecnico por servicios de prueba (2-3 servicios) | RD$3,400 - RD$5,100 | Basado en 1-2 unidades por servicio |
| Materiales de limpieza (si tecnico no tiene) | RD$500 - RD$1,000 | Gas, quimicos, etc. |
| Transporte (si necesario) | RD$500 - RD$1,000 | Gasolina para visitas |
| **Total estimado** | **RD$4,400 - RD$7,100** | |

**Nota:** Los servicios de prueba en casas de familia pueden ser gratis para el "cliente" (Maroa absorbe el costo del tecnico) o a precio reducido (solo costo del tecnico). Decidir con Erick.

---

## Open Questions

1. Se cobra algo a los familiares/amigos por los servicios de prueba, o Maroa absorbe el costo?
2. Si el tecnico no pasa la prueba, cual es el plan B? (buscar otro inmediatamente)
3. Cuantos servicios de prueba minimos antes de lanzar piloto? (sugerimos 2 minimo)
4. Fecha objetivo para abrir el piloto al publico?
