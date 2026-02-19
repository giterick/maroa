# Reporte Integral: Programa de Innovacion IMM Doulab Phase 02

**Maroa — Servicio de Mantenimiento A/C**
**Fecha del reporte:** 2026-02-18
**Autor:** Erick Santana
**Periodo del programa:** Q2 2025

---

## 1. Resumen Ejecutivo

Maroa es un servicio de mantenimiento de aires acondicionados en Punta Cana, Republica Dominicana. Durante Q2 2025, Maroa participo en el programa de innovacion IMM Doulab Phase 02 (framework MCF 2.1), completando 8 de 10 actividades estructuradas de customer discovery, definicion de problema, diseno de soluciones y planificacion de experimentos.

### Resultados clave del programa:

- **5 segmentos de cliente** identificados y perfilados (propietarios de vivienda, Airbnb hosts, pequenos negocios, expats, tecnicos informales)
- **Problem statement** consolidado y validado conceptualmente
- **Proposito transformador** definido: empoderar hogares, negocios y tecnicos de RD a vivir con tranquilidad
- **3 OKRs estrategicos** con 17+ key results medibles
- **13 ventajas unicas** identificadas y mapeadas a features
- **Embudo de marketing** disenado con mensaje central "tranquilidad cero drama"
- **26 user stories** para la plataforma futura
- **3 experimentos lean** disenados para validar supuestos criticos
- **Market sizing:** SOM (Santo Domingo + Punta Cana) AC only = ~0.61M USD/ano

### Estado actual:

Maroa se encuentra en fase pre-piloto. Los resultados del programa IMM fundamentaron el diseno del piloto de 4 semanas que validara demanda, operaciones y unit economics. Las actividades 09 (bucles de retroalimentacion) y 10 (validacion de modelo de negocio) del programa estan pendientes de completar con datos reales del piloto.

---

## 2. Sobre Maroa

### Vision

Transformar la cultura reactiva del mantenimiento en la Republica Dominicana en una experiencia preventiva, organizada y de excelencia.

### Equipo

| Rol | Responsable |
|-----|-------------|
| Director / Estrategia y Sistemas | Erick Santana |
| Gerente de Operaciones y Administracion | Marcia Diaz |
| Backup Operativo | Gabby Bairan |
| Tech Lead | Por definir |

### Modelo de operacion

- **Concierge-first:** Operacion manual con WhatsApp Business + Google Sheets
- **Sin app custom** durante piloto
- **Zona:** Ciudad La Palma, Punta Cana Village/Resort, Cap Cana

### Servicio

Mantenimiento preventivo de aires acondicionados (mini-splits) + correctivos menores. Incluye:
- Limpieza completa (filtros, evaporador, condensador)
- Revision electrica
- Reporte fotografico antes/despues
- Garantia de 7 dias

---

## 3. Sobre el Programa IMM Doulab

### Que es

El IMM (Innovation Management Methodology) es un programa estructurado de innovacion que guia a emprendedores a traves de un proceso iterativo de:
1. Descubrimiento del cliente (customer discovery)
2. Definicion y validacion del problema
3. Diseno y evaluacion de soluciones
4. Experimentacion y pruebas

### Detalles del programa

- **Fase:** Phase 02 (Analisis del Cliente y Validacion)
- **Framework:** MCF 2.1
- **Periodo:** Q2 2025
- **Formato:** 10 actividades estructuradas con ejercicios individuales y revision entre pares

### Actividades completadas

| # | Actividad | Estado |
|---|-----------|--------|
| 01 | Descubriendo oportunidades y analizando clientes | Parcial (70%) |
| 02 | Herramienta de entrevistas | Plantilla (herramienta metodologica) |
| 03 | Definicion del problema y OKRs | Casi completo (95%) |
| 04 | Explorando soluciones y ventajas unicas | Completo (99%) |
| 05 | Proposito transformador | Completo (100%) |
| 06 | Marketing, compromiso y ventas | Completo (95%) |
| 07 | Historias de usuario y prototipado | Mayormente completo (85%) |
| 08 | Experimentacion y pruebas | Parcial (Steps 1-2 completos, Steps 3-4 pendientes) |
| 09 | Bucles de retroalimentacion | Pendiente (solo plantilla) |
| 10 | Validando modelo de negocio | Pendiente (solo plantilla) |

