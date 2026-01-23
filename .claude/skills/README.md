# Maroa Skills - Sistema de Roles Virtuales

Este directorio contiene los skills de Claude Code que funcionan como roles clave de la empresa Maroa.

## Cómo Usar

Invoca cualquier skill escribiendo su comando:

```
/ceo          → Director General
/pm           → Project Manager
/ops          → Operations Manager
/cfo          → Finance Manager
/marketing    → Marketing Manager
/sales        → Sales Manager
/meeting      → Asistente de reuniones
/report       → Generador de reportes
```

## Estructura de Skills

```
skills/
├── README.md           # Este archivo
├── ceo/SKILL.md        # Director General
├── pm/SKILL.md         # Project Manager
├── ops/SKILL.md        # Operations Manager
├── cfo/SKILL.md        # Finance Manager
├── marketing/SKILL.md  # Marketing Manager
├── sales/SKILL.md      # Sales Manager
├── meeting/SKILL.md    # Asistente de reuniones
└── report/SKILL.md     # Generador de reportes
```

## Roles Prioritarios

### /ceo - Director General
Estrategia, visión y toma de decisiones ejecutivas. Consulta KPIs, evalúa progreso del piloto, toma decisiones Go/Pivot/Stop.

### /pm - Project Manager
Gestión de tareas, coordinación de equipo, seguimiento de reuniones y acciones pendientes.

### /ops - Operations Manager
Operaciones diarias, cumplimiento de SLAs, checklists de concierge, calidad de servicio.

### /cfo - Finance Manager
Finanzas, unit economics, márgenes por servicio, análisis de costos.

### /marketing - Marketing Manager
Estrategia de adquisición, canales de comunicación, análisis de mercado.

### /sales - Sales Manager
Pipeline de ventas, tasas de conversión, scripts de ventas, seguimiento de leads.

## Utilidades

### /meeting - Asistente de Reuniones
Toma notas estructuradas, genera acciones, actualiza el decision log.

### /report - Generador de Reportes
Genera reportes semanales, dashboards de KPIs, análisis de métricas.

## Archivos de Referencia por Rol

| Skill | Archivos Principales |
|-------|---------------------|
| ceo | `docs/00_pilot_definition.md`, `data/kpi_definitions.md` |
| pm | `meetings/`, `rituals/weekly_review.md` |
| ops | `ops/`, `docs/03_slas.md`, `setup/` |
| cfo | `data/kpi_definitions.md`, `docs/03_slas.md` |
| marketing | `research/`, `surveys/` |
| sales | `templates/whatsapp_scripts.md`, `data/pipeline_states_and_sheet_schema.md` |
| meeting | `meetings/templates/`, `meetings/logs/` |
| report | `data/kpi_definitions.md`, `rituals/weekly_review.md` |

## Personalización

Cada skill puede ser adaptado editando su archivo SKILL.md. La estructura básica es:

```yaml
---
name: nombre-del-skill
description: Descripción breve del rol
---

# Título del Skill

## Contexto
[Descripción del rol y responsabilidades]

## Acceso a Información
[Archivos que debe consultar]

## Comandos
[Subcomandos disponibles]
```
