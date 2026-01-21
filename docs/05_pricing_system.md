# Sistema de Pricing: Mantenimiento Preventivo A/C

**Version:** 1.0
**Fecha:** 2026-01-21
**Estado:** Draft para validacion

---

## 1. Research de Mercado

### 1.1 Precios en Republica Dominicana (Fuentes Online)

| Fuente | Precio por Unidad | Notas |
|--------|-------------------|-------|
| [Megusta.do - EMGD](https://megusta.do/deals/aire-emgd) | RD$1,200-1,500 | Incluye limpieza completa + revision refrigerante |
| [Megusta.do - Reik Industrial](https://megusta.do/deals/reik-industrial) | RD$850-1,700 | 9,000-24,000 BTU |
| [Gustazos RD](https://www.gustazos.com/deals/Services_residenciales12) | RD$1,199-1,299 | Limpieza interior a presion + componentes |
| [Contrata.com](https://contrata.com/contratar/reparacion-de-aire-acondicionado/punta-cana) | RD$2,000 | 9,000-24,000 BTU, RD$1,500 desde 4ta unidad |

### 1.2 Proveedores en Punta Cana

| Proveedor | Servicios | Ubicacion |
|-----------|-----------|-----------|
| [Punta Cana Clima](https://puntacanaclima.com/service/reparacion-de-aire/) | 24/7, diagnostico gratis, descuento volumen | Bavaro |
| [Servicio Isaias](https://servicioisaias.com/) | Mantenimiento preventivo | Av. Barcelo, Bavaro |
| [Grupo MPG](https://grupompg.com/) | Climatizacion, refrigeracion | Regional |

### 1.3 Salarios de Referencia (Contexto)

| Metrica | Valor | Fuente |
|---------|-------|--------|
| Salario promedio RD | RD$21,825/mes | [ONE 2025](https://cdn.com.do/nacionales/salario-promedio-en-rd-fue-de-rd21825-en-el-primer-trimestre-de-2025-segun-la-one/) |
| Sector climatizacion | RD$51,757/mes | Glassdoor |
| Salario minimo | RD$15,860/mes | [Tusalario.org](https://tusalario.org/republicadominicana/salario/salario-minimo) |

### 1.4 Observaciones Clave

1. **Rango de precios nacional:** RD$1,200-2,000 por unidad (precio regular)
2. **Promociones/ofertas:** RD$850-1,200 por unidad
3. **Punta Cana es mas caro:** Se estima +20-40% sobre Santo Domingo
4. **Descuento por volumen existe:** Contrata.com cobra RD$1,500 desde la 4ta unidad

---

## 2. Analisis del Esquema Propuesto (Documento v1.0)

### 2.1 Propuesta Original de Erick

```
Base visita: RD$500
Precio por unidad: RD$3,000
Descuento: 10% x N unidades (acumulativo)
```

### 2.2 Problemas Identificados

| Problema | Detalle | Riesgo |
|----------|---------|--------|
| **Precio base muy alto** | RD$3,000/unidad vs mercado RD$1,500-2,000 | Clientes rechazan por "caro" |
| **Descuento destruye margen** | 40% descuento en 4 unidades | Margen negativo en multi-unidad |
| **Sin validacion Punta Cana** | Precios de referencia son de Santo Domingo | Puede estar subestimado o sobreestimado |

### 2.3 Simulacion del Esquema Original

| Unidades | Subtotal | Descuento | Total Cliente | Si pago tecnico 65% | Margen Bruto |
|----------|----------|-----------|---------------|---------------------|--------------|
| 1 | 3,000 | 0% | 3,500 | 2,275 | 1,225 (35%) |
| 2 | 6,000 | 20% | 5,300 | 3,445 | 1,855 (35%) |
| 3 | 9,000 | 30% | 6,800 | 4,420 | 2,380 (35%) |
| 4 | 12,000 | 40% | 7,700 | 5,005 | 2,695 (35%) |

**Nota:** El margen % se mantiene constante, pero el descuento de 40% en 4 unidades puede hacer el precio poco competitivo para el tecnico si el compara con lo que gana directo.

---

## 3. Propuesta Revisada de Pricing

### 3.1 Principios

1. **Competitivo en Punta Cana** - No ser el mas barato, pero si justificable
2. **Margen minimo 25%** - Para cubrir costos indirectos y tener utilidad
3. **Atractivo para el tecnico** - Payout que compita con trabajo directo
4. **Simple de comunicar** - El cliente debe entender rapido

### 3.2 Estructura Propuesta

```
PRECIO AL CLIENTE:
- Cargo base por visita: RD$500
- Primera unidad: RD$2,200
- Unidades 2-4: RD$1,800 cada una
- Unidades 5+: RD$1,500 cada una (marginal)

PAYOUT AL TECNICO:
- Base por visita: RD$300
- Por unidad: RD$1,200 (fijo, sin importar cantidad)
- Bono puntualidad/completitud: RD$200 por servicio
```

### 3.3 Tabla de Precios al Cliente

| Unidades | Calculo | Precio Total |
|----------|---------|--------------|
| 1 | 500 + 2,200 | **RD$2,700** |
| 2 | 500 + 2,200 + 1,800 | **RD$4,500** |
| 3 | 500 + 2,200 + 1,800 + 1,800 | **RD$6,300** |
| 4 | 500 + 2,200 + 1,800 + 1,800 + 1,800 | **RD$8,100** |
| 5 | 500 + 2,200 + (3 x 1,800) + 1,500 | **RD$9,600** |
| 6 | 500 + 2,200 + (3 x 1,800) + (2 x 1,500) | **RD$11,100** |

### 3.4 Tabla de Payout al Tecnico

| Unidades | Calculo | Payout Tecnico | Margen Maroa |
|----------|---------|----------------|--------------|
| 1 | 300 + 1,200 + 200 | RD$1,700 | RD$1,000 (37%) |
| 2 | 300 + 2,400 + 200 | RD$2,900 | RD$1,600 (36%) |
| 3 | 300 + 3,600 + 200 | RD$4,100 | RD$2,200 (35%) |
| 4 | 300 + 4,800 + 200 | RD$5,300 | RD$2,800 (35%) |
| 5 | 300 + 6,000 + 200 | RD$6,500 | RD$3,100 (32%) |
| 6 | 300 + 7,200 + 200 | RD$7,700 | RD$3,400 (31%) |

### 3.5 Comparacion con Mercado

| Escenario | Precio Maroa | Precio Mercado (estimado) | Diferencia |
|-----------|--------------|---------------------------|------------|
| 1 unidad | RD$2,700 | RD$2,000-2,500 | +8-35% |
| 2 unidades | RD$4,500 | RD$3,500-4,000 | +13-29% |
| 3 unidades | RD$6,300 | RD$5,000-5,500 | +15-26% |
| 4 unidades | RD$8,100 | RD$6,500-7,000 | +16-25% |

**Justificacion del premium:**
- Servicio concierge (WhatsApp, recordatorios, coordinacion)
- Garantia de 7 dias
- Evidencia fotografica del trabajo
- Pago por transferencia/tarjeta (no efectivo)
- Reporte del estado del equipo

---

## 4. Calculadora de Pricing

### 4.1 Formula para Cotizacion Rapida

```
PRECIO_CLIENTE = 500 + 2200 + (min(N-1, 3) * 1800) + (max(N-4, 0) * 1500)

Donde N = numero de unidades

Simplificado:
- 1 unidad: 2,700
- 2 unidades: 4,500
- 3 unidades: 6,300
- 4 unidades: 8,100
- 5+ unidades: 8,100 + (N-4) * 1,500
```

### 4.2 Formula para Payout

```
PAYOUT_TECNICO = 300 + (N * 1200) + 200

Donde N = numero de unidades
```

### 4.3 Verificacion de Margen

```
MARGEN_BRUTO = PRECIO_CLIENTE - PAYOUT_TECNICO
MARGEN_% = MARGEN_BRUTO / PRECIO_CLIENTE * 100

Objetivo: MARGEN_% >= 25%
```

---

## 5. Variables que Afectan el Precio (Futuras)

Estas variables NO se incluyen en el piloto para mantener simplicidad, pero se pueden agregar despues:

| Variable | Impacto Potencial | Cuando Agregar |
|----------|-------------------|----------------|
| BTU del equipo | +RD$200-500 para >24,000 BTU | Post-piloto |
| Accesibilidad | +RD$300-500 si requiere escalera/techo | Post-piloto |
| Condicion inicial | +RD$200-400 si muy sucio | Post-piloto |
| Horario premium | +20% para 7-9am o 6-8pm | Post-piloto |
| Zona | +RD$200-500 para Cap Cana | Post-piloto |

---

## 6. Que Falta Validar

### 6.1 Validacion Critica (Antes de Lanzar)

| Item | Como Validar | Responsable |
|------|--------------|-------------|
| Precio aceptable para cliente | Ofrecer cotizacion a 3-5 contactos | Gabby |
| Payout aceptable para tecnico | Preguntar a tecnicos en entrevista | Erick/Gabby |
| Tiempo real por unidad | Documentar primeros 5 servicios | Tecnico |

### 6.2 Preguntas para Tecnicos

1. "Si te garantizo 3-5 servicios por semana, pago el mismo dia, y tu solo haces el trabajo tecnico... cuanto esperarias ganar por servicio de limpieza de 1 mini-split?"
2. "Cuanto cobras tu directamente al cliente por una limpieza de 1 unidad? Y de 3 unidades?"
3. "Que te haria preferir trabajar con nosotros vs buscar tus propios clientes?"

### 6.3 Preguntas para Clientes

1. "Te cotizo RD$2,700 por mantenimiento de tu mini-split. Incluye limpieza completa, garantia de 7 dias, y reporte fotografico. Que te parece?"
2. "Tienes 3 aires. Te puedo hacer los 3 por RD$6,300 en la misma visita. Te interesa?"

---

## 7. Estrategia Hibrida de Pricing (Decision Final)

### 7.1 Resumen Ejecutivo

**Iniciamos con Opcion A (competitivo), con plan de transicion a Opcion B (premium) si las senales lo justifican.**

### 7.2 Los Dos Esquemas

#### OPCION A: Competitivo (INICIAL)

```
Base visita: RD$500
1ra unidad: RD$2,200
Unidades 2-4: RD$1,800/unidad
Unidades 5+: RD$1,500/unidad
```

| Unidades | Precio Cliente | Margen |
|----------|----------------|--------|
| 1 | RD$2,700 | 37% |
| 2 | RD$4,500 | 36% |
| 3 | RD$6,300 | 35% |
| 4 | RD$8,100 | 35% |

**Cuando usar:** Piloto inicial, primeros 10 servicios, cuando estamos validando demanda.

#### OPCION B: Premium (TRANSICION)

```
Base visita: RD$500
Precio por unidad: RD$3,000
Descuento: 10% x N (tope 40%)
```

| Unidades | Precio Cliente | Margen |
|----------|----------------|--------|
| 1 | RD$3,500 | 35% |
| 2 | RD$5,300 | 35% |
| 3 | RD$6,800 | 35% |
| 4 | RD$7,700 | 35% |

**Cuando usar:** Cuando hay demanda validada y podemos justificar el premium.

### 7.3 Criterios para Transicionar de A → B

**Transicionar a Opcion B cuando se cumplan AL MENOS 3 de estas 5 condiciones:**

| # | Senal | Metrica | Umbral |
|---|-------|---------|--------|
| 1 | **Alta conversion** | % leads que pagan | ≥30% |
| 2 | **Sin resistencia al precio** | Clientes que dicen "caro" o piden descuento | <20% de cotizaciones |
| 3 | **Demanda excede capacidad** | Leads en espera | ≥5 leads sin poder atender |
| 4 | **Clientes refieren** | Referidos organicos | ≥2 referidos en piloto |
| 5 | **Tecnico satisfecho** | Tecnico no se queja del payout | Sin quejas en 5+ servicios |

### 7.4 Criterios para BAJAR precios (Opcion C de emergencia)

**Solo considerar si en los primeros 5 servicios:**

| Senal de Alarma | Accion |
|-----------------|--------|
| 0 conversiones de 10+ leads | Bajar 1ra unidad a RD$1,800 |
| >50% dicen "muy caro" | Bajar 1ra unidad a RD$1,800 |
| Tecnico rechaza trabajos por pago bajo | Subir payout a 70% |

### 7.5 Tabla Comparativa Final

| Metrica | Opcion A (Inicial) | Opcion B (Premium) | Opcion C (Emergencia) |
|---------|--------------------|--------------------|----------------------|
| Precio 1 unidad | RD$2,700 | RD$3,500 | RD$2,300 |
| Precio 4 unidades | RD$8,100 | RD$7,700 | RD$6,500 |
| Margen promedio | 35% | 35% | 25% |
| Posicionamiento | Competitivo | Premium | Agresivo |
| Riesgo | Margen bajo si costos suben | Rechazo por precio | Insostenible largo plazo |

### 7.6 Decision Documentada

**Fecha:** 2026-01-21
**Decision:** Iniciar piloto con Opcion A
**Responsable de monitorear:** Erick
**Revisar transicion:** Despues de servicio #10 o semana 2, lo que ocurra primero

---

## 8. Checklist Pre-Lanzamiento

- [ ] Validar precio con 3 contactos/vecinos
- [ ] Validar payout con al menos 1 tecnico
- [ ] Crear version imprimible de tabla de precios
- [ ] Agregar precios a WhatsApp scripts
- [ ] Crear Google Sheet con calculadora

---

## Fuentes

- [Megusta.do - Ofertas de mantenimiento A/C](https://megusta.do/deals/aire-emgd)
- [Contrata.com - Tecnicos Punta Cana](https://contrata.com/contratar/reparacion-de-aire-acondicionado/punta-cana)
- [Punta Cana Clima](https://puntacanaclima.com/service/reparacion-de-aire/)
- [ONE - Salarios RD 2025](https://cdn.com.do/nacionales/salario-promedio-en-rd-fue-de-rd21825-en-el-primer-trimestre-de-2025-segun-la-one/)
- [Cronoshare - Costos mantenimiento A/C](https://www.cronoshare.com/cuanto-cuesta/mantenimiento-aire-acondicionado)
