export default {
  global: {
    componenteFormativo: 'Auditorías',
    descripcionCurso:
      'Con este componente formativo se pretende proporcionar una visión general de las etapas de auditoría para asegurar la calidad en la implementación de Buenas Prácticas Agrícolas. En este se precisan los tipos de auditoría y la metodología para su aplicación.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Auditoría',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de auditoría',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de auditorías',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Metodología para su realización',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Aplicación de la auditoría en la empresa',
            hash: 't_1_4',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      // {
      //   icono: 'fas fa-download',
      //   titulo: 'Descargar material',
      //   download: 'downloads/material.zip',
      // },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Tania Yaneth Ramírez Benítez',
        cargo: 'Soporte organizacional',
        centro: 'CENTRO DE COMERCIO Y SERVICIO',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Revisora de estilo',
        centro: 'Centro Industrial Del Diseño Y La Manufactura',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: ['Angelo Andres Reina Montañez', 'Eulises Orduz Amezquita'],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Sergio Omar Camacho',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'ISO 2018. Norma Internacional ISO 19011: 2018. Directrices para la auditoría de los sistemas de gestión',
      link:
        'https://www.cecep.edu.co/documentos/calidad/norma-iso-19011-2018.pdf',
    },
    {
      referencia:
        'Vargas, O. G., y Fundación Chile. (2000). Manual de criterios comunes para el control de gestión en empresas agropecuarias. Programa de Gestión Agropecuaria. Fundación Chile.',
    },
  ],
  glosario: [
    {
      termino: 'Auditor',
      significado: 'Persona que lleva a cabo una auditoría.',
    },
    {
      termino: 'Cliente de auditoría',
      significado: 'Organización o persona que solicita una auditoría.',
    },
    {
      termino: 'Criterios de auditoría',
      significado:
        'Conjunto de requerimientos usados como referencia frente al cual se compara la evidencia objetiva.',
    },
    {
      termino: 'Desempeño',
      significado: 'Resultado medible. ',
    },
    {
      termino: 'Eficacia ',
      significado:
        'Grado en el que las actividades planificadas son realizadas y se logran los resultados planificados.',
    },
    {
      termino: 'Experto técnico',
      significado:
        'Persona que provee conocimiento específico o experticia al equipo auditor. ',
    },
    {
      termino: 'Evidencia de auditoría',
      significado:
        'Registros, declaraciones de hechos o cualquier otra información que son pertinentes para los criterios de la auditoría y que son verificables.',
    },
    {
      termino: 'Evidencia objetiva',
      significado:
        'Datos que soportan la existencia o veracidad de algo.\n\nNota: puede ser obtenida por medio de observación, medición, prueba o por otros medios.\n\nNota: para el propósito de la auditoría consiste generalmente en registros, declaraciones de hecho u otro tipo de información relevante para el criterio de la auditoría, y es verificable.',
    },
    {
      termino: 'Experto técnico',
      significado:
        'Persona que aporta conocimientos o experiencia específica al equipo auditor (no actúa como auditor).',
    },
    {
      termino: 'Hallazgos de la auditoría',
      significado:
        'Resultados de la evaluación de la evidencia de la auditoría recopilada frente a los criterios de la auditoría.',
    },
    {
      termino: 'Observador',
      significado: 'Persona que acompaña al equipo auditor, pero no audita.',
    },
    {
      termino: 'Procesos',
      significado:
        'Conjunto de actividades interrelacionadas o interactuantes que usan entradas para entregar un resultado previsto.',
    },
    {
      termino: 'Registro documental',
      significado:
        'Información escrita que proporciona evidencia objetiva de las actividades desempeñadas en el predio.',
    },
    {
      termino: 'Requisito',
      significado:
        'Necesidad o expectativa que es declarada generalmente implícita u obligatoria.',
    },
    {
      termino: 'Sistema de gestión',
      significado:
        'Conjunto de resultados en el que los elementos interrelacionados o interactuantes de una organización establecen políticas, objetivos y procesos para lograr objetivos.',
    },
  ],
  complementario: [
    {
      texto:
        'Higuera, P., E., Ávila, C., P., González, M., L., Infante, G., L., & Cabrera, P., D. (2019).  Plan de auditoria para el programa de auditoría interna plan HACCP de la compañía Productos Alimenticios San Simeón. ',
      tipo: 'Otro',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/27817/dgcabrerap.pdf?sequence=1&isAllowed=y',
    },
    {
      texto:
        'Trabajo presentado como requisito para optar el título de Ingeniero de Alimentos, Universidad Nacional Abierta y a Distancia - UNAD]. Repositorio institucional UNAD. ',
      tipo: 'Otro',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/27817/dgcabrerap.pdf?sequence=1&isAllowed=y',
    },
    {
      texto:
        'ISO 2018. Norma Internacional ISO 19011: 2018. Directrices para la auditoría de los sistemas de gestión. ',
      tipo: 'Otro',
      link:
        'https://www.cecep.edu.co/documentos/calidad/norma-iso-19011-2018.pdf',
    },
  ],
}
