

================================================================================
Page: Content
Path: 0
Depth: 0
================================================================================

 

================================================================================
Page: 100 Startup Tasks
Path: 0.1
Depth: 1
================================================================================

 

================================================================================
Page: Setup
Path: 0.1.1
Depth: 2
================================================================================

 

================================================================================
Page: Identify Problems and Trends
Path: 0.1.1.1
Depth: 3
================================================================================

Research and identify emerging problems and trends in your target market

# Brain-dump de problemas raíz

1. **Visibilidad nula de la vida útil real** de equipos e infra; todo el mundo adivina.
2. **Overload mental**: demasiados “to-dos” dispersos en la cabeza del usuario.
3. **Info fragmentada** en manuales físicos, correos viejos y facturas sueltas.
4. **Incentivos pro-reactivos**: se actúa solo cuando algo falla y duele.
5. Cultura de “si funciona, no lo toques” → procrastinación crónica.
6. **Costos de oportunidad invisibles** al posponer cuidados (consumo, averías mayores, downtime).
7. **Asimetría de información** cliente-proveedor; el usuario no sabe qué realmente necesita.
8. **Mercado hiperfragmentado**: imposible comparar calidad y precios de forma rápida.
9. **Estándares de servicio difusos**; cada técnico tiene su “receta secreta”.
10. Coordinar **tres agendas** (cliente, operador, suplidor de partes) es un mini Tetris.
11. **Historial de intervenciones** disperso o inexistente; nadie ve el big picture.
12. Proveedores sin **canales digitales** para recibir alertas ni actualizar slots.
13. **Supply chain lento** para repuestos críticos; el tiempo pasa, el riesgo crece.
14. **Falta de confianza** para dejar entrar desconocidos a la casa/oficina.
15. **Procesos de pago engorrosos** (efectivo, transferencia, “deme su RNC, por favor”).
16. **Costos variables impredecibles**; el miedo al sobreprecio paraliza decisiones.
17. **Riesgo moral**: algunos proveedores sobredimensionan la solución para facturar más.
18. ROI del cuidado anticipado **no cuantificado**; se percibe como gasto, no inversión.
19. **Baja alfabetización técnica**; lenguaje especializado intimida al usuario final.
20. **Legacy gear sin IoT**; cero telemetría que avise antes del desastre.
21. Cuando sí hay sensores → **data lake sin intérprete**; ruido puro.
22. **Silos internos** (facilities vs. finanzas) que nunca sincronizan presupuestos.
23. **Políticas corporativas difusas**; nadie sabe quién aprueba qué.
24. Calendarios globales **ignoran estacionalidades locales** (huracanes, sequía, etc.).
25. **Prestadores informales** sin seguro ni garantía → alto riesgo percibido.
26. **Regulaciones y permisos** que alargan tiempos de respuesta.
27. Horarios de servicio chocan con **disponibilidad del usuario** (home office, school runs).
28. Mudanzas u oficinas nuevas **rompen el ciclo** de cuidado establecido.
29. Dependencia de **un solo proveedor**; si falla, no hay plan B.
30. Usuarios **sobreestiman su DIY skills**; arreglan mal y empeoran la cosa.
31. Documentación de **garantías se pierde**; se paga de nuevo por lo mismo.
32. **Fraude o scams online**; temor a pagar por adelantado.
33. Falta de **integración con pagos automáticos** o split billing.
34. **Cash-flow pressure**: se prioriza lo urgente hoy sobre lo importante mañana.
35. Inflación y devaluación → **cotizaciones caducan** en días, adding friction.
36. **Datos históricos insuficientes** para modelar fallas y recomendar mejores timings.
37. Cobertura geográfica desigual; **desiertos de servicio** fuera de las capitales.
38. **Operación manual** en call centers: riesgo alto de error humano y lag.
39. **Alert fatigue**: demasiadas notificaciones → ignoradas.
40. **Key-person bottleneck**: si la única persona que coordina se ausenta, todo se detiene.
41. Sin **benchmark público** sobre duración real de piezas y consumibles.
42. **Parálisis por exceso de opciones**; demasiados presupuestos, cero decisión.
43. **Falta de retroalimentación estructurada**; la calidad no mejora porque nadie mide.
44. **Desalineación de incentivos** entre actores (usuario quiere ahorro, proveedor quiere ticket alto).



> **Takeaway:** la raíz común es una combinación de fricción cognitiva, falta de datos confiables y mercados atomizados que hacen que la acción proactiva sea la excepción, no la norma.



# Tendencias Generales y Particulares

### Panorama global 🛰️

