# Tasks Backlog - Maroa Pilot

> Lista consolidada de tareas pendientes del proyecto.
> Actualizar despues de cada reunion.

---

## Como Usar

1. Agregar tareas nuevas en la seccion correspondiente
2. Incluir: descripcion, owner, prioridad, fecha limite
3. Mover a "Completadas" cuando se terminen
4. Revisar semanalmente en Weekly Review

---

## Tareas Criticas (Bloqueantes para Launch)

Estas tareas deben completarse antes de aceptar el primer lead.

| # | Tarea | Owner | Prioridad | Due Date | Status | Notas |
|---|-------|-------|-----------|----------|--------|-------|
| 1 | ~~Asignar Tech Lead~~ | Erick | ALTA | | **Completado** | Erick (por ahora) - 2026-01-21 |
| 2 | Confirmar tecnico primario | Gabby | ALTA | | Pendiente | Despues de entrevistas |
| 3 | Identificar tecnico backup | Gabby | ALTA | | Pendiente | Despues de entrevistas |
| 4 | ~~Definir limites zona piloto~~ | Erick | ALTA | | **Completado** | CLP, PC, Cap Cana - 2026-01-21 |
| 5 | Definir pricing (1-4 units) | Erick | ALTA | | Pendiente | **PR de analisis de pricing** |
| 6 | ~~Configurar cuenta bancaria~~ | Gabby | ALTA | | **Completado** | Multiples cuentas definidas - 2026-01-21 |
| 7 | Definir terminos de servicio | Erick | ALTA | | Pendiente | **PR de terminos legales** |

---

## Tareas de Setup

| # | Tarea | Owner | Prioridad | Due Date | Status | Notas |
|---|-------|-------|-----------|----------|--------|-------|
| 1 | Crear Google Sheet con 8 tabs | Erick | Media | | Pendiente | Ver `setup/google_sheets_setup.md` |
| 2 | Crear estructura Google Drive | Erick | Media | | Pendiente | |
| 3 | Configurar WhatsApp quick-replies | Gabby | Media | | Pendiente | |
| 4 | Crear grupo WhatsApp con tecnico | Gabby | Media | | Pendiente | |
| 5 | Briefing a tecnico con requirements | Gabby | Media | | Pendiente | |
| 6 | Agendar primera Weekly Review | Erick | Media | | Pendiente | |
| 7 | **Crear Google Form para lead capture** | Erick | Media | | Pendiente | Nuevo - 2026-01-21 |
| 8 | **Convertir +1 809 330 9492 a WhatsApp Business** | Gabby | Media | | Pendiente | Nuevo - 2026-01-21 |
| 9 | **Crear tabla de cuentas bancarias** | Gabby | Media | | Pendiente | Popular, BHD, Qik, Scotia |

---

## Tareas Operativas

| # | Tarea | Owner | Prioridad | Due Date | Status | Notas |
|---|-------|-------|-----------|----------|--------|-------|
| | | | | | | |

---

## Tareas Administrativas

| # | Tarea | Owner | Prioridad | Due Date | Status | Notas |
|---|-------|-------|-----------|----------|--------|-------|
| | | | | | | |

---

## Backlog (Sin priorizar)

Tareas identificadas pero no urgentes:

| # | Tarea | Origen | Notas |
|---|-------|--------|-------|
| 1 | Definir protocolo de backup technician | `04_pilot_decisions_checklist.md` | |
| 2 | Crear waiver template legal | `04_pilot_decisions_checklist.md` | Ver PR legal |
| 3 | ~~Definir cash handling protocol~~ | `04_pilot_decisions_checklist.md` | **Resuelto:** No cash |
| 4 | Decidir si tecnico participa en weekly review | `99_consistency_audit.md` | |

---

## Backlog para Agentes

> Items con contexto suficiente para que un agente pueda ejecutarlos de forma autonoma.

### AGENT-001: PR de Analisis de Pricing

**Objetivo:** Crear analisis de precios para servicios de 1-4 unidades

**Contexto:**
- Modelo decidido: Cobro por unidad + costo de visita
- Hay descuento multi-unidad (por definir)
- Revisar `research/` para data de mercado existente
- Ver `sources/coda/` para datos historicos

**Entregables:**
1. Crear `docs/05_pricing_analysis.md` con:
   - Analisis de costos (visita, por unidad, tecnico)
   - Tabla de precios 1-4 unidades
   - Margenes proyectados
   - Descuentos multi-unidad
2. Actualizar `docs/04_pilot_decisions_checklist.md` seccion 3