---

## 4. Descubrimiento del Cliente (Actividades 01-02)

### 4.1 Segmentos de cliente identificados

Se identificaron 5 segmentos de cliente con perfiles demograficos, contexto y comportamientos:

**Segmento 1: Propietarios de viviendas**
- Edad 30-55 anos, ingresos US$1,500-4,000/mes
- 1 propiedad, 4-8 activos criticos
- Comportamiento: Llaman tecnicos por referencia, olvidan mantenimientos, esperan a que fallen los equipos
- Pain mapping: Pendiente de completar

**Segmento 2: Propietarios de rentas cortas (Airbnb hosts)**
- Edad 28-50 anos, ingresos US$2,000-6,000/mes
- 2-5 propiedades, 10-20 activos totales
- Comportamiento: Necesitan respuesta rapida, disponibilidad 24/7, registro contable
- Pain mapping: Pendiente de completar

**Segmento 3: Pequenos negocios locales**
- Edad 30-60 anos, ingresos US$2,000-8,000/mes
- 1 local, 5-15 activos criticos
- Pain mapping: Pendiente de completar

**Segmento 4: Extranjeros residentes (expats)**
- Edad 35-65 anos, ingresos US$3,000-10,000/mes
- 1-2 propiedades, 5-10 activos
- Comportamiento: Prefieren procesos digitales, pagos seguros, buscan confianza
- Pain mapping: Pendiente de completar

**Segmento 5: Tecnicos informales externos**
- Edad 22-50 anos, ingresos US$500-1,500/mes
- Herramientas limitadas, base de clientes reducida
- Frustraciones: Ingresos irregulares, falta de visibilidad
- Motivaciones: Flujo estable de trabajo, mayor credibilidad
- Dolores funcionales: Falta de clientes estables
- Dolores emocionales: Inseguridad financiera
- Frecuencia: Constante (semanal), Intensidad: 4/5

> **Nota:** Solo el segmento 5 (tecnicos informales) tiene el pain mapping completo. Los segmentos 1-4 tienen perfil demografico y contexto pero faltan frustraciones, motivaciones y dolores especificos. Esto es una brecha a cerrar con entrevistas de validacion.

### 4.2 Oportunidades enmarcadas

Se articularon 7 planteamientos de problema con hipotesis de oportunidad:

1. Propietarios pierden tiempo buscando tecnicos confiables → Plataforma centralizada
2. Administradores no pueden coordinar mantenimientos en multiples ubicaciones → Herramienta de calendarizacion
3. Tecnicos informales sin visibilidad digital → Marketplace de servicios
4. Familias con ansiedad por fallos inesperados → Recordatorios preventivos
5. Negocios pierden dinero por paradas operativas → Plan de mantenimiento con SLA
6. Acumulacion de tareas preventivas genera ansiedad → Organizacion automatica
7. Preferencia por pagos digitales y comprobantes fiscales → Pagos multi-canal

### 4.3 Market sizing (AC only)

| Capa | Definicion | Estimacion | Supuestos |
|------|-----------|------------|-----------|
| TAM (Global) | Mercado total A/C | ~420B USD/ano | — |
| SAM (RD) | Mercado disponible RD | ~294M USD/ano | 3.5M hogares x 2.5 activos x $84 x 40% alcanzable |
| SOM (RD) | Mercado obtenible RD | ~1.47M USD/ano | 0.5% del SAM en 6-12 meses |
| SAM (SD + PC) | Santo Domingo + Punta Cana | ~107.5M USD/ano | SD: ~1.1M hogares, PC: ~100k hogares |
| **SOM (SD + PC)** | **Mercado obtenible SD+PC** | **~0.61M USD/ano** | 0.5% SAM SD + 1% SAM PC |

### 4.4 Herramienta de entrevistas

