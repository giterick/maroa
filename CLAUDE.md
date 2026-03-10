# Maroa - Sistema Operativo de Empresa

## Sobre Maroa

Maroa es un servicio de mantenimiento de A/C (aire acondicionado) en Punta Cana, República Dominicana. Actualmente en fase piloto de 4 semanas para validar demanda, operaciones y unit economics.

**Modelo:** Concierge-first (operación manual con WhatsApp + Google Sheets)
**Zona:** Ciudad La Palma, Punta Cana Village/Resort, Cap Cana
**Servicios:** Mantenimiento preventivo A/C + correctivos menores

## Equipo

| Rol | Responsable |
|-----|-------------|
| Director / Estrategia y Sistemas | Erick Santana - Estrategia, sistemas, datos, métricas, decisiones |
| Gerente de Operaciones y Administración | Marcia Diaz - Operaciones día a día, concierge, clientes, técnicos |
| Backup Operativo | Gabby Bairan - Respaldo operativo cuando Marcia no esté disponible |
| Tech Lead | Por definir - Calidad de servicio, coordinación técnicos |

## KPIs Principales (Go/Pivot/Stop)

| KPI | Go | Pivot | Stop |
|-----|-----|-------|------|
| Conversion Rate | >=20% | 10-19% | <10% |
| SLA Compliance | >=90% | 75-89% | <75% |
| First-Time Fix Rate | >=90% | 80-89% | <80% |
| Gross Margin | >=20% | 5-19% | <5% |
| Retention Intent | >=60% | 40-59% | <40% |

## Hipótesis a Validar

5 hipótesis (H1-H5): Demanda, Operación, Calidad, Economía, Retención. Detalle en `docs/00_pilot_definition.md`.

## Estructura del Repositorio

```
docs/           → Documentación operativa (definición piloto, flujos, políticas, SLAs)
setup/          → Materiales de lanzamiento (plan 2 días, Google Sheets, referencia rápida)
ops/            → Operaciones diarias (checklists concierge, evidencia técnicos)
data/           → Esquemas de datos y definiciones KPI
templates/      → Plantillas (scripts WhatsApp)
rituals/        → Procesos de equipo (revisión semanal)
meetings/       → Logs de reuniones y decisiones
research/       → Análisis de mercado
sources/        → Datos extraídos (Coda, PDFs)
surveys/        → Feedback de clientes
tools/          → Scripts de utilidad
imm-doulab/     → Programa IMM Doulab Phase 02 (innovación, customer discovery, OKRs)
```

## Documentos Clave

- **Definición del Piloto:** `docs/00_pilot_definition.md`
- **Flujo de Servicio:** `docs/01_service_flow_v0_1.md`
- **Políticas:** `docs/02_policies.md`
- **SLAs:** `docs/03_slas.md`
- **KPIs:** `data/kpi_definitions.md`
- **Pipeline y Schema:** `data/pipeline_states_and_sheet_schema.md`
- **Scripts WhatsApp:** `templates/whatsapp_scripts.md`
- **Checklist Concierge:** `ops/concierge_checklists.md`
- **Revisión Semanal:** `rituals/weekly_review.md`
- **Log de Decisiones:** `meetings/logs/decisions-log.md`
- **Job Description Operaciones:** `docs/06_job_description_gerente_operaciones.md`
- **Onboarding Marcia:** `setup/onboarding_marcia.md`
- **Scripts Reclutamiento Técnicos:** `templates/scripts_reclutamiento_tecnicos.md`
- **Scripts Redes Sociales:** `templates/scripts_redes_sociales.md`
- **IMM Doulab README:** `imm-doulab/README.md`
- **Reporte Programa Innovación:** `imm-doulab/REPORTE_PROGRAMA_INNOVACION.md`
- **Plan Pre-Piloto:** `setup/plan_pre_piloto_marcia.md`
- **Business Model Canvas:** `docs/business_model_canvas.md`
- **Sistema de Precios:** `docs/05_pricing_system.md`
- **Checklist Decisiones Piloto:** `docs/04_pilot_decisions_checklist.md`
- **Evidencia Técnicos:** `ops/tech_evidence_requirements.md`
- **Plan Lanzamiento 2 Días:** `setup/2_day_launch_plan.md`
- **Setup Google Sheets:** `setup/google_sheets_setup.md`
- **Tarjeta Referencia Rápida:** `setup/quick_reference_card.md`
- **Project Log:** `meetings/logs/project-log.md`
- **Backlog de Tareas:** `meetings/logs/tasks-backlog.md`
- **Tracking Costos:** `meetings/logs/costs-tracking.md`

