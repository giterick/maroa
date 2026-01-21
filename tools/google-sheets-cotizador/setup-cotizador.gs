/**
 * MAROA - COTIZADOR DE SERVICIOS A/C
 *
 * INSTRUCCIONES DE INSTALACION:
 * 1. Crea un nuevo Google Sheet
 * 2. Ve a Extensiones > Apps Script
 * 3. Borra todo el contenido y pega este código
 * 4. Guarda (Ctrl+S)
 * 5. Ejecuta la función "crearCotizador" desde el menú de funciones
 * 6. Autoriza los permisos cuando te lo pida
 * 7. Regresa al Sheet - verás el cotizador listo
 */

// ============================================
// CONFIGURACION DE PRECIOS
// ============================================

const PRECIOS = {
  // Opción A: Competitivo (precio base)
  A: {
    BASE_VISITA: 500,
    PRIMERA_UNIDAD: 2200,
    UNIDAD_2_A_4: 1800,
    UNIDAD_5_MAS: 1500
  },
  // Opción B: Premium (precio máximo)
  B: {
    BASE_VISITA: 500,
    PRECIO_UNIDAD: 3000,
    DESCUENTO_POR_UNIDAD: 0.10,
    DESCUENTO_TOPE: 0.40
  },
  // Opción C: Agresivo (precio mínimo para cerrar)
  C: {
    BASE_VISITA: 400,
    PRIMERA_UNIDAD: 1800,
    UNIDAD_2_A_4: 1500,
    UNIDAD_5_MAS: 1200
  },
  // Payout al técnico
  TECNICO: {
    BASE: 300,
    POR_UNIDAD: 1200,
    BONO: 200
  }
};

const ZONAS = {
  'Ciudad La Palma': { multiplicador: 1.0, tiempo: '15 min' },
  'Punta Cana Village': { multiplicador: 1.0, tiempo: '20 min' },
  'Cap Cana': { multiplicador: 1.1, tiempo: '30 min' },
  'Punta Cana Resort': { multiplicador: 1.05, tiempo: '25 min' }
};

// ============================================
// FUNCION PRINCIPAL - CREAR EL COTIZADOR
// ============================================

