# Guía de Configuración: Tally + Google Sheets

## Resumen

Esta guía te ayudará a configurar el formulario de entrevistas a técnicos en Tally y conectarlo con Google Sheets para recibir las respuestas.

**Tiempo estimado de configuración:** 30-45 minutos

---

## Paso 1: Crear cuenta en Tally

1. Ve a [tally.so](https://tally.so)
2. Crea una cuenta gratuita (puedes usar Google)
3. No necesitas plan de pago para esto

---

## Paso 2: Crear el formulario

### 2.1 Nuevo formulario
1. Click en "Create form"
2. Selecciona "Start from scratch"
3. Nombra el formulario: **"Entrevista Profunda a Técnicos - Piloto Maroa"**

### 2.2 Agregar portada
1. Click en el título para editarlo
2. Agrega descripción:
   > "Esta entrevista nos ayuda a entender cómo trabajas y qué necesitas para colaborar con nosotros. Toma aproximadamente 10-15 minutos."

### 2.3 Crear las secciones y preguntas

Usa el archivo `estructura-formulario-tally.json` como referencia. Para cada sección:

1. **Agregar separador de sección**: Usa el bloque "Heading" para el título de sección
2. **Agregar preguntas**:
   - Para `yes_no`: Usa "Multiple choice" con opciones "Sí" y "No"
   - Para `multiple_choice`: Usa "Multiple choice" con las opciones indicadas
   - Para `short_text`: Usa "Short answer"
   - Para `long_text`: Usa "Long answer"
   - Para `date`: Usa "Date"
   - Para `phone`: Usa "Phone number"

3. **Agregar texto de ayuda**: En cada pregunta, click en "Add description" para agregar el `helpText`

### Orden de secciones:

| # | Sección | Preguntas |
|---|---------|-----------|
| 1 | Datos de la Entrevista | 4 preguntas (meta) |
| 2 | Datos de Perfil | 5 preguntas (P0.1-P0.5) |
| 3 | Capacidad y Tiempos | 3 preguntas (P1.1-P1.3) |
| 4 | Puntualidad y Reprogramación | 4 preguntas (P2.1-P2.4) |
| 5 | Comunicación Operativa | 2 preguntas (P3.1-P3.2) |
| 6 | Tecnología Mínima | 3 preguntas (P4.1-P4.3) |
| 7 | Calidad y Estandarización | 4 preguntas (P5.1-P5.4) |
| 8 | Confianza y Seguridad | 2 preguntas (P6.1-P6.2) |
| 9 | Modelo de Pago | 2 preguntas (P7.1-P7.2) |
| 10 | Materiales e Insumos | 2 preguntas (P8.1-P8.2) |
| 11 | Relación Contractual | 4 preguntas (P9.1-P9.4) |
| 12 | Cobertura y Backups | 2 preguntas (P10.1-P10.2) |
| 13 | Preguntas de Validación | 5 preguntas (A1-A5) |
| 14 | Información Adicional | 2 preguntas (notas) |

**Total: 44 preguntas** (4 meta + 40 framework)

---

## Paso 3: Configurar página de confirmación

1. Al final del formulario, click en "Thank you page"
2. Cambia el mensaje a:
   > "Gracias por tu tiempo. Nos pondremos en contacto pronto."

---

## Paso 4: Conectar con Google Sheets

### 4.1 Publicar el formulario
1. Click en "Publish" (esquina superior derecha)
2. Copia el link del formulario

### 4.2 Configurar integración
1. En el formulario publicado, ve a la pestaña "Integrations"
2. Busca "Google Sheets"
3. Click en "Connect"
4. Autoriza acceso a tu cuenta de Google
5. Selecciona:
   - **Nueva hoja**: Crea una nueva hoja de cálculo
   - **Nombre**: "Entrevistas Técnicos Maroa"
6. Click en "Connect"

### 4.3 Verificar conexión
1. Haz un envío de prueba del formulario
2. Verifica que aparezca en Google Sheets
3. Los headers se crean automáticamente

---

## Paso 5: Configurar Webhook (opcional)

Si además quieres recibir notificaciones en tiempo real:

1. Ve a "Integrations" > "Webhooks"
2. Agrega tu endpoint URL
3. Cada respuesta enviará un JSON con todos los campos

### Ejemplo de payload webhook:
```json
{
  "eventId": "abc123",
  "eventType": "FORM_RESPONSE",
  "createdAt": "2024-01-15T10:30:00Z",
  "data": {
    "responseId": "xyz789",
    "submissionId": "sub123",
    "respondentId": "resp456",
    "formId": "form789",
    "formName": "Entrevista Profunda a Técnicos",
    "fields": [
      {
        "key": "question_nombre_tecnico",
        "label": "Nombre del técnico",
        "type": "INPUT_TEXT",
        "value": "Juan Pérez"
      },
      {
        "key": "question_p01",
        "label": "Cuál es tu categoría principal de trabajo?",
        "type": "MULTIPLE_CHOICE",
        "value": "A/C"
      }
      // ... más campos
    ]
  }
}
```

---

## Paso 6: Flujo de trabajo para la asistente

### Antes de cada entrevista:
1. Abrir el link del formulario en el navegador
2. Tener el framework de referencia a mano (para tips)

### Durante la entrevista:
1. Llamar/WhatsApp al técnico
2. Ir preguntando y marcando respuestas en el formulario
3. Usar los tips/ayuda si el técnico no entiende algo
4. Anotar observaciones en "Notas adicionales"

### Al terminar:
1. Click en "Submit"
2. La respuesta va automáticamente a Google Sheets
3. Pasar al siguiente técnico

---

## Paso 7: Acceso a datos para análisis

### Desde Google Sheets:
- URL directa de la hoja
- Exportar a CSV/Excel
- Compartir con equipo

### Via API (para Claude):
1. Usar Google Sheets API
2. Credenciales de servicio account
3. Leer datos programáticamente

### Via Webhook:
- Datos en tiempo real
- JSON estructurado
- Integración con cualquier sistema

---

## Tips adicionales

### Para formularios largos en Tally:
- Usa "Page breaks" para dividir en páginas
- Activa "Progress bar" para que vean avance
- Los separadores de sección ayudan visualmente

### Para la entrevistadora:
- Puede usar el formulario desde celular o computadora
- Si pierde conexión, las respuestas se guardan localmente
- Puede volver atrás y editar antes de enviar

### Para análisis:
- Google Sheets permite filtros y pivots
- Puedes crear fórmulas de scoring
- Exportar a otras herramientas

---

## Archivos de referencia

- `estructura-formulario-tally.json` - Estructura completa del formulario
- `Framework_Entrevista_Tecnicos.csv` - Framework original con hipótesis
- `comparacion-formularios-entrevista.md` - Análisis de alternativas

---

## Soporte

- [Documentación Tally](https://tally.so/help)
- [Tally + Google Sheets](https://tally.so/help/google-sheets)
- [Tally Webhooks](https://tally.so/help/webhooks)
