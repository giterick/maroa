/**
 * Maroa - Calculadora de Pricing para Mantenimiento Preventivo A/C
 *
 * Para usar en Google Sheets:
 * 1. Abre tu Google Sheet
 * 2. Ve a Extensiones > Apps Script
 * 3. Pega este codigo
 * 4. Guarda y cierra
 * 5. Usa las funciones en cualquier celda: =PRECIO_CLIENTE(3) o =PAYOUT_TECNICO(3)
 */

// ============================================
// CONFIGURACION DE PRECIOS (MODIFICAR AQUI)
// ============================================

const CONFIG = {
  // Precio al cliente
  BASE_VISITA: 500,           // Cargo fijo por visita
  PRIMERA_UNIDAD: 2200,       // Precio primera unidad
  UNIDAD_2_A_4: 1800,         // Precio unidades 2-4
  UNIDAD_5_MAS: 1500,         // Precio unidades 5+

  // Payout al tecnico
  PAYOUT_BASE: 300,           // Base por visita
  PAYOUT_POR_UNIDAD: 1200,    // Por cada unidad
  BONO_COMPLETITUD: 200,      // Bono por servicio completo

  // Objetivos
  MARGEN_MINIMO: 0.25         // 25% margen minimo
};

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

/**
 * Calcula el precio al cliente
 * @param {number} unidades - Numero de unidades de A/C
 * @return {number} Precio total en RD$
 * @customfunction
 */
function PRECIO_CLIENTE(unidades) {
  if (unidades < 1) return 0;

  let precio = CONFIG.BASE_VISITA + CONFIG.PRIMERA_UNIDAD;

  // Unidades 2-4
  const unidades2a4 = Math.min(Math.max(unidades - 1, 0), 3);
  precio += unidades2a4 * CONFIG.UNIDAD_2_A_4;

  // Unidades 5+
  const unidades5mas = Math.max(unidades - 4, 0);
  precio += unidades5mas * CONFIG.UNIDAD_5_MAS;

  return precio;
}

/**
 * Calcula el payout al tecnico
 * @param {number} unidades - Numero de unidades de A/C
 * @return {number} Payout total en RD$
 * @customfunction
 */
function PAYOUT_TECNICO(unidades) {
  if (unidades < 1) return 0;

  return CONFIG.PAYOUT_BASE +
         (unidades * CONFIG.PAYOUT_POR_UNIDAD) +
         CONFIG.BONO_COMPLETITUD;
}

/**
 * Calcula el margen bruto de Maroa
 * @param {number} unidades - Numero de unidades de A/C
 * @return {number} Margen en RD$
 * @customfunction
 */
function MARGEN_BRUTO(unidades) {
  return PRECIO_CLIENTE(unidades) - PAYOUT_TECNICO(unidades);
}

/**
 * Calcula el margen porcentual
 * @param {number} unidades - Numero de unidades de A/C
 * @return {number} Margen en porcentaje (0-100)
 * @customfunction
 */
function MARGEN_PORCENTAJE(unidades) {
  const precio = PRECIO_CLIENTE(unidades);
  if (precio === 0) return 0;
  return Math.round((MARGEN_BRUTO(unidades) / precio) * 100);
}

/**
 * Genera cotizacion completa
 * @param {number} unidades - Numero de unidades de A/C
 * @return {string} Cotizacion formateada
 * @customfunction
 */
function COTIZACION(unidades) {
  const precio = PRECIO_CLIENTE(unidades);
  const payout = PAYOUT_TECNICO(unidades);
  const margen = MARGEN_BRUTO(unidades);
  const margenPct = MARGEN_PORCENTAJE(unidades);

  return `${unidades} unidad(es): RD$${precio.toLocaleString()} | Tecnico: RD$${payout.toLocaleString()} | Margen: RD$${margen.toLocaleString()} (${margenPct}%)`;
}

// ============================================
// TABLA RAPIDA DE REFERENCIA
// ============================================

/**
 * Genera tabla completa de 1-6 unidades
 * @return {Array} Matriz con datos de pricing
 * @customfunction
 */
function TABLA_PRECIOS() {
  const header = ['Unidades', 'Precio Cliente', 'Payout Tecnico', 'Margen RD$', 'Margen %'];
  const rows = [header];

  for (let i = 1; i <= 6; i++) {
    rows.push([
      i,
      PRECIO_CLIENTE(i),
      PAYOUT_TECNICO(i),
      MARGEN_BRUTO(i),
      MARGEN_PORCENTAJE(i) + '%'
    ]);
  }

  return rows;
}

// ============================================
// SCRIPT DE WHATSAPP (COPY-PASTE)
// ============================================

/**
 * Genera mensaje de cotizacion para WhatsApp
 * @param {string} nombreCliente - Nombre del cliente
 * @param {number} unidades - Numero de unidades
 * @return {string} Mensaje formateado para WhatsApp
 * @customfunction
 */
function MENSAJE_COTIZACION(nombreCliente, unidades) {
  const precio = PRECIO_CLIENTE(unidades);

  return `Hola ${nombreCliente}!

Te comparto la cotizacion para el mantenimiento preventivo de tus ${unidades} aire(s) acondicionado(s):

*Precio total: RD$${precio.toLocaleString()}*

Incluye:
- Limpieza de filtros
- Limpieza de evaporador (unidad interior)
- Limpieza de condensador (unidad exterior)
- Verificacion de drenaje
- Revision de conexiones electricas
- Reporte fotografico del estado del equipo
- Garantia de satisfaccion de 7 dias

El servicio toma aproximadamente ${unidades * 30 + 15} minutos.

Metodos de pago: Transferencia bancaria (Popular, BHD, Scotiabank)

Tienes disponibilidad esta semana? Te puedo ofrecer estas opciones:
- [Opcion 1]
- [Opcion 2]
- [Opcion 3]`;
}

// ============================================
// PARA TESTING LOCAL (Node.js)
// ============================================

if (typeof module !== 'undefined') {
  // Imprimir tabla de prueba
  console.log('\n=== TABLA DE PRECIOS MAROA ===\n');
  console.log('Unidades | Cliente   | Tecnico  | Margen   | %');
  console.log('---------|-----------|----------|----------|----');

  for (let i = 1; i <= 6; i++) {
    const precio = PRECIO_CLIENTE(i);
    const payout = PAYOUT_TECNICO(i);
    const margen = MARGEN_BRUTO(i);
    const pct = MARGEN_PORCENTAJE(i);

    console.log(
      `${i}        | RD$${precio.toString().padStart(5)} | RD$${payout.toString().padStart(5)} | RD$${margen.toString().padStart(5)} | ${pct}%`
    );
  }

  console.log('\n=== EJEMPLO COTIZACION ===\n');
  console.log(MENSAJE_COTIZACION('Juan', 3));

  module.exports = {
    PRECIO_CLIENTE,
    PAYOUT_TECNICO,
    MARGEN_BRUTO,
    MARGEN_PORCENTAJE,
    COTIZACION,
    TABLA_PRECIOS,
    MENSAJE_COTIZACION
  };
}
