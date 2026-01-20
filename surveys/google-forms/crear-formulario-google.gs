/**
 * Google Apps Script para crear el formulario de Entrevista a Técnicos
 *
 * INSTRUCCIONES:
 * 1. Ve a https://script.google.com
 * 2. Crea un nuevo proyecto
 * 3. Pega todo este código
 * 4. Ejecuta la función crearFormularioEntrevistaTecnicos()
 * 5. Autoriza los permisos cuando te lo pida
 * 6. El formulario se creará en tu Google Drive
 *
 * El script crea automáticamente todas las 44 preguntas del framework.
 */

function crearFormularioEntrevistaTecnicos() {
  // Crear el formulario
  const form = FormApp.create('Entrevista Profunda a Técnicos - Piloto Maroa');

  form.setDescription(
    'Esta entrevista nos ayuda a entender cómo trabajas y qué necesitas para ' +
    'colaborar con nosotros. Toma aproximadamente 10-15 minutos.\n\n' +
    'Todas las respuestas son confidenciales.'
  );

  form.setConfirmationMessage('¡Gracias por tu tiempo! Nos pondremos en contacto pronto.');
  form.setShowLinkToRespondAgain(false);

  // ============================================
  // SECCIÓN: Datos de la Entrevista
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Datos de la Entrevista')
    .setHelpText('Información para identificar esta entrevista');

  form.addTextItem()
    .setTitle('Nombre de quien entrevista')
    .setHelpText('Tu nombre como entrevistador/a')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Nombre del técnico')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Teléfono del técnico')
    .setRequired(true);

  form.addDateItem()
    .setTitle('Fecha de la entrevista')
    .setRequired(true);

  // ============================================
  // SECCIÓN: Datos de Perfil
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Datos de Perfil')
    .setHelpText('Información básica sobre el técnico');

  form.addMultipleChoiceItem()
    .setTitle('P0.1 - ¿Cuál es tu categoría principal de trabajo?')
    .setHelpText('Elige la que más te genera ingresos o más haces en el mes.')
    .setChoiceValues(['A/C', 'Electricidad', 'Plomería', 'Electrodomésticos', 'Handyman', 'Otros'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P0.2 - ¿Cuál es tu modalidad actual de trabajo?')
    .setHelpText('Selecciona cómo trabajas la mayor parte del tiempo.')
    .setChoiceValues(['Independiente', 'Trabajo con ayudante', 'Equipo (2-5)', 'Empresa (6+)'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P0.3 - ¿Cuál es tu zona principal de trabajo?')
    .setHelpText('Marca donde haces la mayoría de servicios.')
    .setChoiceValues(['Punta Cana/Bávaro', 'Verón', 'Cap Cana', 'Otra'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P0.4 - ¿Cuántos años de experiencia tienes?')
    .setHelpText('Aproximado está bien.')
    .setChoiceValues(['0-2 años', '3-5 años', '6-10 años', '10+ años'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P0.5 - ¿Cuál es tu disponibilidad típica?')
    .setHelpText('Elige la opción que sea cierta 3+ días a la semana.')
    .setChoiceValues(['Solo mañanas', 'Solo tardes', 'Día completo', 'Fines de semana', 'Variable'])
    .setRequired(true);

  // ============================================
  // SECCIÓN: Capacidad y Tiempos
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Capacidad y Tiempos')
    .setHelpText('Entender tu disponibilidad real');

  form.addMultipleChoiceItem()
    .setTitle('P1.1 - ¿Tienes semanas donde te faltan trabajos para llenar tu agenda?')
    .setHelpText('Piensa en las últimas 4 semanas.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P1.2 - ¿Tienes al menos 2 espacios libres de 2 horas en una semana típica?')
    .setHelpText("Un 'espacio libre' = bloque donde podrías aceptar un servicio nuevo.")
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P1.3 - En una semana típica, tu agenda está...')
    .setHelpText('Estimación rápida; no hace falta exactitud.')
    .setChoiceValues(['0-25% llena', '26-50% llena', '51-75% llena', '76-100% llena'])
    .setRequired(true);

  // ============================================
  // SECCIÓN: Puntualidad y Reprogramación
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Puntualidad y Reprogramación')
    .setHelpText('Sobre cumplir horarios acordados');

  form.addMultipleChoiceItem()
    .setTitle('P2.1 - ¿Puedes comprometerte a llegar dentro de una ventana de 2 horas en la mayoría de citas?')
    .setHelpText('Si tu respuesta depende del día, responde por tu semana típica.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P2.2 - En tu semana típica, ¿reprogramas citas más de 1 vez por semana?')
    .setHelpText('Reprogramar incluye mover hora o día por cualquier motivo.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P2.3 - ¿Confirmas hora estimada (ETA) con el cliente antes de salir hacia el servicio?')
    .setHelpText('Confirmar ETA puede ser un mensaje corto.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("P2.4 - Si te piden confirmar 'en camino' y 'en sitio', ¿lo podrías hacer en cada servicio?")
    .setHelpText('No es un app; imagina un WhatsApp rápido.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  // ============================================
  // SECCIÓN: Comunicación Operativa
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Comunicación Operativa')
    .setHelpText('Cómo te comunicas durante el trabajo');

  form.addMultipleChoiceItem()
    .setTitle('P3.1 - ¿Respondes mensajes operativos durante horario de trabajo en menos de 10 minutos la mayoría de veces?')
    .setHelpText('Operativo = coordinar llegada, confirmar, pedir info.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("P3.2 - ¿Te sientes cómodo comunicándote de forma 'más formal/profesional' con clientes?")
    .setHelpText('Formal = claro, respetuoso, sin discusiones.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  // ============================================
  // SECCIÓN: Tecnología Mínima
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Tecnología Mínima')
    .setHelpText('Herramientas que usas');

  form.addMultipleChoiceItem()
    .setTitle('P4.1 - ¿Tienes smartphone con cámara funcional y datos móviles la mayoría del tiempo?')
    .setHelpText('No tiene que ser último modelo.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P4.2 - ¿Usas WhatsApp para coordinar la mayoría de tus servicios hoy?')
    .setHelpText('Coordinar = agendar, confirmar, actualizar.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P4.3 - ¿Podrías enviar 3-5 fotos por servicio (antes/después/evidencia) de forma consistente?')
    .setHelpText('Consistente = en 8 de cada 10 servicios.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  // ============================================
  // SECCIÓN: Calidad y Estandarización
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Calidad y Estandarización')
    .setHelpText('Disposición a seguir procesos');

  form.addMultipleChoiceItem()
    .setTitle('P5.1 - ¿Seguirías un checklist simple en cada servicio si te toma menos de 3 minutos?')
    .setHelpText('Checklist simple = 6-10 puntos, marcar y listo.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P5.2 - ¿Aceptarías que se revise tu trabajo (QA) de forma aleatoria en algunos servicios?')
    .setHelpText('Revisión = fotos + checklist, no necesariamente visita.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P5.3 - Si un fallo fue por mala ejecución, ¿harías retrabajo sin costo?')
    .setHelpText("No incluye 'nueva falla'; solo el mismo error.")
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("P5.4 - ¿Entiendes y aceptarías diferenciar entre 'retrabajo' vs 'nueva falla' como dos casos distintos?")
    .setHelpText('Retrabajo = mismo problema por ejecución. Nueva falla = otro problema distinto.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  // ============================================
  // SECCIÓN: Confianza y Seguridad
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Confianza y Seguridad')
    .setHelpText('Requisitos de acceso a residenciales');

  form.addMultipleChoiceItem()
    .setTitle('P6.1 - ¿Aceptarías verificación de antecedentes como requisito para entrar a residenciales?')
    .setHelpText('Verificación = proceso estándar; no implica juicio, solo requisito.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P6.2 - ¿Estarías dispuesto a usar identificación visible (badge/camisa) durante servicios?')
    .setHelpText('Visible = que el cliente te identifique fácilmente.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  // ============================================
  // SECCIÓN: Modelo de Pago
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Modelo de Pago')
    .setHelpText('Cómo funcionarían los pagos');

  form.addMultipleChoiceItem()
    .setTitle('P7.1 - ¿Aceptarías que el cliente pague a la empresa y tú recibas el pago después del cierre?')
    .setHelpText('Después del cierre = cuando el servicio queda confirmado como completado.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P7.2 - ¿Puedes operar si el pago se procesa en un ciclo de 7-15 días?')
    .setHelpText('Operar = cubrir tu gasolina, materiales menores, etc.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  // ============================================
  // SECCIÓN: Materiales e Insumos
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Materiales e Insumos')
    .setHelpText('Cómo manejas los materiales');

  form.addMultipleChoiceItem()
    .setTitle('P8.1 - En tu operación, normalmente ¿quién compra los materiales?')
    .setHelpText('Elige la opción más frecuente.')
    .setChoiceValues(['Yo', 'El cliente', 'Depende del caso'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P8.2 - ¿Preferirías que otra parte gestione la compra de materiales para que tú no adelantes dinero?')
    .setHelpText('Gestionar = comprar/entregar, no necesariamente escoger marca.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  // ============================================
  // SECCIÓN: Relación Contractual
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Relación Contractual')
    .setHelpText('Tipo de relación laboral');

  form.addMultipleChoiceItem()
    .setTitle('P9.1 - Si colaboraras con una empresa, ¿preferirías seguir como contratista independiente (no empleado)?')
    .setHelpText('Contratista = tú manejas tus impuestos/horario en parte.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P9.2 - ¿Aceptarías un contrato con reglas claras de cumplimiento (por ejemplo puntualidad y retrabajos)?')
    .setHelpText('Reglas claras = definidas antes, sin sorpresas.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("P9.3 - ¿Aceptarías no negociar directamente con clientes 'asignados' durante y después del servicio?")
    .setHelpText('No negociar = no hacer trato por fuera con ese cliente.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P9.4 - ¿Necesitas mantener tus clientes propios mientras colaboras con una empresa?')
    .setHelpText('Clientes propios = tu cartera fuera de la empresa.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  // ============================================
  // SECCIÓN: Cobertura y Backups
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Cobertura y Backups')
    .setHelpText('Zona de trabajo y respaldo');

  form.addMultipleChoiceItem()
    .setTitle("P10.1 - ¿Te desplazarías dentro de la zona del piloto sin exigir cargos de traslado 'altos'?")
    .setHelpText('Según tu criterio; si dicen No solo marca No y seguimos.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('P10.2 - ¿Conoces a al menos 1 técnico de confianza que podría cubrirte como backup si tú no puedes?')
    .setHelpText('Backup = alguien que tú recomendarías sin miedo.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  // ============================================
  // SECCIÓN: Preguntas de Validación (Disconfirming)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Preguntas de Validación')
    .setHelpText('Estas preguntas nos ayudan a entender mejor tu situación - no hay respuestas correctas o incorrectas');

  form.addMultipleChoiceItem()
    .setTitle('A1 - ¿Prefieres trabajos grandes/instalaciones y evitas trabajos pequeños/repetitivos?')
    .setHelpText('No estamos valorando nada; es solo preferencia.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('A2 - ¿Te incomoda que un tercero supervise documentación/fotos de tu trabajo?')
    .setHelpText('Supervisar = revisar que exista evidencia, no criticar tu técnica.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("A3 - ¿Has tenido conflictos frecuentes con clientes por 'culpa' o 'responsabilidad' del fallo?")
    .setHelpText('Frecuente = 2+ veces en los últimos 2 meses.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('A4 - ¿Evitas trabajos en residenciales por políticas/seguridad/entrada?')
    .setHelpText('Evitar = rechazas esos trabajos cuando puedes.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('A5 - ¿Te ha pasado que aceptas un trabajo y luego lo cancelas por falta de herramientas/piezas?')
    .setHelpText('Esto es normal; queremos entender la frecuencia, no juzgar.')
    .setChoiceValues(['Sí', 'No'])
    .setRequired(true);

  // ============================================
  // SECCIÓN: Información Adicional
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Información Adicional')
    .setHelpText('Datos finales');

  form.addTextItem()
    .setTitle('Nombre del técnico backup (si aplica)')
    .setHelpText('Si conoce a alguien de confianza, anota su nombre aquí')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Notas adicionales de la entrevista')
    .setHelpText('Cualquier observación relevante durante la conversación')
    .setRequired(false);

  // ============================================
  // RESULTADO
  // ============================================
  const formUrl = form.getPublishedUrl();
  const editUrl = form.getEditUrl();

  Logger.log('========================================');
  Logger.log('FORMULARIO CREADO EXITOSAMENTE');
  Logger.log('========================================');
  Logger.log('URL para llenar: ' + formUrl);
  Logger.log('URL para editar: ' + editUrl);
  Logger.log('========================================');
  Logger.log('');
  Logger.log('Próximos pasos:');
  Logger.log('1. Abre el enlace de edición para revisar');
  Logger.log('2. Ve a Respuestas > Crear hoja de cálculo');
  Logger.log('3. Comparte el enlace público con tu asistente');

  // Crear spreadsheet para respuestas
  const ss = SpreadsheetApp.create('Respuestas - Entrevista Técnicos Maroa');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  Logger.log('');
  Logger.log('Hoja de respuestas creada automáticamente:');
  Logger.log(ss.getUrl());

  return {
    formUrl: formUrl,
    editUrl: editUrl,
    spreadsheetUrl: ss.getUrl()
  };
}

/**
 * Función auxiliar para ver las URLs después de crear el formulario
 */
function verUrls() {
  const forms = DriveApp.getFilesByName('Entrevista Profunda a Técnicos - Piloto Maroa');
  while (forms.hasNext()) {
    const file = forms.next();
    const form = FormApp.openById(file.getId());
    Logger.log('Formulario encontrado:');
    Logger.log('- Nombre: ' + form.getTitle());
    Logger.log('- URL público: ' + form.getPublishedUrl());
    Logger.log('- URL edición: ' + form.getEditUrl());
    Logger.log('---');
  }
}