1. **Digitalización & IoT everywhere.** La industria de *predictive maintenance* está explotando: pasará de ≈ US$ 10 mil M en 2024 a US$ 47 mil M en 2029 (CAGR ≈ 35 %) [MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/operational-predictive-maintenance-market-8656856.html?utm_source=chatgpt.com). Plataformas CMMS / IWMS incorporan IA y sensores para lanzar alertas antes del fallo, reduciendo hasta 25 % los gastos operativos de grandes portafolios inmobiliarios [Click Maint CMMS](https://www.clickmaint.com/blog/facility-maintenance-trends-2025?utm_source=chatgpt.com)[AssetWorks](https://www.assetworks.com/eam/blog/top-trends-for-facilities-management-software-in-2025/?utm_source=chatgpt.com).
2. **“Uber-for-handyman” wave.** Apps como TaskRabbit, Urban Company, Angi o Handy estandarizan precios, verifican técnicos y gestionan pagos in-app; surgen clones listos para franquiciar en nuevos mercados [ValueAppz](https://www.valueappz.com/blog/handyman-apps-for-handyman-business?utm_source=chatgpt.com)[Cinch Home Services](https://www.cinchhomeservices.com/homeowners/blog/home-maintenance-apps?utm_source=chatgpt.com). En residencias unifamiliares aparecen **subscription coaches** tipo HomeKeep que envían recordatorios, guías DIY y, cuando hace falta, vinculan al usuario con un pro certificado [HomeKeep™](https://homekeep.com/?utm_source=chatgpt.com).
3. **B2B Facility-as-a-Service.** Gigantes como Johnson Controls empaquetan operación, monitoreo remoto y brigadas on-site dentro de contratos multianuales que garantizan SLA y financian upgrades energéticamente eficientes [johnsoncontrols.com](https://www.johnsoncontrols.com/services-and-support/operations-maintenance-and-repair-services/operations-and-maintenance-services?utm_source=chatgpt.com). Start-ups SaaS (UpKeep, Fiix, Fracttal) venden “smart maintenance stacks” listos para conectar sensores, tickets y compras de repuestos en un solo flujo [fracttal.com](https://www.fracttal.com/es/mantenimiento-facility-management-providers?utm_source=chatgpt.com).



### Tendencias en RD y el Caribe 🏝️

1. **Mercado aún atomizado,** pero surgen pioneros:

  - **Home Services Dominicana** ofrece planes mensuales que incluyen recordatorios automáticos y un clic para agendar técnicos; cobra con tarjeta a través de su app [hsd.do](https://www.hsd.do/?utm_source=chatgpt.com) [hsd.do](https://www.hsd.do/landing-plan-hogar/?utm_source=chatgpt.com).
  - **Liberr** funciona como marketplace multi-categoría (A/A, plomería, limpieza) con pros verificados y reserva desde el móvil [Google Play](https://play.google.com/store/apps/details?hl=es_PR&id=com.liberr&utm_source=chatgpt.com).
  - **Mantisa** y **Grupo EULEN** proveen mantenimiento hotelero e industrial “todo-incluido”, llevando prácticas predictivas al sector turístico y minero [mantisasrl.com](https://www.mantisasrl.com/presentacion?utm_source=chatgpt.com) [Grupo Eulen](https://www.eulen.com/do/sectores/industrial/?utm_source=chatgpt.com).
  - Empresas de *property management* como **NC Facility** incorporan módulos de mantenimiento preventivo para condominios de la costa norte [nc-facility.online](https://nc-facility.online/?utm_source=chatgpt.com).

1. **Brechas actuales:**

  - **Cobertura dispareja.** Fuera de Santo Domingo/Santiago hay “desiertos de servicio”; la logística de repuestos sigue siendo lenta y cara.
  - **Altísima informalidad** (técnicos independientes sin POS ni pólizas): complica confianza y pagos.
  - **IoT adoption < 10 %** en equipos residenciales; la mayoría de alertas proviene aún de calendarios manuales o llamadas del administrador.

1. **Movimientos para cerrar gaps:**

  - **Fintech rails listos.** Pasarelas locales (Azul, CardNet) y wallets como tPago (Square facilita cobros recurrentes, pero requiere cuenta en EEUU); HSD ya los integra [hsd.do](https://www.hsd.do/landing-plan-hogar/?utm_source=chatgpt.com).
  - **Human-in-the-loop ops.** Las nuevas plataformas conservan un call-center/back-office que ajusta agendas y verifica disponibilidad—modelo puente hacia la automatización total.
  - **Alianzas B2B.** Hoteles y condos grandes empiezan a contratar SaaS latinos (p.ej. Fracttal) para consolidar activos y métricas en dashboards cloud [fracttal.com](https://www.fracttal.com/es/mantenimiento-facility-management-providers?utm_source=chatgpt.com).



### Takeaways rápidos 🚀

- **Macro-trend:** de reactivo a predictivo con IA + sensorización + contratos de servicio.
- **Oportunidad local:** estructurar el “puente” digital-humano y estandarizar la experiencia (pricing, garantías, pagos) antes de que el usuario lo exija como en mercados maduros.
- **Ventaja temprana:** quien organice inventario de técnicos y datos de ciclos tendrá el grafo de confiabilidad que alimenta los futuros algoritmos de matchmaking y dynamic pricing.



# Problema mayor (la “nube negra” que agrupa los dolores)

La gente vive rodeada de **micro-obligaciones dispersas** —pagos, chequeos, mantenimientos, renovaciones— que no siguen un solo reloj ni hablan entre sí. Cada ítem aislado parece pequeño, pero juntos forman una sobrecarga mental constante, generan gastos sorpresa y deterioran el valor de los bienes. El usuario queda atrapado entre la urgencia y el olvido, sin un sistema que orqueste el ciclo completo **end-to-end**.



### **1️⃣ ¿Cómo cambia la vida del cliente si el problema se resuelve?**

- Menos **estrés cognitivo**: la lista de pendientes deja de vivir en su cabeza y en notas sueltas.
- **Más tiempo libre** para actividades significativas; el “¿lo habré pagado/revisado?” desaparece.
- **Costos predecibles y menores**: se evitan fallas costosas, penalidades e intereses.
- **Patrimonio protegido**: activos (hogar, oficina, salud, finanzas) conservan valor y funcionan mejor.
- **Confianza y seguridad**: proveedores verificados, pagos claros y trazabilidad de todo el historial.



### **2️⃣ ¿El cliente deseará activamente la solución?**

Sí, porque:

- El dolor es **recurrente y acumulativo**; cada recordatorio perdido reaviva la frustración.
- Hay **event triggers** —una avería cara, un impuesto olvidado, un extintor vencido— que convierten la necesidad latente en urgente (“never again moment”).
- La propuesta encaja con la tendencia global de **outsourcing life admin**; los usuarios ya pagan por Netflix, grocery delivery, lawn care… “peace-of-mind as a service” suena natural.



### **3️⃣ ¿Por qué existe el problema hoy?**

- **Fragmentación del mercado**: demasiados prestadores, cero estándar en procesos y datos.
- **Falta de visibilidad**: pocos sensores, poca analítica; la información vive en silos o en papel.
- **Incentivos reactivos**: la industria gana más cuando algo se rompe que cuando se mantiene.
- **Baja alfabetización digital** de muchos técnicos y usuarios; las agendas siguen en WhatsApp.
- **Informalidad y trust gap**: miedo a sobreprecios o a dejar entrar desconocidos sin referencias.



### **4️⃣ ¿Vale la pena resolverlo?**

- **Mercado grande y creciente**: cada hogar y negocio tiene ciclos de cuidado; el TAM es universal.
- Ahorros potenciales de **15-30 %** en costos de reparación y hasta **40 %** en downtime operativo (benchmarks de modelos predictivos).
- **Sticky revenue**: solución basada en recurrencia y datos históricos crea barreras de salida.
- **Impacto social**: profesionaliza técnicos, reduce residuos y optimiza consumo energético.
- **Strategic moat**: quien capture primero el grafo de activos + proveedores + ciclos tendrá ventaja competitiva duradera.



> **Bottom line:** El cliente gana tranquilidad y dinero; el mercado obtiene eficiencia y transparencia. Resolver el problema no solo es deseable, es inevitable —la pregunta es quién lo hará primero y mejor.



================================================================================
Page: Evaluate Problems and Trends
Path: 0.1.1.2
Depth: 3
================================================================================

Analyze and assess the identified problems and trends for viability



================================================================================
Page: Select Problem to Focus on
Path: 0.1.1.3
Depth: 3
================================================================================

## Who
| Persona | Declaración “Quién?” (plantilla completada) |
| --- | --- |
| **A. Dueño de hogar / Admin de oficina** | Para los propietarios de viviendas y gestores de pequeños negocios que **no están satisfechos con la carga mental, los gastos sorpresa y el tiempo perdido** al coordinar múltiples cuidados y pagos dispersos, *Maroa* ofrece un **asistente proactivo tipo “peace-of-mind as a service”** que orquesta recordatorios, conecta proveedores verificados y cierra el ciclo de principio a fin en minutos. |
| **B. Técnico independiente / Pyme de servicios** | Para los técnicos y microempresas de mantenimiento que **no están satisfechos con la dificultad de conseguir clientes regulares y optimizar su agenda**, causada por la **fragmentación de la demanda y baja visibilidad digital**, *Maroa* ofrece un **marketplace con leads calificados y programación inteligente** que dispara horas facturables y reduce tiempos muertos sin inversión inicial. |


### **Paso 1 · Definir la “mini-métrica”**

## Table 1
| Variable | Escala 1-5 | Pregunta guía |
| --- | --- | --- |
| **Esfuerzo / Capital (D)** | 1 = “podemos lanzarlo en un sprint”  <br/>5 = “necesita IoT masivo, regulaciones, mucha $$$” |  |
| **Impacto en la vida del usuario (I)** | 1 = mejora marginal  <br/>5 = life-changer, le ahorra dinero/estrés grande |  |
| **Prevalencia / Frecuencia (P)** | 1 = caso raro  <br/>5 = lo sufre casi todo el mundo, todos los meses |  |


> **Priority Score (PRI) = (I + P) – D**  
Cuanto más alto, mejor candidato: mucho impacto + mucha prevalencia – poco esfuerzo.



### **Paso 2 · Scoring rápido (back-of-the-napkin)**

## Table 2
| # | Problema (abreviado) | D | I | P | PRI |
| --- | --- | --- | --- | --- | --- |
| 2 | **Overload mental: demasiados to-dos** | 2 | 5 | 5 | 8 |
| 15 | **Pagos engorrosos** | 2 | 4 | 4 | 6 |
| 10 | **Tetris de agendas (cliente-técnico-parts)** | 3 | 5 | 4 | 6 |
| 3 | **Info fragmentada** | 2 | 4 | 4 | 6 |
| 6 | Costos de oportunidad invisibles | 3 | 4 | 4 | 5 |
| 7 | Asimetría de información | 3 | 4 | 4 | 5 |
| 16 | Costos variables impredecibles | 3 | 4 | 4 | 5 |
| 18 | ROI no cuantificado | 2 | 4 | 3 | 5 |
| 42 | Parálisis por exceso de opciones | 2 | 3 | 4 | 5 |
| 25 | Prestadores informales / confianza | 3 | 4 | 3 | 4 |
| 14 | Falta de confianza al dejar entrar extraños | 3 | 4 | 3 | 4 |
| 31 | Garantías perdidas | 2 | 3 | 3 | 4 |
| 39 | Alert-fatigue | 2 | 3 | 3 | 4 |
| 41 | Sin benchmark de duración piezas | 2 | 3 | 3 | 4 |
| 1 | Visibilidad nula de vida útil | 4 | 4 | 4 | 4 |


*(El resto cae por debajo de 4 en PRI; se omiten aquí para mantener la tabla manejable, pero pueden consultarse en la hoja completa).*



### **Paso 3 · Cómo decidir**

1. **Identify quick wins** → PRI ≥ 6.  
*“Overload mental” y “Pagos engorrosos” son low-hanging fruit: gran dolor, solución digital pura, sin hardware.*
2. **Bundle related pains**.

  - Overload mental + Info fragmentada + Parálisis por exceso de opciones → **“Cerebro organizado”**.
  - Pagos engorrosos + Costos variables impredecibles → **“Checkout sin fricción”**.

1. **Stress-test with personas**.  
Pregunta: ¿cuál de estos bundles moviliza primero al *Dueño de hogar* y al *Técnico independiente*?
2. **Run mini-experiments (1-3 weeks)**.  
Prototipo de reminder hub y one-click payment flow; medir adopción y NPS.
3. **Refinar dificultad**.  
Si la solución demanda integrar POS locales, D sube; ajustar la tabla y re-priorizar.



### Recomendación inicial 🚀

Enfocarse en el **Bundle “Cerebro organizado”**:

- **Problema paraguas:** el usuario se ahoga en pendientes dispares y teme olvidos costosos.
- **Razón:** Máximo impacto percibido (reduce estrés diario) y mínima fricción técnica (app + notificaciones + agenda inteligente).
- **Quick KPI:** número de recordatorios creados vs. completados; reducción de “late fees” auto-reportados.

> Start small, deliver peace-of-mind early, luego añadimos pagos y matching con proveedores cuando el usuario ya confía en la plataforma.



================================================================================
Page: Pinpoint Pain Points and Gains,  and Determine Jobs to be Done
Path: 0.1.1.4
Depth: 3
================================================================================

> **Clave de Responsables**  
• **Cliente** = usuario final / dueño de los activos  
• **Agente Maroa** = asesor asignado (humano)  
• **Sistema Maroa** = plataforma + automatizaciones  
• **Proveedor Técnico** = taller / instalador / técnico



## Overload Mental
| Pain Point (Frustración) | Gain (Estado deseado) | JTBD (trabajo a ejecutar) | Persona que sufre el Pain | Responsable del JTBD |
| --- | --- | --- | --- | --- |
| Ansiedad de que un equipo vital falle justo cuando lo necesito. | Tranquilidad de que los equipos críticos siempre funcionan. | Monitorear ciclos de mantenimiento y coordinar servicio preventivo antes de fallos. | Cliente | **Sistema Maroa** (alerta) → Agente (coordina) |
| Falta de alarmas/recordatorios confiables. | Recordatorios automáticos, puntuales y claros. | Generar y enviar notificaciones multicanal con suficiente anticipación. | Cliente | **Sistema Maroa** |
| Sensación de “apagar fuegos” constantemente. | Sentirse proactivo: problemas resueltos antes de volverse urgentes. | Planificar mantenimiento anual y visualizarlo en un calendario compartido. | Cliente | Agente Maroa (planifica) |
| Olvidar la recurrencia o desconocer el estado del equipo. | Visibilidad en un dashboard “Next Service Due”. | Mantener historial de servicios y estado de cada activo. | Cliente | **Sistema Maroa** |
| Técnicos informales no atienden “trabajos pequeños”. | Acceso a red de técnicos dispuestos a tareas menores. | Asignar proveedor adecuado según SLA y tamaño del trabajo. | Cliente | **Sistema** (matching) + Proveedor |
| Procrastinar contactar al técnico; el problema permanece en el backlog mental. | One-click / one-call para disparar solicitud sin fricción. | Ofrecer botón “Iniciar servicio” o confirmación por SMS con “Sí”. | Cliente | Cliente (clic) → Sistema Maroa |
| No tener base de datos de técnicos confiables. | Directorio validado y curado por Maroa. | Curar y mantener base de proveedores con ratings y cobertura. | Cliente | Maroa (Ops) |




## Tetris de agendas
| Pain Point (Frustración) | Gain (Estado deseado) | JTBD (trabajo a ejecutar) | Persona que sufre el Pain | Responsable del JTBD |
| --- | --- | --- | --- | --- |
| Coordinar fecha con técnicos que tienen agenda llena. | Cita confirmada en la primera llamada. | Consultar disponibilidad en tiempo real y reservar slot. | Cliente | **Sistema** (calendario) + Agente |
| Amplias ventanas de espera (“llego entre 9 y 5”). | Intervalos de servicio 2 h o menos. | Ruteo inteligente y confirmación de ETA live-tracking. | Cliente | Proveedor (GPS) + Sistema |
| Reprogramaciones de último minuto por parte del técnico. | Re-agendado automático con mínima intervención. | Enviar alternativas y re-confirmar en un clic. | Cliente | **Sistema** (workflow) |
| Múltiples activos requieren visitas separadas. | Visita combinada para varios equipos. | Agrupar órdenes por ubicación y skillset del técnico. | Cliente | Agente Maroa / Sistema |
| Cliente y proveedor usan calendarios distintos. | Sincronización de calendarios (Google, Outlook). | Integrar APIs de calendar y bloquear horario. | Cliente / Proveedor | Sistema Maroa |
| Incertidumbre sobre llegada del técnico. | Tracking en vivo tipo ride-hailing. | Enviar enlace de seguimiento + contacto directo. | Cliente | Proveedor (app) |
| Pagos y facturas ligados a la fecha final del servicio. | Cobro automático apenas se marque “Trabajo completado”. | Trigger de facturación al cerrar ticket en app del técnico. | Maroa / Cliente | Proveedor (marca completado) → Sistema |




### Cómo usar esta matriz

1. **Priorización**: ataca primero los JTBD donde **Maroa** es responsable y el Gain aporta más “peace-of-mind”.
2. **Diseño de features**: cada JTBD se traduce en historias de usuario (Ej.: *“Como Cliente quiero confirmar la cita en 1 clic para no perder tiempo negociando horarios”*).
3. **KPIs**: para cada Gain define métricas (e.g., % citas confirmadas en llamada inicial, NPS “ansiedad 0”).
4. **Roadmap**: abre un épico por Pain Point y asocia las funcionalidades necesarias para entregar el Gain.





================================================================================
Page: Define Overall Vision, Mission, and Core Values
Path: 0.1.1.5
Depth: 3
================================================================================

## Vision, Mission and Core Values
| Type | Description |
| --- | --- |
| **Visión** | *Convertirnos en el guardián de activos domésticos más confiable de América Latina, garantizando que cada hogar funcione sin esfuerzo y de manera sostenible.* |
| **Misión** | *Coordinamos, ejecutamos y cerramos cada tarea de mantenimiento preventivo para que nuestros clientes disfruten absoluta tranquilidad, mientras nosotros nos ocupamos del cuándo, el cómo y el pago.* |
| **Valores** | **Defendemos la tranquilidad del cliente.**<br/>**Construimos confianza con transparencia radical y cumplimiento impecable.**<br/>**Cerramos siempre el círculo: ningún ticket queda abierto.**<br/>**Crecemos juntos: clientes, agentes y técnicos.**<br/>**Simplificamos la vida con tecnología que se siente invisible.** |
| **Principios** | 1) Consistencia Implacable<br/><br/>**Mantra:** mismo estándar, todo el tiempo, en todo lugar.<br/><br/>Seguimos playbooks: cada ticket pasa por el mismo flujo (diagnóstico → coordinación → ejecución → cierre → cobro).<br/>“Cero sorpresas”: actualizaciones al cliente en los hitos acordados.<br/>Un solo **owner** por ticket; nadie suelta la cuerda.<br/>Lo que no quedó escrito, no existe: CRM siempre al día.  <br/>**Señales de éxito:**<br/>0 tickets >24 h sin actualización.<br/>≥85% de citas confirmadas en la primera interacción.<br/><br/>2) Optimización Sin Piedad<br/><br/>**Mantra:** eliminamos fricción y desperdicio sin apego a lo viejo.<br/><br/>Automatizamos lo repetitivo; lo manual se documenta para morir pronto.<br/>Medimos y matamos: si no mueve un KPI, se simplifica o se elimina.<br/>Ruteo y calendar inteligente para visitas combinadas y ventanas cortas.<br/>Postmortems breves en fallos: una mejora por incidente.  <br/>**Señales de éxito:**<br/>Tiempo ciclo (aprobación → cobro) <24 h en ≥70% de casos.<br/>≥40% de órdenes multiactivo en una sola visita.<br/><br/>3) Claridad Absoluta<br/><br/>**Mantra:** lenguaje simple, acuerdos explícitos, precios transparentes.<br/><br/>Confirmamos **Qué / Quién / Cuándo / Costo** en cada interacción.<br/>Tarifas y alcances por escrito; no hay letras pequeñas.<br/>Definición de “Hecho” (DoD) en cada servicio.<br/>Escalamos temprano: un problema sin dueño es un problema creciente.  <br/>**Señales de éxito:**<br/>0 disputas por alcance en órdenes cerradas.<br/>NPS “peace-of-mind” ≥ 60.<br/><br/>4) Dedicación Plena al Trabajo<br/><br/>**Mantra:** nos medimos por el resultado, no por el esfuerzo.<br/><br/>Propiedad total del resultado: cerramos o reprogramamos con nueva fecha.<br/>Puntualidad operativa: llegamos, avisamos, cumplimos.<br/>Cuidamos la relación: cada contacto debe dejar al cliente más tranquilo.<br/>Seguridad primero: si no es seguro, no se hace.  <br/>**Señales de éxito:**<br/>Tasa de cierre ≥ 80% de tickets aprobados.<br/>Repetición de cliente (90 días) ≥ 50%. |
| **Reglas rápidas “Siempre / Nunca”** | **Siempre:** documenta, confirma, cierra el loop.<br/><br/>**Nunca:** dejes un ticket sin dueño, una expectativa sin fecha, o un precio sin aclarar. |




================================================================================
Page: Gather All Steps
Path: 0.1.1.6
Depth: 3
================================================================================

# 1) Punto de partida: ¿para qué sirve esta tarea?

“Reunir todos los pasos” no es solo hacer una lista. Es **convertir la visión en trabajo concreto**, agruparlo por frentes de ejecución, y luego **pintarlo en una línea de tiempo de tres años** para que el equipo vea qué construir, en qué orden y por qué. El resultado final de esta tarea es un **backlog maestro** (lista maestra de pasos) y un **mapa temporal** que te permite decir “esto va ahora, esto después, y esto ni siquiera lo empezamos hasta validar lo anterior”.



# 2) La estrella del norte (horizonte a 3 años)

- Ser la referencia en República Dominicana para “tranquilidad como servicio” en el hogar.
- Cobertura nacional con Punta Cana y Santo Domingo como puntos de partida.
- Veinte mil hogares activos con ochenta mil activos registrados (aires acondicionados, calentadores, línea blanca, etcétera).
- Porcentaje de cierre de solicitudes superior a 80 por ciento.
- Puntuación de recomendación del cliente igual o mayor que 60 (en una escala de 0 a 100).
- Cobro sin fricción: tarjeta registrada una sola vez y pagos automáticos posteriores.

Todo lo que listemos más abajo debe ayudar a acercarnos a estas metas.



# 3) Los doce frentes de trabajo (workstreams) y sus pasos

A continuación, cada frente incluye: **qué es**, **por qué importa ahora**, **pasos concretos** y **cómo sabrás que vas bien**.



## Frente 1. Clientes y encaje problema-solución

**Qué es:** comprender a quién servimos primero y qué resultado de tranquilidad valoran más.  
**Por qué ahora:** sin esto, cualquier automatización o campaña se dispersa.

**Pasos concretos**

1. Definir los primeros segmentos: hogares en condominios, alquiler vacacional y casas con varios aires acondicionados.
2. Realizar veinte entrevistas de problema y solución (diez en Punta Cana, diez en Santo Domingo).
3. Convertir hallazgos en “situaciones de uso”: por ejemplo, “quiero dejar resuelto el mantenimiento antes de irme de viaje”.
4. Definir cómo luce el “éxito del cliente”: ventanas de atención cortas, comunicación oportuna, cobro inmediato al terminar, etcétera.
5. Diseñar una oferta de registro gratuito de activos para crear la base.

**Señales de que vas bien**

- Puedes explicar en una frase para quién existe Maroa y qué alivio produce.
- Al menos diez clientes aceptan un piloto pagado después de la entrevista.



## Frente 2. Servicio y producto en su versión mínima viable

**Qué es:** el “cómo operamos” en su forma más simple y repetible.  
**Por qué ahora:** tu promesa de tranquilidad se sostiene en procesos confiables.

**Pasos concretos**

1. Escribir el flujo estándar de un ticket: diagnóstico → coordinación → ejecución → cierre → cobro.
2. Diseñar la ficha mínima de un activo: marca, modelo, fecha de último servicio, síntomas, fotos.
3. Crear un tablero sencillo (puede ser con herramientas sin código) para que agentes y técnicos avancen los estados del ticket.
4. Definir la “definición de hecho” para cada tipo de servicio: qué evidencia se guarda, qué comunicación recibe el cliente, qué prueba de trabajo se adjunta.
5. Preparar plantillas de mensajes y de cotizaciones con lenguaje claro.

**Señales de que vas bien**

- Dos técnicos distintos pueden seguir el mismo guion sin confundirse.
- Los clientes reciben el mismo tipo de actualización en los mismos hitos.



## Frente 3. Red de proveedores técnicos

**Qué es:** la base de personas y empresas que hacen el trabajo en campo.  
**Por qué ahora:** sin capacidad de ejecución, los agentes no pueden cerrar.

**Pasos concretos**

1. Curar una lista inicial por categoría (aires acondicionados, plomería, electricidad, línea blanca).
2. Acordar estándares de tiempos de respuesta, rangos de precio, cobertura geográfica y protocolos de seguridad.
3. Implementar un proceso simple para el técnico: llegada, fotos, lista de verificación, “trabajo completado” y evidencia.
4. Establecer un sistema de evaluaciones y comentarios por servicio.
5. Diseñar un incentivo claro: volumen estable, pagos puntuales, bonificaciones por calidad.

**Señales de que vas bien**

- Tienes al menos dos opciones confiables por categoría en cada zona.
- El 80 por ciento de los servicios se marca “trabajo completado” el mismo día.



## Frente 4. Operación de agentes

**Qué es:** convertir tu cultura de “siempre cerrar” en hábitos diarios de los agentes.  
**Por qué ahora:** el agente es la cara de Maroa y el motor de crecimiento de activos por hogar.

**Pasos concretos**

1. Escribir guiones para las llamadas de recordatorio treinta días y siete días antes de la ventana de mantenimiento.
2. Estandarizar cómo se aborda la objeción: “ahora no”, “no tengo tiempo”, “muy caro”.
3. Convertir los **Principios Inquebrantables** en chequeos operativos: consistencia, optimización, claridad y dedicación.
4. Definir la meta de agente: porcentaje de cierre, activos nuevos por cliente, cero tickets sin actualización por más de un día.
5. Implementar un ritual semanal de retroalimentación y práctica de guiones.

**Señales de que vas bien**

- La mayoría de las citas se confirma en la primera interacción.
- No existen tickets huérfanos ni con información desactualizada.



## Frente 5. Pagos y facturación

**Qué es:** transformar el “sí” del cliente en cobro efectivo sin fricción.  
**Por qué ahora:** si cobrar es difícil, tu promesa de tranquilidad se rompe.

**Pasos concretos**

1. Integrar con una pasarela local que permita guardar la tarjeta como un token seguro.
2. Diseñar el consentimiento del cliente para cobros futuros: texto claro, marca de aceptación y registro en sistema.
3. Habilitar reintentos automáticos cuando un pago falle y permitir una segunda tarjeta como respaldo.
4. Automatizar el recibo de pago y la conciliación diaria.
5. Configurar alertas para casos pendientes de cobro y para reembolsos excepcionales.

**Señales de que vas bien**

- La mayoría de los servicios se cobran en cuanto el técnico marca “trabajo completado”. (O primera hora en la mañana del día del servicio)
- Los casos de “pagué y no lo veo” son prácticamente inexistentes.



## Frente 6. Datos y sistemas

**Qué es:** la columna vertebral de información que sostiene decisiones y mejoras.  
**Por qué ahora:** lo que no se registra no se puede mejorar ni escalar.

**Pasos concretos**

1. Elegir un gestor de clientes y tickets sencillo que puedas adaptar.
2. Definir campos obligatorios y validaciones: sin datos críticos no se puede avanzar de etapa.
3. Construir un tablero “cabina de mando” con lo esencial:

  - porcentaje de cierre,
  - tiempo desde aprobación hasta cobro,
  - número de activos por cliente,
  - estado de la promesa de llegada del técnico.

1. Establecer reglas de calidad de datos: lo que no está escrito, no existe.
2. Preparar reportes semanales que guíen decisiones, no que solo describan.

**Señales de que vas bien**

- Puedes detectar cuellos de botella a simple vista.
- Cualquier persona del equipo entiende el estado de cada cliente y activo.



## Frente 7. Marco legal y tributario

**Qué es:** la estructura que te permite operar con confianza y crecer.  
**Por qué ahora:** previene sorpresas y da tranquilidad a clientes y proveedores.

**Pasos concretos**

1. Constituir la sociedad en República Dominicana y abrir cuentas bancarias.
2. Dejar listos contratos de cliente, proveedor y protección de datos personales.
3. Evaluar la figura de fideicomiso de administración a medida que crecen los anticipos y la complejidad.
4. Documentar políticas de precios, reembolsos y garantías.
5. Si en el futuro se usa una empresa en el exterior para cobros internacionales, preparar contratos de préstamo entre empresas y retenciones correspondientes.

**Señales de que vas bien**

- No hay operaciones relevantes sin contrato.
- Puedes explicar a un cliente en dos minutos cómo se protegen sus fondos y datos.



## Frente 8. Estrategia comercial y de adquisición

**Qué es:** cómo vas a conseguir y nutrir clientes al menor costo razonable.  
**Por qué ahora:** necesitas un flujo constante de hogares que registren activos.

**Pasos concretos**

1. Acuerdos con administradores de condominios y residenciales: registro de activos gratuito para todos los vecinos.
2. Programa de referidos con recompensa visible para clientes y para técnicos.
3. Contenidos simples que eduquen: “cuándo dar mantenimiento y por qué”, “cómo evitar fallas antes de vacaciones”, etcétera.
4. Ofertas de lanzamiento que impulsen el primer servicio con pago en un clic.
5. Seguimiento de cada canal para decidir dónde insistir y dónde parar.

**Señales de que vas bien**

- Los clientes llegan principalmente por alianzas y referidos, no solo por publicidad pagada.
- El costo de conseguir un cliente se recupera en tres meses o menos.



## Frente 9. Finanzas y economía por servicio

**Qué es:** entender cuánto ganas por orden y por hogar, y cómo manejas el efectivo.  
**Por qué ahora:** el negocio vive o muere por su disciplina financiera.

**Pasos concretos**

1. Crear un modelo por categoría de servicio: ingreso, costo del técnico, insumos, comisiones, margen.
2. Establecer una política clara de precios y descuentos.
3. Llevar flujo de caja semanal: entradas, salidas y proyecciones de cuatro semanas.
4. Asegurar una línea de crédito operativa liviana para picos de trabajo.
5. Implementar cierre mensual disciplinado con análisis de variaciones.

**Señales de que vas bien**

- Conoces el margen por categoría y por proveedor.
- No hay sorpresas de efectivo: los pagos y cobros se anticipan.



## Frente 10. Marca y comunicaciones

**Qué es:** el relato y los gestos que hacen tangible la promesa de tranquilidad.  
**Por qué ahora:** lo que dices y cómo lo dices influye en la confianza.

**Pasos concretos**

1. Mensaje central: “cerramos el círculo; ningún ticket queda suelto”.
2. Guía de tono: lenguaje humano, claro, sin tecnicismos ni letra pequeña.
3. Kit visual simple y consistente en todos los canales.
4. Protocolo de comunicación para retrasos, quejas y reembolsos.
5. Historias de clientes reales (con permiso) que muestren el antes y el después.

**Señales de que vas bien**

- Los clientes repiten tu promesa con sus propias palabras.
- Las quejas disminuyen después de estandarizar los mensajes.



## Frente 11. Riesgo, seguridad y calidad

**Qué es:** evitar accidentes, cuidar a las personas y mejorar con cada servicio.  
**Por qué ahora:** un incidente mal manejado destruye confianza.

**Pasos concretos**

1. Listas de verificación por categoría, incluyendo equipo de protección personal.
2. Validación de antecedentes y pólizas de los proveedores.
3. Registro fotográfico mínimo antes y después.
4. Revisión corta después de cada incidente: qué cambió a partir de hoy.
5. Auditorías aleatorias de evidencias y de cumplimiento.

**Señales de que vas bien**

- Cero incidentes graves; los menores se resuelven con aprendizaje documentado.
- Las listas de verificación se cumplen sin excusas.



## Frente 12. Extensiones para el segundo y tercer año

**Qué es:** líneas de crecimiento que se activan cuando la base está sólida.  
**Por qué ahora:** te permite soñar sin desordenar el presente.

**Pasos concretos**

1. Programa de recompra y reventa: recibir equipos usados y colocarlos en una red o en mercados en línea.
2. Tienda ligera física o virtual si las cuentas lo justifican.
3. Paquetes multi-activo con beneficio económico por volumen.
4. Predicción de necesidades de mantenimiento usando historial y patrones.

**Señales de que vas bien**

- Las nuevas líneas no degradan la experiencia del servicio principal.
- El margen total mejora, no solo el volumen.



# 4) Cronograma de tres años (visión de etapas)

## Etapa cero – primeras cuatro semanas: preparación y validación

- Entrevistas con clientes y proveedores.
- Flujo mínimo del servicio y ficha de activo listos.
- Tablero sencillo funcionando.
- Registro de cincuenta activos y diez pilotos pagados.
- Integración de pagos con tarjeta guardada y primer cobro real.  
**Resultado esperado:** confirmas que el servicio se puede vender, coordinar, ejecutar y cobrar con consistencia.

## Etapa uno – meses dos a seis: ajuste fino en Punta Cana y Santo Domingo

- Operación de agentes con guiones probados y ritual semanal.
- Red de proveedores con cobertura en cuatro categorías.
- Tablero “cabina de mando” con indicadores esenciales.
- Alianzas con tres condominios.  
**Resultado esperado:** trescientos hogares, mil doscientos activos y tiempos desde aprobación hasta cobro inferiores a veinticuatro horas en la mayoría de los casos.

## Etapa dos – meses siete a dieciocho: escala nacional

- Automatizaciones de calendario, ruteo y comunicación con técnicos.
- Programa de calidad y certificaciones para proveedores.
- Decisión informada sobre usar fideicomiso si los anticipos crecen.  
**Resultado esperado:** cinco mil hogares, veinte mil activos y contribución económica positiva sostenida.

## Etapa tres – meses diecinueve a treinta y seis: profundidad y nuevas líneas

- Piloto de recompra y reventa, y potencial punto de venta liviano.
- Personalización de precios y recordatorios según comportamiento.
- Cobertura nacional completa y evaluación de expansión regional.  
**Resultado esperado:** veinte mil hogares, ochenta mil activos y recomendación del cliente estable por encima de 60.



# 5) Primeras cuatro semanas, al detalle

**Semana 1**

- Realizar diez entrevistas con clientes y cinco con proveedores.
- Escribir el flujo del servicio versión 0.1 y la ficha mínima del activo.
- Montar el tablero de seguimiento sin código y definir estados del ticket.

**Semana 2**

- Redactar guiones de agente para llamadas y mensajes.
- Captar veinte hogares para registrar activos sin costo.
- Configurar el flujo de consentimiento de cobros futuros con tarjeta guardada y realizar el primer cobro en producción.

**Semana 3**

- Ejecutar diez pilotos pagados de principio a fin.
- Medir tiempo desde aprobación hasta cobro y causas de fricción.
- Levantar el primer tablero “cabina de mando” con los cuatro indicadores esenciales.

**Semana 4**

- Retroalimentación corta: elegir las tres fricciones más costosas y eliminarlas.
- Probar dos versiones de propuesta comercial para condominios.
- Cerrar al menos una alianza con comunidad residencial.



# 6) Cómo mantener el enfoque sin perder ambición

- **Una sola fuente de verdad:** todo ticket, todo activo y todo acuerdo viven en el sistema.
- **Decisiones por evidencia:** si algo no mueve un indicador de servicio o de recomendación, se simplifica o se descarta.
- **Ciclos de mejora breves:** cada problema importante deja una mejora implementada, no un documento.
- **Lenguaje claro siempre:** confirmar qué, quién, cuándo y costo en cada interacción.
- **Cierre del círculo:** ningún ticket queda abierto; si hay reprogramación, sale con nueva fecha.



# 7) Lista maestra de verificación (para cerrar esta tarea hoy)

1. ¿Están definidos los segmentos iniciales y el resultado de tranquilidad que buscan?
2. ¿Existe un flujo de servicio escrito, con definición de “hecho” y evidencia?
3. ¿Tienes al menos dos proveedores por categoría y por zona, con estándares claros?
4. ¿Los agentes tienen guiones, metas y ritual semanal?
5. ¿El pago posterior al “sí” del cliente ocurre sin fricción?
6. ¿Hay un tablero visible con los cuatro indicadores esenciales?
7. ¿La estructura legal, contratos y políticas mínimas están listas?
8. ¿Ya hay un canal de adquisición con pruebas (condominios, referidos, contenido)?
9. ¿Conoces tu margen por categoría y llevas flujo de caja semanal?
10. ¿Tu mensaje de marca es simple y coherente en todos los puntos de contacto?
11. ¿Existen listas de verificación de seguridad y auditorías aleatorias?
12. ¿Las extensiones de año dos y tres están aparcadas hasta que la base sea sólida?

================================================================================
Page: Entrevistas a Clientes y Técnicos
Path: 0.1.1.7
Depth: 3
================================================================================

# Dashboard Encuesta a Propietarios ( Count 54)

## Problem Validation

1. **Average of ¿Con qué frecuencia necesitas llamar a un técnico?:** 
      1. 1 = Nunca  
2 = 1 vez al año  
3 = Cada 3-6 meses  
4 = Mensual  
5 = Varias veces al mes

  - 2.72.660377358490566

1. **Average of ¿Cuánto tiempo promedio tardas hoy en encontrar y coordinar un técnico confiable?:** 
      1. 1 = < 10 min  
2 = 30-60 min  
3 = 2-4 h  
4 = 1 día  
5 = > 1 día

  - 3.93.8703703703703702

1. **Average of ¿Qué tan frustrante resulta para ti este proceso de búsqueda y coordinación?:** 
      1. 1 = Nada frustrante  
5 = Extremadamente frustrante

  - 3.43.425925925925926

1. **Average of ¿Qué impacto tiene en tu vida/negocio cuando el técnico falla?:** 
      1. 1 = Sin impacto  
5 = Pierdo tiempo/dinero

  - 4.14.09433962264151

1. **Percent Option of Marca los factores más importantes al elegir un técnico:** 

  - **Precio:**  61%
  - **Puntalidad:** 65%
  - **Calidad de trabajo:** 89%
  - **Confiaza / reputación:** 70%
  - **Disponibilidad rápida:** 57%
  - **Garantía del servicio:** 76%



## **Jobs-to-Be-Done (JTBD)**

- **Percent Option of ¿Qué haces actualmente para encontrar o contratar un técnico?**
  - Pido recomendaciones a amigos/familia: 83%
  - Busco en Google: 6%
  - Llamo a técnicos conocidos: 48%
  - Pregunto en grupos de WhatsApp/Facebook: 44%
- **Percent Option of Si pudieras “contratar” la solución ideal, ¿cuál sería tu principal motivación?:** 
  - Ahorrar tiempo: 6%
  - Ahorrar dinero: 7%
  - Mayor confiabilidad: 33%
  - Tener garantía: 17%
  - Gestionar todo en un solo lugar: 37%



## **Willingness-to-Pay**

- **¿Cuánto estarías dispuesto a pagar al mes por una plataforma que te conecte con técnicos verificados, con precios claros y garantía de servicio? (RD$):** 
  - Average: $449.59
  - Median: $250.00
  - Min: $0.00
  - Max: $2,000.00
  - Percent Blank or RD$0.00: 11%



## Encuesta a Propietarios
| ¿Con qué frecuencia necesitas llamar a un técnico (ej. aire acondicionado, plomería, electricidad, etc.)? | ¿Cuánto tiempo promedio tardas hoy en encontrar y coordinar un técnico confiable? | ¿Qué tan frustrante resulta para ti este proceso de búsqueda y coordinación? | ¿Qué impacto tiene en tu vida/negocio cuando el técnico falla (llega tarde, no aparece o hace un mal trabajo)? | Marca los factores más importantes al elegir un técnico (puedes elegir varios). | ¿Qué haces actualmente para encontrar o contratar un técnico? (elige todas las que apliquen) | Si pudieras “contratar” la solución ideal, ¿cuál sería tu principal motivación? | ¿Cuánto estarías dispuesto a pagar al mes por una plataforma que te conecte con técnicos verificados, con precios claros y garantía de servicio? (RD$) | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3 | 5 | 4 | 3 | Puntualidad, Calidad del trabajo, Disponibilidad rápida | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Ahorrar tiempo | $100.00 |  |
| 2 | 5 | 5 | 5 | Confianza / Reputación, Calidad del trabajo, Puntualidad, Precio, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Gestionar todo en un solo lugar | $300.00 |  |
| 3 | 2 | 1 | 1 | Puntualidad, Calidad del trabajo, Confianza / Reputación | Llamo a técnicos conocidos | Ahorrar dinero | $0.00 |  |
| 2 | 5 | 5 | 5 | Calidad del trabajo, Confianza / Reputación, Garantía del servicio, Precio, Puntualidad, Disponibilidad rápida | Llamo a técnicos conocidos | Tener garantía | $200.00 |  |
| 4 | 5 | 5 | 5 | Precio, Puntualidad, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Gestionar todo en un solo lugar | $500.00 |  |
| 3 | 4 | 4 | 4 | Calidad del trabajo, Confianza / Reputación, Puntualidad | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar | $1,000.00 |  |
| 2 | 5 | 1 | 5 | Precio, Confianza / Reputación, Calidad del trabajo, Puntualidad, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos, Pregunto en grupos de WhatsApp/Facebook | Mayor confiabilidad |  |  |
| 2 | 5 | 3 | 3 | Puntualidad, Calidad del trabajo, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar |  |  |
| 3 | 5 | 5 | 5 | Precio, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Tener garantía |  |  |
|  | 2 | 4 |  | Puntualidad, Calidad del trabajo | Pregunto en grupos de WhatsApp/Facebook | Mayor confiabilidad | $1,000.00 |  |
| 4 | 3 | 2 | 3 | Calidad del trabajo, Confianza / Reputación, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Gestionar todo en un solo lugar | $995.00 |  |
| 3 | 5 | 5 | 5 | Precio, Calidad del trabajo, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Tener garantía | $600.00 |  |
| 3 | 5 | 5 | 4 | Disponibilidad rápida, Confianza / Reputación, Garantía del servicio, Calidad del trabajo, Puntualidad | Pido recomendaciones a amigos/familia | Gestionar todo en un solo lugar | $2,000.00 |  |
| 2 | 4 | 5 | 5 | Calidad del trabajo, Precio, Garantía del servicio | Pido recomendaciones a amigos/familia | Gestionar todo en un solo lugar |  |  |
| 3 | 4 | 1 | 1 | Precio, Puntualidad, Calidad del trabajo, Garantía del servicio, Confianza / Reputación | Llamo a técnicos conocidos, Busco en Google | Tener garantía | $600.00 |  |
| 3 | 2 | 1 | 1 | Precio, Puntualidad, Calidad del trabajo, Confianza / Reputación, Garantía del servicio, Disponibilidad rápida | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Gestionar todo en un solo lugar |  |  |
| 2 | 2 | 2 | 1 | Disponibilidad rápida, Precio | Pregunto en grupos de WhatsApp/Facebook, Busco en Google | Gestionar todo en un solo lugar | $0.00 |  |
| 3 | 4 | 5 | 5 | Precio, Puntualidad, Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos, Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar |  |  |
| 3 | 5 | 3 | 3 | Precio, Calidad del trabajo, Puntualidad, Confianza / Reputación, Garantía del servicio, Disponibilidad rápida | Pregunto en grupos de WhatsApp/Facebook | Mayor confiabilidad | $300.00 |  |
| 2 | 3 | 3 | 5 | Puntualidad, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Ahorrar dinero | $250.00 |  |
| 2 | 5 | 4 | 4 | Puntualidad, Calidad del trabajo, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Tener garantía | $1,000.00 |  |
| 3 | 5 | 5 | 5 | Puntualidad, Calidad del trabajo, Disponibilidad rápida | Llamo a técnicos conocidos, Pido recomendaciones a amigos/familia | Gestionar todo en un solo lugar | $200.00 |  |
| 2 | 4 | 2 | 5 | Confianza / Reputación, Calidad del trabajo, Garantía del servicio, Precio, Disponibilidad rápida | Pido recomendaciones a amigos/familia | Tener garantía | $200.00 |  |
| 2 | 1 | 1 | 5 | Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida, Precio, Puntualidad | Pido recomendaciones a amigos/familia | Mayor confiabilidad | $1,500.00 |  |
| 3 | 4 | 2 | 2 | Precio, Calidad del trabajo, Puntualidad, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Ahorrar dinero | $500.00 |  |
| 2 | 2 | 4 | 4 | Precio, Calidad del trabajo, Confianza / Reputación | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Mayor confiabilidad | $500.00 |  |
| 3 | 5 | 2 | 5 | Calidad del trabajo, Confianza / Reputación, Garantía del servicio | Pregunto en grupos de WhatsApp/Facebook, Pido recomendaciones a amigos/familia | Gestionar todo en un solo lugar | $125.00 |  |
| 2 | 4 | 5 | 5 | Calidad del trabajo, Puntualidad, Precio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar | $250.00 |  |
| 2 | 5 | 3 | 5 | Confianza / Reputación | Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar | $50.00 |  |
| 3 | 5 | 5 | 5 | Confianza / Reputación, Calidad del trabajo, Precio, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Mayor confiabilidad | $250.00 |  |
| 3 | 4 | 1 | 5 | Precio, Puntualidad, Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Mayor confiabilidad | $1,000.00 |  |
| 2 | 4 | 3 | 4 | Confianza / Reputación, Calidad del trabajo, Disponibilidad rápida, Garantía del servicio, Precio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar | $100.00 |  |
| 2 | 1 | 1 | 1 | Calidad del trabajo, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Tener garantía | $0.00 |  |
| 3 | 4 | 5 | 5 | Confianza / Reputación, Garantía del servicio, Calidad del trabajo, Disponibilidad rápida | Pido recomendaciones a amigos/familia | Mayor confiabilidad | $200.00 |  |
| 3 | 4 | 5 | 5 | Precio, Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio, Puntualidad | Pido recomendaciones a amigos/familia, Busco en Google, Llamo a técnicos conocidos | Gestionar todo en un solo lugar | $1,000.09 |  |
| 2 | 2 | 2 | 4 | Calidad del trabajo, Confianza / Reputación, Garantía del servicio | Pido recomendaciones a amigos/familia | Mayor confiabilidad | $600.00 |  |
| 3 | 2 | 1 | 4 | Puntualidad, Calidad del trabajo, Confianza / Reputación, Garantía del servicio, Disponibilidad rápida, Precio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Mayor confiabilidad | $150.00 |  |
| 3 | 4 | 5 | 5 | Garantía del servicio | Pido recomendaciones a amigos/familia | Mayor confiabilidad | $0.00 |  |
| 2 | 4 | 4 | 5 | Calidad del trabajo, Precio, Puntualidad, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos, Pregunto en grupos de WhatsApp/Facebook | Mayor confiabilidad | $40.00 |  |
| 2 | 5 | 4 | 5 | Puntualidad, Calidad del trabajo, Confianza / Reputación, Garantía del servicio, Disponibilidad rápida | Pregunto en grupos de WhatsApp/Facebook, Llamo a técnicos conocidos | Ahorrar tiempo | $0.00 |  |
| 3 | 3 | 3 | 3 | Precio, Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Mayor confiabilidad | $0.00 |  |
| 3 | 3 | 3 | 5 | Precio, Calidad del trabajo, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Ahorrar dinero | $0.00 |  |
| 3 | 2 | 5 | 5 | Precio, Puntualidad, Calidad del trabajo, Disponibilidad rápida, Garantía del servicio | Llamo a técnicos conocidos | Ahorrar tiempo | $0.00 |  |
| 3 | 4 | 3 | 4 | Precio, Calidad del trabajo, Puntualidad, Confianza / Reputación, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Tener garantía | $0.00 |  |
| 2 | 4 | 5 | 5 | Precio, Calidad del trabajo, Confianza / Reputación, Garantía del servicio, Puntualidad | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Tener garantía | $500.00 |  |
| 3 | 5 | 5 | 5 | Precio, Puntualidad, Calidad del trabajo, Disponibilidad rápida, Confianza / Reputación, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Gestionar todo en un solo lugar | $650.00 |  |
| 3 | 4 | 3 | 4 | Calidad del trabajo, Confianza / Reputación, Puntualidad | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Mayor confiabilidad | $100.00 |  |
| 3 | 5 | 5 | 5 | Garantía del servicio, Confianza / Reputación, Calidad del trabajo | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar | $200.00 |  |
| 3 | 4 | 3 | 3 | Puntualidad, Calidad del trabajo, Confianza / Reputación, Precio | Pido recomendaciones a amigos/familia | Mayor confiabilidad | $1,000.00 |  |
| 3 | 4 | 5 | 5 | Garantía del servicio, Calidad del trabajo, Confianza / Reputación | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar | $2,000.00 |  |
| 3 | 5 | 4 | 4 | Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio, Puntualidad, Precio | Pido recomendaciones a amigos/familia | Mayor confiabilidad | $0.00 |  |
| 2 | 2 | 2 | 2 | Puntualidad, Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Gestionar todo en un solo lugar | $620.00 |  |
| 3 | 5 | 3 | 5 | Precio, Puntualidad, Confianza / Reputación, Calidad del trabajo, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Mayor confiabilidad | $500.00 |  |
| 3 | 5 | 3 | 5 | Precio, Puntualidad, Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos, Pregunto en grupos de WhatsApp/Facebook | Mayor confiabilidad | $500.00 |  |
















## Encuesta a Técnicos
| ¿Con qué frecuencia necesitas buscar nuevos clientes para tus servicios técnicos? | ¿Cuánto tiempo promedio inviertes hoy para conseguir un nuevo cliente desde el primer contacto? | ¿Qué tan difícil resulta conseguir clientes confiables que realmente paguen a tiempo? | ¿Cuánto afecta a tu negocio la falta de visibilidad online o de referencias confiables? | Selecciona los mayores retos que tienes hoy para captar clientes. | ¿Cómo consigues actualmente la mayoría de tus nuevos clientes? (elige todas las que apliquen) | Si pudieras “contratar” la solución ideal para atraer clientes, ¿cuál sería tu principal motivación? | ¿Cuánto estarías dispuesto a pagar al mes por una plataforma que te conecte con clientes verificados, te garantice pagos seguros y te dé mayor visibilidad? (RD$) | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |






## View of Encuesta a Propietarios
| ¿Con qué frecuencia necesitas llamar a un técnico (ej. aire acondicionado, plomería, electricidad, etc.)? | ¿Cuánto tiempo promedio tardas hoy en encontrar y coordinar un técnico confiable? | ¿Qué tan frustrante resulta para ti este proceso de búsqueda y coordinación? | ¿Qué impacto tiene en tu vida/negocio cuando el técnico falla (llega tarde, no aparece o hace un mal trabajo)? | Marca los factores más importantes al elegir un técnico (puedes elegir varios). | ¿Qué haces actualmente para encontrar o contratar un técnico? (elige todas las que apliquen) | Si pudieras “contratar” la solución ideal, ¿cuál sería tu principal motivación? | ¿Cuánto estarías dispuesto a pagar al mes por una plataforma que te conecte con técnicos verificados, con precios claros y garantía de servicio? (RD$) | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 3 | 5 | 4 | 3 | Puntualidad, Calidad del trabajo, Disponibilidad rápida | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Ahorrar tiempo | $100.00 |  |
| 2 | 5 | 5 | 5 | Confianza / Reputación, Calidad del trabajo, Puntualidad, Precio, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Gestionar todo en un solo lugar | $300.00 |  |
| 3 | 2 | 1 | 1 | Puntualidad, Calidad del trabajo, Confianza / Reputación | Llamo a técnicos conocidos | Ahorrar dinero | $0.00 |  |
| 2 | 5 | 5 | 5 | Calidad del trabajo, Confianza / Reputación, Garantía del servicio, Precio, Puntualidad, Disponibilidad rápida | Llamo a técnicos conocidos | Tener garantía | $200.00 |  |
| 4 | 5 | 5 | 5 | Precio, Puntualidad, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Gestionar todo en un solo lugar | $500.00 |  |
| 3 | 4 | 4 | 4 | Calidad del trabajo, Confianza / Reputación, Puntualidad | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar | $1,000.00 |  |
| 2 | 5 | 1 | 5 | Precio, Confianza / Reputación, Calidad del trabajo, Puntualidad, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos, Pregunto en grupos de WhatsApp/Facebook | Mayor confiabilidad |  |  |
| 2 | 5 | 3 | 3 | Puntualidad, Calidad del trabajo, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar |  |  |
| 3 | 5 | 5 | 5 | Precio, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Tener garantía |  |  |
|  | 2 | 4 |  | Puntualidad, Calidad del trabajo | Pregunto en grupos de WhatsApp/Facebook | Mayor confiabilidad | $1,000.00 |  |
| 4 | 3 | 2 | 3 | Calidad del trabajo, Confianza / Reputación, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Gestionar todo en un solo lugar | $995.00 |  |
| 3 | 5 | 5 | 5 | Precio, Calidad del trabajo, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Tener garantía | $600.00 |  |
| 3 | 5 | 5 | 4 | Disponibilidad rápida, Confianza / Reputación, Garantía del servicio, Calidad del trabajo, Puntualidad | Pido recomendaciones a amigos/familia | Gestionar todo en un solo lugar | $2,000.00 |  |
| 2 | 4 | 5 | 5 | Calidad del trabajo, Precio, Garantía del servicio | Pido recomendaciones a amigos/familia | Gestionar todo en un solo lugar |  |  |
| 3 | 4 | 1 | 1 | Precio, Puntualidad, Calidad del trabajo, Garantía del servicio, Confianza / Reputación | Llamo a técnicos conocidos, Busco en Google | Tener garantía | $600.00 |  |
| 3 | 2 | 1 | 1 | Precio, Puntualidad, Calidad del trabajo, Confianza / Reputación, Garantía del servicio, Disponibilidad rápida | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Gestionar todo en un solo lugar |  |  |
| 2 | 2 | 2 | 1 | Disponibilidad rápida, Precio | Pregunto en grupos de WhatsApp/Facebook, Busco en Google | Gestionar todo en un solo lugar | $0.00 |  |
| 3 | 4 | 5 | 5 | Precio, Puntualidad, Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos, Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar |  |  |
| 3 | 5 | 3 | 3 | Precio, Calidad del trabajo, Puntualidad, Confianza / Reputación, Garantía del servicio, Disponibilidad rápida | Pregunto en grupos de WhatsApp/Facebook | Mayor confiabilidad | $300.00 |  |
| 2 | 3 | 3 | 5 | Puntualidad, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Ahorrar dinero | $250.00 |  |
| 2 | 5 | 4 | 4 | Puntualidad, Calidad del trabajo, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Tener garantía | $1,000.00 |  |
| 3 | 5 | 5 | 5 | Puntualidad, Calidad del trabajo, Disponibilidad rápida | Llamo a técnicos conocidos, Pido recomendaciones a amigos/familia | Gestionar todo en un solo lugar | $200.00 |  |
| 2 | 4 | 2 | 5 | Confianza / Reputación, Calidad del trabajo, Garantía del servicio, Precio, Disponibilidad rápida | Pido recomendaciones a amigos/familia | Tener garantía | $200.00 |  |
| 2 | 1 | 1 | 5 | Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida, Precio, Puntualidad | Pido recomendaciones a amigos/familia | Mayor confiabilidad | $1,500.00 |  |
| 3 | 4 | 2 | 2 | Precio, Calidad del trabajo, Puntualidad, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Ahorrar dinero | $500.00 |  |
| 2 | 2 | 4 | 4 | Precio, Calidad del trabajo, Confianza / Reputación | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Mayor confiabilidad | $500.00 |  |
| 3 | 5 | 2 | 5 | Calidad del trabajo, Confianza / Reputación, Garantía del servicio | Pregunto en grupos de WhatsApp/Facebook, Pido recomendaciones a amigos/familia | Gestionar todo en un solo lugar | $125.00 |  |
| 2 | 4 | 5 | 5 | Calidad del trabajo, Puntualidad, Precio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar | $250.00 |  |
| 2 | 5 | 3 | 5 | Confianza / Reputación | Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar | $50.00 |  |
| 3 | 5 | 5 | 5 | Confianza / Reputación, Calidad del trabajo, Precio, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Mayor confiabilidad | $250.00 |  |
| 3 | 4 | 1 | 5 | Precio, Puntualidad, Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Mayor confiabilidad | $1,000.00 |  |
| 2 | 4 | 3 | 4 | Confianza / Reputación, Calidad del trabajo, Disponibilidad rápida, Garantía del servicio, Precio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar | $100.00 |  |
| 2 | 1 | 1 | 1 | Calidad del trabajo, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Tener garantía | $0.00 |  |
| 3 | 4 | 5 | 5 | Confianza / Reputación, Garantía del servicio, Calidad del trabajo, Disponibilidad rápida | Pido recomendaciones a amigos/familia | Mayor confiabilidad | $200.00 |  |
| 3 | 4 | 5 | 5 | Precio, Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio, Puntualidad | Pido recomendaciones a amigos/familia, Busco en Google, Llamo a técnicos conocidos | Gestionar todo en un solo lugar | $1,000.09 |  |
| 2 | 2 | 2 | 4 | Calidad del trabajo, Confianza / Reputación, Garantía del servicio | Pido recomendaciones a amigos/familia | Mayor confiabilidad | $600.00 |  |
| 3 | 2 | 1 | 4 | Puntualidad, Calidad del trabajo, Confianza / Reputación, Garantía del servicio, Disponibilidad rápida, Precio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Mayor confiabilidad | $150.00 |  |
| 3 | 4 | 5 | 5 | Garantía del servicio | Pido recomendaciones a amigos/familia | Mayor confiabilidad | $0.00 |  |
| 2 | 4 | 4 | 5 | Calidad del trabajo, Precio, Puntualidad, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos, Pregunto en grupos de WhatsApp/Facebook | Mayor confiabilidad | $40.00 |  |
| 2 | 5 | 4 | 5 | Puntualidad, Calidad del trabajo, Confianza / Reputación, Garantía del servicio, Disponibilidad rápida | Pregunto en grupos de WhatsApp/Facebook, Llamo a técnicos conocidos | Ahorrar tiempo | $0.00 |  |
| 3 | 3 | 3 | 3 | Precio, Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Mayor confiabilidad | $0.00 |  |
| 3 | 3 | 3 | 5 | Precio, Calidad del trabajo, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Ahorrar dinero | $0.00 |  |
| 3 | 2 | 5 | 5 | Precio, Puntualidad, Calidad del trabajo, Disponibilidad rápida, Garantía del servicio | Llamo a técnicos conocidos | Ahorrar tiempo | $0.00 |  |
| 3 | 4 | 3 | 4 | Precio, Calidad del trabajo, Puntualidad, Confianza / Reputación, Garantía del servicio | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Tener garantía | $0.00 |  |
| 2 | 4 | 5 | 5 | Precio, Calidad del trabajo, Confianza / Reputación, Garantía del servicio, Puntualidad | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Tener garantía | $500.00 |  |
| 3 | 5 | 5 | 5 | Precio, Puntualidad, Calidad del trabajo, Disponibilidad rápida, Confianza / Reputación, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Gestionar todo en un solo lugar | $650.00 |  |
| 3 | 4 | 3 | 4 | Calidad del trabajo, Confianza / Reputación, Puntualidad | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Mayor confiabilidad | $100.00 |  |
| 3 | 5 | 5 | 5 | Garantía del servicio, Confianza / Reputación, Calidad del trabajo | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar | $200.00 |  |
| 3 | 4 | 3 | 3 | Puntualidad, Calidad del trabajo, Confianza / Reputación, Precio | Pido recomendaciones a amigos/familia | Mayor confiabilidad | $1,000.00 |  |
| 3 | 4 | 5 | 5 | Garantía del servicio, Calidad del trabajo, Confianza / Reputación | Pido recomendaciones a amigos/familia, Pregunto en grupos de WhatsApp/Facebook | Gestionar todo en un solo lugar | $2,000.00 |  |
| 3 | 5 | 4 | 4 | Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio, Puntualidad, Precio | Pido recomendaciones a amigos/familia | Mayor confiabilidad | $0.00 |  |
| 2 | 2 | 2 | 2 | Puntualidad, Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Gestionar todo en un solo lugar | $620.00 |  |
| 3 | 5 | 3 | 5 | Precio, Puntualidad, Confianza / Reputación, Calidad del trabajo, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos | Mayor confiabilidad | $500.00 |  |
| 3 | 5 | 3 | 5 | Precio, Puntualidad, Calidad del trabajo, Confianza / Reputación, Disponibilidad rápida, Garantía del servicio | Pido recomendaciones a amigos/familia, Llamo a técnicos conocidos, Pregunto en grupos de WhatsApp/Facebook | Mayor confiabilidad | $500.00 |  |




================================================================================
Page: IMM Startup Tasks
Path: 0.2
Depth: 1
================================================================================





================================================================================
Page: Phase 2
Path: 0.2.1
Depth: 2
================================================================================

 

================================================================================
Page: Suposiciones
Path: 0.2.1.1
Depth: 3
================================================================================



## Tabla de Suposiciones
| # | Categoría | Suposición | Importancia si es equivocada | Text |
| --- | --- | --- | --- | --- |
| 1 | Modelo de negocio | Los clientes estarían dispuestos a pagar una suscripción mensual o anual para que Maroa coordine y ejecute al menos 2 mantenimientos preventivos de sus aires acondicionados por año. | Alto | Cliente |
| 2 | Modelo de negocio | Una vez los clientes se suscriban por el aire acondicionado, estarán abiertos a suscribir otros activos. | Neutro | Cliente |
| 3 | Pagos | Los clientes aceptarían registrar su tarjeta de crédito para pagos automáticos. | Alto | Cliente |
| 4 | Comportamiento actual | Las personas suelen darle mantenimiento preventivo a sus aires acondicionados. | Alto | Cliente |
| 5 | Dolor/frustración | Las personas encuentran frustrante buscar y coordinar técnicos. | Alto | Cliente |
| 6 | Dolor/frustración | Las personas encuentran frustrante no conocer precios reales ni justos del mercado. | Alto | Cliente |
| 7 | Motivación | Las personas están dispuestas a dar mantenimiento preventivo para reducir daños o porque se preocupan por la eficiencia energética y de enfriamiento. | Alto | Cliente |
| 8 | Motivación | Las personas valoran más la calidad y la garantía que el precio, la puntualidad o la disponibilidad. | Neutro | Cliente |
| 9 | Comportamiento actual | La mayoría pide recomendaciones a amigos/familia en vez de buscar en Google, llamar a técnicos conocidos o preguntar en grupos de WhatsApp. | Alto | Cliente |
| 10 | Motivación | Las personas estarían más interesadas en manejar mantenimientos en una sola plataforma que en ahorrar tiempo y dinero. | Neutro | Cliente |
| 11 | Motivación | Las personas estarían más interesadas en tener garantía y confiabilidad que en ahorrar tiempo y dinero. | Neutro | Cliente |
| 12 | Carga mental | Las personas están tan ocupadas en el día a día que no quieren preocuparse por mantenimientos preventivos. | Alto | Cliente |
| 13 | Comportamiento actual | La gente suele recordar dar mantenimiento a sus aires acondicionados cuando empieza el calor y se preocupa por la eficiencia. | Neutro | Cliente |
| 14 | Carga mental | Las personas no están satisfechas con la acumulación de tareas “no urgentes pero importantes” como mantenimientos. | Alto | Cliente |
| 15 | Finanzas | Las personas no presupuestan adecuadamente los gastos sorpresa o no están satisfechas con ellos. | Neutro | Cliente |
| 16 | Dolor/frustración | Los clientes no están satisfechos con el tiempo que pierden coordinando mantenimientos. | Alto | Cliente |
| 17 | Dolor/frustración | Los clientes no están satisfechos con lo fragmentado que está el mercado de técnicos ni con lo difícil que es encontrar profesionales confiables. | Alto | Cliente |
| 18 | Pagos | Los clientes no están satisfechos con métodos de pago engorrosos (efectivo o transferencias). | Neutro | Cliente |
| 19 | Dolor/frustración | Los clientes no están satisfechos con sorpresas de gastos adicionales en trabajos supuestamente sencillos. | Alto | Cliente |
| 20 | Dolor/frustración | Los clientes no están satisfechos con la sensación de ser engañados con lenguaje técnico para cobrar más. | Alto | Cliente |
|  | Disponibilidad | Los técnicos independientes/contratistas estarían dispuestos a trabajar dentro de ventanas de 2 horas definidas por Maroa. | Alto |  |
|  | Disponibilidad | Existen suficientes técnicos calificados en Punta Cana para cubrir demanda de 8-10 servicios semanales con ≥2 técnicos por categoría. | Alto |  |
|  | Modelo económico | Los técnicos aceptarían un esquema de pago por servicio con tarifas estandarizadas (vs negociación por cliente). | Alto |  |
|  | Modelo económico | Los técnicos preferirían volumen estable y pagos puntuales sobre autonomía total de precios. | Alto |  |
|  | Calidad/Estandarización | Los técnicos están dispuestos a seguir checklists y protocolos estándar de Maroa en cada servicio. | Alto |  |
|  | Calidad/Estandarización | Los técnicos pueden documentar evidencia mínima (fotos antes/después, notas) sin fricción significativa. | Alto |  |
|  | Tecnología | Los técnicos tienen smartphones y conexión suficiente para usar WhatsApp Business y recibir/enviar evidencia. | Alto |  |
|  | Tecnología | Los técnicos pueden actualizar estatus en tiempo real (“en camino”, “en sitio”, “completado”) de manera consistente. | Neutro |  |
|  | Comportamiento actual | Los técnicos actualmente tienen tiempos muertos o baja utilización que Maroa puede llenar. | Alto |  |
|  | Comportamiento actual | Los técnicos tienen dificultad para conseguir clientes regulares por cuenta propia. | Neutro |  |
|  | Confianza/Seguridad | Los técnicos aceptarían verificación de antecedentes y cumplimiento de protocolos de acceso a residenciales. | Alto |  |
|  | Confianza/Seguridad | Los técnicos están dispuestos a trabajar con identificación visible y protocolos de seguridad de Maroa. | Alto |  |
|  | Modelo de pago | Los técnicos aceptarían que el cliente pague a Maroa (no directamente a ellos) y recibir pago después del cierre. | Alto |  |
|  | Modelo de pago | Los técnicos pueden esperar ciclos de pago de 7-15 días sin afectar su operación. | Neutro |  |
|  | Materiales/Insumos | Los técnicos prefieren que Maroa gestione compra de materiales vs ellos adelantar el costo. | Neutro |  |
|  | Materiales/Insumos | Los técnicos aceptarían un markup estandarizado sobre materiales gestionados por Maroa. | Neutro |  |
|  | Relación contractual | Los técnicos preferirían modelo de contratista independiente sobre ser empleados de Maroa. | Alto |  |
|  | Relación contractual | Los técnicos estarían dispuestos a trabajar con contratos claros que incluyan SLAs y penalizaciones. | Alto |  |
|  | Capacitación | Los técnicos necesitan capacitación mínima para cumplir estándares de Maroa (no son difíciles de entrenar). | Neutro |  |
|  | Capacitación | Los técnicos valoran certificaciones o badges de calidad de Maroa como diferenciador. | Neutro |  |
|  | Exclusividad | Los técnicos aceptarían no negociar directamente con clientes de Maroa durante y después del servicio. | Alto |  |
|  | Exclusividad | Los técnicos pueden trabajar para Maroa sin exclusividad (mantener otros clientes propios). | Alto |  |
|  | Cobertura geográfica | Los técnicos están dispuestos a desplazarse dentro de la zona del piloto sin cobros excesivos por traslado. | Alto |  |
|  | Cobertura geográfica | Existe al menos 1 técnico backup por categoría dispuesto a cubrir emergencias o ausencias. | Alto |  |
|  | Retrabajos/Garantía | Los técnicos aceptan política de retrabajo sin costo si el fallo fue por mala ejecución. | Alto |  |
|  | Retrabajos/Garantía | Los técnicos entienden y aceptan la diferencia entre retrabajo (sin costo) y nueva falla (cotizable). | Alto |  |
|  | Comunicación | Los técnicos pueden comunicarse de manera profesional y clara con clientes de Maroa. | Neutro |  |
|  | Comunicación | Los técnicos responden mensajes operativos en ventana de 5-10 min durante horario de servicio. | Alto |  |
|  | Puntualidad | Los técnicos pueden cumplir ≥85% de citas dentro de ventana de 2h sin reprogramaciones frecuentes. | Alto |  |
|  | Puntualidad | Los técnicos tienen capacidad de planificación para confirmar ETA realista y cumplirlo. | Alto |  |
|  | Escalabilidad | El pool de técnicos calificados puede crecer proporcionalmente con la demanda de Maroa. | Neutro |  |
|  | Tercerización | Empresas establecidas de mantenimiento estarían dispuestas a trabajar como proveedores B2B de Maroa. | Neutro |  |
|  | Tercerización | Trabajar con empresas (vs técnicos independientes) reduce variabilidad pero aumenta costos de manera manejable. | Neutro |  |
|  | Motivación | Los técnicos valoran más flujo estable de trabajo que maximizar precio por servicio individual. | Alto |  |
|  | Motivación | Los técnicos ven a Maroa como aliado (canal de clientes) no como intermediario que reduce sus ingresos. | Alto |  |


# 

================================================================================
Page: Entrevistas
Path: 0.2.1.2
Depth: 3
================================================================================

 

================================================================================
Page: Entrevistas Profundas  a Clientes v2
Path: 0.2.1.2.1
Depth: 4
================================================================================



## Framework de Entrevista
| # | Sección | Pregunta | Tipo de respuesta | Suposición validada (#) |
| --- | --- | --- | --- | --- |
| **Datos de perfil** |  |  |  |  |
| P1 | Perfil | ¿Cuál es tu edad? | Numérica | — |
| P2 | Perfil | ¿En qué ciudad/sector vives? | Texto | — |
| P3 | Perfil | ¿Tu vivienda es apartamento, casa o negocio/oficina? | Opción única | — |
| P4 | Perfil | ¿Cuántos aires acondicionados tienes? | Numérica | — |
| P5 | Perfil | ¿Qué otros equipos grandes tienes en casa/oficina? (nevera, lavadora, secadora, estufa, calentador, etc.) | Opción múltiple | — |
| P6 | Perfil | ¿Quién suele tomar la decisión de llamar al técnico en tu hogar/negocio? | Opción única | — |
| P7 | Perfil | ¿Usas tarjeta de crédito regularmente para pagar servicios o compras? | Sí/No | 3, 18 |
| P8 | Perfil | ¿Qué tan cómodo te sientes usando apps o plataformas digitales? | Escala 1-5 (Bajo → Alto) | 10, 11 |
| **Mantenimiento actual** |  |  |  |  |
| P9 | Mantenimiento | ¿Le das mantenimiento preventivo a tus aires acondicionados al menos una o dos veces al año? | Sí/No | 4, 7 |
| P10 | Mantenimiento | ¿Tienes otros equipos a los que también sueles dar mantenimiento preventivo? | Opción múltiple | 2 |
| P11 | Mantenimiento | ¿Tiendes a recordar el mantenimiento de los aires cuando empieza el calor fuerte? | Sí/No | 13 |
| P12 | Mantenimiento | ¿Has dejado de dar mantenimiento porque nunca has tenido problemas serios con el aire? | Sí/No | (pregunta extra) |
| **Dolores y frustraciones** |  |  |  |  |
| P13 | Dolores | ¿Alguna vez te ha frustrado buscar y coordinar un técnico confiable? | Sí/No | 5 |
| P14 | Dolores | ¿Te molesta el tiempo que pierdes coordinando llamadas y citas con técnicos? | Sí/No | 16 |
| P15 | Dolores | ¿Sientes que el mercado está fragmentado y es difícil encontrar técnicos confiables? | Sí/No | 17 |
| P16 | Dolores | ¿Alguna vez sentiste que un técnico intentó cobrarte de más con lenguaje técnico o con cargos sorpresa? | Sí/No | 6, 19, 20 |
| P17 | Dolores | ¿Te ha pasado que un gasto sorpresa en un electrodoméstico desajuste tu presupuesto? | Sí/No | 15, 19 |
| P18 | Dolores | ¿Confías más en técnicos informales recomendados que en empresas establecidas? | Sí/No | (pregunta extra) |
| **Motivaciones y prioridades** |  |  |  |  |
| P19 | Motivaciones | ¿Qué te motivaría más a mantener tus aires acondicionados al día? | Opción única: evitar daños / ahorrar energía / tener garantía / evitar gastos mayores | 7, 13 |
| P20 | Motivaciones | ¿Qué es más importante para ti al contratar un técnico? | Opción única: calidad/garantía, puntualidad, precio, disponibilidad, confianza | 8 |
| P21 | Motivaciones | ¿Prefieres tener un solo lugar donde ver y manejar todos tus mantenimientos, aunque no ahorres tiempo ni dinero? | Sí/No | 10 |
| P22 | Motivaciones | Si pudieras elegir, ¿qué priorizarías más? | Opción única: garantía, ahorrar tiempo, ahorrar dinero | 11 |
| P23 | Motivaciones | ¿Alguna vez pensaste que el mantenimiento preventivo es innecesario o un gasto extra? | Sí/No | (pregunta extra) |
| **Carga mental y hábitos** |  |  |  |  |
| P24 | Carga mental | ¿Sientes que el día a día te deja poco tiempo o energía para pensar en mantenimientos preventivos? | Sí/No | 12 |
| P25 | Carga mental | ¿Te incomoda la acumulación de tareas “no urgentes pero importantes” como los mantenimientos? | Sí/No | 14 |
| **Comportamiento de búsqueda y pagos** |  |  |  |  |
| P26 | Búsqueda | Cuando necesitas un técnico, ¿qué es lo primero que haces? | Opción única: preguntar a familia/amigos, buscar en Google, grupos WhatsApp, llamar conocido | 9 |
| P27 | Pagos | ¿Has tenido que pagar técnicos en efectivo o transferencia en vez de tarjeta? | Sí/No | 18 |
| P28 | Pagos | ¿Te resultaría más cómodo pagar estos servicios automáticamente con tu tarjeta de crédito? | Sí/No | 3, 18 |
| P29 | Búsqueda | Si existiera una app para esto, ¿la usarías realmente o preferirías seguir como hasta ahora? | Opción única | (pregunta extra) |
| **Cierre** |  |  |  |  |
| P30 | Referencias | ¿Tienes un técnico fijo de confianza al que siempre llamas? | Sí/No | (pregunta extra) |
| P31 | Referencias | ¿Conoces a alguien más que pudiera ayudarnos respondiendo esta misma encuesta? | Texto / Sí/No | — |


## Encuesta Profunda v2 Validación de Hipótesis
| Nombre entrevistado | ¿Cuál es tu edad? | ¿En qué ciudad/sector vives? | ¿Tu vivienda es apartamento, casa o negocio/oficina? | ¿Cuántos aires acondicionados tienes? | ¿Qué otros equipos grandes tienes en casa/oficina? (nevera, lavadora, secadora, estufa, calentador, etc.) | ¿Quién suele tomar la decisión de llamar al técnico en tu hogar/negocio? | ¿Usas tarjeta de crédito regularmente para pagar servicios o compras? | ¿Qué tan cómodo te sientes usando apps o plataformas digitales? | ¿Le das mantenimiento preventivo a tus aires acondicionados al menos una o dos veces al año? | ¿Tienes otros equipos a los que también sueles dar mantenimiento preventivo? | ¿Preferirías que alguien más coordinara estos mantenimientos por ti, en vez de hacerlo tú? | ¿Tiendes a recordar el mantenimiento de los aires cuando empieza el calor fuerte? | ¿Has dejado de dar mantenimiento porque nunca has tenido problemas serios con el aire? | ¿Alguna vez te ha frustrado buscar y coordinar un técnico confiable? | ¿Te molesta el tiempo que pierdes coordinando llamadas y citas con técnicos? | ¿Sientes que el mercado está fragmentado y es difícil encontrar técnicos confiables? | ¿Alguna vez sentiste que un técnico intentó cobrarte de más con lenguaje técnico o con cargos sorpresa? | ¿Te ha pasado que un gasto sorpresa en un electrodoméstico desajuste tu presupuesto? | ¿Confías más en técnicos informales recomendados que en empresas establecidas? | ¿Qué te motivaría más a mantener tus aires acondicionados al día? | ¿Qué es más importante para ti al contratar un técnico? | ¿Prefieres tener un solo lugar donde ver y manejar todos tus mantenimientos, aunque no ahorres tiempo ni dinero? | Si pudieras elegir, ¿qué priorizarías más? | ¿Alguna vez pensaste que el mantenimiento preventivo es innecesario o un gasto extra? | ¿Sientes que el día a día te deja poco tiempo o energía para pensar en mantenimientos preventivos? | ¿Te incomoda la acumulación de tareas “no urgentes pero importantes” como los mantenimientos? | Cuando necesitas un técnico, ¿qué es lo primero que haces? | ¿Has tenido que pagar técnicos en efectivo o transferencia en vez de tarjeta? | ¿Te resultaría más cómodo pagar estos servicios automáticamente con tu tarjeta de crédito? | Si existiera una app para esto, ¿la usarías realmente o preferirías seguir como hasta ahora? | ¿Tienes un técnico fijo de confianza al que siempre llamas? | ¿Conoces a alguien más que pudiera ayudarnos respondiendo esta misma encuesta? | Notas adicionales |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Erick Santana | 35 | Punta Cana | Casa | 4 | Nevera, Lavadora, Secadora, Estufa, Calentador | Pareja | Sí | 5 | Sí | No | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | No | Ahorro energía | Calidad/garantía | Sí | Garantía | Sí | Sí | Sí | WhatsApp/Facebook | Sí | Sí | Sí la usaría | No | Gabriella Bairan | Muy apuesto el muchacho. |
| Asirio Santana  | 60 | Santo Domingo/ Evaristo morales  | Apartamento | 2 | Nevera, Lavadora, Secadora, Estufa, Calentador | Yo | No | 3 | Sí | No | Sí | No | Sí | Sí | Sí | Sí | Sí | No | Sí | Evitar gastos mayores | Calidad/garantía | Sí | Garantía | Sí | Sí | Sí | Llamar conocido | Sí | Sí | Sí la usaría | Sí | No |  |
| Pablo del Rosario | 38 | Ciudad la palma | Casa | 4 | Nevera, Lavadora, Secadora, Estufa, Calentador | Yo | Sí | 5 | Sí | No | Sí | No | No | Sí | Sí | Sí | No | Sí | No | Evitar daños | Calidad/garantía | Sí | Garantía | No | Sí | No | Preguntar a familia/amigos | Sí | Sí | Sí la usaría | No |  |  |
| Oscar Melo | 39 | Santo Domingo, Evaristo Morales | Apartamento | 2 | Calentador, Nevera, Estufa, Lavadora, Secadora | Yo | Sí | 5 | No | No | Sí | No | No | Sí | No | Sí | Sí | Sí | No | Evitar daños | Calidad/garantía | Sí | Garantía | No | Sí | Sí | Preguntar a familia/amigos | Sí | Sí | Sí la usaría | Sí | Si - los pasará por DM |  |
| Alex Abreu | 30 | Caracoli | Apartamento | 2 | Lavadora, Nevera, Secadora, Estufa, Calentador | Yo | Sí | 5 | Sí | No | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Sí | Ahorro energía | Confianza | Sí | Tiempo | Sí | Sí | Sí | Llamar conocido | Sí | Sí | Sí la usaría | No |  |  |
| Damian Taveras | 31 | Santo Domingo, Logroño | Apartamento | 6 | Nevera, Lavadora, Secadora, Estufa, Calentador | Yo | Sí | 5 | Sí | Sí | Sí | Sí | Sí | No | No | Sí | Sí | Sí | No | Ahorro energía | Disponibilidad | Sí | Tiempo | No | Sí | Sí | Llamar conocido | Sí | Sí | Sí la usaría | No | Mi hermana y mi socio. | Considerar chat, IA o agente, intercambiar información. Pre-diagnóstico para temas sencillos. |
| Narciso Contreras | 36 | Santo Domingo, Evaristo Morales | Apartamento | 4 | Nevera, Lavadora, Estufa, Calentador, Secadora | Yo | Sí | 5 | Sí | Sí | No | No | No | Sí | Sí | Sí | Sí | Sí | Sí | Ahorro energía | Calidad/garantía | Sí | Dinero | Sí | Sí | Sí | Preguntar a familia/amigos | Sí | Sí | Sí la usaría | Sí |  | Sería importante entender la solicitud que vas a hacer es limpieza, reparación, dar detalles de lo que se va a hacer antes de que el técnico llegue. Transparencia. |
| Pedro Dajer | 34 | Punta Cana Village | Casa | 5 | Calentador, Estufa, Secadora, Lavadora, Nevera, Otro | Yo | Sí | 5 | Sí | Sí | No | Sí | No | No | No | Sí | Sí | No | Sí | Evitar gastos mayores | Calidad/garantía | Sí | Garantía | No | Sí | Sí | Llamar conocido | Sí | Sí | Sí la usaría | Sí | Andrés Amigo PC Venezuela | Empresas cobran más, no necesariamente ofrecen mejor servicio que los informales. |


## Si/No
| Si/No |
| --- |
| Sí |
| No |




================================================================================
Page: Entrevista Profunda a Técnicos v0
Path: 0.2.1.2.2
Depth: 4
================================================================================

## 0) Datos de perfil del entrevistado (para segmentación)

> Objetivo: identificar patrones por **categoría**, **zona**, **capacidad**, **madurez operativa**.

1. **Categoría principal de trabajo**

  - **Tipo:** Opción única
  - **Opciones:** A/C • Electricidad • Plomería • Electrodomésticos • “Handyman” • Otros
  - **Buscamos:** segmentación por especialidad (base para cobertura por categoría).
  - **Tips:** “Elige la que más te genera ingresos o más haces en el mes.”

1. **Modalidad actual**

  - **Tipo:** Opción única
  - **Opciones:** Independiente • Trabajo con ayudante • Equipo (2–5) • Empresa (6+)
  - **Buscamos:** estructura operativa (afecta puntualidad, capacidad, estandarización).
  - **Tips:** “Selecciona cómo trabajas la mayor parte del tiempo.”

1. **Zona principal de trabajo**

  - **Tipo:** Opción única
  - **Opciones:** Punta Cana/Bávaro • Verón • Cap Cana • Otra (especificar)
  - **Buscamos:** cobertura geográfica del piloto (23).
  - **Tips:** “Marca donde haces la mayoría de servicios.”

1. **Años de experiencia**

  - **Tipo:** Opción única
  - **Opciones:** 0–2 • 3–5 • 6–10 • 10+
  - **Buscamos:** proxy de nivel y confianza operacional.
  - **Tips:** “Aproximado está bien.”

1. **Disponibilidad típica**

  - **Tipo:** Opción única
  - **Opciones:** Solo mañanas • Solo tardes • Día completo • Fines de semana • Variable
  - **Buscamos:** disponibilidad real vs ventanas (1,2).
  - **Tips:** “Elige la opción que sea cierta 3+ días a la semana.”



## 1) Capacidad y tiempos (utilización / “tiempos muertos”)

1. **¿Tienes semanas donde te faltan trabajos para llenar tu agenda?**

  - **Tipo:** Sí/No
  - **Buscamos:** existencia de baja utilización (9).
  - **Tips:** “Piensa en las últimas 4 semanas.”

1. **¿Tienes al menos 2 espacios libres de 2 horas en una semana típica?**

  - **Tipo:** Sí/No
  - **Buscamos:** si puede encajar “ventanas” sin romper agenda (1,9).
  - **Tips:** “Un ‘espacio libre’ = bloque donde podrías aceptar un servicio nuevo.”

1. **En una semana típica, tu agenda está…**

  - **Tipo:** Opción única
  - **Opciones:** 0–25% llena • 26–50% • 51–75% • 76–100%
  - **Buscamos:** capacidad real y variabilidad (9).
  - **Tips:** “Estimación rápida; no hace falta exactitud.”



## 2) Puntualidad, ventanas y reprogramación

1. **¿Puedes comprometerte a llegar dentro de una ventana de 2 horas en la mayoría de citas?**

  - **Tipo:** Sí/No
  - **Buscamos:** cumplimiento de ventanas (1,29).
  - **Tips:** “Si tu respuesta depende del día, responde por tu semana típica.”

1. **En tu semana típica, ¿reprogramas citas más de 1 vez por semana?**

  - **Tipo:** Sí/No
  - **Buscamos:** frecuencia de reprogramación (29).
  - **Tips:** “Reprogramar incluye mover hora o día por cualquier motivo.”

1. **¿Confirmas hora estimada (ETA) con el cliente antes de salir hacia el servicio?**

  - **Tipo:** Sí/No
  - **Buscamos:** hábitos de planificación/ETA (30).
  - **Tips:** “Confirmar ETA puede ser un mensaje corto.”

1. **Si te piden confirmar ‘en camino’ y ‘en sitio’, ¿lo podrías hacer en cada servicio?**

  - **Tipo:** Sí/No
  - **Buscamos:** actualización de estatus consistente (8).
  - **Tips:** “No es un app; imagina un WhatsApp rápido.”



## 3) Comunicación operativa

1. **¿Respondes mensajes operativos durante horario de trabajo en menos de 10 minutos la mayoría de veces?**

  - **Tipo:** Sí/No
  - **Buscamos:** velocidad de respuesta operativa (28).
  - **Tips:** “Operativo = coordinar llegada, confirmar, pedir info.”

1. **¿Te sientes cómodo comunicándote de forma ‘más formal/profesional’ con clientes (texto/llamada)?**

  - **Tipo:** Sí/No
  - **Buscamos:** tono profesional consistente (27).
  - **Tips:** “Formal = claro, respetuoso, sin discusiones.”



## 4) Tecnología mínima (WhatsApp + evidencia)

1. **¿Tienes smartphone con cámara funcional y datos móviles la mayoría del tiempo?**

  - **Tipo:** Sí/No
  - **Buscamos:** requisito mínimo de tecnología (7).
  - **Tips:** “No tiene que ser último modelo.”

1. **¿Usas WhatsApp para coordinar la mayoría de tus servicios hoy?**

  - **Tipo:** Sí/No
  - **Buscamos:** canal dominante y fricción (7).
  - **Tips:** “Coordinar = agendar, confirmar, actualizar.”

1. **¿Podrías enviar 3–5 fotos por servicio (antes/después/evidencia) de forma consistente?**

  - **Tipo:** Sí/No
  - **Buscamos:** evidencia mínima sin fricción (6).
  - **Tips:** “Consistente = en 8 de cada 10 servicios.”



## 5) Calidad y estandarización (checklists / protocolos)

1. **¿Seguirías un checklist simple en cada servicio si te toma menos de 3 minutos?**

  - **Tipo:** Sí/No
  - **Buscamos:** disposición a protocolos (5,19).
  - **Tips:** “Checklist simple = 6–10 puntos, marcar y listo.”

1. **¿Aceptarías que se revise tu trabajo (QA) de forma aleatoria en algunos servicios?**

  - **Tipo:** Sí/No
  - **Buscamos:** tolerancia a control de calidad (5,20).
  - **Tips:** “Revisión = fotos + checklist, no necesariamente visita.”

1. **Si un fallo fue por mala ejecución, ¿harías retrabajo sin costo?**

  - **Tipo:** Sí/No
  - **Buscamos:** retrabajos/garantía operacional (25).
  - **Tips:** “No incluye ‘nueva falla’; solo el mismo error.”

1. **¿Entiendes y aceptarías diferenciar entre ‘retrabajo’ vs ‘nueva falla’ como dos casos distintos?**

  - **Tipo:** Sí/No
  - **Buscamos:** alineación conceptual clave (26).
  - **Tips:** “Retrabajo = mismo problema por ejecución. Nueva falla = otro problema distinto.”



## 6) Confianza, seguridad y acceso a residenciales

1. **¿Aceptarías verificación de antecedentes como requisito para entrar a residenciales?**

  - **Tipo:** Sí/No
  - **Buscamos:** compliance y acceso (11).
  - **Tips:** “Verificación = proceso estándar; no implica juicio, solo requisito.”

1. **¿Estarías dispuesto a usar identificación visible (badge/camisa) durante servicios?**

  - **Tipo:** Sí/No
  - **Buscamos:** protocolos de seguridad/imagen (12).
  - **Tips:** “Visible = que el cliente te identifique fácilmente.”



## 7) Modelo de pago (sin hablar de precios) y flujo de cobro

1. **¿Aceptarías que el cliente pague a la empresa y tú recibas el pago después del cierre?**

  - **Tipo:** Sí/No
  - **Buscamos:** estructura de cobro “centralizada” (13).
  - **Tips:** “Después del cierre = cuando el servicio queda confirmado como completado.”

1. **¿Puedes operar si el pago se procesa en un ciclo de 7–15 días?**

  - **Tipo:** Sí/No
  - **Buscamos:** tolerancia a ciclo de pago (14).
  - **Tips:** “Operar = cubrir tu gasolina, materiales menores, etc.”



## 8) Materiales/insumos (sin hablar de markup ni precios)

1. **En tu operación, normalmente ¿quién compra los materiales?**

  - **Tipo:** Opción única
  - **Opciones:** Yo • Cliente • Depende del caso
  - **Buscamos:** patrón actual y fricción (15).
  - **Tips:** “Elige la opción más frecuente.”

1. **¿Preferirías que otra parte gestione la compra de materiales para que tú no adelantes dinero?**

  - **Tipo:** Sí/No
  - **Buscamos:** preferencia por no adelantar costos (15).
  - **Tips:** “Gestionar = comprar/entregar, no necesariamente escoger marca.”



## 9) Relación contractual y exclusividad

1. **Si colaboraras con una empresa, ¿preferirías seguir como contratista independiente (no empleado)?**

  - **Tipo:** Sí/No
  - **Buscamos:** forma de relación (17).
  - **Tips:** “Contratista = tú manejas tus impuestos/horario en parte.”

1. **¿Aceptarías un contrato con reglas claras de cumplimiento (por ejemplo, puntualidad y retrabajos)?**

  - **Tipo:** Sí/No
  - **Buscamos:** tolerancia a SLA/penalidades (18).
  - **Tips:** “Reglas claras = definidas antes, sin sorpresas.”

1. **¿Aceptarías no negociar directamente con clientes “asignados” durante y después del servicio?**

  - **Tipo:** Sí/No
  - **Buscamos:** exclusividad / no bypass (21).
  - **Tips:** “No negociar = no hacer trato por fuera con ese cliente.”

1. **¿Necesitas mantener tus clientes propios mientras colaboras con una empresa?**

  - **Tipo:** Sí/No
  - **Buscamos:** no exclusividad total (22).
  - **Tips:** “Clientes propios = tu cartera fuera de la empresa.”



## 10) Cobertura geográfica y backups

1. **¿Te desplazarías dentro de la zona del piloto sin exigir cargos de traslado ‘altos’ (según tu criterio)?**

  - **Tipo:** Sí/No
  - **Buscamos:** cobertura geográfica (23).
  - **Tips:** “Según tu criterio” evita hablar de monto; si dicen “No”, solo marca “No” y seguimos.

1. **¿Conoces a al menos 1 técnico de confianza que podría cubrirte como backup si tú no puedes?**

  - **Tipo:** Sí/No
  - **Buscamos:** existencia de “backup” por categoría (24).
  - **Tips:** “Backup = alguien que tú recomendarías sin miedo.”



# 5 preguntas adicionales para NEGAR hipótesis (disconfirming)

> Estas buscan señales de “no fit” o riesgos ocultos. Siguen siendo cerradas.

A1) **¿Prefieres trabajos grandes/instalaciones y evitas trabajos pequeños/repetitivos?**

  - **Tipo:** Sí/No
  - **Buscamos:** riesgo de que el modelo no sea atractivo por tipo de trabajo.
  - **Tips:** “No estamos valorando nada; es solo preferencia.”

A2) **¿Te incomoda que un tercero supervise documentación/fotos de tu trabajo?**

  - **Tipo:** Sí/No
  - **Buscamos:** fricción cultural con evidencia/QA (podría tumbar #5/#6).
  - **Tips:** “Supervisar = revisar que exista evidencia, no criticar tu técnica.”

A3) **¿Has tenido conflictos frecuentes con clientes por “culpa” o “responsabilidad” del fallo?**

  - **Tipo:** Sí/No
  - **Buscamos:** riesgo de retrabajos/disputas (25–26).
  - **Tips:** “Frecuente = 2+ veces en los últimos 2 meses.”

A4) **¿Evitas trabajos en residenciales por políticas/seguridad/entrada?**

  - **Tipo:** Sí/No
  - **Buscamos:** riesgo de acceso aunque digan “sí” a verificación (11–12).
  - **Tips:** “Evitar = rechazas esos trabajos cuando puedes.”

A5) **¿Te ha pasado que aceptas un trabajo y luego lo cancelas por falta de herramientas/piezas?**

  - **Tipo:** Sí/No
  - **Buscamos:** riesgo operativo/logística que afecte puntualidad y satisfacción.
  - **Tips:** “Esto es normal; queremos entender la frecuencia, no juzgar.”



## Nota operativa (para ustedes como entrevistadores)

- Mantén ritmo: si el técnico empieza a narrar, vuelve a cerrar con: **“Para no quitarte tiempo: si tuvieras que elegir, ¿Sí o No?”**
- Para evitar sesgo: antes de preguntas “sensibles” (verificación, exclusividad, pago post-cierre), di una frase neutral: **“Esto es solo para entender qué tan común es, no es un requisito hoy.”**

Elba’s: Pienso que el formulario esta muy completo, desde nuestro punto de vista, sin embargo, debemos considerar al entrevistado, y evitar cansancio por exceso preguntas o respuestas automaticas para finalizar rápido, que quizas se puedan unir reduciendo el tiempo de la “entrevista”, misma que debe ser ágil y rápida.  
  
En mi opinion, quizas un factor determinante como pregunta inicial o #2 seria una de estas 3, aunque quizas hayan otras:  
¿Estarías dispuesto a usar identificación visible (badge/camisa) durante servicios?  
¿Puedes operar si el pago se procesa en un ciclo de 7–15 días?  
¿Aceptarías verificación de antecedentes como requisito para entrar a residenciales?  
Cualquiera de estas preguntas seria una declinación a la Propuesta Maroa, y ya no tendría sentido continuar con el resto.



================================================================================
Page: Plan de Validación del Piloto Maroa
Path: 0.2.1.3
Depth: 3
================================================================================

## **Marco de validación (hipótesis clave)**

**H1. Demanda pagada**

- Los hogares en Punta Cana están dispuestos a pagar por un servicio de concierge de mantenimiento de A/C que reduzca la fricción, la incertidumbre y el estrés.

**H2. Operación viable**

- El modelo concierge (coordinamos, agendamos, verificamos, damos la cara) puede operar con SLAs aceptables y con herramientas mínimas.

**H3. Calidad consistente**

- Es posible entregar mantenimiento A/C preventivo y correctivo ligero, con estándares repetibles y evidencia (checklists, fotos, reportes).

**H4. Unit economics saludables**

- El margen por servicio y por suscripción es positivo o ajustable sin romper la propuesta de valor.

**H5. Señales tempranas de retención**

- Los clientes perciben suficiente valor como para considerar la continuidad o la renovación.





## **1) Definición del piloto (baseline de validación)**

**Hipótesis asociada:** H1, H2

**Experimento**

 Delimitar estrictamente qué es y qué no es Maroa durante el piloto y observar la adopción sin confusión operativa.

**Entregables (Semana 0)**

- Documento “Definición del Piloto” (1–2 páginas):
  - Qué es Maroa / qué no es
  - Alcance: A/C residencial, preventivo + correctivo ligero
  - Exclusiones explícitas
  - Zona exacta de Punta Cana y horarios de cobertura
  - Cupo máximo del piloto (hogares / suscripciones)
- Matriz de criterios de éxito del piloto

**OKRs**

- O1: Ejecutar un piloto controlado y medible
  - KR1: 100 % de servicios del piloto se ejecuta dentro del alcance definido
  - KR2: 0 servicios fuera de zona u horario acordado
  - KR3: Criterios de éxito claros antes del primer servicio

## **2) Oferta y pricing (objeto de compra)**

**Hipótesis asociada:** H1, H4

**Experimento**

 Probar la disposición a pagar por una oferta simple y clara, con beneficios de early adopter.

**Entregables (Semana 0)**

- Ficha de paquetes del piloto:
  - Suscripción y qué incluye exactamente
  - Número de mantenimientos
  - Beneficios claros vs mercado informal
- Beneficios exclusivos del piloto (fundadores / early adopters)
- Políticas del piloto:
  - Cancelación, reprogramación, no-show
  - Garantía del trabajo y retrabajos
- Definición de método de pago y ciclo (mensual / anual)



**OKRs**

- O2: Validar disposición a pagar sin fricción
  - KR1: ≥ X % de los leads se convierten a pago
  - KR2: < Y % de los clientes reportan fricción o reclamos por precio
  - KR3: ≥ Z % de los prospectos entiende la oferta sin explicación adicional

## **3) Operación de Concierge (experiencia “cero drama”)**

**Hipótesis asociada:** H2

**Experimento**

 Operar el flujo end-to-end completo con un único punto de contacto (Maroa) y medir tiempos y fricciones.

**Entregables (Semana 0–1)**

- Flujo operativo end-to-end documentado (1 página):
  - solicitud → diagnóstico → agenda → confirmación → servicio → cierre → feedback
- Guiones operativos:
  - Bienvenida
  - Diagnóstico
  - Confirmación
  - Post-servicio
- SLAs internos definidos:
  - Tiempo de respuesta concierge
  - Tiempo máximo para agendar
  - Ventana de llegada
- Plantillas operativas:
  - Cotización
  - Confirmación de cita
  - Checklist pre-visita (todo lo que tiene que hacer el tecnico para asegurarse que la cita sea exitosa) + pasos que el técnico va a dar
  - Cierre y feedback
- Regla operativa: el cliente no gestiona pagos ni técnicos



**OKRs**

- O3: Entregar una experiencia fluida y confiable
  - KR1: ≥ 90 % de respuestas dentro del SLA
  - KR2: ≥ 85 % de citas cumplidas sin reprogramación
  - KR3: ≤ N fricciones operativas recurrentes por semana

## **4) Red de técnicos (capacidad mínima viable)**

**Hipótesis asociada:** H2, H3

**Experimento**

 Operar con una red pequeña (2–4 técnicos) sin depender críticamente de una sola persona.

**Entregables (Semana 0–1)**

- Lista de técnicos activos y de backup
- Checklist de selección:
  - Experiencia
  - Referencias
  - Prueba técnica
- Esquema de pago por servicio
- Reglas claras de materiales (compra, reembolso, markup)
- Manual técnico del piloto (1–2 páginas):
  - Estándares Maroa
  - Checklists
  - Documentación requerida (fotos, diagnóstico, recomendaciones)



**OKRs**

- O4: Asegurar capacidad operativa mínima
  - KR1: 100 % de servicios cubiertos sin cancelaciones por técnico
  - KR2: ≤ X % variabilidad en tiempos entre técnicos
  - KR3: 100 % de servicios documentados según estándar

## **5) Calidad y estandarización**

**Hipótesis asociada:** H3

**Experimento**

 Estandarizar el servicio y medir la consistencia, no la perfección.

**Entregables (Semana 1)**

- Checklist de mantenimiento A/C:
  - antes / durante / después
- Checklist de cierre:
  - limpieza, fotos, pruebas, recomendaciones, OK del cliente
- Formato de “Reporte Maroa” posvisita
- Protocolo de auditoría ligera (10–20 % de servicios)



**OKRs**

- O5: Garantizar calidad consistente y visible
  - KR1: ≥ 90 % de servicios “bien a la primera”
  - KR2: ≥ 95 % de reportes completos
  - KR3: ≤ X % retrabajos por causa evitable

## **6) Herramientas mínimas para validar**

**Hipótesis asociada:** H2, H4

**Experimento**

 Operar con herramientas simples que permitan medir sin sobreoptimizar.

**Entregables (Semana 0)**

- Stack definido: WhatsApp Business + formulario + Sheet/CRM ligero
- Tablero operativo con:
  - clientes, citas, técnicos, costos, estatus, incidencias
- Plantillas legales mínimas:
  - terms del piloto, autorización de trabajo, waiver
- Canal interno de operaciones





**OKRs**

- O6: Tener visibilidad operativa y financiera
  - KR1: 100 % de servicios registrados en el tablero
  - KR2: Costos por servicio visibles semanalmente
  - KR3: Incidencias registradas en tiempo real

## **7) Adquisición de clientes (llenar el piloto)**

**Hipótesis asociada:** H1, H5

**Experimento**

Validar que un sistema simple de outreach manual (WhatsApp-first) + referidos puede generar leads suficientes y convertirlos en clientes del piloto sin marketing pesado.

**Entregables (Semana 0–1)**

- Kit mínimo de adquisición (para copy/paste):
  - Mensajes listos para amigos/conocidos
  - Mensajes listos para grupos de WhatsApp (residenciales / vecinos / comunidad)
  - Mensaje para administradores / property managers / aliados
  - FAQ corta + CTA (“responde ‘Maroa’ para agendar”)
- Formulario de captación mínima (o intake por WhatsApp)
- Tracker simple de adquisición (pipeline):
  - Outreach → Interesado → Intake → Agendado → Completado → No fit 
  - (Regla: todo lead con próximo paso y fecha)
- Cadencia mínima de ejecución:
  - Rutina diaria de outreach + follow-ups
  - Revisión semanal de resultados por canal
- Esquema simple de referidos + mensaje post-servicio (activación)
- Definición del gancho (1 párrafo): alcance + promesa ‘cero drama’ + zona + cupo.
- Momento de pedir referido definido (al agendar y post-servicio) + script corto.
- (Opcional) si hay data suficiente: estimación simple de payback/CAC.



**OKRs**

- O7: Llenar el piloto con clientes relevantes
  - KR1: Cupo del piloto lleno en ≤ X semanas
  - KR2: ≥ Y % leads de clientes calificados
  - KR3: ≥ Z % de los prospectos vienen por referencia directa

## **8) Finanzas unitarias (núcleo de decisión)**

**Hipótesis asociada:** H4

**Experimento**

Medir el margen real por servicio y por cliente desde la semana 1.

**Entregables (Semana 1)**

- Estructura de costos por servicio:
  - mano de obra, transporte, materiales, retrabajos
- Pricing de correctivos:
  - diagnóstico + rangos por tipo de reparación
- Reporte semanal de margen
- Definición de caja mínima para contingencias

**OKRs**

- O8: Validar viabilidad económica del modelo
  - KR1: Margen bruto positivo por servicio
  - KR2: Variación de costos dentro de rango esperado
  - KR3: 0 quiebres operativos por falta de caja



## **9) Seguridad y riesgos**

**Hipótesis asociada:** H2

**Experimento**

 Reducir eventos críticos que comprometan la confianza.

**Entregables (Semana 0)**

- Protocolo de acceso a residenciales
- Protocolo de incidentes y reclamos
- Política de fotos y privacidad
- Definición de waiver o seguro simple (si aplica)

**OKRs**

- O9: Operar sin eventos críticos
  - KR1: 0 incidentes graves sin protocolo
  - KR2: 100 % técnicos identificados y registrados
  - KR3: 100 % cumplimiento de política de privacidad

## **10) Medición y feedback**

**Hipótesis asociada:** H5

**Experimento**

 Recoger feedback accionable inmediatamente después del servicio.

**Entregables (Semana 1)**

- Encuesta posservicio (≤ 1 minuto):
  - CSAT(customer satisfaction score) + pregunta abierta
- Guía de llamadas “momento wow” (script de llamadas)
- Registro de fricciones:
  - qué pasó, causa, solución, prevención
- Ritual de reunión semanal del piloto



**OKRs**

- O10: Aprender rápido y ajustar con datos
  - KR1: ≥ 80 % tasa de respuesta a encuestas
  - KR2: CSAT promedio ≥ X
  - KR3: Todas las fricciones tienen acción definida



## **11) Roadmap del piloto (4 semanas)**

**Semana 1**

- 5–10 servicios
- Ajuste de scripts y checklists

**Semana 2**

- Reducción de fricción operativa
- Ajuste de SLAs

**Semana 3**

- Aumento de volumen
- Validación de correctivos

**Semana 4**

- Evaluación de retención
- Decisión go / iterate / kill

**OKR final del piloto**

- O11: Tomar una decisión informada sobre el futuro de Maroa
  - KR1: Todas las hipótesis evaluadas con datos
  - KR2: Recomendación clara: escalar, ajustar o detener
  - KR3: Aprendizajes documentados para la siguiente fase





================================================================================
Page: Tareas / Timeline
Path: 0.2.1.3.1
Depth: 4
================================================================================



## Kanban of Pilot Tasks
| Experimento | Task | Owner | Status | Hipótesis | Notas |
| --- | --- | --- | --- | --- | --- |
| Definición del piloto (baseline de validación) | Documento “Definición del Piloto”  | Gabriella Bairan | Done | 1, 2 |  |
| Operación de Concierge (experiencia “cero drama”) | Flujo operativo end-to-end documentado | Erick Santana | Done | 2 |  |
| Definición del piloto (baseline de validación) | Matriz de criterios de éxito del piloto | Gabriella Bairan | Done | 1, 2 | Qué es (y por qué no es “lo mismo que OKRs”)<br/><br/>Los **OKRs** dicen *qué* quieren lograr a nivel macro (resultados/targets).  <br/>La **Matriz de Criterios de Éxito del Piloto** traduce eso a reglas operativas y de decisión: *cómo* se medirá cada experimento/hipótesis, con **umbrales mínimos (go/no-go)**, definiciones exactas, fuentes de datos, y quién decide qué pasa si se cumple o no.<br/><br/>En pocas palabras: **OKR = norte**. **Matriz = “pasamos o no pasamos” + cómo lo probamos sin ambigüedad**.<br/><br/><br/><br/>Deliverable esperado (lo que debe producir la persona)<br/><br/>**Una tabla matriz** (1–3 páginas) que conecte:<br/><br/>**Experimento → hipótesis → métrica → criterio de éxito → decisión**<br/><br/>**Documento de definiciones** (1 página) con:<br/><br/>fórmulas, reglas de conteo, ventanas de medición, segmentos, etc.<br/><br/>(Opcional pero ideal) **Mini-dashboard** (Google Sheet) que calcule automáticamente los criterios con datos del piloto.<br/><br/><br/><br/>Brief para delegar (copypaste)<br/><br/>**Objetivo:** Construir una *Matriz de Criterios de Éxito del Piloto* que convierta los OKRs y las hipótesis/experimentos en criterios medibles, con umbrales mínimos y reglas de decisión (Go / Pivot / Stop).  <br/>**Resultado:** Que al final del piloto podamos decidir con evidencia qué escalar, qué corregir y qué descartar, sin discusión semántica sobre métricas.<br/><br/><br/><br/>Outline de la matriz (columnas recomendadas)<br/><br/>Para **cada hipótesis/experimento**, incluir:<br/><br/>A) Identificación<br/><br/>ID / Nombre del experimento<br/>Hipótesis que valida<br/>OKR relacionado (link o código)<br/>Segmento / contexto (hogares, residenciales, tipo de A/C, zona)<br/><br/>B) Métrica y definición (anti-ambigüedad)<br/><br/>Métrica principal (1) y métricas secundarias (2–3)<br/>Definición exacta (qué cuenta / qué no cuenta)<br/>Fórmula (ej. % = numerador/denominador)<br/>Ventana de medición (ej. 7 días post-servicio / 30 días de suscripción)<br/>Fuente de datos (WhatsApp/Sheet/CRM/encuesta)<br/>Cadencia (diaria/semanal/por servicio)<br/><br/>C) Criterios de éxito (la parte clave)<br/><br/>**Umbral mínimo (Go/No-Go)**: lo mínimo aceptable para considerar “validado”<br/>Objetivo (target): lo deseado<br/>Stretch: “excelente”<br/>Criterios de falla (“Red flags”): señales que obligan a pausar aunque se cumplan otras métricas<br/><br/>Recomendación: usa 3 niveles para evitar “gris”:<br/><br/>**Go (validado)**<br/>**Pivot (parcial / ajustar)**<br/>**Stop (no validado / costo alto / riesgo)**<br/><br/>D) Requisitos de validez (para que el dato sea creíble)<br/><br/>Tamaño mínimo de muestra (ej. N servicios / N hogares / N tickets)<br/>Segmentación mínima (ej. separar correctivo vs preventivo)<br/>Criterio de calidad de datos (ej. % de reportes con fotos completas)<br/>Supuestos y limitaciones (ej. temporada alta/baja)<br/><br/>E) Responsable y decisión<br/><br/>Owner (quién mide)<br/>Owner de operación (quién ejecuta)<br/>Fecha de corte / checkpoint<br/>Decisión preacordada si es Go / Pivot / Stop (qué acción exacta)<br/><br/><br/><br/>Ejemplos de criterios (para que lo aterricen)<br/><br/>**Calidad técnica:** “First-time fix rate ≥ X%” o “Retrabajos ≤ Y%”<br/>**Experiencia:** “CSAT ≥ X/5” o “NPS ≥ X”<br/>**Operación:** “Tiempo promedio de agendamiento ≤ X horas” / “On-time arrival ≥ X%”<br/>**Economía unitaria:** “Margen por servicio ≥ X” / “Costo de retrabajos ≤ Y% ingresos”<br/>**Demanda/retención:** “Conversión a suscripción ≥ X%” / “Churn 30 días ≤ Y%”<br/>**Estandarización:** “% servicios con checklist completo y evidencia ≥ X%”<br/><br/><br/><br/>Notas importantes (para evitar que la matriz sea solo “otra tabla”)<br/><br/>La matriz debe incluir **decisiones accionables** (si pasa X, hacemos Y), no solo targets.<br/>Debe existir **un criterio mínimo por hipótesis**. Si no hay umbral, no hay decisión.<br/>Debe indicar **instrumentación**: cómo se captura el dato en el piloto (si no se captura, la métrica no existe). |
| Oferta y pricing (objeto de compra) | Ficha de paquetes del piloto: | Gabriella Bairan | Done | 1, 4 | Suscripción y qué incluye exactamente<br/>Número de mantenimientos<br/>Beneficios claros vs mercado informal |
| Oferta y pricing (objeto de compra) | Beneficios exclusivos del piloto (fundadores / early adopters) | Erick Santana | Done | 1, 4 |  |
| Oferta y pricing (objeto de compra) | Políticas del piloto | Gabriella Bairan | Done | 1, 4 | Cancelación, reprogramación, no-show<br/>Garantía del trabajo y retrabajos |
| Herramientas mínimas para validar | Canal interno de operaciones | Gabriella Bairan | Done | 2, 4 |  |
| Adquisición de clientes (llenar el piloto) | Cadencia mínima de ejecución | Gabriella Bairan | Done |  | Rutina diaria de outreach + follow-ups<br/>Revisión semanal de resultados por canal<br/><br/> |
| Adquisición de clientes (llenar el piloto) | Esquema simple de referidos + mensaje post-servicio (activación) | Gabriella Bairan | Done | 1 |  |
| Adquisición de clientes (llenar el piloto) | Kit mínimo de adquisición (para copy/paste) | Gabriella Bairan | Done | 1, 5 | Kit mínimo de adquisición (para copy/paste):<br/>Mensajes listos para amigos/conocidos<br/>Mensajes listos para grupos de WhatsApp (residenciales / vecinos / comunidad)<br/>Mensaje para administradores / property managers / aliados<br/>FAQ corta + CTA (“responde ‘Maroa’ para agendar”) |
| Adquisición de clientes (llenar el piloto) | Definición del gancho (1 párrafo): alcance + promesa ‘cero drama’ + zona + cupo | Gabriella Bairan | Done | 1, 5 |  |
| Adquisición de clientes (llenar el piloto) | Momento de pedir referido definido (al agendar y post-servicio) + script corto | Gabriella Bairan | Done | 1, 5 |  |
| Oferta y pricing (objeto de compra) | Definición de método de pago y ciclo | Erick Santana | Done | 1, 4 |  |
| Operación de Concierge (experiencia “cero drama”) | SLAs internos definidos | Gabriella Bairan | Done | 2 |  |
| Adquisición de clientes (llenar el piloto) | Formulario de captación mínima (o intake por WhatsApp) | Erick Santana | Planned | 1 |  |
| Operación de Concierge (experiencia “cero drama”) | Guiones operativos | Gabriella Bairan | Done | 2 |  |
| Adquisición de clientes (llenar el piloto) | Tracker simple de adquisición (pipeline) | Erick Santana | Planned | 1 | Outreach → Interesado → Intake → Agendado → Completado → No fit <br/>(Regla: todo lead con próximo paso y fecha) |
| Operación de Concierge (experiencia “cero drama”) | Plantillas operativas | Gabriella Bairan | Done | 2 |  |
| Herramientas mínimas para validar | Plantillas legales mínimas | Erick Santana | Planned | 2, 4 | Plantillas legales mínimas:<br/>terms del piloto, autorización de trabajo, waiver |
| Operación de Concierge (experiencia “cero drama”) | Regla operativa | Gabriella Bairan | Planned | 2 |  |
| Herramientas mínimas para validar | Stack definido: WhatsApp Business + formulario + Sheet/CRM ligero | Erick Santana | Planned | 2, 4 |  |
| Herramientas mínimas para validar | Tablero operativo  | Erick Santana | Planned | 2, 4 | Tablero operativo con:<br/>clientes, citas, técnicos, costos, estatus, incidencias |
| Red de técnicos (capacidad mínima viable) | Lista de técnicos activos y de backup |  | Not started | 2, 3 |  |
| Red de técnicos (capacidad mínima viable) | Checklist de selección |  | Not started | 2, 3 |  |
| Red de técnicos (capacidad mínima viable) | Esquema de pago por servicio |  | Not started | 2, 3 |  |
| Red de técnicos (capacidad mínima viable) | Reglas claras de materiales  |  | Not started | 2, 3 |  |
| Red de técnicos (capacidad mínima viable) | Manual técnico del piloto |  | Not started | 2, 3 |  |
| Calidad y estandarización | Checklist de mantenimiento A/C |  | Not started | 3 |  |
| Calidad y estandarización | Checklist de cierre |  | Not started | 3 |  |
| Calidad y estandarización | Formato de “Reporte Maroa” posvisita |  | Not started | 3 |  |
| Calidad y estandarización | Protocolo de auditoría ligera  |  | Not started | 3 |  |
| Finanzas unitarias (núcleo de decisión) | Estructura de costos por servicio |  | Not started | 4 |  |
| Finanzas unitarias (núcleo de decisión) | Pricing de correctivos |  | Not started | 4 |  |
| Finanzas unitarias (núcleo de decisión) | Reporte semanal de margen |  | Not started | 4 |  |
| Finanzas unitarias (núcleo de decisión) | Definición de caja mínima para contingencias |  | Not started | 4 |  |
| Seguridad y riesgos | Protocolo de acceso a residenciales |  | Not started | 2 |  |
| Seguridad y riesgos | Protocolo de incidentes y reclamos |  | Not started | 2 |  |
| Seguridad y riesgos | Política de fotos y privacidad |  | Not started | 2 |  |
| Seguridad y riesgos | Definición de waiver o seguro simple (si aplica) |  | Not started | 2 |  |
| Medición y feedback | Encuesta posservicio |  | Not started | 5 |  |
| Medición y feedback | Guía de llamadas “momento wow” |  | Not started | 5 |  |
| Medición y feedback | Registro de fricciones |  | Not started | 5 |  |
| Medición y feedback | Ritual de reunión semanal del piloto |  | Not started | 5 |  |
| Adquisición de clientes (llenar el piloto) | (Opcional) si hay data suficiente: estimación simple de payback/CAC |  | Not started | 1, 5 |  |
| Administración General | Dashboard con OKRs | Erick Santana | Not started |  |  |
| Administración General | Crear NotebookLM con los documentos del piloto y otro documentos de Maroa | Erick Santana | Planned |  |  |




