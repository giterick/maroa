# Reuniones - Maroa Pilot

> Documentacion de reuniones, decisiones y seguimiento del proyecto.

---

## Equipo

| Nombre | Rol | Contacto |
|--------|-----|----------|
| Erick Santana | CEO, CPO, Cofounder | |
| Gabriella Bairan | CXO, Cofounder | |
| Elba Asuncion | Project Manager (Contractor) | Upwork |
| Luis Santiago | Mentor IMM | Programa Doulab |

---

## Como Usar Esta Carpeta

### Antes de una reunion
1. Crear archivo en la carpeta del mes: `YYYY-MM/YYYY-MM-DD-tipo.md`
2. Copiar contenido de `templates/meeting-notes-template.md`
3. Completar: objetivo, agenda, preguntas a resolver

### Durante la reunion
1. Tomar notas en el markdown
2. Documentar decisiones con responsable y fecha limite
3. Capturar action items

### Despues de la reunion
1. Limpiar notas (5 min)
2. Copiar decisiones a `logs/decisions-log.md`
3. Actualizar `logs/project-log.md`
4. Crear PR con cambios acordados a otros documentos
5. Actualizar tareas en `logs/tasks-backlog.md`

---

## Estructura de Carpetas

```
meetings/
├── README.md                    # Este archivo
├── templates/
│   └── meeting-notes-template.md
├── logs/
│   ├── decisions-log.md         # Registro historico de decisiones
│   ├── project-log.md           # Cronologia del proyecto
│   ├── tasks-backlog.md         # Tareas pendientes
│   └── costs-tracking.md        # Costos indirectos (placeholder)
└── YYYY-MM/
    └── YYYY-MM-DD-tipo.md       # Notas de reuniones
```

---

## Reuniones Recientes

| Fecha | Tipo | Participantes | Link |
|-------|------|---------------|------|
| 2026-01-21 | Mentor IMM | Erick + Luis Santiago | [Notas](2026-01/2026-01-21-mentor-imm.md) |
| 2026-01-21 | Team Sync | Erick + Gabriella + Elba | [Notas](2026-01/2026-01-21-team-sync.md) |

---

## Quick Links

| Documento | Proposito |
|-----------|-----------|
| [Decision Log](logs/decisions-log.md) | Todas las decisiones tomadas |
| [Project Log](logs/project-log.md) | Cronologia del proyecto |
| [Tasks Backlog](logs/tasks-backlog.md) | Tareas pendientes |
| [Costs Tracking](logs/costs-tracking.md) | Seguimiento de costos |
| [Meeting Template](templates/meeting-notes-template.md) | Template para notas |

---

## Tipos de Reuniones

| Tipo | Frecuencia | Participantes | Proposito |
|------|------------|---------------|-----------|
| **Weekly Review** | Semanal | Erick + Gabby | Metricas, blockers, planning |
| **Team Sync** | Ad-hoc | Erick + Gabby + Elba | Coordinacion operativa |
| **Mentor IMM** | Quincenal | Erick + Luis Santiago | Guidance estrategico |
| **Decision** | Ad-hoc | Variable | Resolver decisiones criticas |

---

**Ultima actualizacion:** Enero 2026
