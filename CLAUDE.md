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

1. **H1 - Demanda:** Clientes pagarán por mantenimiento de A/C
2. **H2 - Operación:** Modelo concierge puede entregar experiencia "cero drama"
3. **H3 - Calidad:** Técnicos pueden entregar calidad consistente
4. **H4 - Economía:** Unit economics son viables (margen >=20%)
5. **H5 - Retención:** Clientes recomendarán y volverán

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

1. **Crear branch desde main:**
   ```bash
   git checkout main && git pull
   git checkout -b feature/descripcion-corta
   ```

2. **Hacer commits en el branch:**
   ```bash
   git add [archivos]
   git commit -m "Mensaje descriptivo"
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

## Contexto para Claude

Cuando trabajes en este repositorio:
1. **NUNCA push directo a main** - siempre crear branch y PR
2. Siempre consulta la documentación existente antes de proponer cambios
3. Mantén el tono profesional pero accesible (somos startup)
4. Prioriza soluciones simples que funcionen con WhatsApp + Sheets
5. Los KPIs son la brújula - toda decisión debe considerar su impacto
6. El piloto es para **validar**, no para escalar prematuramente