## Restricciones del Piloto

- Sin desarrollo de app custom
- Todas las operaciones vía WhatsApp + Sheets
- Máximo 20 servicios durante piloto
- Una sola zona geográfica
- Solo A/C (no otros electrodomésticos)

## Stack de Herramientas

| Herramienta | Uso |
|-------------|-----|
| WhatsApp Business | Comunicación clientes + técnicos |
| Google Forms | Intake de leads (opcional) |
| Google Sheets | CRM, tracking servicios, métricas |
| Google Drive | Almacenamiento de fotos |

## Herramientas y Scripts

| Herramienta | Ubicación | Uso |
|-------------|-----------|-----|
| Cotizador Sheets | `tools/google-sheets-cotizador/` | Calculadora visual de precios para Google Sheets |
| Pricing Calculator | `tools/pricing_calculator.js` | Cálculos de pricing por servicio |
| Extract Coda | `extract_coda.py` | Extrae datos de Coda export |
| Extract PDF | `extract_pdf_refined.py` | Extrae texto de PDFs de investigación |

**Nota:** `sources/coda/` contiene 60+ páginas exportadas de Coda — material de referencia, no editar manualmente.

## Skills Disponibles

Este repositorio incluye skills de Claude Code para gestión empresarial:

| Skill | Descripción |
|-------|-------------|
| `/ceo` | Director General - Estrategia, visión, decisiones ejecutivas |
| `/pm` | Project Manager - Seguimiento tareas, coordinación, reuniones |
| `/ops` | Operations Manager - Operaciones diarias, SLAs, calidad |
| `/cfo` | Finance Manager - Finanzas, márgenes, unit economics |
| `/marketing` | Marketing Manager - Adquisición, canales, mensajes |
| `/sales` | Sales Manager - Pipeline, conversión, scripts |
| `/meeting` | Asistente de reuniones - Notas, acciones, seguimiento |
| `/report` | Generador de reportes - Métricas, dashboards, análisis |
| `/bmc` | Business Model Analyst - Modelo de negocio, canvas, estrategia |

## Flujo de Git (OBLIGATORIO)

**NUNCA hacer push directo a main.** Siempre seguir este flujo:

1. **Crear branch desde main** (usar prefijo según tipo de cambio):
   ```bash
   git checkout main && git pull
   git checkout -b <prefijo>/descripcion-corta
   ```

   Prefijos: `feature/` (funcionalidad), `docs/` (documentación), `fix/` (correcciones)

2. **Hacer commits en el branch:**
   ```bash
   git add [archivos]
   git commit -m "Mensaje descriptivo en inglés"
   ```

3. **Push del branch (NO de main):**
   ```bash
   git push -u origin feature/descripcion-corta
   ```

4. **Crear Pull Request:**
   ```bash
   gh pr create --title "Título" --body "Descripción"
   ```

5. **Esperar aprobación** antes de merge.

### Antes de cualquier commit, SIEMPRE preguntar:
- "¿Estoy en un branch o en main?"
- "¿Debo crear un PR para estos cambios?"

## Gotchas

- `sources/coda/` tiene 60+ archivos exportados — referencia solamente, no editar
- Python scripts en raíz requieren `pip install -r requirements.txt`
- `.claude/settings.local.json` está trackeado en git (intencional)
- Worktree CLAUDE.md puede quedar desincronizado de main — verificar al crear worktree
- `imm-doulab/` contiene 10 worksheets del programa IMM — ver `imm-doulab/README.md` para índice

## Contexto para Claude

Cuando trabajes en este repositorio:
1. **NUNCA push directo a main** - siempre crear branch y PR
2. Siempre consulta la documentación existente antes de proponer cambios
3. Mantén el tono profesional pero accesible (somos startup)
4. Prioriza soluciones simples que funcionen con WhatsApp + Sheets
5. Los KPIs son la brújula - toda decisión debe considerar su impacto
6. El piloto es para **validar**, no para escalar prematuramente
7. **Idioma:** Documentación y respuestas en español. Commit messages en inglés
