/**
 * Script para crear el formulario de Entrevista a Técnicos en Tally via API
 *
 * INSTRUCCIONES:
 * 1. Obtén tu API token en https://tally.so/settings/api
 * 2. Reemplaza 'TU_API_TOKEN' con tu token real
 * 3. Ejecuta: node crear-formulario-tally.js
 *
 * El script creará el formulario completo con las 44 preguntas.
 */

const TALLY_API_TOKEN = process.env.TALLY_API_TOKEN || 'TU_API_TOKEN';
const TALLY_API_URL = 'https://api.tally.so';

// Función para generar UUIDs
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Estructura del formulario basada en el Framework
const formStructure = {
  title: "Entrevista Profunda a Técnicos - Piloto Maroa",
  description: "Esta entrevista nos ayuda a entender cómo trabajas y qué necesitas para colaborar con nosotros. Toma aproximadamente 10-15 minutos.",
  sections: [
    {
      title: "Datos de la Entrevista",
      questions: [
        { id: "entrevistador", text: "Nombre de quien entrevista", type: "INPUT_TEXT", required: true },
        { id: "nombre_tecnico", text: "Nombre del técnico", type: "INPUT_TEXT", required: true },
        { id: "telefono_tecnico", text: "Teléfono del técnico", type: "INPUT_PHONE_NUMBER", required: true },
        { id: "fecha_entrevista", text: "Fecha de la entrevista", type: "INPUT_DATE", required: true }
      ]
    },
    {
      title: "Datos de Perfil",
      questions: [
        { id: "P0.1", text: "¿Cuál es tu categoría principal de trabajo?", type: "MULTIPLE_CHOICE", required: true,
          options: ["A/C", "Electricidad", "Plomería", "Electrodomésticos", "Handyman", "Otros"],
          help: "Elige la que más te genera ingresos o más haces en el mes." },
        { id: "P0.2", text: "¿Cuál es tu modalidad actual de trabajo?", type: "MULTIPLE_CHOICE", required: true,
          options: ["Independiente", "Trabajo con ayudante", "Equipo (2-5)", "Empresa (6+)"],
          help: "Selecciona cómo trabajas la mayor parte del tiempo." },
        { id: "P0.3", text: "¿Cuál es tu zona principal de trabajo?", type: "MULTIPLE_CHOICE", required: true,
          options: ["Punta Cana/Bávaro", "Verón", "Cap Cana", "Otra"],
          help: "Marca donde haces la mayoría de servicios." },
        { id: "P0.4", text: "¿Cuántos años de experiencia tienes?", type: "MULTIPLE_CHOICE", required: true,
          options: ["0-2 años", "3-5 años", "6-10 años", "10+ años"],
          help: "Aproximado está bien." },
        { id: "P0.5", text: "¿Cuál es tu disponibilidad típica?", type: "MULTIPLE_CHOICE", required: true,
          options: ["Solo mañanas", "Solo tardes", "Día completo", "Fines de semana", "Variable"],
          help: "Elige la opción que sea cierta 3+ días a la semana." }
      ]
    },
    {
      title: "Capacidad y Tiempos",
      questions: [
        { id: "P1.1", text: "¿Tienes semanas donde te faltan trabajos para llenar tu agenda?", type: "YES_NO", required: true,
          help: "Piensa en las últimas 4 semanas." },
        { id: "P1.2", text: "¿Tienes al menos 2 espacios libres de 2 horas en una semana típica?", type: "YES_NO", required: true,
          help: "Un 'espacio libre' = bloque donde podrías aceptar un servicio nuevo." },
        { id: "P1.3", text: "En una semana típica, tu agenda está...", type: "MULTIPLE_CHOICE", required: true,
          options: ["0-25% llena", "26-50% llena", "51-75% llena", "76-100% llena"],
          help: "Estimación rápida; no hace falta exactitud." }
      ]
    },
    {
      title: "Puntualidad y Reprogramación",
      questions: [
        { id: "P2.1", text: "¿Puedes comprometerte a llegar dentro de una ventana de 2 horas en la mayoría de citas?", type: "YES_NO", required: true,
          help: "Si tu respuesta depende del día, responde por tu semana típica." },
        { id: "P2.2", text: "En tu semana típica, ¿reprogramas citas más de 1 vez por semana?", type: "YES_NO", required: true,
          help: "Reprogramar incluye mover hora o día por cualquier motivo." },
        { id: "P2.3", text: "¿Confirmas hora estimada (ETA) con el cliente antes de salir hacia el servicio?", type: "YES_NO", required: true,
          help: "Confirmar ETA puede ser un mensaje corto." },
        { id: "P2.4", text: "Si te piden confirmar 'en camino' y 'en sitio', ¿lo podrías hacer en cada servicio?", type: "YES_NO", required: true,
          help: "No es un app; imagina un WhatsApp rápido." }
      ]
    },
    {
      title: "Comunicación Operativa",
      questions: [
        { id: "P3.1", text: "¿Respondes mensajes operativos durante horario de trabajo en menos de 10 minutos la mayoría de veces?", type: "YES_NO", required: true,
          help: "Operativo = coordinar llegada, confirmar, pedir info." },
        { id: "P3.2", text: "¿Te sientes cómodo comunicándote de forma 'más formal/profesional' con clientes?", type: "YES_NO", required: true,
          help: "Formal = claro, respetuoso, sin discusiones." }
      ]
    },
    {
      title: "Tecnología Mínima",
      questions: [
        { id: "P4.1", text: "¿Tienes smartphone con cámara funcional y datos móviles la mayoría del tiempo?", type: "YES_NO", required: true,
          help: "No tiene que ser último modelo." },
        { id: "P4.2", text: "¿Usas WhatsApp para coordinar la mayoría de tus servicios hoy?", type: "YES_NO", required: true,
          help: "Coordinar = agendar, confirmar, actualizar." },
        { id: "P4.3", text: "¿Podrías enviar 3-5 fotos por servicio (antes/después/evidencia) de forma consistente?", type: "YES_NO", required: true,
          help: "Consistente = en 8 de cada 10 servicios." }
      ]
    },
    {
      title: "Calidad y Estandarización",
      questions: [
        { id: "P5.1", text: "¿Seguirías un checklist simple en cada servicio si te toma menos de 3 minutos?", type: "YES_NO", required: true,
          help: "Checklist simple = 6-10 puntos, marcar y listo." },
        { id: "P5.2", text: "¿Aceptarías que se revise tu trabajo (QA) de forma aleatoria en algunos servicios?", type: "YES_NO", required: true,
          help: "Revisión = fotos + checklist, no necesariamente visita." },
        { id: "P5.3", text: "Si un fallo fue por mala ejecución, ¿harías retrabajo sin costo?", type: "YES_NO", required: true,
          help: "No incluye 'nueva falla'; solo el mismo error." },
        { id: "P5.4", text: "¿Entiendes y aceptarías diferenciar entre 'retrabajo' vs 'nueva falla' como dos casos distintos?", type: "YES_NO", required: true,
          help: "Retrabajo = mismo problema por ejecución. Nueva falla = otro problema distinto." }
      ]
    },
    {
      title: "Confianza y Seguridad",
      questions: [
        { id: "P6.1", text: "¿Aceptarías verificación de antecedentes como requisito para entrar a residenciales?", type: "YES_NO", required: true,
          help: "Verificación = proceso estándar; no implica juicio, solo requisito." },
        { id: "P6.2", text: "¿Estarías dispuesto a usar identificación visible (badge/camisa) durante servicios?", type: "YES_NO", required: true,
          help: "Visible = que el cliente te identifique fácilmente." }
      ]
    },
    {
      title: "Modelo de Pago",
      questions: [
        { id: "P7.1", text: "¿Aceptarías que el cliente pague a la empresa y tú recibas el pago después del cierre?", type: "YES_NO", required: true,
          help: "Después del cierre = cuando el servicio queda confirmado como completado." },
        { id: "P7.2", text: "¿Puedes operar si el pago se procesa en un ciclo de 7-15 días?", type: "YES_NO", required: true,
          help: "Operar = cubrir tu gasolina, materiales menores, etc." }
      ]
    },
    {
      title: "Materiales e Insumos",
      questions: [
        { id: "P8.1", text: "En tu operación, normalmente ¿quién compra los materiales?", type: "MULTIPLE_CHOICE", required: true,
          options: ["Yo", "El cliente", "Depende del caso"],
          help: "Elige la opción más frecuente." },
        { id: "P8.2", text: "¿Preferirías que otra parte gestione la compra de materiales para que tú no adelantes dinero?", type: "YES_NO", required: true,
          help: "Gestionar = comprar/entregar, no necesariamente escoger marca." }
      ]
    },
    {
      title: "Relación Contractual",
      questions: [
        { id: "P9.1", text: "Si colaboraras con una empresa, ¿preferirías seguir como contratista independiente (no empleado)?", type: "YES_NO", required: true,
          help: "Contratista = tú manejas tus impuestos/horario en parte." },
        { id: "P9.2", text: "¿Aceptarías un contrato con reglas claras de cumplimiento (por ejemplo puntualidad y retrabajos)?", type: "YES_NO", required: true,
          help: "Reglas claras = definidas antes, sin sorpresas." },
        { id: "P9.3", text: "¿Aceptarías no negociar directamente con clientes 'asignados' durante y después del servicio?", type: "YES_NO", required: true,
          help: "No negociar = no hacer trato por fuera con ese cliente." },
        { id: "P9.4", text: "¿Necesitas mantener tus clientes propios mientras colaboras con una empresa?", type: "YES_NO", required: true,
          help: "Clientes propios = tu cartera fuera de la empresa." }
      ]
    },
    {
      title: "Cobertura y Backups",
      questions: [
        { id: "P10.1", text: "¿Te desplazarías dentro de la zona del piloto sin exigir cargos de traslado 'altos'?", type: "YES_NO", required: true,
          help: "Según tu criterio; si dicen No solo marca No y seguimos." },
        { id: "P10.2", text: "¿Conoces a al menos 1 técnico de confianza que podría cubrirte como backup si tú no puedes?", type: "YES_NO", required: true,
          help: "Backup = alguien que tú recomendarías sin miedo." }
      ]
    },
    {
      title: "Preguntas de Validación (Disconfirming)",
      questions: [
        { id: "A1", text: "¿Prefieres trabajos grandes/instalaciones y evitas trabajos pequeños/repetitivos?", type: "YES_NO", required: true,
          help: "No estamos valorando nada; es solo preferencia." },
        { id: "A2", text: "¿Te incomoda que un tercero supervise documentación/fotos de tu trabajo?", type: "YES_NO", required: true,
          help: "Supervisar = revisar que exista evidencia, no criticar tu técnica." },
        { id: "A3", text: "¿Has tenido conflictos frecuentes con clientes por 'culpa' o 'responsabilidad' del fallo?", type: "YES_NO", required: true,
          help: "Frecuente = 2+ veces en los últimos 2 meses." },
        { id: "A4", text: "¿Evitas trabajos en residenciales por políticas/seguridad/entrada?", type: "YES_NO", required: true,
          help: "Evitar = rechazas esos trabajos cuando puedes." },
        { id: "A5", text: "¿Te ha pasado que aceptas un trabajo y luego lo cancelas por falta de herramientas/piezas?", type: "YES_NO", required: true,
          help: "Esto es normal; queremos entender la frecuencia, no juzgar." }
      ]
    },
    {
      title: "Información Adicional",
      questions: [
        { id: "backup_nombre", text: "Nombre del técnico backup (si aplica)", type: "INPUT_TEXT", required: false,
          help: "Si conoce a alguien de confianza, anota su nombre aquí" },
        { id: "notas", text: "Notas adicionales de la entrevista", type: "TEXTAREA", required: false,
          help: "Cualquier observación relevante durante la conversación" }
      ]
    }
  ]
};