function crearCotizador() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Borrar hoja existente si existe
  let sheet = ss.getSheetByName('Cotizador');
  if (sheet) {
    ss.deleteSheet(sheet);
  }

  // Crear nueva hoja
  sheet = ss.insertSheet('Cotizador');

  // Configurar ancho de columnas
  sheet.setColumnWidth(1, 50);   // A - espaciador
  sheet.setColumnWidth(2, 200);  // B - labels
  sheet.setColumnWidth(3, 150);  // C - inputs
  sheet.setColumnWidth(4, 50);   // D - espaciador
  sheet.setColumnWidth(5, 150);  // E - resultados label
  sheet.setColumnWidth(6, 150);  // F - resultados valor
  sheet.setColumnWidth(7, 50);   // G - espaciador

  // Colores
  const AZUL_OSCURO = '#1a365d';
  const AZUL_MEDIO = '#2c5282';
  const AZUL_CLARO = '#bee3f8';
  const VERDE = '#48bb78';
  const AMARILLO = '#ecc94b';
  const ROJO = '#fc8181';
  const GRIS = '#e2e8f0';
  const BLANCO = '#ffffff';

  // ============================================
  // SECCION: HEADER
  // ============================================

  sheet.getRange('B2:F2').merge()
    .setValue('🌴 MAROA - Cotizador de Servicios A/C')
    .setBackground(AZUL_OSCURO)
    .setFontColor(BLANCO)
    .setFontSize(18)
    .setFontWeight('bold')
    .setHorizontalAlignment('center')
    .setVerticalAlignment('middle');
  sheet.setRowHeight(2, 50);

  sheet.getRange('B3:F3').merge()
    .setValue('Mantenimiento Preventivo - Punta Cana')
    .setBackground(AZUL_MEDIO)
    .setFontColor(BLANCO)
    .setFontSize(12)
    .setHorizontalAlignment('center');

  // ============================================
  // SECCION: DATOS DEL CLIENTE
  // ============================================

  sheet.getRange('B5:C5').merge()
    .setValue('📋 DATOS DEL CLIENTE')
    .setBackground(AZUL_CLARO)
    .setFontWeight('bold')
    .setFontSize(11);

  // Nombre del cliente
  sheet.getRange('B6').setValue('Nombre:')
    .setFontWeight('bold');
  sheet.getRange('C6').setValue('')
    .setBackground(BLANCO)
    .setBorder(true, true, true, true, false, false);

  // WhatsApp
  sheet.getRange('B7').setValue('WhatsApp:')
    .setFontWeight('bold');
  sheet.getRange('C7').setValue('')
    .setBackground(BLANCO)
    .setBorder(true, true, true, true, false, false);

  // ============================================
  // SECCION: CONFIGURACION DEL SERVICIO
  // ============================================

  sheet.getRange('B9:C9').merge()
    .setValue('⚙️ CONFIGURACION DEL SERVICIO')
    .setBackground(AZUL_CLARO)
    .setFontWeight('bold')
    .setFontSize(11);

  // Cantidad de unidades
  sheet.getRange('B10').setValue('Unidades A/C:')
    .setFontWeight('bold');
  const unidadesCell = sheet.getRange('C10');
  unidadesCell.setValue(1)
    .setBackground(AMARILLO)
    .setFontWeight('bold')
    .setFontSize(14)
    .setHorizontalAlignment('center')
    .setBorder(true, true, true, true, false, false);

  // Dropdown de unidades
  const unidadesRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['1', '2', '3', '4', '5', '6', '7', '8'])
    .setAllowInvalid(false)
    .build();
  unidadesCell.setDataValidation(unidadesRule);

  // Zona
  sheet.getRange('B11').setValue('Zona:')
    .setFontWeight('bold');
  const zonaCell = sheet.getRange('C11');
  zonaCell.setValue('Ciudad La Palma')
    .setBackground(BLANCO)
    .setBorder(true, true, true, true, false, false);

  // Dropdown de zonas
  const zonaRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(Object.keys(ZONAS))
    .setAllowInvalid(false)
    .build();
  zonaCell.setDataValidation(zonaRule);

  // Tipo de cliente
  sheet.getRange('B12').setValue('Tipo cliente:')
    .setFontWeight('bold');
  const tipoCell = sheet.getRange('C12');
  tipoCell.setValue('Nuevo')
    .setBackground(BLANCO)
    .setBorder(true, true, true, true, false, false);

  const tipoRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Nuevo', 'Recurrente', 'Referido'])
    .setAllowInvalid(false)
    .build();
  tipoCell.setDataValidation(tipoRule);

  // ============================================
  // SECCION: RESULTADOS - RANGO DE PRECIOS
  // ============================================

  sheet.getRange('E5:F5').merge()
    .setValue('💰 RANGO DE PRECIOS')
    .setBackground(AZUL_CLARO)
    .setFontWeight('bold')
    .setFontSize(11);

  // Precio mínimo
  sheet.getRange('E6').setValue('Mínimo (cierre):')
    .setFontWeight('bold');
  sheet.getRange('F6')
    .setFormula('=precioMinimo(C10,C11)')
    .setBackground(ROJO)
    .setFontColor(BLANCO)
    .setFontWeight('bold')
    .setFontSize(14)
    .setNumberFormat('"RD$"#,##0');

  // Precio recomendado
  sheet.getRange('E7').setValue('Recomendado:')
    .setFontWeight('bold');
  sheet.getRange('F7')
    .setFormula('=precioRecomendado(C10,C11)')
    .setBackground(VERDE)
    .setFontColor(BLANCO)
    .setFontWeight('bold')
    .setFontSize(16)
    .setNumberFormat('"RD$"#,##0');
  sheet.setRowHeight(7, 35);

  // Precio máximo
  sheet.getRange('E8').setValue('Máximo (premium):')
    .setFontWeight('bold');
  sheet.getRange('F8')
    .setFormula('=precioMaximo(C10,C11)')
    .setBackground(AZUL_MEDIO)
    .setFontColor(BLANCO)
    .setFontWeight('bold')
    .setFontSize(14)
    .setNumberFormat('"RD$"#,##0');

  // ============================================
  // SECCION: DESGLOSE
  // ============================================

  sheet.getRange('E10:F10').merge()
    .setValue('📊 DESGLOSE')
    .setBackground(GRIS)
    .setFontWeight('bold');

  sheet.getRange('E11').setValue('Pago técnico:');
  sheet.getRange('F11')
    .setFormula('=pagoTecnico(C10)')
    .setNumberFormat('"RD$"#,##0');

  sheet.getRange('E12').setValue('Margen Maroa:');
  sheet.getRange('F12')
    .setFormula('=precioRecomendado(C10,C11)-pagoTecnico(C10)')
    .setNumberFormat('"RD$"#,##0');

  sheet.getRange('E13').setValue('Margen %:');
  sheet.getRange('F13')
    .setFormula('=ROUND((precioRecomendado(C10,C11)-pagoTecnico(C10))/precioRecomendado(C10,C11)*100,0)&"%"');

  // ============================================
  // SECCION: MENSAJE WHATSAPP
  // ============================================

  sheet.getRange('B14:F14').merge()
    .setValue('📱 MENSAJE DE WHATSAPP (copiar y pegar)')
    .setBackground(VERDE)
    .setFontColor(BLANCO)
    .setFontWeight('bold')
    .setFontSize(11);

  sheet.getRange('B15:F22').merge()
    .setFormula('=generarMensaje(C6,C10,C11,F7)')
    .setBackground(BLANCO)
    .setBorder(true, true, true, true, false, false)
    .setWrap(true)
    .setVerticalAlignment('top')
    .setFontSize(10);
  sheet.setRowHeight(15, 180);

  // ============================================
  // SECCION: GUIA RAPIDA
  // ============================================

  sheet.getRange('B24:F24').merge()
    .setValue('📖 GUIA RAPIDA PARA EL CONCIERGE')
    .setBackground(GRIS)
    .setFontWeight('bold');

  const guia = `
• PRECIO MINIMO: Solo usar si el cliente está a punto de irse. Es nuestro piso de rentabilidad.
• PRECIO RECOMENDADO: Siempre empezar aquí. Es competitivo y tiene buen margen.
• PRECIO MAXIMO: Para clientes premium o cuando hay mucha demanda.

TIPS DE NEGOCIACION:
- Si pide descuento: "Te puedo hacer un 5% si agendamos hoy" (bajar hacia precio mínimo)
- Si tiene muchas unidades: "Por tener X unidades, ya tienes precio especial incluido"
- Si es referido: "Como vienes de parte de [nombre], te mantengo el mejor precio"
`.trim();

  sheet.getRange('B25:F30').merge()
    .setValue(guia)
    .setBackground(BLANCO)
    .setBorder(true, true, true, true, false, false)
    .setWrap(true)
    .setVerticalAlignment('top')
    .setFontSize(9);

  // Proteger celdas de fórmulas
  sheet.getRange('F6:F13').protect().setWarningOnly(true);
  sheet.getRange('B15:F22').protect().setWarningOnly(true);

  // Hacer la hoja activa
  ss.setActiveSheet(sheet);

  SpreadsheetApp.getUi().alert('¡Cotizador creado exitosamente! 🎉\n\nYa puedes usarlo.');
}