## Pilot Tasks
| Experimento | Task | Owner | Status | Due date | Hipótesis | Notas |
| --- | --- | --- | --- | --- | --- | --- |
| Definición del piloto (baseline de validación) | Documento “Definición del Piloto”  | Gabriella Bairan | Done | Dec 17 | 1, 2 |  |
| Operación de Concierge (experiencia “cero drama”) | Flujo operativo end-to-end documentado | Erick Santana | Done | Dec 17 | 2 |  |
| Definición del piloto (baseline de validación) | Matriz de criterios de éxito del piloto | Gabriella Bairan | Done | Dec 19 | 1, 2 | Qué es (y por qué no es “lo mismo que OKRs”)<br/><br/>Los **OKRs** dicen *qué* quieren lograr a nivel macro (resultados/targets).  <br/>La **Matriz de Criterios de Éxito del Piloto** traduce eso a reglas operativas y de decisión: *cómo* se medirá cada experimento/hipótesis, con **umbrales mínimos (go/no-go)**, definiciones exactas, fuentes de datos, y quién decide qué pasa si se cumple o no.<br/><br/>En pocas palabras: **OKR = norte**. **Matriz = “pasamos o no pasamos” + cómo lo probamos sin ambigüedad**.<br/><br/><br/><br/>Deliverable esperado (lo que debe producir la persona)<br/><br/>**Una tabla matriz** (1–3 páginas) que conecte:<br/><br/>**Experimento → hipótesis → métrica → criterio de éxito → decisión**<br/><br/>**Documento de definiciones** (1 página) con:<br/><br/>fórmulas, reglas de conteo, ventanas de medición, segmentos, etc.<br/><br/>(Opcional pero ideal) **Mini-dashboard** (Google Sheet) que calcule automáticamente los criterios con datos del piloto.<br/><br/><br/><br/>Brief para delegar (copypaste)<br/><br/>**Objetivo:** Construir una *Matriz de Criterios de Éxito del Piloto* que convierta los OKRs y las hipótesis/experimentos en criterios medibles, con umbrales mínimos y reglas de decisión (Go / Pivot / Stop).  <br/>**Resultado:** Que al final del piloto podamos decidir con evidencia qué escalar, qué corregir y qué descartar, sin discusión semántica sobre métricas.<br/><br/><br/><br/>Outline de la matriz (columnas recomendadas)<br/><br/>Para **cada hipótesis/experimento**, incluir:<br/><br/>A) Identificación<br/><br/>ID / Nombre del experimento<br/>Hipótesis que valida<br/>OKR relacionado (link o código)<br/>Segmento / contexto (hogares, residenciales, tipo de A/C, zona)<br/><br/>B) Métrica y definición (anti-ambigüedad)<br/><br/>Métrica principal (1) y métricas secundarias (2–3)<br/>Definición exacta (qué cuenta / qué no cuenta)<br/>Fórmula (ej. % = numerador/denominador)<br/>Ventana de medición (ej. 7 días post-servicio / 30 días de suscripción)<br/>Fuente de datos (WhatsApp/Sheet/CRM/encuesta)<br/>Cadencia (diaria/semanal/por servicio)<br/><br/>C) Criterios de éxito (la parte clave)<br/><br/>**Umbral mínimo (Go/No-Go)**: lo mínimo aceptable para considerar “validado”<br/>Objetivo (target): lo deseado<br/>Stretch: “excelente”<br/>Criterios de falla (“Red flags”): señales que obligan a pausar aunque se cumplan otras métricas<br/><br/>Recomendación: usa 3 niveles para evitar “gris”:<br/><br/>**Go (validado)**<br/>**Pivot (parcial / ajustar)**<br/>**Stop (no validado / costo alto / riesgo)**<br/><br/>D) Requisitos de validez (para que el dato sea creíble)<br/><br/>Tamaño mínimo de muestra (ej. N servicios / N hogares / N tickets)<br/>Segmentación mínima (ej. separar correctivo vs preventivo)<br/>Criterio de calidad de datos (ej. % de reportes con fotos completas)<br/>Supuestos y limitaciones (ej. temporada alta/baja)<br/><br/>E) Responsable y decisión<br/><br/>Owner (quién mide)<br/>Owner de operación (quién ejecuta)<br/>Fecha de corte / checkpoint<br/>Decisión preacordada si es Go / Pivot / Stop (qué acción exacta)<br/><br/><br/><br/>Ejemplos de criterios (para que lo aterricen)<br/><br/>**Calidad técnica:** “First-time fix rate ≥ X%” o “Retrabajos ≤ Y%”<br/>**Experiencia:** “CSAT ≥ X/5” o “NPS ≥ X”<br/>**Operación:** “Tiempo promedio de agendamiento ≤ X horas” / “On-time arrival ≥ X%”<br/>**Economía unitaria:** “Margen por servicio ≥ X” / “Costo de retrabajos ≤ Y% ingresos”<br/>**Demanda/retención:** “Conversión a suscripción ≥ X%” / “Churn 30 días ≤ Y%”<br/>**Estandarización:** “% servicios con checklist completo y evidencia ≥ X%”<br/><br/><br/><br/>Notas importantes (para evitar que la matriz sea solo “otra tabla”)<br/><br/>La matriz debe incluir **decisiones accionables** (si pasa X, hacemos Y), no solo targets.<br/>Debe existir **un criterio mínimo por hipótesis**. Si no hay umbral, no hay decisión.<br/>Debe indicar **instrumentación**: cómo se captura el dato en el piloto (si no se captura, la métrica no existe). |
| Oferta y pricing (objeto de compra) | Ficha de paquetes del piloto: | Gabriella Bairan | Done | Dec 19 | 1, 4 | Suscripción y qué incluye exactamente<br/>Número de mantenimientos<br/>Beneficios claros vs mercado informal |
| Oferta y pricing (objeto de compra) | Beneficios exclusivos del piloto (fundadores / early adopters) | Erick Santana | Done | Dec 19 | 1, 4 |  |
| Oferta y pricing (objeto de compra) | Políticas del piloto | Gabriella Bairan | Done | Dec 19 | 1, 4 | Cancelación, reprogramación, no-show<br/>Garantía del trabajo y retrabajos |
| Herramientas mínimas para validar | Canal interno de operaciones | Gabriella Bairan | Done | Dec 19 | 2, 4 |  |
| Adquisición de clientes (llenar el piloto) | Cadencia mínima de ejecución | Gabriella Bairan | Done | Dec 22 |  | Rutina diaria de outreach + follow-ups<br/>Revisión semanal de resultados por canal<br/><br/> |
| Adquisición de clientes (llenar el piloto) | Esquema simple de referidos + mensaje post-servicio (activación) | Gabriella Bairan | Done | Dec 22 | 1 |  |
| Adquisición de clientes (llenar el piloto) | Kit mínimo de adquisición (para copy/paste) | Gabriella Bairan | Done | Dec 22 | 1, 5 | Kit mínimo de adquisición (para copy/paste):<br/>Mensajes listos para amigos/conocidos<br/>Mensajes listos para grupos de WhatsApp (residenciales / vecinos / comunidad)<br/>Mensaje para administradores / property managers / aliados<br/>FAQ corta + CTA (“responde ‘Maroa’ para agendar”) |
| Adquisición de clientes (llenar el piloto) | Definición del gancho (1 párrafo): alcance + promesa ‘cero drama’ + zona + cupo | Gabriella Bairan | Done | Dec 26 | 1, 5 |  |
| Adquisición de clientes (llenar el piloto) | Momento de pedir referido definido (al agendar y post-servicio) + script corto | Gabriella Bairan | Done | Dec 26 | 1, 5 |  |
| Oferta y pricing (objeto de compra) | Definición de método de pago y ciclo | Erick Santana | Done | Jan 12 | 1, 4 |  |
| Operación de Concierge (experiencia “cero drama”) | SLAs internos definidos | Gabriella Bairan | Done | Jan 13 | 2 |  |
| Adquisición de clientes (llenar el piloto) | Formulario de captación mínima (o intake por WhatsApp) | Erick Santana | Planned | Jan 13 | 1 |  |
| Operación de Concierge (experiencia “cero drama”) | Guiones operativos | Gabriella Bairan | Done | Jan 14 | 2 |  |
| Adquisición de clientes (llenar el piloto) | Tracker simple de adquisición (pipeline) | Erick Santana | Planned | Jan 14 | 1 | Outreach → Interesado → Intake → Agendado → Completado → No fit <br/>(Regla: todo lead con próximo paso y fecha) |
| Operación de Concierge (experiencia “cero drama”) | Plantillas operativas | Gabriella Bairan | Done | Jan 15 | 2 |  |
| Herramientas mínimas para validar | Plantillas legales mínimas | Erick Santana | Planned | Jan 15 | 2, 4 | Plantillas legales mínimas:<br/>terms del piloto, autorización de trabajo, waiver |
| Operación de Concierge (experiencia “cero drama”) | Regla operativa | Gabriella Bairan | Planned | Jan 16 | 2 |  |
| Herramientas mínimas para validar | Stack definido: WhatsApp Business + formulario + Sheet/CRM ligero | Erick Santana | Planned | Jan 16 | 2, 4 |  |
| Herramientas mínimas para validar | Tablero operativo  | Erick Santana | Planned | Jan 19 | 2, 4 | Tablero operativo con:<br/>clientes, citas, técnicos, costos, estatus, incidencias |
| Red de técnicos (capacidad mínima viable) | Lista de técnicos activos y de backup |  | Not started |  | 2, 3 |  |
| Red de técnicos (capacidad mínima viable) | Checklist de selección |  | Not started |  | 2, 3 |  |
| Red de técnicos (capacidad mínima viable) | Esquema de pago por servicio |  | Not started |  | 2, 3 |  |
| Red de técnicos (capacidad mínima viable) | Reglas claras de materiales  |  | Not started |  | 2, 3 |  |
| Red de técnicos (capacidad mínima viable) | Manual técnico del piloto |  | Not started |  | 2, 3 |  |
| Calidad y estandarización | Checklist de mantenimiento A/C |  | Not started |  | 3 |  |
| Calidad y estandarización | Checklist de cierre |  | Not started |  | 3 |  |
| Calidad y estandarización | Formato de “Reporte Maroa” posvisita |  | Not started |  | 3 |  |
| Calidad y estandarización | Protocolo de auditoría ligera  |  | Not started |  | 3 |  |
| Finanzas unitarias (núcleo de decisión) | Estructura de costos por servicio |  | Not started |  | 4 |  |
| Finanzas unitarias (núcleo de decisión) | Pricing de correctivos |  | Not started |  | 4 |  |
| Finanzas unitarias (núcleo de decisión) | Reporte semanal de margen |  | Not started |  | 4 |  |
| Finanzas unitarias (núcleo de decisión) | Definición de caja mínima para contingencias |  | Not started |  | 4 |  |
| Seguridad y riesgos | Protocolo de acceso a residenciales |  | Not started |  | 2 |  |
| Seguridad y riesgos | Protocolo de incidentes y reclamos |  | Not started |  | 2 |  |
| Seguridad y riesgos | Política de fotos y privacidad |  | Not started |  | 2 |  |
| Seguridad y riesgos | Definición de waiver o seguro simple (si aplica) |  | Not started |  | 2 |  |
| Medición y feedback | Encuesta posservicio |  | Not started |  | 5 |  |
| Medición y feedback | Guía de llamadas “momento wow” |  | Not started |  | 5 |  |
| Medición y feedback | Registro de fricciones |  | Not started |  | 5 |  |
| Medición y feedback | Ritual de reunión semanal del piloto |  | Not started |  | 5 |  |
| Adquisición de clientes (llenar el piloto) | (Opcional) si hay data suficiente: estimación simple de payback/CAC |  | Not started |  | 1, 5 |  |
| Administración General | Dashboard con OKRs | Erick Santana | Not started |  |  |  |
| Administración General | Crear NotebookLM con los documentos del piloto y otro documentos de Maroa | Erick Santana | Planned |  |  |  |