// Convertir YES_NO a MULTIPLE_CHOICE con Sí/No
function createYesNoBlock(question, groupUuid) {
  return {
    uuid: generateUUID(),
    type: "MULTIPLE_CHOICE",
    groupUuid: groupUuid,
    groupType: "MULTIPLE_CHOICE",
    payload: {
      isRequired: question.required,
      options: [
        { uuid: generateUUID(), text: "Sí" },
        { uuid: generateUUID(), text: "No" }
      ]
    }
  };
}

// Crear bloque de opción múltiple
function createMultipleChoiceBlock(question, groupUuid) {
  return {
    uuid: generateUUID(),
    type: "MULTIPLE_CHOICE",
    groupUuid: groupUuid,
    groupType: "MULTIPLE_CHOICE",
    payload: {
      isRequired: question.required,
      options: question.options.map(opt => ({
        uuid: generateUUID(),
        text: opt
      }))
    }
  };
}

// Crear bloque de texto
function createTextBlock(question, groupUuid) {
  const typeMap = {
    'INPUT_TEXT': 'INPUT_TEXT',
    'INPUT_PHONE_NUMBER': 'INPUT_PHONE_NUMBER',
    'INPUT_DATE': 'INPUT_DATE',
    'TEXTAREA': 'TEXTAREA'
  };

  return {
    uuid: generateUUID(),
    type: typeMap[question.type] || 'INPUT_TEXT',
    groupUuid: groupUuid,
    groupType: typeMap[question.type] || 'INPUT_TEXT',
    payload: {
      isRequired: question.required,
      placeholder: ""
    }
  };
}