// ============================================
// FUNCIONES DE CALCULO
// ============================================

/**
 * Calcula el precio mínimo (opción C - agresivo)
 */
function precioMinimo(unidades, zona) {
  unidades = parseInt(unidades) || 1;
  const mult = ZONAS[zona]?.multiplicador || 1.0;

  let precio = PRECIOS.C.BASE_VISITA + PRECIOS.C.PRIMERA_UNIDAD;

  const unidades2a4 = Math.min(Math.max(unidades - 1, 0), 3);
  precio += unidades2a4 * PRECIOS.C.UNIDAD_2_A_4;

  const unidades5mas = Math.max(unidades - 4, 0);
  precio += unidades5mas * PRECIOS.C.UNIDAD_5_MAS;

  return Math.round(precio * mult);
}

/**
 * Calcula el precio recomendado (opción A - competitivo)
 */
function precioRecomendado(unidades, zona) {
  unidades = parseInt(unidades) || 1;
  const mult = ZONAS[zona]?.multiplicador || 1.0;

  let precio = PRECIOS.A.BASE_VISITA + PRECIOS.A.PRIMERA_UNIDAD;

  const unidades2a4 = Math.min(Math.max(unidades - 1, 0), 3);
  precio += unidades2a4 * PRECIOS.A.UNIDAD_2_A_4;

  const unidades5mas = Math.max(unidades - 4, 0);
  precio += unidades5mas * PRECIOS.A.UNIDAD_5_MAS;

  return Math.round(precio * mult);
}