La Actividad 02 proporciono una herramienta metodologica con preguntas estructuradas en 4 categorias:
1. Contexto y comportamiento
2. Puntos de dolor y frustraciones
3. Motivaciones y objetivos
4. Comportamiento de compra y disposicion a pagar

> **Nota:** Esta herramienta es generica (no contiene datos de Maroa). Las entrevistas de validacion estan pendientes de ejecucion.

---

## 5. Definicion del Problema y OKRs (Actividad 03)

### 5.1 Analisis del problema por segmento

| Segmento | Contexto | Consecuencias | Alternativas actuales | Gaps |
|----------|----------|---------------|----------------------|------|
| Propietarios | Olvidan mantenimientos, reaccionan solo cuando falla | Costos altos, estres, vida util reducida | Tecnicos informales de confianza | Sin sistematizacion ni trazabilidad |
| Airbnb hosts | Necesitan tecnicos rapidos para no afectar reputacion | Resenas negativas, bajas de ranking, suspensiones | Tecnicos locales independientes | Sin SLA formal ni continuidad |
| Negocios | Fallas afectan operaciones y ventas | Perdida de ingresos, inventario, reputacion | Tecnicos a ultima hora | Sin contratos ni sistemas |
| Tecnicos | Ingresos inestables, dificultad de captar recurrentes | Periodos sin ingresos | Boca a boca, WhatsApp | Sin canales digitales ni respaldo |

### 5.2 Problem Statement consolidado

> Los propietarios de vivienda, pequenos negocios y propietarios de rentas cortas en la Republica Dominicana no pueden mantener sus equipos criticos en optimas condiciones de forma preventiva porque no existe un servicio confiable, coordinado y accesible que conecte la demanda con tecnicos calificados, lo que resulta en altos costos por reparaciones de emergencia, equipos con vida util reducida y estres operativo constante.

### 5.3 OKRs estrategicos

**O1: Convertir el mantenimiento preventivo en "piloto automatico" para hogares y negocios**

| KR | Meta |
|----|------|
| KR1 | >=80% de activos registrados con plan activo al finalizar piloto |
| KR2 | >=70% mantenimientos completados sin intervencion manual |
| KR3 | <=15% cancelaciones/reprogramaciones en primera visita |
| KR4 | >=50% reactivacion de clientes inactivos |
| KR5 | >=60% reciben recordatorio y confirman |
| KR6 | NPS >=45 |

**O2: Que ninguna emergencia rompa la operacion — respuesta veloz y cierre impecable**

| KR | Meta |
|----|------|
| KR1 | >=90% emergencias atendidas en <=4 horas |
| KR2 | First-Time Fix (FTF) >=75% |
| KR3 | Retrabajo <=10% |
| KR4 | CSAT post-visita >=4/5 |
| KR5 | Asignacion tecnico <=30 minutos |
| KR6 | No-shows <=5% |

**O3: Transparencia radical que "se siente magica" — precio, estado y cobro claros**

| KR | Meta |
|----|------|
| KR1 | >=75% pagos digitales |
| KR2 | 100% ordenes con precio estimado + ventana visibles |
| KR3 | CSAT >=4/5 |
| KR4 | >=95% pagos digitales, disputas <=2% |
| KR5 | Adopcion portal de seguimiento >=85% |
| KR6 | NPS >=45 |

> **Conexion con el piloto:** Los OKRs son mas ambiciosos que los KPIs del piloto por diseno. El piloto valida fundamentals; los OKRs guian la operacion escalada. Ver `data/kpi_definitions.md` para el mapeo.

---

## 6. Exploracion de Soluciones (Actividad 04)

### 6.1 Alternativas de solucion evaluadas

Para cada segmento se evaluaron 5 enfoques de solucion:

| Enfoque | Descripcion (para propietarios de vivienda) |
|---------|---------------------------------------------|
| **Analogica** | Concierge + Pasaporte de Mantenimiento fisico: canal unico WhatsApp, menu de precios, checklist fisico con sello, garantia simple |
| **Digital ligera** | Orquestador no-code: micro-form de intake, recordatorios por activo, historial fotos/NCF, pagos con link |
| **Operativa** | Brigadas de barrio con "Dia Maroa" mensual; ferreteria aliada como mini-hub |
| **Modelo de negocio** | Plan Preventivo Unico Home: 2 visitas/ano + respuesta 24-48h a correctivos; QR a ficha del activo |
| **IA/Avanzada** | Maroa Copilot: triage por chat/foto, quote instantaneo, auto-agenda, planner predictivo |

