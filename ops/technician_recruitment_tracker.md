# Tracker de Reclutamiento de Tecnicos - Maroa Pre-Piloto

> **Proposito:** Registrar cada candidato a tecnico y su progreso a traves del pipeline de reclutamiento.
> **Responsable:** Marcia Diaz
> **Referencia:** `templates/scripts_reclutamiento_tecnicos.md` (scripts y ficha de alta)

---

## Pipeline de Candidatos

| # | Nombre | Canal | Fecha Contacto | Estado | Fecha Ultima Accion | Notas |
|---|--------|-------|----------------|--------|---------------------|-------|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | |
| 8 | | | | | | |
| 9 | | | | | | |
| 10 | | | | | | |
| 11 | | | | | | |
| 12 | | | | | | |

### Estados del Pipeline

| Estado | Significado | Siguiente Paso |
|--------|-------------|----------------|
| **Contactado** | Se hizo primer contacto (llamada o WhatsApp) | Esperar respuesta o hacer follow-up en 48h |
| **Interesado** | Respondio positivamente, quiere saber mas | Completar ficha de alta |
| **Ficha Completa** | Datos basicos recopilados (Seccion 4 del doc de reclutamiento) | Agendar llamada de onboarding |
| **En Onboarding** | Tuvo llamada de 15-20 min, entiende el modelo | Programar servicio de prueba |
| **En Prueba** | Servicio de prueba agendado o en proceso | Evaluar resultado |
| **Activo** | Paso la prueba, listo para servicios reales | Asignar primeros servicios |
| **Rechazado** | No paso la prueba o no cumple requisitos | Agradecer y cerrar |
| **No Interesado** | No quiso participar | Cerrar, pedir referencia de otro tecnico |
| **Sin Respuesta** | No respondio despues de follow-up | Cerrar despues de 2 intentos |

---

## Canales de Busqueda Usados

| Canal | Contactos Hechos | Interesados | Notas |
|-------|-----------------|-------------|-------|
| Referidos de vecinos | | | |
| Administradores de residenciales | | | |
| Ferreterias locales | | | |
| Grupos de Facebook | | | |
| Contrata.com | | | |
| Tecnicos de entrevistas previas | | | |

---

## Metricas vs. Metas

| Metrica | Meta | Actual | Status |
|---------|------|--------|--------|
| Tecnicos contactados | 8-12 | | |
| Que muestran interes | 4-6 | | |
| Fichas de alta completas | 3-4 | | |
| Que completan servicio de prueba | 2-3 | | |
| **Tecnicos activos para piloto** | **2 + 1 backup** | | |

---

## Instrucciones de Uso

1. **Agregar candidato** al pipeline al primer contacto (llenar Nombre, Canal, Fecha, Estado = "Contactado")
2. **Actualizar estado** cada vez que avance en el pipeline
3. **Actualizar "Fecha Ultima Accion"** para no perder seguimiento
4. **Si no responde en 48h:** Hacer follow-up con script de follow-up (Seccion 3 del doc de reclutamiento)
5. **Si pasa a "Ficha Completa":** Registrar tambien en hoja TECHNICIANS del Google Sheet con Estado = "Onboarding"
6. **Si pasa a "Activo":** Cambiar Estado en TECHNICIANS a "Activo"
7. **Revisar este tracker** en cada check-in semanal con Erick