## Table 4
| Experimento | Task | Owner | Status | Due date | Hipótesis | Notas |
| --- | --- | --- | --- | --- | --- | --- |
| Definición del piloto (baseline de validación) | Documento “Definición del Piloto” |  |  |  | 1,2 |  |
| Definición del piloto (baseline de validación) | Matriz de criterios de éxito del piloto |  |  |  | 1,2 |  |
| Definición del piloto (baseline de validación) | Definir KPIs operativos (SLA, tasa de no-show, rework, NPS) |  |  |  | 1,2 |  |
| Definición del piloto (baseline de validación) | Definir alcance geográfico y horarios del piloto |  |  |  | 1,2 |  |
| Definición del piloto (baseline de validación) | Definir “Definition of Done” para cada tipo de servicio |  |  |  | 1,2 |  |
| Definición del piloto (baseline de validación) | Crear checklist de salida: qué se entrega al cliente en cada servicio |  |  |  | 1,2 |  |
| Oferta y pricing (objeto de compra) | Ficha de paquetes del piloto |  |  |  | 1,4 |  |
| Oferta y pricing (objeto de compra) | Definir add-ons (materiales, urgencia, extra unidad, etc.) |  |  |  | 1,4 |  |
| Oferta y pricing (objeto de compra) | Definir política de “cargo de visita” (mantenimiento preventivo vs. diagnóstico) |  |  |  | 1,4 |  |
| Oferta y pricing (objeto de compra) | Definir pricing para hogares con 1/2/3/4 unidades (tiempo + ayudante) |  |  |  | 1,4 |  |
| Oferta y pricing (objeto de compra) | Plantilla de cotización (WhatsApp + PDF opcional) |  |  |  | 1,4 |  |
| Oferta y pricing (objeto de compra) | Guía de objeciones y “cómo vender” el plan base vs. premium |  |  |  | 1,4 |  |
| Operación de Concierge (experiencia “cero drama”) | Flujo operativo end-to-end documentado |  |  |  | 2 |  |
| Operación de Concierge (experiencia “cero drama”) | SOP: Intake (captura de datos, fotos, ubicación, disponibilidad) |  |  |  | 2 |  |
| Operación de Concierge (experiencia “cero drama”) | SOP: Scheduling (confirmación, recordatorios, buffers) |  |  |  | 2 |  |
| Operación de Concierge (experiencia “cero drama”) | SOP: Handoff a técnico (brief, checklist, notas clave) |  |  |  | 2 |  |
| Operación de Concierge (experiencia “cero drama”) | SOP: Cierre (reporte, cobro, garantía, solicitud de reseña) |  |  |  | 2 |  |
| Operación de Concierge (experiencia “cero drama”) | Macros/plantillas WhatsApp (intake, confirmación, recordatorio, post-servicio) |  |  |  | 2 |  |
| Operación de Concierge (experiencia “cero drama”) | Script de llamadas para confirmación de cita |  |  |  | 2 |  |
| Pagos y suscripciones (experimento) | Definir flujo de cobro one-time (link de pago / transferencia / efectivo) |  |  |  | 3 |  |
| Pagos y suscripciones (experimento) | Plan A: explorar integración PixelPay/Tilopay + banco RD (viabilidad real) |  |  |  | 3 |  |
| Pagos y suscripciones (experimento) | Plan B: Stripe (estructura, requisitos, alternativa de operación) |  |  |  | 3 |  |
| Pagos y suscripciones (experimento) | Definir regla: “suscripción activa solo tras aprobación física por técnico Maroa” |  |  |  | 3 |  |
| Pagos y suscripciones (experimento) | Implementar estado “pre-suscrito” (captura de tarjeta + pendiente de aprobación) |  |  |  | 3 |  |
| Pagos y suscripciones (experimento) | SOP de aprobaciones (criterios, quién aprueba, qué evidencia queda) |  |  |  | 3 |  |
| Políticas del piloto (confianza y control) | Políticas: cancelación, reprogramación y no-show |  |  |  | 4 |  |
| Políticas del piloto (confianza y control) | Políticas: garantía del trabajo y retrabajos |  |  |  | 4 |  |
| Políticas del piloto (confianza y control) | Política de materiales: quién compra, cómo se factura, evidencia (fotos/recibos) |  |  |  | 4 |  |
| Políticas del piloto (confianza y control) | Política de “daños y responsabilidad” (riesgos típicos y cómo se maneja) |  |  |  | 4 |  |
| Técnicos y ejecución en campo (experimento) | Definir criterios de reclutamiento/selección de técnicos |  |  |  | 5 |  |
| Técnicos y ejecución en campo (experimento) | Armar kit del técnico (uniforme mínimo, herramientas, consumibles) |  |  |  | 5 |  |
| Técnicos y ejecución en campo (experimento) | Checklist de visita (antes/durante/después) |  |  |  | 5 |  |
| Técnicos y ejecución en campo (experimento) | Estandarizar reporte técnico con fotos (antes/después) |  |  |  | 5 |  |
| Técnicos y ejecución en campo (experimento) | Definir rol de ayudante: tareas, tiempos, costo por servicio |  |  |  | 5 |  |
| Técnicos y ejecución en campo (experimento) | SOP: control de calidad (QA) y auditoría aleatoria de servicios |  |  |  | 5 |  |
| Core / Tablero piloto (operación mínima) | Definir estructura del “Tablero Piloto” (Airtable/Sheets) |  |  |  | 6 |  |
| Core / Tablero piloto (operación mínima) | Crear tablas: Clientes, Equipos, Órdenes, Pagos, Técnicos, Inventario básico |  |  |  | 6 |  |
| Core / Tablero piloto (operación mínima) | Crear vistas: Pipeline (intake→agendado→en ruta→en sitio→cerrado) |  |  |  | 6 |  |
| Core / Tablero piloto (operación mínima) | Automatizaciones mínimas (recordatorios, seguimiento, alertas de no-show) |  |  |  | 6 |  |
| Core / Tablero piloto (operación mínima) | Plantilla de “pasaporte del equipo” (historial de mantenimientos) |  |  |  | 6 |  |
| Marketing y adquisición (experimento) | Definir oferta de entrada (mensaje corto + CTA) |  |  |  | 7 |  |
| Marketing y adquisición (experimento) | Lista de canales del piloto (grupos, admins/aliados, referidos) |  |  |  | 7 |  |
| Marketing y adquisición (experimento) | Crear tracking de leads (fuente, costo, conversión) |  |  |  | 7 |  |
| Marketing y adquisición (experimento) | Paquete de referidos (reglas + mensaje + código simple) |  |  |  | 7 |  |
| Marketing y adquisición (experimento) | Script para aliados/admins (qué ganan y cómo se activa) |  |  |  | 7 |  |
| CX y retención (experimento) | Encuesta post-servicio (3–5 preguntas) |  |  |  | 8 |  |
| CX y retención (experimento) | Playbook de recuperación (quejas, retrasos, rework, reembolso parcial) |  |  |  | 8 |  |
| CX y retención (experimento) | Flujo de reseñas (Google/WhatsApp) + timing |  |  |  | 8 |  |
| Analítica y aprendizaje (experimento) | Dashboard semanal (servicios, margen, NPS, rework, no-show, SLA) |  |  |  | 9 |  |
| Analítica y aprendizaje (experimento) | Reunión semanal de retro (agenda + notas + decisiones) |  |  |  | 9 |  |
| Analítica y aprendizaje (experimento) | Log de experimentos (qué cambiamos, por qué, resultado) |  |  |  | 9 |  |
| Legal/Administrativo (higiene mínima) | NDA/contratos base para técnicos/aliados (si aplica) |  |  |  | 10 |  |
| Legal/Administrativo (higiene mínima) | Términos de servicio del piloto (versión corta) |  |  |  | 10 |  |
| Legal/Administrativo (higiene mínima) | Política de privacidad para captura de datos (versión corta) |  |  |  | 10 |  |










