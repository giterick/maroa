# Validando el modelo de negocio
**IMM - Phase 02 - 09 - (Validating the Business Model) - Team Activity - Q2 2025 - EN**
**MCF 2.1**
## Objetivo
Ayudar a los participantes a validar su modelo de negocio identificando, probando y refinando supuestos clave sobre ingresos, costos y escalabilidad mediante un plan de experimentación estructurado.
---
## Paso 1: Identifica los supuestos críticos
**Objetivo:** Sacar a la superficie y priorizar los supuestos clave del modelo de negocio que necesitan validación.
**Instrucciones:**
- Revisa tu MVBM (modelo de negocio mínimo viable).
- Lista supuestos bajo ingresos, costos y entrega.
- Prioriza los supuestos según riesgo e impacto.
## Tabla 1: Supuestos críticos del modelo de negocio
| Área del supuesto | Descripción del supuesto | Nivel de riesgo | Impacto | ¿Priorizado? |
|---|---|---|---|---|
| Ingresos | Los clientes pagarán $19/mes | Alto | Alto | Sí |
| Costos | Los costos de infraestructura serán < $200/mes | Medium | Medium | Sí |
| Entrega | El onboarding tomará menos de 15 minutos | Bajo | Medio | No |
---
## Paso 2: Diseña experimentos para probar los supuestos
**Objetivo:** Definir experimentos pequeños y estructurados para validar los supuestos de alta prioridad.
**Instrucciones:**
- Selecciona 1–2 supuestos del Paso 1.
- Diseña experimentos lean usando pruebas estilo MVP.
- Define métricas, resultado esperado y cronograma.
## Tabla 2: Lista de experimentos
| Supuesto | Descripción del experimento | Métrica | Criterio de éxito | Cronograma |
|---|---|---|---|---|
| Los clientes pagan $19/mes | Landing page con opción de pago activada | Tasa de conversión | > 10% de tasa de registro | 7 días |
| Costo de infraestructura < $200/mes | Simular carga con usuarios objetivo | Factura mensual de AWS | < $200 | 10 días |
---
## Paso 3: Captura resultados y aprendizajes
**Objetivo:** Analizar resultados, documentar hallazgos y decidir los próximos pasos.
**Instrucciones:**
- Registra los resultados del experimento.
- Anota si el supuesto fue validado, necesita revisión o fue refutado.
- Define las próximas acciones.
## Tabla 3: Registro de resultados
| Supuesto probado | Resumen del resultado | ¿Validado? | Siguiente paso |
|---|---|---|---|
| Conversión a $19/mes | 8.5% de conversión sobre 200 visitantes | No | Probar precio de $12 o $9/mes |
| Prueba de costo de infraestructura | Proyección de costo AWS = $160/mes | Sí | Escalar a 100 usuarios en el siguiente sprint |
---
## Paso 4: Revisión de equipo y ciclo de retroalimentación
**Objetivo:** Compartir hallazgos y mejorar la calidad de la experimentación.
**Instrucciones:**
- Presenta los hallazgos clave a los compañeros o al facilitador.
- Recibe retroalimentación estructurada sobre el diseño experimental y la profundidad del aprendizaje.
**Preguntas de revisión:**
- ¿Fueron las métricas medibles y relevantes?
- ¿Fue la prueba lo suficientemente lean?
- ¿Son los próximos pasos accionables y estratégicos?