**Archivos a revisar:**
- `research/*.docx` - Pricing research existente
- `sources/coda/tables/` - Datos de Coda
- `docs/04_pilot_decisions_checklist.md` - Seccion actual de pricing

---

### AGENT-002: PR de Politica de Cancelacion

**Objetivo:** Investigar mercado y definir fees de cancelacion

**Contexto:**
- Estructura acordada: 3 niveles de fee (>48h gratis, <48h fee 1, <24h fee 2, no-show fee 3)
- Investigar que hacen otros servicios a domicilio
- No "inventar la rueda" - basarse en practicas del mercado

**Entregables:**
1. Actualizar `docs/02_policies.md` seccion 1 y 3 con:
   - Fees especificos en RD$
   - Justificacion basada en research
2. Agregar fuentes consultadas

**Archivos a revisar:**
- `docs/02_policies.md` - Politica actual
- `docs/04_pilot_decisions_checklist.md` - Contexto

---

### AGENT-003: PR de Terminos Legales

**Objetivo:** Crear terminos de servicio basicos para piloto

**Contexto:**
- Photo consent: implicito en los terms
- Necesita ser simple para piloto
- Incluir: alcance, garantia 7 dias, limitacion responsabilidad

**Entregables:**
1. Crear `docs/06_service_terms.md` con:
   - Terminos de servicio en espanol
   - Clausula de garantia
   - Limitacion de responsabilidad
   - Consentimiento fotos (implicito)
2. Crear template de waiver si necesario
3. Actualizar `docs/04_pilot_decisions_checklist.md` seccion 5

**Archivos a revisar:**
- `docs/02_policies.md` - Politicas existentes
- `docs/04_pilot_decisions_checklist.md` - Seccion legal

---

### AGENT-004: Crear Google Form para Lead Capture

**Objetivo:** Diseñar Google Form para captura de leads

**Contexto:**
- Complementa WhatsApp directo
- Campos basados en triage questions de WhatsApp scripts

**Entregables:**
1. Crear `setup/google_form_lead_capture.md` con:
   - Estructura del form (campos, tipos, validaciones)
   - Instrucciones de creacion
   - Link a Google Forms template si posible

**Campos requeridos:**
- Nombre completo
- Telefono (WhatsApp)
- Direccion / Residencial
- Numero de unidades A/C
- Ultimo mantenimiento (aproximado)
- Como nos encontro

**Archivos a revisar:**
- `templates/whatsapp_scripts.md` scripts #1-2 para campos

---

### AGENT-005: Tabla de Cuentas Bancarias

**Objetivo:** Completar tabla de cuentas bancarias en policies

**Contexto:**
- Bancos: Popular, BHD, Qik, Scotiabank
- Titulares: Erick Santana o Gabriella Bairan
- Necesita numeros de cuenta reales (Erick/Gabby deben proporcionar)

**Entregables:**
1. Actualizar `docs/02_policies.md` seccion 5 con tabla completa

**Nota:** Este item requiere input de Erick o Gabby para numeros de cuenta.

---

### AGENT-006: Sistema de Costos Indirectos

**Objetivo:** Crear sistema para trackear costos indirectos de Maroa

**Contexto:**
- Placeholder para sesion dedicada con Erick
- Estructura por definir

**Entregables:**
- Por definir en sesion con Erick

**Status:** Placeholder - no ejecutar hasta sesion con Erick

---

## Completadas

| # | Tarea | Owner | Completed Date | Notas |
|---|-------|-------|----------------|-------|
| 1 | Crear estructura de reuniones | Erick | 2026-01-20 | Branch `claude/prepare-repo-demo-ajViK` |
| 2 | Audit de consistencia docs | Erick | 2026-01-19 | Ver `99_consistency_audit.md` |
| 3 | Crear surveys para tecnicos | Erick | 2026-01-18 | Tally + Google Forms |

---

## Por Reunion

### Tareas de reunion 2026-01-21 (Mentor IMM)
| Tarea | Owner | Status |
|-------|-------|--------|
| | | |

### Tareas de reunion 2026-01-21 (Team Sync)
| Tarea | Owner | Status |
|-------|-------|--------|
| Crear Google Form para lead capture | Erick | Pendiente |
| Convertir WhatsApp a Business | Gabby | Pendiente |
| Crear tabla de cuentas bancarias | Gabby | Pendiente |
| PR de analisis de pricing | Erick | Pendiente |
| PR de terminos legales | Erick | Pendiente |
| PR de politica de cancelacion | Erick | Pendiente |

---

**Ultima actualizacion:** 2026-01-21