**Lo que entro al piloto:** Una combinacion de la solucion analogica (concierge WhatsApp + checklist) con elementos del modelo de negocio (plan preventivo con garantia).

### 6.2 Ventajas unicas (13 identificadas)

| # | Ventaja Unica | Por que es dificil de copiar | Valor para el cliente |
|---|---------------|----------------------------|-----------------------|
| 1 | Playbooks tropicalizados (salitre, humedad, polvo, voltaje inestable) | Requiere volumen de casos reales y documentacion de campo | Menos fallas, mas aciertos en primera visita, mayor vida util |
| 2 | Checklists por activo visibles para cliente y tecnico | Requiere curaduria continua y auditoria | Transparencia total, evita "visitas vacias" |
| 3 | Pasaporte de mantenimiento fisico (sticker + libreta) | Requiere cultura y supervision operativa sostenida | Registro tangible de activos, genera confianza |
| 4 | Scoring objetivo de tecnicos (FTF, puntualidad, retrabajos, NPS) | Se basa en datos limpios y consistentes | Confianza en tecnico asignado evaluado objetivamente |
| 5 | Sistema de incentivos y carrera para tecnicos | Requiere iteracion operativa y presupuesto | Reduce no-shows y retrabajos |
| 6 | Ruteo inteligente por zona y ventanas | Requiere densidad de demanda y datos historicos | Menos espera, mayor puntualidad |
| 7 | Pagos multi-canal sin friccion | Requiere integracion de pasarelas + registro fiscal | Paga como prefiere, comprobante automatico |
| 8 | Estimacion diagnostica antes de enviar tecnico | Requiere libreria local sintomas-causas-precios | Sin sorpresas antes de la visita |
| 9 | Contratos y SLAs B2B | Requiere capacidad operativa real | Previsibilidad operativa y financiera |
| 10 | Cultura de calidad (QA, OKRs, SOPs) | Habito organizacional dificil de mantener | Consistencia y mejora continua |
| 11 | Dashboard centrado en activos | Requiere modelo de datos asset-centric | Todo el historial de equipos en un lugar |
| 12 | Gemelo digital evolutivo (vision largo plazo) | Requiere ontologia de activos y datos de uso/entorno | Anticipar gastos y optimizar vida util |
| 13 | Concierge bilingue ES/EN con sensibilidad local | Reclutar y formar personal adecuado es costoso | Menos estres para expats, confianza cultural |

### 6.3 Mapeo a OKRs

Cada ventaja unica fue mapeada a features concretas y vinculada a un OKR especifico. Los playbooks tropicalizados y el pasaporte de mantenimiento respaldan O1 (preventivo). El scoring de tecnicos y la cultura de calidad respaldan O2 (operaciones). Los pagos multi-canal y la estimacion diagnostica respaldan O3 (transparencia).

---

## 7. Proposito Transformador (Actividad 05)

### 7.1 Elementos del PT

| Elemento | Respuesta |
|----------|-----------|
| A QUIEN | Propietarios de vivienda, pequenos negocios, administradores y tecnicos independientes en RD |
| QUE FUTURO | Equipos funcionan con continuidad, sin emergencias costosas ni estres |
| COMO | Plataforma que digitaliza, coordina y profesionaliza el mantenimiento preventivo |

### 7.2 Variantes evaluadas

| Tono | Variante |
|------|----------|
| Inspirador | Transformar la cultura del mantenimiento dominicano; prevencion, confianza y tranquilidad como norma |
| Funcional | Mantener equipos sin interrupciones; organizar, recordar, coordinar con tecnicos calificados |
| Empatico | Recuperar tranquilidad para quienes viven con estres por fallas inesperadas |
| Orientado al futuro | Evolucionar de improvisacion a prevencion; profesionalizar el servicio tecnico |