## Pilot Tasks (Elba Sandbox)
| Experimento | Task | Owner | Status | Due date | Hipótesis | Notas |
| --- | --- | --- | --- | --- | --- | --- |
|  | Formulario (Google Form o Coda) para las entrevistas de los Técnicos | Erick Santana | Not started | Jan 16 |  |  |
|  | Entrevista Tecnicos | Elba Asuncion |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |




================================================================================
Page: Definición del piloto (baseline de validación)
Path: 0.2.1.3.2
Depth: 4
================================================================================

**Hipótesis asociada:** H1, H2

**Experimento**

 Delimitar estrictamente qué es y qué no es Maroa durante el piloto y observar la adopción sin confusión operativa.

**Entregables (Semana 0)**

- Documento “Definición del Piloto” (1–2 páginas):
  - Qué es Maroa / qué no es
  - Alcance: A/C residencial, preventivo + correctivo ligero
  - Exclusiones explícitas
  - Zona exacta de Punta Cana y horarios de cobertura
  - Cupo máximo del piloto (hogares / suscripciones)
- Matriz de criterios de éxito del piloto

**OKRs**

- O1: Ejecutar un piloto controlado y medible
  - KR1: 100 % de servicios del piloto se ejecuta dentro del alcance definido
  - KR2: 0 servicios fuera de zona u horario acordado
  - KR3: Criterios de éxito claros antes del primer servicio



================================================================================
Page: Definición del Piloto Maroa (v0.1)
Path: 0.2.1.3.2.1
Depth: 5
================================================================================

**Horizonte:** 4 semanas

**Objetivo:** validar (no escalar) la propuesta y la operación “concierge” para mantenimiento de A/C residencial en Punta Cana.

**Principio del piloto:** *“Tranquilidad, cero drama”* → un solo punto de contacto (Maroa). El cliente no gestiona técnicos ni pagos.



## **1) Qué es Maroa (durante el piloto)**

**Maroa es un concierge de mantenimiento de A/C residencial** que:

- Recibe la solicitud (WhatsApp/Formulario), entiende el caso y confirma alcance.
- Agenda y coordina la visita del técnico (con ventana de llegada).
- Estandariza el servicio con **checklists** y evidencia (**fotos + reporte**).
- Cotiza, cobra y gestiona garantías/retrabajos según política.
- Cierra el servicio con confirmación y feedback (encuesta rápida + registro de fricciones).

**Resultado esperado para el cliente:**

“Pedí el servicio, me confirmaron, llegaron, resolvieron/diagnosticaron, me entregaron reporte y recomendaciones. Sin estrés.”



## **2) Qué NO es Maroa (durante el piloto)**

Para evitar confusión operativa, **Maroa NO es**:

- Una tienda de repuestos o ferretería (podemos gestionar materiales *solo* dentro de política definida).
- Un servicio “24/7 emergencias” (solo dentro de horarios del piloto).
- Un instalador de proyectos grandes, remodelaciones, ductería o sistemas centrales.
- Un servicio multi-categoría (plomería/electricidad/etc.) durante estas 4 semanas.
- Un marketplace donde el cliente negocia con el técnico: **no hay negociación ni pago directo al técnico**.



## **3) Alcance del piloto (qué sí cubre)**

### **3.1 Equipos cubiertos**

- **A/C residencial tipo split (pared) y unidades residenciales comunes.**
- Atención **en hogares/apartamentos** (no comercios).

### **3.2 Tipos de servicio cubiertos**

**A) Preventivo (mantenimiento):**

Incluye, como mínimo:

- Inspección general, limpieza básica según checklist.
- Revisión de drenaje, filtros y parámetros operativos básicos.
- Reporte con estado del equipo + recomendaciones.

**B) Correctivo ligero (reparación menor):**

Incluye:

- Diagnóstico en sitio y **reparaciones simples** que no requieren obra mayor.
- Ejemplos típicos (siempre sujeto a evaluación): drenaje obstruido, ajustes menores, cambio de capacitor/contactor, limpieza correctiva, corrección de falsos contactos, sellos menores.

Regla: si el correctivo requiere partes especiales, múltiples visitas o intervención mayor, **se considera “fuera de alcance”** o se cotiza como “correctivo fuera de piloto” (ver exclusiones).



## **4) Exclusiones explícitas (fuera de alcance del piloto)**

**No se cubre (por defecto) durante el piloto:**

- Instalaciones completas / reinstalaciones / cambios de ubicación.
- Trabajos con **obra civil**, ductería, plafones complejos, perforaciones mayores.
- Sistemas comerciales, VRF/VRV, chillers, paquetes industriales.
- Diagnósticos prolongados que requieran desarmar completamente unidades o múltiples visitas.
- Recarga de refrigerante **sin protocolo de fuga** (si hay fuga: se diagnostica y se propone solución, pero no “relleno” sin corrección).
- Equipos en condiciones inseguras (riesgo eléctrico/estructura) o sin acceso autorizado.
- Servicios fuera de zona/horario del piloto.
- Cualquier cosa no descrita arriba como Preventivo o Correctivo Ligero.

**Criterio de corte:**

Si el técnico o concierge determina que el caso excede el alcance, Maroa **cierra como “Diagnóstico + Recomendación”** y propone el siguiente paso (con cotización separada si aplica).



## **5) Zona del piloto y cobertura**

### **5.1 Zona exacta (propuesta v0.1 para operar sin dispersión)**

**Cobertura piloto: “Punta Cana”** dentro de un radio manejable para cumplir SLAs.

**Incluye (sugerido):**

- Ciudad La Palma
- Residenciales de Grupo Punta Cana
- (Opcional) Cap Cana **solo** si se decide como sub-zona y no rompe tiempos

### **5.2 Horarios de cobertura (sugerido para consistencia)**

- **Lunes a viernes:** 8:00 a.m. – 6:00 p.m.
- **Sábado:** 8:00 a.m. – 12:00 p.m.
- **Ventanas de llegada:** 2 horas (ej. 9–11 / 11–1 / 2–4 / 4–6)
- **Horas no regulares:** 7-9 / 6-8 / 8-10 (salvo excepción aprobada por Maroa y para casos donde el técnico esté dispuesto con un surcharge por la hora).
- **Domingos y feriados:** no operativos (salvo excepción aprobada por Maroa  y para casos donde el técnico esté dispuesto con un surcharge por el día).



## **6) Cupo máximo del piloto (hogares / suscripciones)**

Para mantener control y poder aprender rápido:

**Cupo recomendado (v0.1):**

- **Máximo 25 hogares**.
- Límite adicional operativo: **máximo 10 hogares por semana** (ajustable según capacidad real).

**Racional del cupo:**

Permite ejecutar el plan (5–10 hogares en la semana 1 y subir gradualmente) sin romper SLAs ni estándares de documentación.



## **7) Reglas operativas del piloto (resumen rápido)**

- **Un solo punto de contacto:** Maroa (concierge).
- **Evidencia obligatoria:** checklist + fotos + “Reporte Maroa” por servicio.
- **Pagos:** siempre a Maroa, nunca al técnico.
- **Alcance estricto:** lo fuera de alcance se documenta y se propone alternativa.
- **Calidad mínima:** “bien a la primera” + política de retrabajo/garantía según términos del piloto.

  


