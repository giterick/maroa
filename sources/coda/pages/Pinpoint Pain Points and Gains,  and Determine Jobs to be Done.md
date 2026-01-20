# Pinpoint Pain Points and Gains,  and Determine Jobs to be Done

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

---
*Path: 0.1.1.4*
*Depth: 3*