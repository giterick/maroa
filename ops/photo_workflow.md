# Workflow de Fotos: WhatsApp a Google Drive - Maroa Pilot

> **Proposito:** Documentar el proceso paso a paso para manejar las fotos de evidencia de cada servicio.
> **Referencia:** `ops/tech_evidence_requirements.md` (requisitos de fotos y naming convention)

---

## Flujo Completo

```
Tecnico toma fotos → Envia por WhatsApp → Marcia verifica → Descarga → Renombra → Sube a Drive → Pega link en Sheet
```

---

## Paso a Paso

### 1. Tecnico Envia Fotos por WhatsApp

**Cuando:** Al enviar mensaje "Completado" (Script #10)
**Minimo:** 3 fotos (antes exterior, antes filtro, despues filtro)
**Ideal:** 5 fotos (+ despues exterior, durante si hay hallazgo)

### 2. Marcia Verifica Calidad

Al recibir las fotos, revisar inmediatamente:

| Criterio | Pasa | No Pasa |
|----------|------|---------|
| Se ve el componente claramente? | Componente completo visible | Cortado, borroso, oscuro |
| Buena iluminacion? | Se ven detalles | Muy oscuro o con reflejo |
| No esta borrosa? | Enfocada | Movida o desenfocada |
| Es la foto correcta? | Muestra antes/despues del componente indicado | Foto equivocada o repetida |
| Muestra contexto? | Se puede identificar que unidad es | No se distingue |

**Si alguna foto NO pasa:** Pedir al tecnico que la retome inmediatamente (si aun esta en sitio). Si ya se fue, registrar como incidencia Menor y anotar en notas del servicio.

### 3. Descargar Fotos del WhatsApp

**En celular (recomendado):**
1. Abrir la conversacion del tecnico en WhatsApp
2. Tocar la foto para verla en pantalla completa
3. Tocar el icono de descargar/guardar (flecha hacia abajo)
4. La foto se guarda en la galeria del telefono

**En WhatsApp Web (alternativa):**
1. Abrir WhatsApp Web en el navegador
2. Ir a la conversacion del tecnico
3. Click derecho en la foto → "Descargar"
4. Se guarda en la carpeta de descargas del computador

### 4. Renombrar Fotos

Usar esta convencion (definida en `ops/tech_evidence_requirements.md`):

```
[Service_ID]_[TipoFoto]_[Fecha].jpg
```

| Tipo de Foto | Nombre del Archivo |
|--------------|-------------------|
| Antes - exterior | `SVC-001_before_exterior_2026-02-15.jpg` |
| Antes - filtro | `SVC-001_before_filter_2026-02-15.jpg` |
| Durante (si hay) | `SVC-001_during_issue_2026-02-15.jpg` |
| Despues - filtro | `SVC-001_after_filter_2026-02-15.jpg` |
| Despues - exterior | `SVC-001_after_exterior_2026-02-15.jpg` |

**Tip:** Si manejas desde el celular, puedes renombrar al subir a Drive (paso 5).

### 5. Subir a Google Drive

**Estructura de carpetas:**
```
/Maroa_Pilot_Photos
  /[YYYY-MM]              ← Carpeta del mes
    /[Service_ID]_[Nombre] ← Carpeta del servicio
```

**Ejemplo:**
```
/Maroa_Pilot_Photos
  /2026-02
    /SVC-001_Juan_Perez
      - SVC-001_before_exterior_2026-02-15.jpg
      - SVC-001_before_filter_2026-02-15.jpg
      - SVC-001_after_filter_2026-02-15.jpg
```

**Desde celular:**
1. Abrir app Google Drive
2. Navegar a la carpeta del mes (crear si no existe)
3. Crear subcarpeta del servicio: `SVC-XXX_NombreCliente`
4. Tocar "+" → "Subir" → Seleccionar fotos
5. Renombrar cada archivo al formato correcto

**Desde computador:**
1. Abrir Google Drive en navegador
2. Navegar a carpeta del mes
3. Crear subcarpeta del servicio
4. Arrastrar archivos ya renombrados a la carpeta

### 6. Copiar Link en Google Sheet

1. En Google Drive, click derecho en la carpeta del servicio
2. Seleccionar "Obtener enlace" o "Compartir"
3. Copiar el link de la carpeta
4. Pegar en la columna `Link_Fotos` de la hoja SERVICES

---

## Checklist Rapido por Servicio

- [ ] Fotos recibidas del tecnico (minimo 3)
- [ ] Calidad verificada (claras, enfocadas, correctas)
- [ ] Fotos descargadas
- [ ] Carpeta creada en Drive (`/YYYY-MM/SVC-XXX_Nombre/`)
- [ ] Fotos renombradas y subidas
- [ ] Link pegado en hoja SERVICES (columna Link_Fotos)

---

## Tiempos Esperados

| Actividad | Tiempo Estimado |
|-----------|----------------|
| Verificar calidad de fotos | 1-2 minutos |
| Descargar fotos | 1-2 minutos |
| Renombrar y subir a Drive | 3-5 minutos |
| Copiar link a Sheet | 1 minuto |
| **Total por servicio** | **6-10 minutos** |

---

## Problemas Comunes

| Problema | Solucion |
|----------|----------|
| Tecnico envio fotos borrosas | Pedir retoma inmediata si esta en sitio. Si no, registrar incidencia Menor. |
| Tecnico envio menos de 3 fotos | Escribir: "Gracias! Me falta la foto de [antes/despues] del [filtro/exterior]. Me la puedes enviar?" |
| Fotos llegan en formato diferente (HEIC) | Descargar y convertir a JPG. La mayoria de celulares Android envian JPG por defecto. |
| Google Drive no carga | Intentar desde WiFi. Si persiste, guardar fotos localmente y subir despues. Anotar en Sheet "Fotos pendientes de subir". |
| No recuerdo el Service_ID | Revisar hoja SERVICES, buscar por fecha y nombre del cliente. |