================================================================================
Page: Matriz de validación del piloto
Path: 0.2.1.3.2.2
Depth: 5
================================================================================

| Column 1 | Column 2 | Column 3 | Column 4 | Column 5 | Column 6 | Column 7 | Column 8 | Column 9 | Column 10 | Column 11 | Column 12 | Column 13 | Column 14 | Column 15 | Column 16 | Column 17 | Column 18 | Column 19 | Column 20 | Column 21 | Column 22 | Column 23 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ID Experimento | Hipótesis | OKR | Segmento / Contexto | Métrica principal | Métricas secundarias | Definición / Fórmula | Ventana | Fuente de datos | Cadencia | Umbral Go (mínimo) | Pivot | Stop | Target | Stretch | Red flags (pausa aunque “vaya bien”) | Muestra mínima (validez) | Owner medición | Owner operación | Checkpoint | Acción si Go | Acción si Pivot | Acción si Stop |
| E1 Demanda pagada + claridad | H1, H4 | O2, O7 | Leads calificados en zona; A/C residencial; canal vecinos/WhatsApp | Conversión a pago | % entiende oferta sin explicación; % objeción precio; % referidos | Conversión = #Pagos / #Leads calificados (pago = transacción confirmada) | 0–7 días desde 1er contacto | WhatsApp + Form + Sheet Leads + comprobantes | Semanal | ≥20% | 10–19% | <10% | 25% | 35% | >20% “no entendí”; >15% disputas por alcance/precio | N≥30 leads calificados o N≥10 pagos | Gabby | Erick | Semana 2 y 4 | Mantener oferta; preparar fase 2 | Ajustar copy/paquete/políticas y re-test 7 días | Pausar adquisición y rediseñar oferta |
| E2 Operación concierge (SLAs) | H2 | O3, O6 | Tickets dentro de zona/horario | % respuestas dentro SLA | Tiempo a agendar; % on-time; % reprogramación; no-shows | % SLA = #tickets respondidos dentro SLA / #tickets totales | Por ticket + semanal | WhatsApp timestamps + Sheet Servicios | Semanal | ≥90% SLA y ≥85% citas sin reprogramación | 75–89% o 70–84% | <75% o <70% | 92% | 95% | ≥10% no-show técnico; 2 semanas seguidas con quiebre | N≥20 tickets y N≥15 servicios | Gabby | Gabby/Erick | Sem 1–4 semanal | Documentar playbook; subir volumen | Ajustar guiones/ventanas/agenda | Reducir cupo/alcance hasta estabilizar |
| E3 Cumplimiento de alcance | H2 | O1 | Todos los servicios agendados | % dentro de alcance | % fuera de zona/horario; % scope creep evitado | % Scope = #servicios dentro scope / #servicios totales | Durante piloto | Sheet Servicios + mensajes confirmación | Semanal | 100% y 0 fuera zona/horario | 1–2 excepciones justificadas | >2 excepciones o patrón | 100% | 100% | >10% discusiones “eso no incluía” | N≥15 servicios | Gabby | Erick | Semana 2 y 4 | Mantener definición; escalar | Endurecer copy + diagnóstico + exclusiones | Pausar, redefinir alcance |
| E4 Red técnicos (capacidad MV) | H2, H3 | O4 | Preventivo + correctivo (separar) | % cobertura sin cancelación por técnico | Variabilidad duración; reincidencias por técnico | Cobertura = #servicios cubiertos / #servicios agendados | Semanal | Sheet Servicios + incidencias | Semanal | 100% cobertura y variabilidad ≤25% | 95–99% o 26–40% | <95% o dependencia 1 técnico | 100% | 100% | ≥2 cancelaciones “día de”/2 semanas; quejas repetidas | N≥15 servicios; ≥2 técnicos + 1 backup probado | Erick | Erick | Sem 2 y 4 | Estabilizar red; aumentar volumen | Ajustar pagos/SLAs; incorporar backup | Reducir volumen/cambiar modelo técnicos |
| E5 Calidad “bien a la primera” | H3 | O5 | Separar preventivo vs correctivo | FTFR (first-time fix rate) | % retrabajos evitables; reclamos; score auditoría | FTFR = #servicios sin retrabajo evitable (0–7d) / #servicios | 0–7 días post-servicio | Sheet Servicios + incidencias + QA | Semanal | FTFR ≥90% y retrabajo evitable ≤5% | 80–89% o 6–10% | <80% o >10% | 92% | 95% | 1 evento grave (daño/seguridad); patrón por técnico | N≥15 (ideal ≥20) | Gabby | Técnico lead/Erick | Semanal | Consolidar estándar; subir volumen | Ajustar checklist + capacitación + auditoría 20% | Pausar correctivos / reemplazar técnico / rediseñar |
| E6 Estandarización (evidencia) | H3, H2 | O5, O6 | Todos los servicios | % reportes completos | % fotos obligatorias; % diagnóstico claro; % OK cliente | % completos = #reportes completos / #servicios | Por servicio | Reporte Maroa + fotos + Sheet | Diario/Semanal | ≥95% | 85–94% | <85% | 97% | 99% | “servicios sin registro” >0; costos/SLAs no trazables | N≥15 reportes | Gabby | Gabby | Semanal | Mantener; automatizar | Corregir plantillas + enforcement | No escalar volumen hasta lograr dato confiable |
| E7 Unit economics por servicio | H4 | O8 | Preventivo vs correctivo | Margen bruto promedio | % servicios con margen negativo; % materiales/ingreso; costo retrabajos/ingreso | Margen = Ingreso – (técnico + transporte + materiales + retrabajo) | Semanal | Sheet Costos + pagos | Semanal | Margen ≥20% y ≥80% servicios no negativos | 5–19% o 21–35% negativos | <5% o >35% negativos | 25% | 30% | 2 semanas margen negativo; quiebre caja | N≥15 servicios con costos completos | Erick | Erick | Semanal | Mantener pricing y subir volumen | Ajustar pricing/fees/markup/pagos técnicos | Pausar; rediseñar economics |
| E8 Economics por suscriptor (proxy 30d) | H4 | O8 | Suscriptores pagos | Contribución promedio por suscriptor | % suscriptores que usan servicio; costo promedio por hogar | Contribución 30d = ingresos cobrados – costos directos incurridos en 30d | 0–30 días desde alta | Sheet Suscripción + Costos | Semana 4 | Contribución positiva | Cerca de 0 con palancas claras | Negativa sin palancas | + | ++ | Uso excesivo rompe promesa; costos disparados | N≥10 suscriptores pagos | Erick | Erick | Semana 4 | Sostener suscripción | Redefinir qué incluye/límites/frecuencia | Cambiar modelo (fee por visita, otro bundle) |
| E9 Retención temprana (señal) | H5 | O10, O11 | Post-servicio | % intención de continuar | CSAT; % recomendación; % referidos generados | Intención = #“Sí” / #respuestas (0–48h) | 0–48h post-servicio | Encuesta + llamadas | Semanal | ≥60% intención y CSAT ≥4/5 | 40–59% o CSAT 3-4 | <40% o CSAT <3.0 | 70% | 80% | Queja confianza/seguridad; motivo repetido ≥3 | ≥80% respuesta en N≥15 servicios | Gabby | Gabby/Erick | Semanal | Duplicar lo que funciona | Atacar top 3 fricciones y repetir 7d | Pausar, redefinir experiencia/valor |
| E10 Seguridad y riesgos | H2 | O9 | Todos los servicios | # incidentes críticos | % técnicos identificados; % cumplimiento protocolos acceso | Incidente crítico = seguridad/privacidad/daño grave (binario) | Siempre | Registro incidencias + fotos | En tiempo real | <5 críticos | 1-5 menor con corrección inmediata | ≥5 crítico o patrón | 0 | 0 | Cualquier crítico = pausa inmediata | Siempre aplica (no depende de N) | Erick | Erick | Inmediato + semanal | Continuar | Reentrenar + ajustar protocolo | STOP inmediato; pausar operaciones |




================================================================================
Page: Oferta y pricing (objeto de compra)
Path: 0.2.1.3.3
Depth: 4
================================================================================

**Hipótesis asociada:** H1, H4

**Experimento**

 Probar la disposición a pagar por una oferta simple y clara, con beneficios de early adopter.

**Entregables (Semana 0)**

- Ficha de paquetes del piloto:
  - Suscripción y qué incluye exactamente
  - Número de mantenimientos
  - Beneficios claros vs mercado informal
- Beneficios exclusivos del piloto (fundadores / early adopters)
- Políticas del piloto:
  - Cancelación, reprogramación, no-show
  - Garantía del trabajo y retrabajos
- Definición de método de pago y ciclo (mensual / anual)



**OKRs**

- O2: Validar disposición a pagar sin fricción
  - KR1: ≥ X % de los leads se convierten a pago
  - KR2: < Y % de los clientes reportan fricción o reclamos por precio
  - KR3: ≥ Z % de los prospectos entiende la oferta sin explicación adicional



================================================================================
Page: Ficha de paquete del piloto
Path: 0.2.1.3.3.1
Depth: 5
================================================================================

# Ficha 0 — Paquete de Prueba Individual (Recomendado para Piloto)

**Nombre del paquete:** Mantenimiento Preventivo AC — Servicio Individual  
**Para quién:** Hogares en Punta Cana que quieren probar el servicio sin compromiso.  
**Modelo:** Pago por servicio único con opción de suscripción.  
**Precio:** RD$3,000 a RD$4,500 por unidad de AC (pago único) (o referir a pricing)

## Qué incluye exactamente:

- **Concierge Maroa** (coordinación completa)
  - Agendado, confirmación, recordatorios
  - Seguimiento de llegada y cierre del servicio
  - Soporte por WhatsApp (antes/durante/después)
- **Diagnóstico profesional** completo del equipo
- **Limpieza/mantenimiento preventivo** (según checklist del piloto)
- **Reporte post-servicio detallado**
  - Estado del equipo, recomendaciones, fotos
  - Próximo mantenimiento sugerido
- **Técnicos capacitados y verificados** (estándar Maroa)
- **Garantía del trabajo** (7 días)

## Upgrade disponible después del servicio:

> ¿Te gustó la experiencia? Suscríbete y obtén:
> > 10% de descuento en tu próximo servicio
> > Recordatorios automáticos
> > Prioridad en agenda
> > Pagos mensuales

**Precio suscripción:** (referirse a pricing)  
**Incluye:** 2 mantenimientos anuales + beneficios de fundador



## Ficha 1 — Suscripción Piloto Maroa (A/C)

**Nombre del paquete:** Suscripción Piloto Maroa — Aire Acondicionado  
**Para quién:** Hogares en Punta Cana que quieren mantenimiento sin estrés y sin “cazar técnicos”.  
**Modelo:** Suscripción anual con concierge + técnicos verificados.

### Qué incluye exactamente

- **Concierge Maroa** (coordinación completa)
  - Agendado, confirmación, recordatorios
  - Seguimiento de llegada y cierre del servicio
  - Soporte por WhatsApp (antes/durante/después)
- **Diagnóstico profesional** del equipo en cada visita
- **Limpieza/mantenimiento preventivo** (según checklist del piloto)
- **Reporte post-servicio**
  - Estado del equipo, recomendaciones, fotos
  - Próximo mantenimiento sugerido
- **Técnicos capacitados y verificados** (estándar Maroa)
- **Garantía de 30 días**

### Número de mantenimientos

- **Dependerá del Plan y Paquete, pero el básico son 2 mantenimientos al año** (incluidos)

### Qué NO incluye (para evitar malentendidos)

- Repuestos / piezas
- Reparaciones mayores no preventivas
- Instalaciones nuevas o cambios de ubicación  
*(Estos se cotizan aparte, con aprobación del cliente antes de ejecutar.)*



## Ficha 2 — ¿Por qué esto es mejor que el mercado informal?

### Beneficios claros vs mercado informal (comparativo directo)

**Con Maroa**

- **Cero drama:** tú no coordinas con técnicos, Maroa lo hace
- **Estándar de servicio:** checklist + calidad consistente
- **Trazabilidad:** reporte y seguimiento (historial del equipo)
- **Técnicos verificados y capacitados**
- **Garantía y retrabajos** con reglas claras
- **Puntualidad + confirmación + soporte** (no te dejan “en visto”)

**Mercado informal**

- Variabilidad de calidad (depende del técnico del día)
- Sin garantía real / difícil reclamar
- Sin checklist, sin reporte, sin historial
- No-show y cambios de hora frecuentes
- Pagos/negociación directa con el técnico
- Cero seguimiento posterior



## Ficha 3 — Cómo funciona (en 4 pasos)

1. **Te suscribes** al Piloto Maroa
2. **Agendamos** tu primer mantenimiento (en el rango que elijas)
3. **Un técnico va** a tu casa (tú no gestionas pagos ni coordinación con él)
4. **Cierre + reporte** y quedas con tu próximo mantenimiento programado



## Ficha 4 — Mensaje corto “tipo WhatsApp” (venta rápida)

**Suscripción Piloto Maroa (A/C)** ✅  
Incluye **2 mantenimientos al año**, concierge que coordina todo, técnicos verificados, checklist profesional y **reporte post-servicio**.  
La diferencia vs el mercado informal: **calidad consistente + garantía + cero estrés** (tú no persigues técnicos).



================================================================================
Page: Beneficios exclusivos del piloto para Fundadores y Early Adopters
Path: 0.2.1.3.3.2
Depth: 5
================================================================================

Este listado incluye únicamente beneficios que no se confunden con el alcance normal del servicio de Maroa, que son fáciles de ofrecer desde el día uno, y que podemos comunicar y cumplir sin complejidad operativa. Donde aplique, dejamos marcado “por confirmar viabilidad” para no prometer algo que todavía no está asegurado.

## Beneficios de por vida para Fundadores y Early Adopters

Estos beneficios aplican mientras el cliente mantenga su suscripción activa en Maroa.

### Porcentaje de descuento de por vida sobre la tarifa vigente del plan

En lugar de congelar un precio, los usuarios Fundadores y Early Adopters reciben un porcentaje de descuento de por vida aplicado sobre la tarifa vigente del plan, siempre que mantengan la suscripción activa. Esto significa que el precio final puede cambiar con el tiempo si Maroa ajusta precios, pero el porcentaje de descuento se mantiene.

Este porcentaje de descuento puede transferirse de un equipo a otro cuando sea por reemplazo del equipo, manteniendo la continuidad del beneficio. También se mantiene si el cliente se muda a otra vivienda y mantiene la unidad suscrita con Maroa, con la salvedad de que las tarifas pueden variar por zona, por lo que el descuento se aplicaría sobre la tarifa vigente en esa zona.

### Acceso anticipado y prioridad para pruebas futuras de Maroa

Cuando Maroa habilite nuevas funcionalidades o nuevas categorías de servicio, los Fundadores y Early Adopters tendrán acceso anticipado antes que el público general y serán invitados primero a esas pruebas. Esto se gestiona como prioridad de invitación y de acceso, sin prometer necesariamente cupos ilimitados.

### Participación permanente en el Founder Council

Los Fundadores y Early Adopters son invitados a un grupo pequeño donde pueden dar retroalimentación directa y votar prioridades de mejora. No es un compromiso de entregar funcionalidades específicas, sino un canal formal de escucha y co-creación con los clientes más cercanos al inicio.

### Transferencia única del beneficio a un familiar directo

Cada Founder o Early Adopter podrá transferir una sola vez su condición preferente a un familiar directo, únicamente en línea ascendente o descendente, es decir, padres o hijos. Esta transferencia no duplica el beneficio, solo cambia de titularidad. Una vez transferido, el titular original deja de tener el beneficio.

## Beneficios puntuales del piloto

Estos beneficios aplican solo durante el piloto o durante un periodo corto definido, y no se consideran parte del servicio regular.

### Kit físico de identificación del equipo con acceso al historial

Durante el piloto, Maroa buscará entregar un kit simple por equipo registrado, como una etiqueta o sticker de identificación con un código que permita acceder al historial del equipo. Este beneficio está marcado como por confirmar viabilidad, porque puede depender del tiempo disponible para producir los stickers, la generación de la URL del historial y la creación del código QR de manera consistente y operable.

### Programa de referidos exclusivo del piloto

Durante el piloto, Maroa ofrece un beneficio por referidos con dos niveles. Este beneficio se administra como un abono equivalente a una mensualidad de un equipo suscrito, y está marcado como por confirmar, tanto por la definición exacta de reglas como por los montos finales.

**Regla 1, referido que paga al menos un mantenimiento preliminar**  
Por cada referido que pague al menos un servicio de mantenimiento preliminar, se abonará al cliente fundador una mensualidad equivalente para un equipo suscrito.

**Regla 2, referido que suscribe y se mantiene seis meses activo**  
Por cada referido que suscriba sus equipos y mantenga la suscripción activa por seis meses, se abonará al cliente fundador una mensualidad equivalente para un equipo suscrito.

### Fórmula y variables sugeridas para parametrizarlo fácilmente

Definiciones:  
M es el monto mensual vigente del plan para un equipo en la zona del cliente que recibe el abono  
N1 es la cantidad de referidos que pagaron al menos un mantenimiento preliminar  
N2 es la cantidad de referidos que suscribieron y mantuvieron seis meses activos  
C es el crédito total a aplicar al cliente en el periodo de cálculo

Fórmula base:  
C es igual a M multiplicado por N1 más M multiplicado por N2

En la práctica, este crédito se puede aplicar como descuento en futuras mensualidades de un equipo suscrito hasta agotar el monto, y se puede ajustar luego cambiando M, o aplicando multiplicadores distintos para cada regla, por ejemplo usando un factor A para la regla 1 y un factor B para la regla 2.

## Beneficios que podemos considerar a futuro, pero no ofrecer en el piloto

Estos beneficios son atractivos, pero añaden complejidad operativa, riesgo de expectativas difíciles de cumplir, o requieren más madurez del modelo para ejecutarse bien. Se reservan para fases posteriores.

### Ventanas de agenda premium y atención fuera de horario como beneficio garantizado

Esto es muy atractivo, pero puede romper la capacidad del equipo en piloto, especialmente si hay reprogramaciones o picos de demanda. En el futuro se puede ofrecer como add-on pago o como beneficio para un tier superior.

### Garantías extendidas más agresivas o coberturas tipo “primera falla” con reglas amplias

La garantía de mano de obra extendida puede ser útil, pero si se diseña muy generosa antes de tener datos reales de fallas, puede convertirse en un pasivo de costo. En el futuro puede incorporarse con reglas claras basadas en data.

### Una visita adicional gratuita incluida como onboarding para todos

Una visita extra es valiosa, pero consume capacidad y puede generar abuso si no hay control. En el futuro se puede ofrecer en campañas puntuales, o solo para hogares con múltiples equipos, o como parte de un paquete premium.

### Descuentos a precio costo en servicios grandes como limpieza profunda

La limpieza profunda tiene alto atractivo, pero si se ofrece masivamente en piloto puede distorsionar el aprendizaje y presionar márgenes o disponibilidad. En el futuro puede ser un producto separado con cupos y precios más estables.

### Chequeos técnicos ampliados que se parezcan a trabajo de electricidad o reparación

Mediciones y chequeos avanzados pueden mejorar calidad, pero implican responsabilidad técnica adicional y riesgo. En el futuro se puede integrar con protocolos, herramientas y seguros adecuados.

### Beneficios por vida en tarifas de mano de obra para reparaciones

Es difícil de sostener sin saber la mezcla real de casos y sin un catálogo de precios maduro. En el futuro podría existir como tarifa preferente con límites anuales o con un tier premium.

## Nota de implementación para la sección de Oferta y Pricing

Para evitar confusión con el alcance normal del servicio, estos beneficios deben comunicarse como beneficios de membresía por ser parte del piloto, y siempre con la condición explícita de que los beneficios de por vida aplican mientras la suscripción se mantenga activa. Adicionalmente, todo lo marcado como por confirmar debe permanecer fuera del material público hasta que se valide operativamente y financieramente.

================================================================================
Page: Políticas del Piloto Maroa (v0.1) — Cancelación / Reprogramación / No-show + Garantía / Retrabajos
Path: 0.2.1.3.3.3
Depth: 5
================================================================================

## 

**Aplica a:** servicios de A/C residencial (preventivo + correctivo ligero) dentro de zona y horario del piloto.  
**Objetivo:** proteger la experiencia “cero drama”, el tiempo del cliente y la disponibilidad del técnico.



# 1) Cancelación y reprogramación

### 1.1 Confirmación de cita

- La cita se considera **confirmada** cuando Maroa envía: **fecha + ventana de llegada + dirección + nombre/contacto + tipo de servicio** y el cliente responde **“Confirmo”** (o equivalente).
- Maroa puede solicitar fotos/datos previos para reducir fallos (ej. cantidad de unidades, marca, modelo, acceso).

### 1.2 Cancelación por el cliente

- **Sin cargo:** si el cliente cancela con **≥ 24 horas** de anticipación a la ventana de llegada.
- **Cargo por cancelación tardía:** si cancela con **< 24 horas**, se cobra un **Fee de cancelación tardía** (definir monto) **o** se descuenta una parte del servicio (definir) para cubrir logística/tiempo del técnico.
- Si el cliente cancela **repetidamente** (2 veces en el piloto), Maroa puede requerir **prepago** para agendar de nuevo.

### 1.3 Reprogramación por el cliente

- **1 reprogramación sin cargo** si se solicita con **≥ 24 horas**.
- Reprogramaciones adicionales o con **< 24 horas** pueden generar **Fee de reprogramación tardía** (definir monto).
- Si la reprogramación se debe a causa del residencial (ej. no permitieron entrada) y el cliente no coordinó acceso, aplica como **no-show** (ver sección 2).

### 1.4 Reprogramación por Maroa (operación)

- Si Maroa necesita reprogramar por causas operativas, se hará:
  - con la mayor anticipación posible, y
  - priorizando la próxima ventana disponible.
- Si la reprogramación afecta al cliente de forma significativa, Maroa puede ofrecer un **gesto de servicio** (ej. descuento fijo o upgrade de reporte) *según criterio*.



# 2) No-show (cliente no disponible / acceso fallido)

### 2.1 Qué cuenta como no-show

Se considera **no-show del cliente** si ocurre cualquiera:

- No hay nadie para permitir acceso o el cliente no responde dentro de **15 minutos** de llegada.
- El residencial no permite entrada por falta de autorización/listado.
- La unidad no es accesible (ej. llave, área cerrada) y no se coordinó previamente.
- El cliente cambia condiciones en sitio que impiden trabajar (ej. “no quiero que lo abran”, “no tengo permiso”).

### 2.2 Política de no-show

- En caso de no-show, se cobra un **Fee de visita fallida / desplazamiento** (definir monto) o se descuenta del pago si ya se cobró.
- Para re-agendar luego de un no-show, Maroa puede requerir:
  - **prepago completo**, y/o
  - confirmación reforzada (mensaje + llamada el mismo día).

> Nota operativa: Maroa debe documentar el no-show con evidencia mínima (hora de llegada, mensajes/llamadas, foto opcional si aplica sin violar privacidad).



# 3) Garantía del trabajo y retrabajos

### 3.1 Qué garantiza Maroa (en el piloto)

Maroa garantiza que:

- El trabajo se realiza según checklist/estándar del piloto.
- Si hay un problema derivado de **mala ejecución** o **error evitable**, se corrige sin costo dentro del período de garantía.

### 3.2 Período de garantía (sugerido para piloto)

- **Preventivo:** garantía de **7 días** por temas directamente ligados a la ejecución del mantenimiento (ej. drenaje mal conectado, tapa mal colocada).
- **Correctivo ligero:** garantía de **14 días** sobre la reparación realizada **solo para el componente intervenido** (ej. capacitor cambiado, conexión reparada), salvo mal uso o causas externas.

*(Si prefieres un solo número para todo el piloto: 7 días para ambos simplifica, pero reduce percepción de respaldo.)*

### 3.3 Qué califica como retrabajo sin costo

- Fallo por instalación incorrecta, procedimiento incompleto, checklist no cumplido.
- Diagnóstico equivocado que llevó a una intervención incorrecta.
- Falta de prueba final (equipo no quedó operando dentro de parámetros básicos).

### 3.4 Qué NO cubre la garantía (exclusiones)

- Fallas nuevas no relacionadas (otro componente).
- Equipos muy deteriorados o con fallas preexistentes documentadas en el reporte.
- Cambios de voltaje, problemas eléctricos del hogar, mal uso, suciedad extrema acumulada fuera del alcance.
- Piezas suministradas por el cliente (a menos que Maroa haya aprobado por escrito).
- “Recarga de gas” si no se corrigió fuga (si se hizo por insistencia del cliente, se deja constancia).

### 3.5 Proceso de reclamo (cero drama)

1. Cliente escribe a Maroa por WhatsApp con: “Tengo un problema con el servicio #ID”.
2. Maroa responde dentro del SLA y hace 3 preguntas + solicita 1 video corto (si aplica).
3. Maroa clasifica en 24h:

  - **Retrabajo sin costo (Maroa)**
  - **Nueva falla (cotizable)**
  - **Caso mixto (parcial)**

1. Si es retrabajo sin costo: se agenda en la próxima ventana disponible prioritaria.

### 3.6 Límite de retrabajos

- Por defecto: **1 retrabajo sin costo por servicio** (si el primer retrabajo no resuelve por error repetido, se trata como incidente de calidad y se escala internamente).
- Retrabajos repetidos por el mismo técnico activan revisión y posible retiro del técnico del piloto.



# 4) Lenguaje listo para enviar al cliente (WhatsApp)

**Cancelación/Reprogramación:**  
“Puedes cancelar o reprogramar sin cargo hasta 24h antes de la cita. Cambios con menos de 24h pueden generar un fee por logística. Si al llegar no hay acceso o no podemos entrar al residencial, se considera no-show y aplica un fee de visita fallida.”

**Garantía/Retrabajos:**  
“Si algo queda mal por ejecución del servicio, lo corregimos sin costo dentro del período de garantía del piloto. Si es una falla nueva o distinta, te cotizamos antes de hacer cualquier trabajo.”

================================================================================
Page: Definición de método de pago y ciclo (mensual / anual)
Path: 0.2.1.3.3.4
Depth: 5
================================================================================

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

================================================================================
Page: Operación de Concierge (experiencia “cero drama”)
Path: 0.2.1.3.4
Depth: 4
================================================================================

**Hipótesis asociada:** H2

**Experimento**

 Operar el flujo end-to-end completo con un único punto de contacto (Maroa) y medir tiempos y fricciones.

**Entregables (Semana 0–1)**

- Flujo operativo end-to-end documentado (1 página):
  - solicitud → diagnóstico → agenda → confirmación → servicio → cierre → feedback
- Guiones operativos:
  - Bienvenida
  - Diagnóstico
  - Confirmación
  - Post-servicio
- SLAs internos definidos:
  - Tiempo de respuesta concierge
  - Tiempo máximo para agendar
  - Ventana de llegada
- Plantillas operativas:
  - Cotización
  - Confirmación de cita
  - Checklist pre-visita (todo lo que tiene que hacer el tecnico para asegurarse que la cita sea exitosa) + pasos que el técnico va a dar
  - Cierre y feedback
- Regla operativa: el cliente no gestiona pagos ni técnicos



**OKRs**

- O3: Entregar una experiencia fluida y confiable
  - KR1: ≥ 90 % de respuestas dentro del SLA
  - KR2: ≥ 85 % de citas cumplidas sin reprogramación
  - KR3: ≤ N fricciones operativas recurrentes por semana

================================================================================
Page: Flujo Operativo End-to-End — Piloto Maroa (v0.2)
Path: 0.2.1.3.4.1
Depth: 5
================================================================================

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

================================================================================
Page: SLAs internos definidos
Path: 0.2.1.3.4.2
Depth: 5
================================================================================

### SLAs internos (para copiar/pegar en Coda)

> Incluye 1 fila “fantasma” para que se renderice bien al pegar.

## Table 5
| SLA (interno) | Definición (sin ambigüedad) | Target piloto | Cómo se mide (fuente) | Excepciones válidas | Escalación / Acción cuando se rompe | Owner | Notas |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tiempo de respuesta del concierge | Tiempo desde que entra un **ticket**(mensaje/solicitud en WhatsApp) hasta la **primera respuesta útil** del concierge (no solo “recibido”: debe incluir próximos pasos o preguntas de triage). | **< 24 horas** | Timestamps de WhatsApp (hora de entrada vs hora de respuesta) + log en Sheet/CRM. | Fuera de horario operativo (si aplica), falta de info mínima del cliente (se deja solicitado), fuerza mayor. | Si >24h: marcar ticket “SLA roto”, priorizar al inicio del día, y registrar causa raíz. Si se repite 2+ veces/semana: ajustar capacidad/cupo. | Ops/Concierge | Conectar a meta de “% respuestas dentro del SLA”.Maroa 100 Startup TasksMaroa 100 Startup Tasks |
| Tiempo máximo para agendar | Tiempo desde “ticket listo para agendar” (triage mínimo completado) hasta que el cliente recibe **cita confirmada**(fecha + ventana + dirección + datos) y confirma. | **< 48 horas** | Hora de “triage completo” vs hora de “Agendado/Confirmado” en Sheet + WhatsApp. | Cliente pide fecha específica posterior, no hay disponibilidad por capacidad real, restricciones de acceso del residencial. | Si >48h: ofrecer 2 opciones concretas (slots), activar técnico backup, o limitar intake/cupo esa semana. Registrar motivo. | Ops | En el doc aparece “Agendamiento: 48–72h (normal)” como referencia; aquí lo dejamos más agresivo a 48h por tu definición.Maroa 100 Startup Tasks |
| Ventana de llegada | Diferencia máxima entre la hora estimada de llegada comunicada en confirmación y la llegada real del técnico (medida dentro de una ventana). | **Ventana de 1 hora** | Confirmación enviada (WhatsApp) + check-in “En ruta / Llegó” (WhatsApp o tracker). Métrica: % citas dentro de ventana. | Tráfico extremo, clima, retraso por residencial (acceso), emergencia en servicio anterior documentada. | Si llega fuera de ventana: aviso proactivo al cliente + opción de reprogramar. Registrar quiebre. Si baja de umbral 2 semanas: ajustar rutas/slots. | Ops + Técnico lead | Puedes trackear “% puntualidad en ventana” (en el doc sugieren ≥85%).Maroa 100 Startup TasksMaroa 100 Startup Tasks |
|  |  |  |  |  |  |  |  |