### 7.3 Proposito Transformador Final

> **Existimos para empoderar a los hogares, negocios y tecnicos de la Republica Dominicana a vivir con tranquilidad y confianza, transformando la cultura reactiva del mantenimiento en una experiencia preventiva, organizada y de excelencia, mediante una plataforma que digitaliza, coordina y profesionaliza el servicio tecnico.**

Este PT guia todas las decisiones operativas y de comunicacion de Maroa.

---

## 8. Marketing, Compromiso y Ventas (Actividad 06)

### 8.1 Mensaje central

> "Maroa te da tranquilidad cero drama con tus aires: 2 mantenimientos preventivos al ano, coordinacion total con tecnicos certificados y pago automatico, empezando con un plan piloto exclusivo en Punta Cana."

### 8.2 Embudo Minimo Viable (MVF)

| Etapa | Estrategia | Canal | Resultado |
|-------|-----------|-------|-----------|
| **Atraer** | Campana "Tranquilidad cero drama": historia de hogar cuyo aire falla en ola de calor. CTA: "Escribe TRANKI por WhatsApp o completa formulario en 30 segundos" | Instagram + Facebook + grupos WhatsApp de residenciales | Leads cualificados |
| **Interactuar** | Flujo de 5 preguntas clave para crear mini-diagnostico. Mensaje personalizado con plan recomendado | Formulario ultra-corto + WhatsApp Business | Pre-calificacion de hogares |
| **Convertir** | Llamada/WhatsApp explicando plan, precio piloto, garantia, pago automatico. Link de pago + agendar primera visita | WhatsApp Business + link de pago | Suscripcion pagada |

### 8.3 Metricas de resonancia

| KPI | Objetivo | Herramienta |
|-----|---------|-------------|
| Tasa de contactos iniciados (clic/alcance) | >=3% | Meta Ads Manager + WhatsApp |
| Tasa de finalizacion mini-diagnostico | >=70% | Google Forms / Typeform |
| Conversion pre-calificados a suscripcion | >=50% | CRM / registro manual |

### 8.4 Estrategia de canales por segmento

| Segmento | Canal | Tono |
|----------|-------|------|
| Propietarios en residenciales | Instagram | Cercano, aspiracional, tranquilidad |
| Propietarios en condominios | Facebook + grupos residentes | Comunitario, confiable, seguridad |
| Ya interesados | WhatsApp Business | Concierge, personal, conversion |

---

## 9. Historias de Usuario y Prototipado (Actividad 07)

### 9.1 User stories definidas (26 total)

Se definieron 26 user stories desde la perspectiva de un propietario de vivienda, cubriendo el ciclo completo de la experiencia Maroa:

**Registro y configuracion:**
- Crear cuenta en minutos
- Verificar cobertura en mi zona
- Registrar cada A/C con datos basicos
- Registrar varios A/C a la vez (plantillas)
- Ver recomendacion automatica de plan segun uso/antiguedad
- Suscribir cada A/C a plan especifico
- Aplicar mismo plan a todos los A/C en un paso

**Gestion de visitas:**
- Ver calendario de proximas visitas por equipo
- Recibir notificacion anticipada
- Confirmar/reagendar desde app o WhatsApp
- Saber en tiempo real cuando llega el tecnico
- Ver perfil del tecnico (nombre, foto, certificacion)

**Servicio y pago:**
- Recibir resumen de lo que hizo el tecnico
- Autorizar pago seguro desde la app
- Calificar tecnico y experiencia
- Ver historial de mantenimientos por equipo
- Ver todos los pagos y facturas

**Valor y confianza:**
- Ver cuanto he ahorrado evitando emergencias
- Autorizar a otra persona a recibir tecnico
- Gestionar multiples propiedades
- Pausar plan temporalmente
- Recibir alertas de riesgo
- Acceder a tips de uso y cuidado
- Canal claro para reclamos
- Entender que cubre mi plan y que no

### 9.2 Prototipo

Se tradujeron 2 user stories a elementos de prototipo:

