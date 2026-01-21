# Maroa - Cotizador de Servicios A/C

Herramienta visual para que el concierge pueda cotizar rapidamente durante llamadas con clientes.

## Vista Previa

```
┌──────────────────────────────────────────────────────────────────┐
│  🌴 MAROA - Cotizador de Servicios A/C                          │
│     Mantenimiento Preventivo - Punta Cana                        │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  📋 DATOS DEL CLIENTE          💰 RANGO DE PRECIOS              │
│  ┌─────────────────────┐       ┌─────────────────────┐          │
│  │ Nombre: [________]  │       │ Mínimo:    RD$2,200 │ 🔴       │
│  │ WhatsApp: [_______] │       │ Recomendado: RD$2,700│ 🟢       │
│  └─────────────────────┘       │ Máximo:    RD$3,200 │ 🔵       │
│                                └─────────────────────┘          │
│  ⚙️ CONFIGURACION                                                │
│  ┌─────────────────────┐       📊 DESGLOSE                      │
│  │ Unidades: [1 ▼]     │       Pago técnico: RD$1,700           │
│  │ Zona: [C.La Palma▼] │       Margen Maroa: RD$1,000           │
│  │ Tipo: [Nuevo ▼]     │       Margen %: 37%                    │
│  └─────────────────────┘                                        │
│                                                                  │
│  📱 MENSAJE DE WHATSAPP (copiar y pegar)                        │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ ¡Hola [Nombre]! 👋                                       │   │
│  │                                                          │   │
│  │ Te comparto la cotización para el mantenimiento...       │   │
│  │ 💰 *Precio total: RD$2,700*                              │   │
│  │ ...                                                      │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  📖 GUIA RAPIDA PARA EL CONCIERGE                               │
│  • PRECIO MINIMO: Solo usar si el cliente está a punto de irse  │
│  • PRECIO RECOMENDADO: Siempre empezar aquí                     │
│  • PRECIO MAXIMO: Para clientes premium                         │
└──────────────────────────────────────────────────────────────────┘
```

## Instalacion (5 minutos)

### Paso 1: Crear Google Sheet
1. Ve a [sheets.new](https://sheets.new) para crear un nuevo Google Sheet
2. Renombralo como "Maroa - Cotizador"

### Paso 2: Abrir Apps Script
1. En el menu, ve a **Extensiones > Apps Script**
2. Se abrira una nueva pestaña con el editor de codigo

### Paso 3: Pegar el codigo
1. Borra todo el contenido que aparece por defecto
2. Copia TODO el contenido del archivo `setup-cotizador.gs`
3. Pegalo en el editor
4. Guarda con **Ctrl+S** (o Cmd+S en Mac)

### Paso 4: Ejecutar la instalacion
1. En el dropdown de funciones (arriba), selecciona `crearCotizador`
2. Click en el boton **Ejecutar** (▶️)
3. Te pedira autorizacion - click en "Revisar permisos"
4. Selecciona tu cuenta de Google
5. Click en "Avanzado" > "Ir a Maroa Cotizador (no seguro)"
6. Click en "Permitir"

### Paso 5: Listo!
1. Regresa a la pestaña del Google Sheet
2. Veras la hoja "Cotizador" creada automaticamente
3. Ya puedes usarla!

## Como Usar

### Durante una llamada:

1. **Llena el nombre** del cliente (opcional pero recomendado)
2. **Selecciona las unidades** de A/C que tiene el cliente
3. **Selecciona la zona** donde vive
4. **Mira el rango de precios**:
   - 🔴 **Minimo**: Tu piso, solo si va a decir que no
   - 🟢 **Recomendado**: Empieza SIEMPRE aqui
   - 🔵 **Maximo**: Si hay mucha demanda o es premium
5. **Copia el mensaje de WhatsApp** y pegalo en la conversacion

### Tips de negociacion:

| Situacion | Que decir | Precio a usar |
|-----------|-----------|---------------|
| Cliente interesado | "El precio es RD$X" | Recomendado |
| Pide descuento | "Te puedo hacer 5% si agendamos hoy" | Entre min y rec |
| Muchas unidades | "Ya tienes precio especial incluido" | Recomendado |
| Es referido | "Por venir de parte de X, te doy el mejor precio" | Minimo |
| Cliente premium | "Incluye servicio prioritario" | Maximo |

## Tabla de Precios de Referencia

### Opcion A: Competitivo (Recomendado para piloto)

| Unidades | Precio Cliente | Pago Tecnico | Margen |
|----------|----------------|--------------|--------|
| 1 | RD$2,700 | RD$1,700 | 37% |
| 2 | RD$4,500 | RD$2,900 | 36% |
| 3 | RD$6,300 | RD$4,100 | 35% |
| 4 | RD$8,100 | RD$5,300 | 35% |

### Ajuste por Zona

| Zona | Multiplicador | Ejemplo (1 unidad) |
|------|---------------|-------------------|
| Ciudad La Palma | 1.0x | RD$2,700 |
| Punta Cana Village | 1.0x | RD$2,700 |
| Punta Cana Resort | 1.05x | RD$2,835 |
| Cap Cana | 1.1x | RD$2,970 |

## Modificar Precios

Si necesitas ajustar los precios, edita las constantes al inicio del codigo:

```javascript
const PRECIOS = {
  A: {
    BASE_VISITA: 500,      // Cargo fijo por visita
    PRIMERA_UNIDAD: 2200,  // Primera unidad
    UNIDAD_2_A_4: 1800,    // Unidades 2-4
    UNIDAD_5_MAS: 1500     // Unidades 5+
  },
  // ...
};
```

Despues de modificar, ejecuta `crearCotizador` de nuevo para regenerar la hoja.

## Soporte

Si algo no funciona:
1. Asegurate de haber autorizado los permisos
2. Ejecuta `crearCotizador` de nuevo
3. Si sigue sin funcionar, crea un Sheet nuevo y repite el proceso