### Regla de medición mínima (para que estos SLAs “vivan”)

- **Por ticket**: guardar 4 timestamps en el tracker: *Entrada*, *1ª respuesta útil*, *Triage listo*, *Cita confirmada*.
- **Por cita**: guardar *Ventana prometida* y *Hora real de llegada*; luego calcular **% dentro de SLA** (tickets/citas cumplidas ÷ total).

================================================================================
Page: Guiones Operativos
Path: 0.2.1.3.4.3
Depth: 5
================================================================================

## 1) Bienvenida (primer mensaje tras recibir solicitud)

**Bienvenida A (rápida + controla expectativa SLA <24h)**

> ¡Hola! Soy **[Nombre]** de **Maroa** 👋  
Gracias por escribir. Para ayudarte sin drama, cuéntame:

1. ¿Qué necesitas resolver?
2. ¿En qué zona/residencial de **Punta Cana** estás?
3. ¿Es urgente hoy o puede ser esta semana?

**Bienvenida B (si viene de referido)**

> ¡Hola! Soy **[Nombre]** de Maroa 👋 Me dijo **[Referidor]** que te contacte.  
Para ayudarte rápido: ¿qué necesitas y en qué residencial de Punta Cana estás?  
Si me mandas una foto/video del tema, mejor.

**Bienvenida C (si es nota de voz larga / confuso)**

> Gracias, lo entendí 🙌 Para confirmarlo bien y agendarte:

1. ¿El problema es **[resumen en 1 línea]**?
2. ¿Dirección + residencial?
3. ¿Hay alguien que pueda recibir al técnico?



## 2) Diagnóstico (triage para cotizar/definir técnico y evitar idas en falso)

**Diagnóstico base (checklist)**

> Perfecto. Para asignarte el técnico correcto:

1. ¿Qué tipo de propiedad es (apartamento / villa) y cuántos baños/habitaciones?
2. ¿Desde cuándo pasa y qué tan frecuente?
3. ¿Puedes mandarme **2 fotos** o **un video corto**?
4. ¿Hay acceso/horario del residencial o requisitos de entrada?

**Si es mantenimiento general (multi-servicio)**

> ¿Esto es 1 cosa puntual o una lista?  
Si me mandas tu lista en bullets, lo armamos en un solo “bloque” y optimizamos la visita.

**Si es “urgente”**

> Entiendo. Para priorizarlo:

- ¿Hay riesgo de agua, electricidad o seguridad?
- ¿Alguien puede estar en casa en las próximas horas?  
Con eso te digo la primera opción disponible.

**Cierre del diagnóstico (para pasar a agenda <48h)**

> Listo ✅ Con esto ya puedo agendarte.  
Tengo disponibilidad **[día/slot 1]** o **[día/slot 2]**. ¿Cuál te funciona?



## 3) Confirmación (cita confirmada + ventana de llegada 1 hora + reduce no-shows)

**Confirmación estándar**

> Súper. Queda **confirmado**:  
📍 Dirección: **[residencial + unidad]**  
🗓️ Día: **[fecha]**  
⏰ Ventana de llegada: **[hora–hora]** (1 hora)  
👤 Técnico: **[Nombre]**
> Para que sea cero drama: ¿me confirmas “OK” y el **nombre de quien recibe**?

**Confirmación + reglas suaves (cancelación/reprogramación)**

> Si necesitas reprogramar, avísame con tiempo y lo movemos sin problema 🙌  
(Mientras antes nos digas, más fácil mantenerte en el mismo rango de horarios.)

**Recordatorio el mismo día (reduce no-show)**

> ¡Buen día! Hoy estamos en agenda ✅  
El técnico va en ruta y te escribe al salir hacia ti. Tu ventana sigue: **[hora–hora]**.

**Mensaje “En ruta”**

> Voy **en ruta** 🚗💨 ETA aprox **[X min]**. Cualquier tema con acceso del residencial me avisas por aquí.



## 4) Post-servicio (cierre + feedback + referido + repetir compra)

**Post-servicio (confirmar satisfacción)**

> ¿Cómo te fue con el servicio de hoy?  
Del 1 al 10, ¿qué tan satisfecho/a quedaste?  
Si algo no quedó perfecto, lo corregimos.

**Si la calificación es 9–10 (pedir referido + beneficio 1 mes gratis)**

> ¡Gracias! 🙌  
Si conoces a alguien en Punta Cana que necesite mantenimiento, pásame su contacto o reenvíale este mensaje.  
**Por cada referido que se una y compre una suscripción, tú recibes 1 mes gratis** (en tu caso, sin límite por ahora).

**Mensaje para reenviar (copy/paste)**

> Hola 👋 Soy **[Nombre]** de Maroa. Ayudamos con mantenimiento en Punta Cana sin drama: coordinamos técnico confiable, agenda rápida y ventana de llegada de 1 hora.  
Si me dices tu residencial y lo que necesitas, te propongo 2 horarios.

**Si hubo problema / retrabajo**

> Gracias por avisar. Lo tomo como prioridad ✅  
Para resolverlo hoy: ¿me mandas una foto/video del detalle y confirmas si estás disponible **[slot 1]** o **[slot 2]**?



### Mini-reglas internas para que estos guiones funcionen (sin “fricción”)

- Siempre cerrar cada intercambio con **pregunta concreta** (para que el cliente responda).
- Diagnóstico pide **fotos/video** temprano para evitar visitas fallidas.
- Confirmación siempre incluye: **fecha + ventana 1h + dirección + quién recibe**.
- Post-servicio: si 9–10 → **referido + explicar 1 mes gratis**; si <9 → **activar retrabajo**.

================================================================================
Page: Plantillas operativas
Path: 0.2.1.3.4.4
Depth: 5
================================================================================

## 1) Plantilla de Cotización (WhatsApp)

**Cotización A (clara, corta, con rango si aplica)**

> Listo ✅ Con lo que me enviaste, esto es lo recomendado:  
**Servicio:** [Nombre del servicio / reparación]  
**Incluye:** [1–3 bullets de qué incluye]  
**Precio:** RD$ [monto] *(o RD$ [rango] según diagnóstico en sitio)*  
**Tiempo estimado:** [X] min / [X] horas  
**Disponibilidad:** puedo agendarte **[slot 1]** o **[slot 2]** (en las próximas 48h).
> ¿Cuál horario te funciona y a nombre de quién queda la cita?

**Cotización B (si depende de repuestos / incertidumbre)**

> Para ser transparente ✅  
**Visita de diagnóstico:** RD$ [monto] *(se descuenta si haces el trabajo)*  
Luego te confirmamos **costo final** según repuesto/alcance.
> ¿Prefieres **[slot 1]** o **[slot 2]**?

**Cotización C (multi-tareas / lista)**

> Perfecto. Te lo armé en un solo bloque para optimizar:  
**Lista de tareas:**

- [Tarea 1]
- [Tarea 2]
- [Tarea 3]  
**Total estimado:** RD$ [monto/rango]  
**Tiempo:** [X] horas

> ¿Agendamos **[slot 1]** o **[slot 2]**?

**Cierre de cotización (para convertir)**

> Si me confirmas ahora, te reservo el slot y te mando la confirmación con ventana de llegada de 1 hora.



## 2) Plantilla de Confirmación de Cita (WhatsApp)

**Confirmación estándar (con ventana 1h)**

> ✅ **Cita confirmada — Maroa**  
📍 **Dirección:** [Residencial, Torre/Villa, Apto/Unidad]  
🗓️ **Fecha:** [Día, dd/mmm]  
⏰ **Ventana de llegada:** [hora–hora] *(1 hora)*  
👤 **Técnico:** [Nombre]  
🧾 **Servicio:** [Resumen 1 línea]  
💳 **Monto estimado:** RD$ [monto/rango] *(si aplica)*
> Por favor responde **“OK”** y confirma:

1. **Nombre de quien recibe**
2. **Teléfono alterno** (por si no te entra WhatsApp)
3. ¿Hay **requisitos de acceso** del residencial?

**Mensaje “En ruta” (mismo hilo)**

> 🚗 Voy en ruta. ETA aprox **[X min]**. Si el residencial pide autorización, me ayudas con el acceso por favor.

**Si hay cambios**

> Entiendo ✅ Para mantenerte dentro del SLA, te propongo: **[slot 1]** o **[slot 2]**. ¿Cuál confirmamos?



## 3) Checklist Pre-visita (para técnico) + pasos del técnico (SOP corto)

> Meta: **cita exitosa** (sin re-trips), llegada dentro de **ventana 1h**, cierre con evidencia.

### A. Antes de salir (30–60 min antes)

-  Revisar el ticket: **dirección exacta**, contacto, servicio, fotos/video, notas de acceso.
-  Confirmar **herramientas** específicas del trabajo (según tipo).
-  Confirmar **materiales/repuestos** probables (si aplica) o plan de compra.
-  Enviar “**En ruta**” al concierge con ETA.
-  Verificar gasolina/peajes/ruta (evitar llegar tarde).
-  Confirmar **política de no sorpresas**: si aparece alcance extra, **cotizar antes** de ejecutar.

### B. Al llegar (primeros 10 minutos)

-  Llegar dentro de la ventana (o avisar retraso **antes**).
-  Presentarse: nombre + “vengo con Maroa”.
-  Confirmar con cliente: “voy a revisar **[problema]** y te digo plan + costo antes de hacer nada”.
-  Revisar área y riesgos (agua/electricidad/seguridad).

### C. Diagnóstico y aprobación

-  Diagnóstico rápido + explicar causa probable en lenguaje simple.
-  Confirmar **alcance** (qué incluye / qué no incluye).
-  Confirmar **costo final** o ajuste vs estimado **antes de ejecutar**.
-  Obtener “OK” verbal/WhatsApp (si el concierge lo requiere).

### D. Ejecución (calidad y evidencia)

-  Proteger área (limpieza básica / cuidado superficies).
-  Ejecutar pasos técnicos según estándar.
-  Probar funcionamiento al terminar (check final).
-  Tomar **foto/video “después”** (evidencia).

### E. Cierre en sitio

-  Explicar qué se hizo + recomendaciones (mantenimiento/preventivo).
-  Confirmar satisfacción: “¿Todo quedó como esperabas?”
-  Registrar: tiempo, materiales, observaciones, “pendientes” si los hay.
-  Reportar al concierge: “Terminado ✅” + evidencia + cualquier upsell/pendiente.



## 4) Plantilla de Cierre y Feedback (WhatsApp)

**Cierre estándar (mismo día)**

> ✅ Listo, servicio completado.  
**Resumen:** [qué se hizo en 1–2 líneas]  
**Evidencia:** [foto/video si aplica]
> Del 1 al 10, ¿qué tan satisfecho/a quedaste?

**Si califica 9–10 (activar referidos)**

> ¡Gracias! 🙌  
Si conoces a alguien en Punta Cana que necesite mantenimiento, pásame su contacto o reenvíale este mensaje.  
**Por cada referido que se una y compre una suscripción, recibes 1 mes gratis** *(en tu caso, sin límite por ahora).*

**Mensaje para reenviar (copy/paste)**

> Hola 👋 Soy [Nombre] de Maroa. Coordinamos mantenimiento en Punta Cana sin drama: agenda rápida, técnico confiable y ventana de llegada de 1 hora.  
Dime tu residencial y lo que necesitas y te propongo 2 horarios.

**Si califica 8 o menos (retrabajo / recuperación)**

> Gracias por la honestidad. Lo arreglamos ✅  
¿Qué fue lo que no quedó bien? Si puedes, mándame una foto/video y lo priorizamos con **[slot 1]** o **[slot 2]**.

================================================================================
Page: Herramientas mínimas para validar
Path: 0.2.1.3.5
Depth: 4
================================================================================

## **6) Herramientas mínimas para validar**

**Hipótesis asociada:** H2, H4

**Experimento**

 Operar con herramientas simples que permitan medir sin sobreoptimizar.

**Entregables (Semana 0)**

- Stack definido: WhatsApp Business + formulario + Sheet/CRM ligero
- Tablero operativo con:
  - clientes, citas, técnicos, costos, estatus, incidencias
- Plantillas legales mínimas:
  - terms del piloto, autorización de trabajo, waiver
- Canal interno de operaciones

================================================================================
Page: Canal Interno de Operaciones
Path: 0.2.1.3.5.1
Depth: 5
================================================================================

Canal Interno de Operaciones — Piloto Maroa  
Experimento 6: Herramientas mínimas para validar (H2, H4)  
Objetivo: operar el piloto con herramientas simples (WhatsApp + Form + Sheet), asegurando coordinación rápida + trazabilidad mínima para medir.

1. **Propósito y alcance del canal**  
Para qué se usa  
Coordinar citas, asignaciones y ejecución diaria del servicio.  
Resolver incidencias y tomar decisiones rápidas (sin burocracia).  
Dejar rastro operativo mínimo (links + estatus) para medición.  
Para qué NO se usa  
Pagos y cobros (se gestionan por el flujo definido del piloto).  
Conversaciones largas o discusiones (se pasa a llamada).  
Información sensible innecesaria del cliente (evitar compartir datos completos en grupos).
2. **Estructura mínima de comunicación (WhatsApp)**  
Grupos / espacios  
Grupo: “Maroa Ops — Core (Piloto PC)”  
Participantes: Concierge/Dispatcher + Líder Ops + Backoffice.  
Uso: asignaciones, cambios, escalaciones, decisiones, seguimiento del día.  
Grupo: “Maroa Ops — Técnicos (Piloto PC)” (si aplica)  
Participantes: técnicos activos + concierge + líder ops.  
Uso: anuncios generales (horarios, reglas, recordatorios).  
No usar para casos específicos (eso va en 1:1).  
Chats 1:1 Concierge ↔ Técnico  
Uso: instrucciones de una visita, ubicación exacta, evidencia, estatus.  
Convención de identificación  
Cada servicio se identifica con: [CASO-###] (ej. [CASO-014]).  
En todo mensaje operativo debe aparecer el ID del caso.
3. **Roles y responsabilidades**  
Concierge / Dispatcher  
Crea el caso (formulario) + asigna técnico + confirma cita.  
Mantiene estatus del caso y registra cambios en el Sheet.  
Maneja comunicación con cliente (no técnico).  
Líder de Operaciones  
Decide excepciones (reemplazos, priorizaciones, garantías, escalaciones).  
Valida cierres complejos y maneja incidencias críticas.  
Backoffice  
Revisa costos/reportes, completa campos faltantes del Sheet.  
Gestiona documentos mínimos (autorización/waiver/terms según aplique).  
Técnico  
Actualiza “en camino / llegada / diagnóstico / cierre”.  
Envía evidencia mínima (fotos/nota) y confirma materiales/tiempo.
4. **Reglas de comunicación (para mantener orden)**  
Mensajes cortos, accionables. Si requiere debate → llamada (siempre grabadas).  
Casos específicos → 1:1 (Concierge ↔ Técnico).  
El grupo Core se usa para visibilidad y decisiones.  
Respuesta esperada en ventanas de citas: 5–10 min (Core/Técnicos).  
No compartir información sensible del cliente en grupos (cédula, etc.).
5. **Estatus estándar (para que el Sheet sea consistente)**  
Estatus de cita (obligatorio)  
Pendiente confirmación  
Confirmada  
En camino  
En sitio  
Reprogramada  
Completada  
No-show  
Estatus de técnico (interno)  
Asignado  
Aceptado  
No disponible  
Reemplazo  
Incidencias (tags)  
Tarde  
No llegó  
Falta pieza  
Alcance fuera  
Reclamo  
Riesgo seguridad  
Cliente molesto
6. **Plantillas de mensajes (copy/paste)**  
Regla: todo mensaje incluye ID del caso + link del Sheet o Form si aplica.  
A) Creación de caso (Core)  
Asunto: Nuevo caso  
Mensaje:  
[CASO-*] Nuevo caso creado. Cliente: ___ | Zona: ___ | Servicio: ___ | Ventana: ___ | Prioridad: (Baja/Media/Alta). Link Sheet: ___  
B) Asignación a técnico (1:1)  
[CASO-*] Te asigno visita: Zona ___ | Ventana ___ | Servicio ___ | Dirección (resumen) ___ | Nota ___ | Confirma “ACEPTO” + ETA. Link caso: ___  
C) Confirmación de técnico (respuesta esperada)  
[CASO-*] ACEPTO. ETA ___ min. Llegaré a las :  
D) En camino / llegada (técnico)  
[CASO-*] En camino. ETA __ min.  
[CASO-*] Llegué (hora :). Inicio diagnóstico.  
E) Diagnóstico (técnico)  
[CASO-*] Diagnóstico: ___ | Recomendación: ___ | Materiales: ___ | Tiempo estimado: ___ | Fotos: (adjuntas).  
F) Reprogramación (Core → interno)  
[CASO-*] Reprogramación requerida. Motivo: ___ | Nueva ventana propuesta: ___ | Acción: (Confirmar con cliente / Reasignar técnico).  
G) Incidencia / escalación (Core)  
[CASO-*] ESCALACIÓN. Tipo: ___ | Riesgo: (Bajo/Medio/Alto) | Qué pasó: ___ | Cliente impactado: ___ | Opciones: (1) ___ (2) ___ | Decisión requerida por: (Líder Ops).  
H) Cierre de servicio (técnico → 1:1 + Core si aplica)  
[CASO-___] Servicio completado. Trabajo realizado: ___ | Observaciones: ___ | Recomendación: ___ | Evidencia: (2–4 fotos).
7. **Protocolo de escalación (H2/H4)**  
Cuándo escalar (crítico)  
Cliente sin técnico en ventana confirmada.  
Riesgo eléctrico/seguridad.  
Reclamo fuerte o amenaza de cancelación.  
Error operativo (técnico incorrecto / dirección / no llegó).  
SLA de escalación  
Se reporta en Core en ≤10 min desde que se detecta.  
Decisión de Líder Ops en ≤20 min (si hay cita en curso).  
Decisiones preautorizadas  
Reasignar técnico inmediatamente.  
Ofrecer reprogramación prioritaria.  
Activar retrabajo/garantía según política del piloto.
8. **Integración con herramientas mínimas (Form + Sheet)**  
Checkpoints obligatorios  
Al crear caso: se llena Form “Nuevo caso” → genera registro en Sheet.  
Al confirmar cita: actualizar estatus a Confirmada.  
Al iniciar visita: estatus En camino y luego En sitio.  
Al cerrar: Form “Cierre” + estatus Completada + evidencia mínima.  
Links fijos (pegar aquí)  
Form “Nuevo caso”: ___  
Form “Cierre de caso”: ___  
Tablero (Sheet): ___
9. **Evidencia mínima y calidad (ligero)**  
Evidencia mínima del técnico (por WhatsApp 1:1)  
2 fotos “antes” + 2 fotos “después” (o lo mínimo relevante).  
Nota breve: “qué se hizo” + “qué quedó pendiente” (si aplica).  
Checklist de cierre (Core/Backoffice)  
Estatus Completada  
Evidencia recibida  
Costos registrados (si aplica)  
Incidencias taggeadas (si hubo)  
Próximo paso (si requiere seguimiento)
10. **Métricas que este canal permite medir (sin CRM)**  
Tiempo creación → asignación  
Tiempo asignación → confirmación  
Puntualidad (programada vs llegada)  
Reprogramaciones / no-show  
Incidencias por tipo  
Retrabajos/garantía  
Tiempo fin visita → cierre administrativo

================================================================================
Page: Adquisición de clientes
Path: 0.2.1.3.6
Depth: 4
================================================================================

**Hipótesis asociada:** H1, H5

**Experimento**

Validar que un sistema simple de outreach manual (WhatsApp-first) + referidos puede generar leads suficientes y convertirlos en clientes del piloto sin marketing pesado.

**Entregables (Semana 0–1)**

- Kit mínimo de adquisición (para copy/paste):
  - Mensajes listos para amigos/conocidos
  - Mensajes listos para grupos de WhatsApp (residenciales / vecinos / comunidad)
  - Mensaje para administradores / property managers / aliados
  - FAQ corta + CTA (“responde ‘Maroa’ para agendar”)
- Formulario de captación mínima (o intake por WhatsApp)
- Tracker simple de adquisición (pipeline):
  - Outreach → Interesado → Intake → Agendado → Completado → No fit 
  - (Regla: todo lead con próximo paso y fecha)
- Cadencia mínima de ejecución:
  - Rutina diaria de outreach + follow-ups
  - Revisión semanal de resultados por canal
- Esquema simple de referidos + mensaje post-servicio (activación)
- Definición del gancho (1 párrafo): alcance + promesa ‘cero drama’ + zona + cupo.
- Momento de pedir referido definido (al agendar y post-servicio) + script corto.
- (Opcional) si hay data suficiente: estimación simple de payback/CAC.



**OKRs**

- O7: Llenar el piloto con clientes relevantes
  - KR1: Cupo del piloto lleno en ≤ X semanas
  - KR2: ≥ Y % leads de clientes calificados
  - KR3: ≥ Z % de los prospectos vienen por referencia directa

================================================================================
Page: Kit mínimo de adquisición (copy/paste)
Path: 0.2.1.3.6.1
Depth: 5
================================================================================

1. Amigos / Conocidos (DM 1:1)  

### A) Natural y corto  

Hey [NOMBRE] 👋 Estoy lanzando en Punta Cana un servicio de concierge del hogar (Maroa): nosotros coordinamos mantenimientos/arreglos y tú te quitas el drama de buscar y manejar técnicos. Iniciaremos el piloto con mantenimiento de aires acondicionados. 

Si te interesa, escríbenos por aquí: [WA_LINK] o mira: [WEB]  

### B) Para gente ocupada / cero tiempo  

[NOMBRE], te lo paso porque sé que siempre hay algo que resolver en la casa 😅  

Estamos iniciando Maroa, concierge del hogar en Punta Cana: coordinamos visita, seguimiento y cierre. Iniciaremos el piloto con mantenimiento de aires acondicionados.  

Si quieres, te mando el resumen o lo ves aquí: [WEB] (y si prefieres directo: [WA_LINK])  

### C) Para dueños que viven fuera / alquilan  

Hey [NOMBRE]. Para propietarios que no están siempre en la propiedad: estamos lanzando Maroa en Punta Cana, un concierge que coordina mantenimiento y te mantiene al tanto con updates/evidencia.  Iniciaremos el piloto con mantenimiento de aires acondicionados. 

Si te interesa, aquí es fácil: [WA_LINK] | [WEB]  

### D) “Pregunta” (mejor tasa de respuesta)  

[NOMBRE] quick one: ¿te serviría alguien que te coordine el mantenimiento del hogar en Punta Cana (sin tú bregar con técnicos)?  

Si sí, te paso el link: [WA_LINK] / [WEB]  

## Grupos WhatsApp (residenciales / vecinos / comunidad)  

### A) Post corto (cero ventas)  

Hola vecinos 👋 Estamos iniciando Maroa, un concierge del hogar en Punta Cana: coordinamos mantenimientos y arreglos para que no tengan que estar buscando técnicos ni persiguiendo respuestas. Iniciaremos el piloto con mantenimiento de aires acondicionados.   

Info y contacto: [WEB] | WhatsApp directo: [WA_LINK]  

### B) Con dolor real (sin sonar “pitch”)  

Comparto por si a alguien le sirve: estamos lanzando un concierge del hogar en Punta Cana (Maroa). La idea es simple: tú dices qué necesitas y nosotros coordinamos la visita, seguimiento y cierre.  Iniciaremos el piloto con mantenimiento de aires acondicionados. 

Si quieres verlo: [WEB] o escribir directo: [WA_LINK]  

### C) Para residenciales (enfoque orden/gestión)  

Hola comunidad. Estamos iniciando Maroa en Punta Cana: concierge para coordinar mantenimiento del hogar (agenda, confirmaciones, updates).  Iniciaremosn el piloto con mantenimiento de aires acondicionados. 

Si te interesa, aquí están los detalles: [WEB] y WhatsApp: [WA_LINK]  

### D) Si el grupo es estricto (más “recomendación”)  

Pregunta rápida: ¿a alguien le serviría un concierge que coordine mantenimiento del hogar en Punta Cana? Si sí, les dejo el contacto por DM o aquí: [WA_LINK] (más info: [WEB])  

## Administradores / Property managers / Aliados  

### A) Administrador de residencial (serio y directo)  

Hola [NOMBRE], soy [TU NOMBRE]. Estamos iniciando Maroa en Punta Cana: un concierge del hogar que coordina mantenimientos y arreglos (agenda, seguimiento, cierre).  

Me gustaría explorar si esto puede servir como opción para propietarios/residentes de [RESIDENCIAL].  

¿Te va una llamada de 15 min? Te dejo la info aquí: [WEB] y WhatsApp: [WA_LINK]  

### B) Property manager (beneficio claro)  

Hola [NOMBRE]. Estamos lanzando Maroa, concierge del hogar en Punta Cana. Coordinamos mantenimiento y visitas con seguimiento para que tú y tus propietarios no pierdan tiempo coordinando técnicos.  

Si te interesa, te comparto el flujo y beneficios: [WEB] | [WA_LINK]. ¿Te va hablar 15 min esta semana?  

### C) Aliado (cleaners/realtors/etc.) — colaboración simple  

Hola [NOMBRE]. Estamos iniciando Maroa (concierge del hogar en Punta Cana). Creo que podemos ayudarnos: cuando tus clientes necesiten mantenimiento, nosotros lo coordinamos; y cuando los míos necesiten [SERVICIO], te los paso a ti.  

Te dejo el contacto: [WA_LINK] y la web: [WEB]. ¿Lo conversamos 10–15 min?  

## FAQ corta + CTA realista (para pegar en WhatsApp)  

**¿Qué es Maroa?**  

Un concierge del hogar en Punta Cana: coordinamos mantenimiento y arreglos para que tú no tengas que gestionar técnicos.  

**¿Cómo funciona?**  

Nos escribes → entendemos lo que necesitas → coordinamos la visita → seguimiento y cierre.  

**¿Dónde aplica?**  

Punta Cana (piloto de lanzamiento).  

**¿Cómo contacto / pido info?**  

WhatsApp directo: [WA_LINK]  

Más info: [WEB]  

**CTA una línea (para cerrar conversaciones):**  

Si quieres, escríbenos aquí [WA_LINK] y dime tu residencial + qué necesitas.  

## “Primer reply” automático (WhatsApp Business) — más humano  

¡Hola! 👋 Soy [NOMBRE] de Maroa.  

Para ayudarte rápido, dime:  

- Residencial/zona en Punta Cana  
- Qué necesitas (mantenimiento / arreglo / revisión)  
- ¿Para cuándo lo necesitas?  

### 

================================================================================
Page: Cadencia minima de ejecución
Path: 0.2.1.3.6.2
Depth: 5
================================================================================

**Objetivo:** ejecutar outreach + follow-ups de forma consistente (sin sobre optimizar) y revisar semanalmente resultados por canal para decidir qué escalar, pausar o ajustar.

**Herramientas mínimas:** WhatsApp Business + Formulario (captura lead) + Sheet/CRM ligero (pipeline) + Tablero semanal por canal.



## 1) Definiciones rápidas (para operar sin ambigüedad)

**Lead:** persona/contacto que mostró interés (respondió, pidió info o fue referido).  
**Oportunidad:** lead con intención clara (pidió cotización/agenda).  
**Cita:** visita agendada con fecha/hora.  
**Conversión:** cita completada o servicio vendido (según defina el piloto).

**Estatus mínimo del pipeline (en Sheet):**

- `Nuevo`
- `Contactado`
- `Interesado`
- `Cotizado/Propuesta`
- `Cita agendada`
- `Completado`
- `Perdido`
- `Dormido (follow-up pendiente)`



## 2) Rutina diaria de outreach + follow-ups (cadencia mínima)

> Meta: **constancia**. Dos bloques diarios, 5 días/semana.  
Sugerencia horario (RD): **10:00–11:00** y **16:00–16:30**.

### Bloque A — 10:00 a 11:00 (Outreach + respuestas calientes)

1. **Revisar Inbox WhatsApp (10 min)**

  - Responder leads “calientes” (los que escribieron primero o respondieron ayer).
  - Marcar/etiquetar chats: `Nuevo / En follow-up / Cita`.

1. **Outreach del día (30–35 min)**

  - Enviar mensajes a nuevos contactos del canal del día (ver rotación abajo).
  - Registrar cada contacto en el Sheet (aunque sea mínimo: nombre + canal + fecha + estatus).

1. **Agendar / Cerrar siguientes pasos (10–15 min)**

  - Objetivo: salir del chat con un “sí/no/próximo paso”.
  - Si hay interés → link a formulario breve o propuesta + 2 opciones de fecha/hora.

### Bloque B — 16:00 a 16:30 (Follow-ups + limpieza del pipeline)

1. **Follow-ups programados (20 min)**
2. **Actualizar Sheet (10 min)**

  - Estatus + próxima acción + fecha de próximo follow-up.



## 3) Secuencia mínima de follow-ups (sin spam, pero firme)