1. **Registro de A/C + recomendacion de plan:** Formulario de registro + boton "agregar varios equipos" + cards con recomendacion
2. **Calendario de visitas:** Vista mensual/semanal + filtros por equipo/propiedad + modal de detalle

> **Nota:** Los pasos 3 (sketch en Figma/Slides) y 4 (pruebas con usuarios) no fueron ejecutados aun.

---

## 10. Experimentacion y Pruebas (Actividad 08)

### 10.1 Supuestos criticos identificados

| Supuesto | Por que es riesgoso | Fuente de incertidumbre |
|----------|--------------------|-----------------------|
| Los propietarios preferiran pagos mensuales automaticos despues del primer servicio | Consumidores prefieren pago por uso; suscripcion requiere confianza | No hay datos locales de suscripcion en mantenimiento del hogar en RD |
| Los usuarios valoraran beneficios preventivos sobre el costo puntual | Mayoria prioriza reparacion cuando hay falla; requiere reeducacion | No hay evidencia de disposicion real al preventivo en el segmento |
| Los propietarios confiaran en tecnicos asignados sin supervision directa | Confianza y seguridad son barreras en servicios domiciliarios | Depende de reputacion inicial y comunicacion previa |

### 10.2 Experimentos lean disenados

**Experimento 1: Preferencia de suscripcion**
- Hipotesis: Si realizamos mantenimiento de calidad y presentamos "Plan Piloto Maroa 6 meses", entonces >=50% se suscriben en 7 dias
- Prueba: Ofrecer plan a primeros 20 clientes post-primera-visita
- Metrica: % conversion a suscripcion mensual en 7 dias
- Umbral: >=50%

**Experimento 2: Integracion de tecnicos**
- Hipotesis: Si invitamos tecnicos prefiltrados con comisiones claras y estandar simple, >=70% aceptan y completan >=3 servicios en el primer mes
- Prueba: Invitar 10 tecnicos prefiltrados
- Metrica: % activacion y completitud
- Umbral: >=70%

**Experimento 3: Confianza en tecnicos asignados**
- Hipotesis: Si enviamos ficha del tecnico antes de visita y mantenemos contacto proactivo, CSAT >=4/5 y cancelaciones por desconfianza <=5%
- Prueba: Enviar ficha antes de cada visita; registrar CSAT + tasa de cancelacion
- Metrica: CSAT post-visita y tasa de cancelaciones por desconfianza
- Umbral: CSAT >=4/5, cancelaciones <=5%

> **Nota:** Los Steps 3 (registro de aprendizajes del piloto) y 4 (retroalimentacion de pares) contienen solo ejemplos genericos, no datos de Maroa. Se completaran con resultados reales del piloto.

---

## 11. Actividades Pendientes (09-10)

### 11.1 Actividad 09: Bucles de retroalimentacion

**Estado:** Solo plantilla con ejemplos genericos (encuesta post-compra, heatmaps, churn por cohorte).

**Que se necesita para completar:**
- Definir las fuentes de retroalimentacion reales de Maroa (WhatsApp feedback, CSAT post-servicio, datos de Google Sheets)
- Identificar patrones de los primeros servicios
- Disenar plan de accion iterativo basado en datos reales

### 11.2 Actividad 10: Validando el modelo de negocio

**Estado:** Solo plantilla con ejemplos genericos ($19/mes, costos AWS, landing page). Ningun dato de Maroa.

**Que se necesita para completar:**
- Definir supuestos criticos del modelo de negocio de Maroa (pricing RD$2,700/unidad, costo tecnico, margen >=20%)
- Disenar experimentos especificos (ej: validar que clientes pagan RD$2,700 sin resistencia)
- Capturar resultados del piloto y determinar si cada supuesto fue validado

---

## 12. Estado Actual y Roadmap

### 12.1 Que esta validado conceptualmente (via IMM)

