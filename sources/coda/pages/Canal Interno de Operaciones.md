# Canal Interno de Operaciones

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

---
*Path: 0.2.1.3.5.1*
*Depth: 5*