// Crear bloque de título/pregunta
function createTitleBlock(text, groupUuid, description = null) {
  const block = {
    uuid: generateUUID(),
    type: "TITLE",
    groupUuid: groupUuid,
    groupType: "TEXT",
    payload: {
      html: text,
      title: text
    }
  };

  if (description) {
    block.payload.description = description;
  }

  return block;
}

// Crear bloque de sección
function createSectionBlock(title) {
  const groupUuid = generateUUID();
  return {
    uuid: generateUUID(),
    type: "HEADING_2",
    groupUuid: groupUuid,
    groupType: "TEXT",
    payload: {
      html: title,
      title: title
    }
  };
}

// Generar todos los bloques del formulario
function generateFormBlocks() {
  const blocks = [];

  // Título principal del formulario
  const titleGroupUuid = generateUUID();
  blocks.push({
    uuid: generateUUID(),
    type: "FORM_TITLE",
    groupUuid: titleGroupUuid,
    groupType: "TEXT",
    payload: {
      html: formStructure.title,
      title: formStructure.title,
      description: formStructure.description
    }
  });

  // Procesar cada sección
  for (const section of formStructure.sections) {
    // Agregar encabezado de sección
    blocks.push(createSectionBlock(section.title));

    // Agregar preguntas de la sección
    for (const question of section.questions) {
      const groupUuid = generateUUID();

      // Agregar título de la pregunta con ayuda
      blocks.push(createTitleBlock(question.text, groupUuid, question.help));

      // Agregar campo de respuesta según tipo
      if (question.type === 'YES_NO') {
        blocks.push(createYesNoBlock(question, groupUuid));
      } else if (question.type === 'MULTIPLE_CHOICE') {
        blocks.push(createMultipleChoiceBlock(question, groupUuid));
      } else {
        blocks.push(createTextBlock(question, groupUuid));
      }
    }
  }

  return blocks;
}