> Regla: *cada follow-up debe aportar algo*: recordatorio, beneficio, prueba social, facilidad (dos horarios), o cierre amable.

**D0 (mismo día del primer contacto):** Mensaje inicial + pregunta cerrada.  
**D1:** Recordatorio corto + 2 horarios sugeridos.  
**D3:** Valor (qué incluye / garantía / “cero drama”) + CTA.  
**D7:** Último intento amable + opción de pausar.

**Plantillas WhatsApp (copy/paste)**

**Mensaje inicial (outreach)**

> Hola, soy ___ de Maroa. Estamos corriendo un piloto en Punta Cana para que el mantenimiento del hogar sea “tranquilidad, cero drama”. Iniciando con mantenimiento de aires acondicionados.  
¿Te interesaría que te comparta cómo funciona y los beneficios del piloto? (Sí/No)

**D1**

> Súper rápido: ¿prefieres que lo veamos por WhatsApp o te agendo una llamada de 10 min?  
Hoy tengo: 12:30 o 5:30.

**D3 (valor)**

> Te dejo lo esencial del piloto: coordinación por concierge (tú no gestionas técnicos), agenda rápida y seguimiento.  
¿Te gustaría que te proponga 2 opciones de fecha para una primera visita/levantamiento?

**D7 (cierre amable)**

> Último ping por aquí 🙂 Si ahora no es prioridad, lo dejo en pausa.  
¿Te lo recuerdo en unas semanas o lo cierro?



## 4) Rotación simple por canal (para no dispersarse)

**Lunes:** referidos / red cercana (calidad alta)  
**Martes:** grupos vecinos (broadcast/DM según reglas del grupo)  
**Miércoles:** grupo Bávaro / comunidad local  
**Jueves:** leads dormidos + reactivación (D7/D14)  
**Viernes:** alianzas rápidas (administración condominios, property managers, cleaners)

> Si hay inbound fuerte, se prioriza inbound; la rotación es guía, no camisa de fuerza.



## 5) Reglas operativas (mínimas, pero obligatorias)

- Todo lead nuevo entra al **Sheet el mismo día** (aunque sea con 5 campos).
- Todo lead con respuesta entra a secuencia D0/D1/D3/D7.
- Si no respondió tras D7 → estado `Dormido` (con fecha de reintento en 2–4 semanas).
- Cada conversación debe terminar con: **(a) cita**, **(b) propuesta**, o **(c) permiso para recontactar**.



## 6) Registro mínimo en el Sheet (campos)

**Obligatorios**

- Fecha ingreso
- Nombre
- Canal (Vecinos / Bávaro / Referido / Alianza / Inbound)
- Estatus
- Próxima acción (texto corto)
- Fecha próximo follow-up
- Dueño (persona responsable)

**Deseables**

- Zona / residencial
- Tipo de necesidad (AC / plomería / electricidad / general)
- Valor estimado / urgencia (Baja/Media/Alta)
- Resultado final (convertido / perdido + motivo)



## 7) Revisión semanal por canal (60–75 min, 1 vez/semana)

**Cadencia sugerida:** lunes 9:30 am (o viernes tarde si prefieren cerrar semana).

### Agenda (estructura fija)

1. **Resumen del embudo total (10 min)**

  - Leads nuevos
  - Contactados
  - Interesados
  - Citas agendadas
  - Servicios completados / ventas
  - No-show / reprogramaciones

1. **Resultados por canal (20–25 min)**  
Para cada canal:

  - leads
  - % respuesta (respondieron / contactados)
  - % conversión a cita
  - % show rate (citas completadas / agendadas)
  - Calidad (reclamos, fit, ticket, fricción)

1. **Top fricciones y causas de pérdida (10–15 min)**

  - “Perdido por precio”, “no era prioridad”, “no confía”, “demora en agendar”, etc.

1. **Decisiones de la semana (15–20 min)**

  - **Escalar:** duplicar esfuerzo en canal ganador
  - **Ajustar:** mensaje/offer/horarios
  - **Pausar:** canal con baja calidad o costo alto
  - **Nuevo mini-experimento:** 1 cambio por semana (máximo)

### Reglas de decisión (simples)

- Si un canal tiene **mejor conversión a cita + buena calidad**, recibe **+30–50%** del esfuerzo semanal.
- Si un canal genera leads pero **baja respuesta**, se ajusta **mensaje + targeting** antes de desechar.
- Si un canal genera volumen pero **mala calidad / muchas incidencias**, se **pausa** o se filtra con preguntas previas.



## 8) Output semanal (lo que debe quedar escrito)

Un mini-reporte (1 página o mensaje en el grupo Core) con:

- Ranking de canales (mejor → peor)
- 1 aprendizaje clave
- 1 cambio a probar esta semana
- Metas simples (p.ej., “20 leads nuevos, 8 interesados, 4 citas, 3 completadas”)

================================================================================
Page: Esquema simple de referidos + mensaje post-servicio (activación) — Piloto Maroa
Path: 0.2.1.3.6.3
Depth: 5
================================================================================

## 1) Objetivo

Activar crecimiento orgánico **sin dañar unit economics**, premiando solo referidos que **conviertan a suscripción** y limitando el beneficio.



## 2) Regla del programa (simple y clara)

**Incentivo:**

- Por cada referido que **inicie una suscripción**, el cliente que refirió recibe **1 mes gratis**.

**Límites para proteger el negocio**

- **Máximo: 3 meses gratis por cliente por año** (3 referidos convertidos = tope).
- Beneficio **no acumulable más allá del tope** (si refiere 10, solo cuentan 3).
- El mes gratis se aplica como **crédito** a la próxima factura/renovación (no cash).

**Condiciones de elegibilidad (para evitar abuso)**

- El referido debe ser **cliente nuevo** (no haber estado en base/Sheet antes).
- La suscripción debe estar **activa y pagada** (o pasado un “periodo de seguridad” corto).
- No aplica para la misma propiedad del referente (evita “autorreferido”).
- Maroa puede **invalidar referidos** por fraude/duplicados.

**Ventana de atribución**

- El referido debe suscribirse dentro de **30 días** del primer contacto registrado.



## 3) Cómo se opera con herramientas mínimas (WhatsApp + Sheet)

**Método de tracking (sin software extra)**

- Cada cliente del piloto recibe un **código simple**: `GAB-014` (Iniciales + # cliente).
- Cuando refiere, solo debe decir: **“Mi código es GAB-014”** o reenviar un link/mensaje prehecho.

**Campos mínimos en el Sheet**

- **Referente:** nombre + código
- **Referido:** nombre + teléfono + residencial
- **Fecha referido**
- **Estatus:** `Recibido | Contactado | Interesado | Suscrito | No califica`
- **Mes gratis aplicado:** `Sí/No` + fecha

**Momento de “pago del incentivo”**

- Se marca como **“Suscrito”** cuando:
  - firma/acepta terms + primer pago confirmado (o activación formal), y
  - se agenda primera visita incluida (si aplica).
- Luego Backoffice aplica el **crédito de 1 mes** en la próxima factura/renovación.



## 4) Copy “mini-terms” del programa (para pegar en Terms del piloto)

> **Referidos Piloto Maroa:** Por cada referido nuevo que active una suscripción, el cliente referente recibe 1 mes gratis, aplicado como crédito a su próxima factura/renovación. Máximo 3 meses gratis por cliente por año. El referido debe ser cliente nuevo y activar su suscripción dentro de 30 días del primer contacto registrado. No aplica a autoreferidos ni a personas del mismo inmueble. Maroa podrá invalidar referidos duplicados o fraudulentos.



## 5) Mensaje post-servicio (activación) — WhatsApp (copy/paste)

**Versión A (corta, directa)**

> ¡Listo! 🙌 Gracias por recibirnos hoy.  
Si te gustó la experiencia “tranquilidad, cero drama”, en el piloto tenemos referidos:  
Por cada persona que tú refieras y se suscriba, te damos **1 mes gratis** (hasta **3 meses máx. al año**).  
¿A quién crees que le serviría? Si me pasas su nombre y número, yo me encargo.  
Tu código: **[CÓDIGO]**

**Versión B (más guiada, con opción de reenviar)**

> ¡Gracias! Quedó cerrado el servicio ✅  
Estamos creciendo el piloto por invitación. Si refieres a alguien y se suscribe, tú recibes **1 mes gratis**(máximo **3**).  
Te dejo un mensaje listo para reenviar:  
“Estoy en el piloto de Maroa (Punta Cana). Ellos coordinan todo por concierge y te quitan el drama del mantenimiento. Si quieres info, escribe y di mi código **[CÓDIGO]**.”  
¿Quieres que te lo deje como “reenviar” con el texto ya armado?

**Versión C (sutil, para clientes más fríos)**

> ¡Gracias por hoy! Si conoces a alguien en Punta Cana que quiera resolver mantenimiento sin complicarse, dímelo y le comparto info.  
En el piloto, si alguien se suscribe con tu referido, te damos **1 mes gratis** (hasta **3**).  
Tu código: **[CÓDIGO]**



## 6) Mensaje para el referido (primer contacto) — WhatsApp (copy/paste)

> Hola ___, soy ___ de Maroa. **[Nombre del referente]** me compartió tu contacto (código **[CÓDIGO]**).  
Estamos corriendo un piloto en Punta Cana para que el mantenimiento sea “tranquilidad, cero drama” (coordinación por concierge).  
¿Te interesa que te mande el resumen y beneficios del piloto?



## 7) Controles anti-daño (quick checks semanales)

En la revisión semanal:

- % de meses gratis otorgados vs nuevas suscripciones (si se dispara, ajustar tope/condiciones).
- Canales de adquisición: referidos vs otros (evitar dependencia total).
- Calidad: incidencias / retrabajos de referidos (si baja, filtrar mejor).
- Localidad de los referidos 



================================================================================
Page: Definición del gancho
Path: 0.2.1.3.6.4
Depth: 5
================================================================================

**Gancho (1 párrafo):**  
Maroa es un servicio que **coordina y resuelve pendientes del hogar sin drama**: tú nos dices qué necesitas y nosotros gestionamos y ejecutamos con proveedores verificados (mantenimiento ligero, reparaciones comunes, instalaciones y recados), con comunicación clara y seguimiento de principio a fin. En este inicio abrimos **cupos limitados en Punta Cana**, con capacidad de **8–10 servicios por semana**, para clientes que quieren delegar y tener su casa funcionando sin estrés. Para agendar: **[LINK/WEB]** o WhatsApp **[NÚMERO]**.

Y por si quieres mantener una frase corta tipo “qué somos” (sin “por hora”), aquí tienes 3 opciones que suelen sonar naturales:

- **“Tu equipo para resolver pendientes del hogar.”**
- **“Nos encargamos de coordinar y dejarlo listo.”**
- **“Gestión y ejecución de mantenimiento del hogar, sin estrés.”**

Si quieres, también te dejo una versión **más corta** para WhatsApp/DM:

**Versión corta (WhatsApp/DM):**  
Maroa resuelve pendientes del hogar **sin drama** en **Punta Cana**: coordinamos y ejecutamos mantenimiento, reparaciones e instalaciones con proveedores verificados y seguimiento claro. **Cupo limitado: 8–10 servicios/semana.** Agenda aquí **[LINK]** o WhatsApp **[NÚMERO]**.

### 2) Salida directa (más “performance”)

¿Pendientes en casa? Maroa los resuelve **sin drama** en **Punta Cana**. Coordinamos y dejamos listo mantenimiento, reparaciones e instalaciones con proveedores verificados y updates claros. **Cupo limitado: 8–10 servicios por semana.**Agenda en **[LINK]** o WhatsApp **[NÚMERO]**.

### 3) Premium (más “white glove”)

Maroa es tu servicio **white-glove** para que tu hogar funcione **sin drama** en **Punta Cana**: nos encargamos de coordinar y ejecutar mantenimiento, reparaciones e instalaciones con proveedores cuidadosamente seleccionados, seguimiento puntual y estándares de calidad. Estamos abriendo **cupos limitados** con capacidad de **8–10 servicios por semana** para clientes que valoran rapidez, orden y comunicación impecable. Agenda en **[LINK]** o WhatsApp **[NÚMERO]**.

### La directa (ultra corta y clara)

Maroa resuelve pendientes del hogar **sin drama** en **Punta Cana**: coordinamos y ejecutamos mantenimiento, reparaciones e instalaciones con proveedores verificados y seguimiento claro. **Cupo limitado: 8–10 servicios por semana.** Agenda aquí **[LINK]** o WhatsApp **[NÚMERO]**.





Forma wording, abriria este mensaje si estuviera viendo 

se siente muy publicidad, disimular que sea publicidad

================================================================================
Page: Momento de pedir referido definido (al agendar y post-servicio) + script corto.
Path: 0.2.1.3.6.5
Depth: 5
================================================================================

## Programa de referidos (regla simple)

- **Founders (primeros clientes):** **1 mes gratis por cada referido que active una suscripción. Sin límite durante el periodo Founder.**
- **Clientes regulares:** **1 mes gratis por cada referido que active una suscripción, hasta 6 meses gratis.**
- **Condición:** el mes gratis aplica **cuando el referido paga/activa la suscripción**.

*(Nota interna: define “Founder” como “primeros X suscriptores” o “hasta X fecha” para que sea operable.)*



## Momento 1: Al agendar (después de confirmar fecha/hora y alcance)

**Script (WhatsApp/DM) – versión regular (con límite 6):**

> Listo, quedas agendado para **[DÍA/HORA]** 🙌  
Rápido: si conoces **1 persona en Punta Cana** que también quiera resolver pendientes del hogar **sin drama**, ¿se lo compartes?  
Tenemos programa de referidos: **por cada referido que active una suscripción, tú recibes 1 mes gratis (hasta 6 meses).**  
Te dejo un texto para reenviar:  
“Estoy usando Maroa en Punta Cana para resolver pendientes del hogar sin drama. Si te suscribes, a mí me dan 1 mes gratis por referido. Aquí: **[LINK] / WhatsApp [NÚMERO]**.”

**Script – versión Founder (sin límite):**

> Listo, quedas agendado para **[DÍA/HORA]** 🙌  
Como eres de los **Founders**, tienes beneficio especial: **por cada referido que active una suscripción, te damos 1 mes gratis (sin límite mientras estés en el plan Founder).**  
Si piensas en **1 persona en Punta Cana** ahora, compártele este texto:  
“Estoy usando Maroa en Punta Cana para resolver pendientes del hogar sin drama. Si te suscribes, a mí me dan 1 mes gratis por referido (beneficio Founder). **[LINK] / WhatsApp [NÚMERO]**.”

**Variación directa (si están motivados):**

> Si me pasas su WhatsApp, yo le escribo un mensaje corto y respetuoso. Y si se suscribe, te queda tu **mes gratis**.



## Momento 2: Post-servicio (cuando el cliente confirma satisfacción)

**Timing:** 15–60 min después del cierre + “¿todo ok?” (o al día siguiente si terminó tarde).  
**Regla:** pedir solo si el cliente respondió positivo (✅ “perfecto”, “gracias”, etc.).

**Script – versión regular (límite 6):**

> Me alegra que quedara listo ✅  
¿Me ayudas con algo rápido? Si conoces **1 persona en Punta Cana** con pendientes en casa, compártele Maroa.  
**Por cada referido que active suscripción, te damos 1 mes gratis (hasta 6).**  
Texto para reenviar:  
“Te recomiendo Maroa en Punta Cana: coordinan y resuelven pendientes del hogar con seguimiento claro. Si te suscribes, a mí me dan 1 mes gratis por referido. **[LINK] / [NÚMERO]**.”

**Script – versión Founder (sin límite):**

> Me alegra que quedara listo ✅  
Como Founder, recuerda tu beneficio: **1 mes gratis por cada referido que active suscripción (sin límite mientras estés en Founder).**  
Si tienes a alguien en mente en Punta Cana, reenvíale esto:  
“Maroa en Punta Cana: resuelven pendientes del hogar sin drama. Si te suscribes, a mí me dan 1 mes gratis por referido (Founder). **[LINK] / [NÚMERO]**.”



## Textos ultra cortos para reenviar (2 opciones)

**A (regular):**

> Maroa (Punta Cana): resuelven pendientes del hogar sin drama. Si te suscribes, a mí me dan **1 mes gratis por referido** (hasta 6). **[LINK] / [NÚMERO]**.

**B (Founder):**

> Maroa (Punta Cana): resuelven pendientes del hogar sin drama. Si te suscribes, a mí me dan **1 mes gratis por referido** (beneficio Founder). **[LINK] / [NÚMERO]**.



## Nota interna operativa (para que no se descontrole)

- Definir **Founder** con una regla cerrada: **primeros [X] suscriptores** o **hasta [FECHA]**.
- En onboarding, marcar en CRM: **Founder = Sí/No** y **Referido por = ___**.
- En factura: “Crédito mes gratis por referido: [NOMBRE REFERIDO] – [MES]”.

================================================================================
Page: Other Resources
Path: 0.3
Depth: 1
================================================================================

 

================================================================================
Page: Long List Ideas Solution
Path: 0.3.1
Depth: 2
================================================================================

Ideas:

1. Ciudad La Palma:
   1. Aborbar a la comunidad ofreciendo el servicio de un agente proactivo de mantenimiento preventivo.
      1. Survey:
         1. Equipos:
            1. AC - cuantos?
            2. Estufa
            3. Nevera
            4. Lavadora
            5. Secadora
         2. Cuando quieres que le demos mantenimiento:
            1. Agosto / Septiembre / Octubre
            2. Temporalidad



================================================================================
Page: Notes
Path: 0.3.2
Depth: 2
================================================================================

Research sobre beneficios de:

- La vida del equipo con mantenimiento versus no darle mantenimiento.
- Performance del equipo con y sin mantenimiento.
- Ahorro en costos por reparación del equipo con y sin mantenimiento.



Encuestas.



================================================================================
Page: Maroa (Abstracted)
Path: 0.3.3
Depth: 2
================================================================================

Imagina un enorme **orquestador de ciclos**:  
Un cerebro en la nube que observa millones de *ticks* —pequeñas campanadas de tiempo que anuncian que algo, en algún lugar, está por entrar en su “ventana de cuidado”. Cada tick dispara tres movimientos esenciales:

1. **Detección del momento**  
El sistema capta la señal (“se acerca el next due”) y la clasifica según urgencia, complejidad y ubicación. Nada de listas infinitas ni agendas manuales; todo fluye como un reloj atómico.
2. **Emparejamiento inteligente**  
Con ese dato en la mano, la plataforma busca en su *knowledge graph* de proveedores cuál encaja mejor: disponibilidad, cobertura, skills, rating, logística. Al principio, un **equipo humano tipo mission-control** rellena los huecos donde la data aún no llega; más adelante, algoritmos y autoservicio tomarán el relevo.
3. **Cierre del ciclo**  
Se envía una propuesta al usuario (“Aquí está la mejor opción, ¿sí o no?”). Si el cliente acepta, se agenda, se despacha y se hace seguimiento hasta la confirmación de satisfacción y pago. Si hay silencio o rechazo, el sistema reitera o redirige el caso. Feedback y métricas vuelven al cerebro central para afinar futuras decisiones.

🔭 **Vista desde arriba**

- **Input**: pulsos temporales que anuncian la necesidad.
- **Motor**: lógica de orquestación + operación humana para cubrir ambigüedades.
- **Output**: acciones ejecutadas sin fricción, activos cuidados y usuarios sin cargas mentales.

En esencia, es **mass-coordination-as-a-service**: un puente proactivo entre “esto requiere atención” y “alguien confiable ya lo está resolviendo”, escalando de lo artesanal a lo automático conforme maduren los datos y las integraciones.

================================================================================
Page: Competidores
Path: 0.3.4
Depth: 2
================================================================================

https://www.instagram.com/homeservicesdo/



================================================================================
Page: Mantenimientos Frecuentes
Path: 0.3.5
Depth: 2
================================================================================

Desarrollar un servicio o app de mantenimiento preventivo que funcione como un **agregador de recordatorios** para hogar y oficina es una excelente idea —hay muchas oportunidades, especialmente si lo integras con IA o asistentes digitales. Aquí tienes una lista clasificada de **acciones y mantenimientos frecuentes que pueden programarse para no olvidarse**.



# **🏠 HOGAR**

## **🛠️ Equipos eléctricos / electrodomésticos**

- **Aire acondicionado**: limpieza de filtros (mensual/trimestral), revisión de gas (anual).
- **Refrigerador**: limpieza de serpentines (cada 6 meses), revisión de puertas y sellos.
- **Lavadora/secadora**: limpieza de filtro de pelusas (cada uso), limpieza profunda del tambor (trimestral).
- **Microondas**: limpieza interna (mensual), revisión de funcionamiento del plato giratorio.
- **Calentador de agua**: descalcificación y limpieza (anual).
- **Purificadores de aire o agua**: cambio de filtros (según uso, cada 3-6 meses).

## **🔋 Energía y seguridad**

- **Baterías de detectores de humo/CO₂**: cambio (cada 6 meses).
- **Paneles solares (si aplica)**: limpieza y revisión técnica (trimestral o semestral).
- **Sistema eléctrico**: chequeo de carga y conexiones (anual).
- **Planta eléctrica / inversor**: prueba de encendido (mensual), cambio de aceite (según horas de uso), limpieza de bornes.

## **🚰 Plomería y agua**

- **Revisión de fugas**: bajo lavamanos, WC, lavadoras (mensual).
- **Limpieza de trampas de grasa**: (mensual).
- **Calentadores solares**: revisión de válvulas y presión (anual).

## **🪑 Mobiliario y superficies**

- **Pulido de pisos (mármol, madera)**: (anual o semestral).
- **Revisión de herrajes de puertas/ventanas**: lubricado y ajustes (trimestral).
- **Mantenimiento de cerraduras electrónicas**: revisión de batería (cada 6 meses).

## **🐾 Mascotas**

- **Baño y corte de pelo** (cada 4-6 semanas).
- **Desparasitación / vacunas** (según calendario del veterinario).

## **🌿 Exteriores y jardinería**

- **Poda de árboles y arbustos**: (mensual o trimestral).
- **Revisión del sistema de riego automático**: (mensual).
- **Mantenimiento de piscina**: limpieza, pH, cloro (semanal).



# **🏢 OFICINA**

## **💻 Tecnología y redes**

- **Respaldo de información crítica**: (diario/semanal/mensual).
- **Actualización de software/firmware**: (mensual).
- **Limpieza interna de CPUs y ventiladores**: (semestral).
- **Revisión de cableado estructurado**: (anual).
- **Revisión de UPS y cambio de baterías**: (anual o según vida útil).
- **Pruebas de contingencia ante fallas**: (trimestral).

## **🖨️ Equipos de impresión y copiado**

- **Limpieza de cabezales**: (mensual).
- **Cambio de cartuchos o tóner**: (según uso).
- **Mantenimiento técnico**: (trimestral o semestral).

## **🧯 Seguridad**

- **Revisión y recarga de extintores**: (anual).
- **Simulacro de evacuación / revisión de salidas**: (anual).
- **Verificación de cámaras de seguridad**: (mensual).
- **Actualización de credenciales de acceso o contraseñas**: (trimestral).

## **🪑 Infraestructura**

- **Chequeo del aire acondicionado central**: (mensual y anual).
- **Revisión de sillas, escritorios y puertas**: (trimestral).
- **Limpieza profunda o fumigación**: (mensual/trimestral).
- **Control de plagas**: (trimestral).



### **🧾 Otros recordatorios útiles que podrías incluir**

- Renovación de seguros del hogar/oficina/vehículos.
- Inspección técnica vehicular si aplica a flotillas.
- Pago de impuestos o tasas municipales (anual/trimestral).
- Renovación de licencias (software, permisos, etc.).
- Días clave para contratos de mantenimiento, servicios de limpieza o renovación de garantías.



 

# ✅ PAGOS OBLIGATORIOS RECURRENTES

## 🏠 Hogar y servicios básicos

- Pago de energía eléctrica (mensual)
- Pago de agua potable (mensual o bimensual)
- Pago de servicio de gas (mensual o recarga)
- Pago de internet y telecomunicaciones (mensual)
- Pago de mantenimiento de condominio o residencial (mensual)
- Pago de limpieza o personal doméstico (quincenal o mensual)

## 🏢 Oficina y servicios empresariales

- Pago de alquiler/local comercial (mensual)
- Servicios de limpieza y seguridad privada (mensual)
- Cuotas de software o plataformas (mensual o anual)
- Renovación de dominios web y hosting (anual)

## 🚗 Vehículos

- Pago de seguro del vehículo (mensual o anual)
- Renovación de marbete o revisión técnica (anual)

## 🧑‍💼 Personales y familiares

- Colegiatura o mensualidad escolar/universitaria
- Cuotas de préstamos personales o hipotecarios
- Pago de tarjetas de crédito (mensual)
- Suscripciones (Netflix, Spotify, iCloud, etc.)



# 📑 IMPUESTOS Y OBLIGACIONES FISCALES

## 👤 Persona física

- Declaración jurada de renta IR-1 (anual)
- Pago de Impuesto sobre la Renta (anual)
- Declaración jurada de activos (si aplica, anual)
- Renovación de licencia profesional o colegiatura (anual)

## 🏢 Empresa o profesional independiente

- Envío de 606, 607, 608 y 609 (mensual)
- Presentación de ITBIS (mensual)
- Retenciones de empleados (mensual)
- IR-17 (anual o trimestral)
- Declaración de activos fijos (si aplica)
- Renovación del RNC o permisos municipales



# 🩺 CUIDADOS Y CHEQUEOS DE SALUD

## 👨‍⚕️ Salud general adultos

- Chequeo médico anual (laboratorios, presión, colesterol, etc.)
- Examen oftalmológico (anual)
- Consulta dental / limpieza bucal (semestral)
- Mamografía / Papanicolau (anual)
- PSA o revisión prostática (anual)
- Control de presión arterial (mensual si es hipertenso)
- Vacunas de refuerzo (según edad: tétano, hepatitis, etc.)

## 👶 Niños y adolescentes

- Visitas pediátricas de rutina (cada 6 meses o según edad)
- Esquema de vacunación actualizado
- Revisión de visión y audición (anual)

## 🧘 Bienestar físico y mental

- Citas de terapia psicológica o coaching (frecuencia variable)
- Recordatorio de suplementos o medicamentos crónicos (diario/mensual)
- Evaluación nutricional o metabólica (semestral)



 



================================================================================
Page: Resources
Path: 0.3.6
Depth: 2
================================================================================

[https://beta.app.100tasks.com/api/resources/100TasksPoster.pdf](https://beta.app.100tasks.com/api/resources/100TasksPoster.pdf)



================================================================================
Page: Co-Founder Responsibilities
Path: 0.3.7
Depth: 2
================================================================================



## Responsabilidades para Co-Founders de Maroa
| Departamento | Responsabilidad | Gabby ✅ | Asirio ✅ | Erick ✅ |
| --- | --- | --- | --- | --- |
| Estrategia & Dirección General | Definir visión, misión y valores | false | true | true |
| Estrategia & Dirección General | Tomar decisiones estratégicas clave | true | true | true |
| Estrategia & Dirección General | Priorizar features o servicios | false | true | true |
| Estrategia & Dirección General | Supervisar avances y mantener foco | true | true | true |
| Ventas & Alianzas | Buscar y cerrar alianzas estratégicas | false | true | false |
| Ventas & Alianzas | Identificar oportunidades de negocio o expansión | false | true | false |
| Ventas & Alianzas | Desarrollar estrategia de pricing | false | false | false |
| Ventas & Alianzas | Generar oportunidades de ingresos y cross-selling | false | true | false |
| Producto & Tecnología | Idear funcionalidades de la app y validar con usuarios | false | false | true |
| Producto & Tecnología | Coordinar equipo de desarrollo | true | false | true |
| Producto & Tecnología | Probar y validar entregables | true | false | true |
| Producto & Tecnología | Buscar soluciones low-cost o no-code para el MVP | true | true | true |
| Operaciones & Logística | Mapear flujos operativos (recepción, mantenimiento, entrega) | false | false | true |
| Operaciones & Logística | Buscar proveedores y negociar condiciones | false | true | false |
| Operaciones & Logística | Definir procesos con técnicos o aliados | false | false | true |
| Operaciones & Logística | Coordinar piloto o pruebas iniciales | true | true | false |
| Comunicación & Marca | Diseñar la marca y su personalidad | true | true | false |
| Comunicación & Marca | Definir tono de voz | false | false | false |
| Comunicación & Marca | Crear contenido inicial (pitch, redes, presentaciones) | true | true | false |
| Comunicación & Marca | Diseñar experiencia de cliente | true | true | true |
| Recursos Humanos | Definir roles futuros y cultura organizacional | false | false | true |
| Recursos Humanos | Reclutar y coordinar talentos puntuales (diseñador, devs, etc.) | false | false | true |
| Recursos Humanos | Manejar documentación interna | true | false | true |
| Finanzas & Legal | Crear presupuestos y controlar gastos | false | false | false |
| Finanzas & Legal | Manejar temas legales (registro, contratos, términos de uso) | false | false | false |
| Finanzas & Legal | Buscar financiamiento inicial (si aplica) | false | false | true |
| Finanzas & Legal | Modelar costos e ingresos | false | false | true |
| Finanzas & Legal | Hacer seguimiento de métricas financieras clave | false | false | true |




================================================================================
Page: IMM Sessions
Path: 0.3.8
Depth: 2
================================================================================

[https://www.youtube.com/playlist?list=PLJLdUuhWXsVdFJc7DVaUcx55tHvJ_icGJ](https://www.youtube.com/playlist?list=PLJLdUuhWXsVdFJc7DVaUcx55tHvJ_icGJ)

