# Comparación de Plataformas de Formularios para Entrevistas a Técnicos

## Contexto del Caso de Uso

**Necesidad:** Una asistente humana contacta técnicos por teléfono/WhatsApp, realiza la entrevista usando el Framework de 40+ preguntas, y llena un formulario mientras conversa. Luego se reciben las respuestas para análisis.

**Requisitos clave:**
1. Formulario fácil de usar para quien entrevista
2. Preguntas estructuradas con opciones claras
3. Acceso programático a las respuestas (para análisis con Claude)
4. No requiere integración directa con Coda

---

## Opciones Evaluadas

### 1. Tally ⭐ RECOMENDADA para este caso

| Característica | Detalle |
|----------------|---------|
| **Precio** | Gratis (ilimitado) / Pro $23/mes |
| **Submit programático** | ❌ No (pero no lo necesitas) |
| **Webhooks** | ✅ Sí - JSON a cualquier endpoint |
| **API para leer responses** | ✅ Sí (Pro) |
| **Facilidad de crear forms** | ✅ Excelente - muy intuitivo |
| **Exportar a Google Sheets/Airtable** | ✅ Integración nativa |
| **Lógica condicional** | ✅ Sí |
| **Hidden fields** | ✅ Sí |

**Por qué es ideal:**
- La asistente abre el link, va llenando mientras entrevista
- Webhooks envían JSON de cada respuesta automáticamente
- Se puede integrar con Notion, Airtable, Google Sheets nativamente
- Plan gratis es muy generoso

---

### 2. Fillout ⭐ RECOMENDADA si quieres control programático total

| Característica | Detalle |
|----------------|---------|
| **Precio** | Gratis limitado / Starter $15/mes |
| **Submit programático** | ✅ Sí - API completa |
| **Webhooks** | ✅ Sí |
| **API para crear/editar forms** | ✅ Sí |
| **MCP Server disponible** | ✅ Sí (para Claude) |
| **Exportar datos** | ✅ REST API completa |

**Por qué considerar:**
- API más completa del mercado
- Tiene MCP Server oficial - Claude puede interactuar directamente
- Permite submit programático de responses
- Ideal si quieres automatización avanzada

---

### 3. Google Forms + Apps Script

| Característica | Detalle |
|----------------|---------|
| **Precio** | Gratis |
| **Submit programático** | ✅ Sí via Apps Script |
| **Webhooks** | ⚠️ Requiere Apps Script custom |
| **API** | ✅ Forms API + Apps Script |
| **Curva de aprendizaje** | ⚠️ Requiere conocimiento técnico |

**Por qué considerar:**
- Completamente gratis
- Muy poderoso con Apps Script
- Integración nativa con Google Sheets

**Desventajas:**
- UI menos elegante
- Más setup técnico

---

### 4. Airtable (directo a tabla via API)

| Característica | Detalle |
|----------------|---------|
| **Precio** | Gratis limitado / Plus $12/mes |
| **Submit via API** | ✅ Creas records directamente |
| **Forms nativos** | ⚠️ Básicos, no muy personalizables |
| **API** | ✅ REST API excelente |
| **Interfaz de datos** | ✅ Muy poderosa |

**Por qué considerar:**
- Si ya usas o quieres usar Airtable como base de datos
- API para crear records es muy simple
- Puedes crear una interface custom que llame al API

---

### 5. Notion (via API a database)

| Característica | Detalle |
|----------------|---------|
| **Precio** | Gratis / Plus $12/mes |
| **Submit via API** | ✅ Crear pages en database |
| **Forms nativos** | ⚠️ Nuevos, básicos |
| **Integración workspace** | ✅ Excelente |

**Por qué considerar:**
- Si ya usas Notion para documentación
- Forms nativos conectan a databases

---

### 6. Typeform ❌ NO RECOMENDADA

| Característica | Detalle |
|----------------|---------|
| **Precio** | $25/mes (100 responses) |
| **Submit programático** | ❌ NO SOPORTADO |

**Por qué descartada:**
- No permite submit programático
- Usuario SIEMPRE debe hacer click en submit
- Más caro que alternativas

---

## Recomendación Final

### Para tu caso de uso específico: **TALLY**

**Razones:**
1. La asistente solo necesita abrir un link bonito y fácil de usar
2. No necesitas submit programático (ella hace click al final)
3. Webhooks te dan JSON automático de cada respuesta
4. Integración directa con Google Sheets o Airtable para análisis
5. Plan gratis cubre todo lo básico
6. UI muy limpia y profesional

### Flujo propuesto:
```
1. Asistente recibe link del formulario Tally
2. Llama/WhatsApp al técnico
3. Mientras entrevista, va llenando el form
4. Al terminar, submit
5. Webhook envía JSON a Google Sheets/Airtable/tu endpoint
6. Claude analiza responses via API de Google Sheets/Airtable
```

### Alternativa si quieres más automatización: **FILLOUT**

Si en el futuro quieres que Claude pueda:
- Crear/modificar formularios programáticamente
- Leer responses directamente via API
- Usar el MCP Server para integración directa

Entonces Fillout es mejor opción técnica.

---

## Próximos Pasos

1. **Elegir plataforma** (Tally vs Fillout vs otra)
2. **Crear el formulario** basado en Framework_Entrevista_Tecnicos
3. **Configurar destino de responses** (Google Sheets, Airtable, webhook)
4. **Probar flujo completo** con una entrevista de prueba
5. **Documentar proceso** para la asistente

---

## Referencias

- [Tally Webhooks](https://tally.so/help/webhooks)
- [Tally Features](https://tally.so/features)
- [Fillout REST API](https://www.fillout.com/help/fillout-rest-api)
- [Fillout MCP Server](https://mcp.aibase.com/server/1916341230033936385)
- [Google Forms API](https://developers.google.com/workspace/forms/api/reference/rest)
- [Google Apps Script Forms](https://developers.google.com/apps-script/reference/forms)
- [Airtable API](https://support.airtable.com/docs/api)
- [Notion API](https://developers.notion.com/docs/create-a-notion-integration)