| Aspecto | Estado | Evidencia |
|---------|--------|-----------|
| Problema existe | Validado conceptualmente | Problem statement articulado, 7 oportunidades enmarcadas |
| Segmentos definidos | Parcial | 5 segmentos perfilados, pero pain mapping incompleto (4/5) |
| Solucion disenada | Validado conceptualmente | 5 enfoques evaluados, 13 ventajas unicas mapeadas |
| Proposito claro | Validado | PT final seleccionado con 4 variantes |
| Marketing disenado | Validado conceptualmente | Embudo MVF completo con metricas |
| Features definidas | Validado conceptualmente | 26 user stories cubren ciclo completo |
| Experimentos listos | Disenados, no ejecutados | 3 experimentos lean con umbrales claros |

### 12.2 Que falta validar (via piloto)

| Hipotesis | Metrica del piloto | Umbral |
|-----------|--------------------|--------|
| H1: Clientes pagaran | Conversion Rate | >=20% |
| H2: Concierge funciona | SLA Compliance | >=90% |
| H3: Calidad consistente | First-Time Fix Rate | >=90% |
| H4: Unit economics viables | Gross Margin | >=20% |
| H5: Clientes vuelven | Retention Intent | >=60% |

### 12.3 Timeline

| Fase | Periodo | Foco |
|------|---------|------|
| IMM Doulab Phase 02 | Q2 2025 | Customer discovery + strategy design |
| Pre-piloto | Q1 2026 | Equipo, pricing, documentacion, onboarding Marcia |
| **Piloto (4 semanas)** | **Proximo** | **Validar H1-H5 con 15-20 servicios reales** |
| Decision Go/Pivot/Stop | Post-piloto | Evaluar KPIs y decidir |
| Fase 2 (si Go) | Post-decision | Expandir volumen, zona, o modelo |

### 12.4 Riesgos clave

| Riesgo | Mitigacion |
|--------|-----------|
| Clientes no pagan precio premium (RD$2,700) | Esquema hibrido con Opcion C de emergencia (ver `docs/05_pricing_system.md`) |
| Tecnicos no cumplen estandar de calidad | Scoring objetivo + politica licensing-first + bono por completitud |
| Demanda insuficiente en zona piloto | Marketing hiperlocal + referidos + grupos de residenciales |
| Operacion manual no escala | Limitado a 20 servicios; escalar solo post-validacion |

---

## 13. Conexion IMM → Piloto Operativo

| Output IMM | Documento Operativo | Como se Conecta |
|------------|--------------------|-----------------------|
| 5 segmentos de cliente | `docs/00_pilot_definition.md` Sec. 8 | Piloto enfocado en segmento 1 (propietarios 1-4 A/C) |
| Problem statement | `docs/00_pilot_definition.md` Sec. 8 | Base para hipotesis H1-H5 |
| 3 OKRs estrategicos | `data/kpi_definitions.md` Sec. OKR Alignment | O1→KPI-5, O2→KPI-2/3, O3→KPI-4/9 |
| Embudo MVF "cero drama" | `templates/whatsapp_scripts.md` Script #1, #19 | Messaging de bienvenida + script suscripcion |
| Metricas de resonancia | `templates/scripts_redes_sociales.md` Sec. 11 | Estrategia de canales y CTAs |
| Hipotesis H1-H5 | `rituals/weekly_review.md` Sec. 1b | Tracking semanal de validacion |
| Experimento suscripcion | `templates/whatsapp_scripts.md` Script #19 | Script post-primer-servicio |
| Pricing validation | `docs/05_pricing_system.md` Sec. 6.4 | Contexto IMM en validacion de precios |
| Proposito transformador | `docs/02_policies.md` contexto | Politicas alineadas al PT |
| 26 user stories | Futuro roadmap post-piloto | Features para plataforma digital |
| 13 ventajas unicas | Diferenciadores operativos del piloto | Checklists, pasaporte, scoring ya en ops |

---

## Apendice A: Perfiles Completos de Segmentos