// Crear el formulario via API
async function createForm() {
  const blocks = generateFormBlocks();

  console.log('Creando formulario con', blocks.length, 'bloques...\n');

  try {
    // Paso 1: Crear formulario vacío
    const createResponse = await fetch(`${TALLY_API_URL}/forms`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TALLY_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: 'DRAFT',
        blocks: blocks
      })
    });

    if (!createResponse.ok) {
      const error = await createResponse.text();
      throw new Error(`Error creando formulario: ${createResponse.status} - ${error}`);
    }

    const form = await createResponse.json();

    console.log('========================================');
    console.log('FORMULARIO CREADO EXITOSAMENTE');
    console.log('========================================');
    console.log('ID:', form.id);
    console.log('URL Editor:', `https://tally.so/forms/${form.id}/edit`);
    console.log('URL Público:', `https://tally.so/r/${form.id}`);
    console.log('========================================');
    console.log('\nPróximos pasos:');
    console.log('1. Abre el editor para revisar el formulario');
    console.log('2. Configura la integración con Google Sheets');
    console.log('3. Publica el formulario cuando esté listo');

    return form;

  } catch (error) {
    console.error('Error:', error.message);

    if (error.message.includes('401')) {
      console.log('\n** Tu API token no es válido o ha expirado **');
      console.log('Obtén uno nuevo en: https://tally.so/settings/api');
    }

    process.exit(1);
  }
}

// Ejecutar
createForm();
