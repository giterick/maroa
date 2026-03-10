# Checklist de Handoff a Backup Operativo - Maroa Pilot

> **Proposito:** Protocolo para transferir operaciones a Gabby (backup) cuando Marcia no este disponible.
> **Backup:** Gabby Bairan
> **Cuando usar:** Vacaciones, enfermedad, emergencia personal, o cualquier ausencia de Marcia durante horario operativo.

---

## Antes de la Ausencia (Idealmente T-24h)

### Informacion a Transferir por WhatsApp

Marcia debe enviar a Gabby un mensaje con:

```
HANDOFF MAROA - [Fecha inicio] a [Fecha fin]

SERVICIOS PENDIENTES:
- [Fecha]: [Cliente] - [Hora] - Tecnico: [Nombre] - Estado: [Estado]
- [Fecha]: [Cliente] - [Hora] - Tecnico: [Nombre] - Estado: [Estado]

LEADS ACTIVOS:
- [Nombre] - Estado: [Estado] - Proxima accion: [Que hacer]
- [Nombre] - Estado: [Estado] - Proxima accion: [Que hacer]

PAGOS PENDIENTES:
- [Cliente] - Monto: RD$[X] - Estado: [Esperando transferencia / etc.]

TECNICOS:
- Tecnico principal: [Nombre] - Tel: [Numero]
- Tecnico backup: [Nombre] - Tel: [Numero]

NOTAS IMPORTANTES:
- [Cualquier contexto relevante]
```

### Checklist de Preparacion

- [ ] Gabby tiene acceso al Google Sheet (verificar que puede editar)
- [ ] Gabby tiene acceso al Google Drive de fotos
- [ ] Gabby tiene los scripts de WhatsApp accesibles (`templates/whatsapp_scripts.md`)
- [ ] Gabby tiene la Quick Reference Card (`setup/quick_reference_card.md`)
- [ ] Gabby sabe como contactar a Erick (L3) en caso de emergencia
- [ ] Gabby reviso los checklists concierge (`ops/concierge_checklists.md`)
- [ ] Gabby tiene el numero de los tecnicos activos

---

## Durante la Ausencia

### Que Debe Hacer Gabby

| Prioridad | Tarea | Referencia |
|-----------|-------|-----------|
| **1 - Critica** | Responder mensajes de WhatsApp de clientes (SLA: <1h en horario) | Scripts #1-#14 |
| **2 - Alta** | Monitorear servicios del dia (timestamps, fotos, estados) | Checklist #5-#7 de concierge |
| **3 - Alta** | Registrar pagos recibidos | Hoja PAYMENTS |
| **4 - Media** | Atender nuevos leads | Checklist #2 de concierge |
| **5 - Baja** | Subir fotos a Drive | `ops/photo_workflow.md` |

### Que NO Necesita Hacer Gabby

- Reclutar tecnicos nuevos (puede esperar a que Marcia regrese)
- Generar leads proactivamente (redes sociales, grupos)
- Hacer follow-ups de satisfaccion (a menos que lleven 48h+ pendientes)
- Resolver incidencias Mayor o Critico sola (escalar a Erick)

### Cuando Escalar a Erick

- Cualquier incidencia Mayor o Critico (ver `ops/incident_severity_guide.md`)
- Cliente muy insatisfecho o amenaza queja publica
- Tecnico no aparece (no-show)
- Duda sobre precios, politicas o excepciones
- Cualquier situacion que no sepa como manejar

---

## Al Regresar Marcia

### Checklist de Retoma

- [ ] Gabby hace un resumen de lo que paso durante la ausencia
- [ ] Revisar hoja LEADS — nuevos leads y cambios de estado
- [ ] Revisar hoja SERVICES — servicios completados o reprogramados
- [ ] Revisar hoja PAYMENTS — pagos recibidos
- [ ] Revisar hoja INCIDENCIAS — incidentes nuevos
- [ ] Verificar que fotos estan subidas a Drive
- [ ] Verificar que no hay follow-ups pendientes (>48h)
- [ ] Agradecer a Gabby

---

## Contactos de Emergencia

| Quien | Rol | WhatsApp |
|-------|-----|----------|
| Erick Santana | Director / L3 | [Numero] |
| Tecnico Principal | Ejecucion de servicios | [Numero] |
| Tecnico Backup | Respaldo tecnico | [Numero] |

---

## Nota Importante

> El backup operativo es para mantener el servicio funcionando, no para operar al 100%.
> Si Gabby no se siente segura con alguna accion, **es mejor esperar y escalar a Erick** que tomar una decision incorrecta.
> Preferimos un servicio un poco mas lento que un error que afecte al cliente.