| Segmento | Demografia | Rol/Contexto | Comportamiento | Alternativas |
|----------|-----------|--------------|----------------|--------------|
| Propietarios | 30-55, US$1,500-4,000/mes, 4-8 activos | Duenos de hogares | Referencia, olvidan mantenimiento, esperan falla | — |
| Airbnb hosts | 28-50, US$2,000-6,000/mes, 10-20 activos | Administran propiedades turisticas | Respuesta rapida, 24/7, contabilidad | Tecnicos locales |
| Negocios | 30-60, US$2,000-8,000/mes, 5-15 activos | Comerciantes y PYMEs | — | — |
| Expats | 35-65, US$3,000-10,000/mes, 5-10 activos | Residentes zonas turisticas | Digital, pagos seguros, confianza | Administradores condominio |
| Tecnicos | 22-50, US$500-1,500/mes | Independientes sin formalizacion | WhatsApp, ingresos inestables | — |

## Apendice B: Market Sizing Completo

### AC Only

| Capa | Estimacion | Supuestos |
|------|------------|-----------|
| TAM (Global) | ~420B USD/ano | — |
| SAM (Global) | ~42B USD/ano | 10% TAM: zonas urbanas, pagos digitales |
| SOM (Global) | ~210M USD/ano | 0.5% SAM en 6-12 meses |
| SAM (RD) | ~294M USD/ano | 3.5M hogares x 2.5 activos x $84 x 40% |
| SOM (RD) | ~1.47M USD/ano | 0.5% SAM |
| SAM (SD + PC) | ~107.5M USD/ano | SD: ~1.1M hogares, PC: ~100k hogares |
| SOM (SD + PC) | ~0.61M USD/ano | 0.5% SAM SD + 1% SAM PC |

### All Assets

| Capa | Estimacion | Supuestos |
|------|------------|-----------|
| TAM (Global) | ~656B USD/ano | 2,000M hogares x $328/ano |
| SAM (Global) | ~65.6B USD/ano | 10% TAM |
| SOM (Global) | ~65.6M USD/ano | 0.1% SAM |
| SAM (RD) | ~460M USD/ano | 3.5M hogares x $328 x 40% |
| SOM (RD) | ~2.3M USD/ano | 0.5% SAM |
| SOM (SD + PC) | ~1.1M USD/ano | SD: 0.5% de 145M, PC: 1% de 19.7M |

## Apendice C: 26 User Stories Completas

| # | Accion | Beneficio |
|---|--------|-----------|
| 1 | Crear cuenta y registrar vivienda en minutos | Empezar sin procesos complicados |
| 2 | Ver si Maroa da servicio en mi zona | Evitar frustracion |
| 3 | Registrar cada A/C con datos basicos | Inventario claro en un lugar |
| 4 | Registrar varios A/C a la vez | Ahorrar tiempo |
| 5 | Ver recomendacion automatica de plan | Sentirme guiado |
| 6 | Suscribir cada A/C a plan especifico | Ajustar cuidado por equipo |
| 7 | Aplicar mismo plan a todos los A/C | Configurar con eficiencia |
| 8 | Ver calendario de proximas visitas | Planificar mi dia |
| 9 | Recibir notificacion anticipada | No olvidar la cita |
| 10 | Confirmar/reagendar desde app o WhatsApp | Adaptar a mi agenda |
| 11 | Saber en tiempo real cuando llega tecnico | Organizarme mejor |
| 12 | Ver perfil del tecnico antes de visita | Sentirme seguro |
| 13 | Recibir resumen post-visita | Saber que se hizo |
| 14 | Autorizar pago seguro desde app | Pagar sin efectivo |
| 15 | Calificar tecnico y experiencia | Mi opinion cuenta |
| 16 | Ver historial por equipo | Decidir reparar/reemplazar |
| 17 | Ver pagos y facturas | Control financiero |
| 18 | Ver cuanto ahorre | Confirmar que vale la pena |
| 19 | Autorizar a otra persona | Asegurar servicio sin estar |
| 20 | Gestionar varias propiedades | Administrar desde un lugar |
| 21 | Pausar plan temporalmente | No pagar si no necesito |
| 22 | Recibir alertas de riesgo | Accion preventiva |
| 23 | Acceder a tips de cuidado | Mejorar vida util |
| 24 | Canal claro para reclamos | Sentirme protegido |
| 25 | Saber que cubre mi plan | Evitar sorpresas |
