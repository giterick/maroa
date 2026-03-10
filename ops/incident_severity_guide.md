# Guia de Severidad de Incidencias - Maroa Pilot

> **Proposito:** Definir criterios claros para clasificar incidencias como Menor, Mayor o Critico, para que Marcia sepa como actuar y cuando escalar.
> **Referencia:** Hoja INCIDENCIAS en Google Sheet (campo `Severidad`)

---

## Niveles de Severidad

### Menor

**Definicion:** Problema que no afecta la entrega del servicio ni la satisfaccion del cliente de forma significativa.

| Ejemplo | Accion |
|---------|--------|
| Tecnico llego 10-15 min tarde pero dentro de ventana | Notar en Sheet, recordar al tecnico |
| Tecnico olvido 1 foto (tiene las otras 2 minimas) | Pedir la foto por WhatsApp, notar en Sheet |
| Cliente pregunta algo fuera de alcance (otro electrodomestico) | Responder que solo A/C, ofrecer referencia |
| Error menor en Sheet (campo mal llenado) | Corregir inmediatamente |
| Cliente tarda en confirmar pago (mismo dia) | Enviar recordatorio amable |

**Tiempo de respuesta:** Resolver antes de cerrar el dia
**Escalar a Erick:** No necesario
**Impacto en KPIs:** Ninguno o minimo

---

### Mayor

**Definicion:** Problema que afecta la experiencia del cliente, el cumplimiento de SLAs, o la calidad del servicio.

| Ejemplo | Accion |
|---------|--------|
| Tecnico llego fuera de la ventana de 2 horas | Registrar como breach de SLA, hablar con tecnico, disculparse con cliente |
| Tecnico no envio ninguna foto | Contactar tecnico para fotos. Si no puede, registrar como falta de evidencia |
| Cliente reporta que el aire no quedo funcionando bien | Activar garantia 7 dias, agendar revision con tecnico (Script #18) |
| Tecnico cancelo el dia del servicio | Buscar backup, reagendar con cliente, disculparse |
| Cliente se queja de trato del tecnico | Documentar queja, hablar con tecnico, disculparse con cliente |
| Pago no confirmado despues de 48h | Enviar recordatorio, si no responde notificar a Erick |
| 2+ SLA breaches en la misma semana | Documentar patron, notificar a Erick |

**Tiempo de respuesta:** Resolver en menos de 24 horas
**Escalar a Erick:** Notificar por WhatsApp al final del dia. Escalar inmediato si es cliente insatisfecho o SLA repetido.
**Impacto en KPIs:** Afecta SLA Compliance, CSAT, o First-Time Fix Rate

---

### Critico

**Definicion:** Problema que pone en riesgo la reputacion de Maroa, la seguridad del cliente, o la viabilidad del piloto.

| Ejemplo | Accion |
|---------|--------|
| Tecnico dano propiedad del cliente (filtro roto, pared rayada, fuga) | Parar todo. Disculparse. Notificar a Erick INMEDIATAMENTE |
| Tecnico no aparecio sin aviso (no-show) | Disculparse con cliente, buscar solucion inmediata, notificar a Erick |
| Tecnico cobro directo al cliente | Documentar. Baja inmediata del tecnico. Notificar a Erick |
| Tecnico ofrecio servicios directos al cliente de Maroa | Documentar. Baja inmediata. Notificar a Erick |
| Cliente amenaza con publicar queja publica (redes sociales) | Escalar a Erick inmediatamente antes de responder |
| 3+ servicios seguidos con problemas de calidad | Pausar asignacion al tecnico. Escalar a Erick |
| Incidente de seguridad (lesion, accidente electrico) | Prioridad 1: seguridad de las personas. Llamar emergencias si necesario. Notificar a Erick inmediatamente |

**Tiempo de respuesta:** Inmediato (menos de 1 hora)
**Escalar a Erick:** Llamar o mensaje de WhatsApp INMEDIATAMENTE. No esperar al final del dia.
**Impacto en KPIs:** Puede detener el piloto (decision Go/Pivot/Stop)

---

## Matriz de Escalacion Rapida

| Severidad | Marcia Resuelve Sola? | Notificar a Erick? | Cuando? |
|-----------|----------------------|---------------------|---------|
| **Menor** | Si | No (a menos que sea recurrente) | N/A |
| **Mayor** | Si, con soporte si necesario | Si, por WhatsApp | Al final del dia o inmediato si es urgente |
| **Critico** | No — Erick debe estar involucrado | Si, llamada o WhatsApp | Inmediatamente |

---

## Como Registrar en Hoja INCIDENCIAS

| Campo | Que Poner |
|-------|-----------|
| Inc_ID | Siguiente disponible (INC-001, INC-002...) |
| Fecha | Fecha del incidente (YYYY-MM-DD) |
| Service_ID | SVC-XXX del servicio afectado (si aplica) |
| Lead_ID | L-XXX del cliente afectado |
| Tipo | Retraso / Calidad / No-Show / Queja / Pago / Otro |
| Severidad | **Menor / Mayor / Critico** (usar esta guia) |
| Descripcion | Que paso, en 1-2 oraciones |
| Causa_Raiz | Por que paso (si se sabe) |
| Accion_Tomada | Que se hizo para resolverlo |
| Estado | Abierta / En Proceso / Resuelta |
| Owner | Quien esta a cargo de resolverlo (Marcia / Erick) |

---

## Regla de Oro

> **Si tienes duda entre Menor y Mayor → trata como Mayor.**
> **Si tienes duda entre Mayor y Critico → escala a Erick.**
> Es mejor sobre-reportar que sub-reportar. Erick prefiere enterarse antes que despues.