/**
 * Calcula el precio máximo (opción B - premium)
 */
function precioMaximo(unidades, zona) {
  unidades = parseInt(unidades) || 1;
  const mult = ZONAS[zona]?.multiplicador || 1.0;

  const subtotal = unidades * PRECIOS.B.PRECIO_UNIDAD;
  const descuento = Math.min(unidades * PRECIOS.B.DESCUENTO_POR_UNIDAD, PRECIOS.B.DESCUENTO_TOPE);
  const subtotalConDescuento = subtotal * (1 - descuento);

  return Math.round((PRECIOS.B.BASE_VISITA + subtotalConDescuento) * mult);
}

/**
 * Calcula el pago al técnico
 */
function pagoTecnico(unidades) {
  unidades = parseInt(unidades) || 1;
  return PRECIOS.TECNICO.BASE + (unidades * PRECIOS.TECNICO.POR_UNIDAD) + PRECIOS.TECNICO.BONO;
}

/**
 * Genera el mensaje de WhatsApp
 */
function generarMensaje(nombre, unidades, zona, precio) {
  nombre = nombre || '[Nombre]';
  unidades = parseInt(unidades) || 1;
  const unidadTexto = unidades === 1 ? 'tu aire acondicionado' : `tus ${unidades} aires acondicionados`;
  const tiempoEstimado = unidades * 30 + 15;

  return `¡Hola ${nombre}! 👋

Te comparto la cotización para el mantenimiento preventivo de ${unidadTexto}:

💰 *Precio total: RD$${precio.toLocaleString()}*

✅ Incluye:
• Limpieza completa de filtros
• Limpieza de evaporador y condensador
• Verificación de drenaje
• Revisión de conexiones
• Reporte fotográfico del estado
• Garantía de satisfacción 7 días

⏱ Tiempo estimado: ${tiempoEstimado} minutos
📍 Zona: ${zona}

💳 Pago: Transferencia (Popular, BHD, Scotiabank)

¿Te gustaría agendar? Tengo disponibilidad esta semana:
• [Opción 1]
• [Opción 2]`;
}

// ============================================
// MENU PERSONALIZADO
// ============================================

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🌴 Maroa')
    .addItem('Crear/Resetear Cotizador', 'crearCotizador')
    .addItem('Ver tabla de precios', 'mostrarTablaPrecios')
    .addToUi();
}

function mostrarTablaPrecios() {
  let tabla = '=== TABLA DE PRECIOS MAROA ===\n\n';
  tabla += 'Unidades | Mínimo  | Recomendado | Máximo\n';
  tabla += '---------|---------|-------------|--------\n';

  for (let i = 1; i <= 6; i++) {
    const min = precioMinimo(i, 'Ciudad La Palma');
    const rec = precioRecomendado(i, 'Ciudad La Palma');
    const max = precioMaximo(i, 'Ciudad La Palma');
    tabla += `${i}        | RD$${min.toString().padStart(5)} | RD$${rec.toString().padStart(5)}     | RD$${max.toString().padStart(5)}\n`;
  }

  SpreadsheetApp.getUi().alert(tabla);
}
