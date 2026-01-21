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

// OPCION A: Competitivo (INICIAL - usar durante piloto)
const CONFIG_A = {
  nombre: 'Opcion A - Competitivo',
  // Precio al cliente
  BASE_VISITA: 500,
  PRIMERA_UNIDAD: 2200,
  UNIDAD_2_A_4: 1800,
  UNIDAD_5_MAS: 1500,
  // Payout al tecnico
  PAYOUT_BASE: 300,
  PAYOUT_POR_UNIDAD: 1200,
  BONO_COMPLETITUD: 200
};

// OPCION B: Premium (TRANSICION - usar cuando hay demanda validada)
const CONFIG_B = {
  nombre: 'Opcion B - Premium',
  // Precio al cliente (esquema con descuento progresivo)
  BASE_VISITA: 500,
  PRECIO_UNIDAD: 3000,
  DESCUENTO_POR_UNIDAD: 0.10,  // 10% por unidad adicional
  DESCUENTO_TOPE: 0.40,        // Maximo 40% descuento
  // Payout al tecnico (65% del precio)
  PAYOUT_PORCENTAJE: 0.65
};

// CONFIGURACION ACTIVA (cambiar aqui para switch)
// Usar: 'A' para Opcion A (inicial), 'B' para Opcion B (premium)
const ESQUEMA_ACTIVO = 'A';

const CONFIG = CONFIG_A;  // Default a Opcion A

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
// FUNCIONES OPCION B (PREMIUM)
// ============================================

/**
 * Calcula precio al cliente con Opcion B (descuento progresivo)
 * @param {number} unidades - Numero de unidades
 * @return {number} Precio total en RD$
 * @customfunction
 */
function PRECIO_CLIENTE_B(unidades) {
  if (unidades < 1) return 0;

  const subtotal = unidades * CONFIG_B.PRECIO_UNIDAD;
  const descuento = Math.min(unidades * CONFIG_B.DESCUENTO_POR_UNIDAD, CONFIG_B.DESCUENTO_TOPE);
  const subtotalConDescuento = subtotal * (1 - descuento);

  return CONFIG_B.BASE_VISITA + subtotalConDescuento;
}

/**
 * Calcula payout al tecnico con Opcion B (65% del precio)
 * @param {number} unidades - Numero de unidades
 * @return {number} Payout en RD$
 * @customfunction
 */
function PAYOUT_TECNICO_B(unidades) {
  if (unidades < 1) return 0;
  return Math.round(PRECIO_CLIENTE_B(unidades) * CONFIG_B.PAYOUT_PORCENTAJE);
}

/**
 * Compara ambos esquemas lado a lado
 * @param {number} unidades - Numero de unidades
 * @return {string} Comparacion formateada
 * @customfunction
 */
function COMPARAR_ESQUEMAS(unidades) {
  const precioA = PRECIO_CLIENTE(unidades);
  const precioB = PRECIO_CLIENTE_B(unidades);
  const payoutA = PAYOUT_TECNICO(unidades);
  const payoutB = PAYOUT_TECNICO_B(unidades);
  const margenA = precioA - payoutA;
  const margenB = precioB - payoutB;

  return `${unidades} unidad(es):\n` +
         `  Opcion A: RD$${precioA.toLocaleString()} (margen RD$${margenA.toLocaleString()})\n` +
         `  Opcion B: RD$${precioB.toLocaleString()} (margen RD$${margenB.toLocaleString()})`;
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
  // Imprimir comparacion de ambos esquemas
  console.log('\n' + '='.repeat(70));
  console.log('MAROA - COMPARACION DE ESQUEMAS DE PRICING');
  console.log('='.repeat(70));

  console.log('\n--- OPCION A: COMPETITIVO (INICIAL) ---\n');
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

  console.log('\n--- OPCION B: PREMIUM (TRANSICION) ---\n');
  console.log('Unidades | Cliente   | Tecnico  | Margen   | %');
  console.log('---------|-----------|----------|----------|----');

  for (let i = 1; i <= 6; i++) {
    const precio = PRECIO_CLIENTE_B(i);
    const payout = PAYOUT_TECNICO_B(i);
    const margen = precio - payout;
    const pct = Math.round((margen / precio) * 100);

    console.log(
      `${i}        | RD$${precio.toString().padStart(5)} | RD$${payout.toString().padStart(5)} | RD$${margen.toString().padStart(5)} | ${pct}%`
    );
  }

  console.log('\n--- COMPARACION LADO A LADO ---\n');
  console.log('Unidades | Opcion A  | Opcion B  | Diferencia');
  console.log('---------|-----------|-----------|------------');

  for (let i = 1; i <= 4; i++) {
    const precioA = PRECIO_CLIENTE(i);
    const precioB = PRECIO_CLIENTE_B(i);
    const diff = precioB - precioA;
    const diffPct = Math.round((diff / precioA) * 100);
    const sign = diff >= 0 ? '+' : '';

    console.log(
      `${i}        | RD$${precioA.toString().padStart(5)} | RD$${precioB.toString().padStart(5)} | ${sign}RD$${diff} (${sign}${diffPct}%)`
    );
  }

  console.log('\n--- CRITERIOS PARA TRANSICIONAR A → B ---\n');
  console.log('Transicionar cuando se cumplan AL MENOS 3 de 5:');
  console.log('  1. Conversion ≥30%');
  console.log('  2. <20% dicen "caro"');
  console.log('  3. ≥5 leads en espera');
  console.log('  4. ≥2 referidos organicos');
  console.log('  5. Tecnico sin quejas en 5+ servicios');

  console.log('\n--- EJEMPLO COTIZACION (OPCION A) ---\n');
  console.log(MENSAJE_COTIZACION('Juan', 3));

  module.exports = {
    PRECIO_CLIENTE,
    PAYOUT_TECNICO,
    MARGEN_BRUTO,
    MARGEN_PORCENTAJE,
    COTIZACION,
    TABLA_PRECIOS,
    MENSAJE_COTIZACION,
    PRECIO_CLIENTE_B,
    PAYOUT_TECNICO_B,
    COMPARAR_ESQUEMAS,
    CONFIG_A,
    CONFIG_B
  };
}
