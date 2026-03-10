# Log de Operaciones Diarias - Maroa Pilot

> **Proposito:** Registro diario de actividades del concierge para tener trazabilidad y preparar la revision semanal.
> **Responsable:** Marcia Diaz
> **Formato de hora:** 24h, hora local Republica Dominicana (AST, UTC-4)

---

## Donde Registrar

**Opcion recomendada:** Agregar una pestaña `DAILY_LOG` en el Google Sheet de operaciones.

| Columna | Tipo | Ejemplo |
|---------|------|---------|
| Fecha | Date | 2026-02-15 |
| Apertura_Completada | Si/No | Si |
| Leads_Nuevos_Hoy | Numero | 2 |
| Servicios_Hoy | Numero | 1 |
| Servicios_Completados | Numero | 1 |
| Pagos_Recibidos | Numero | 1 |
| Incidencias | Numero | 0 |
| Follow_Ups_Enviados | Numero | 1 |
| Notas | Texto | "Tecnico llego 10 min tarde, cliente no se quejo" |

---

## Template de Log Diario

Copiar esta estructura cada dia de operacion:

### Fecha: ____/____/____

**Apertura (9:00 AM)**
- [ ] Revise mensajes de la noche
- [ ] Identifique urgencias / SLA pendientes
- [ ] Confirme servicios del dia con tecnicos
- [ ] Envie recordatorios T-24h (si aplica)

**Leads del Dia**
| Lead | Hora Mensaje | Hora Respuesta | Estado | Proxima Accion |
|------|-------------|----------------|--------|----------------|
| | | | | |

**Servicios del Dia**
| Service_ID | Cliente | Tecnico | Hora Inicio | Hora Fin | Estado | Notas |
|------------|---------|---------|-------------|----------|--------|-------|
| | | | | | | |

**Pagos**
| Pay_ID | Service_ID | Monto | Metodo | Confirmado? |
|--------|------------|-------|--------|-------------|
| | | | | |

**Follow-ups Enviados**
| Cliente | Tipo (satisfaccion/referido) | Respuesta |
|---------|------------------------------|-----------|
| | | |

**Incidencias**
| Inc_ID | Severidad | Resumen | Resuelta? |
|--------|-----------|---------|-----------|
| | | | |

**Cierre del Dia**
- [ ] Todos los servicios del dia tienen estado actualizado
- [ ] Pagos registrados en Sheet
- [ ] Fotos subidas a Drive
- [ ] Incidencias documentadas
- [ ] Nada pendiente para manana (o anotado como pendiente)

**Notas del Dia:**
> (Texto libre: que funciono bien, que fue dificil, que mejorar)

---

## Frecuencia y Habito

| Cuando | Que Hacer | Tiempo |
|--------|-----------|--------|
| 9:00 AM | Abrir el log del dia, completar seccion de Apertura | 5 min |
| Durante el dia | Ir llenando leads, servicios, pagos en tiempo real | Continuo |
| 5:30-6:00 PM | Completar cierre del dia, notas, verificar pendientes | 10 min |
| Viernes/Sabado | Marcar semana completa, preparar datos para revision semanal | 15 min |

---

## Tips para Marcia

1. **No esperar al final del dia** para llenar el log — registrar en el momento es mas exacto
2. **Las notas del dia son valiosas** — escribir lo que se siente, no solo los numeros. "Hoy el proceso fluyo bien" o "Me confundi con el script #16 vs #16b"
3. **Si un dia no hubo actividad** (no hay servicios ni leads), igual registrar: "Dia sin actividad operativa. Se trabajo en [reclutamiento / estudio de docs / etc.]"
4. **Este log alimenta la revision semanal** — entre mas completo, mas util sera el analisis con Erick
