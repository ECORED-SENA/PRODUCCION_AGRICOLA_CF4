export default {
  global: {
    componenteFormativo: 'Auditorías',
    descripcionCurso:
      'Con este componente formativo se pretende proporcionar una visión general de las etapas de auditoría para asegurar la calidad en la implementación de Buenas Prácticas Agrícolas. En este se precisan los tipos de auditoría y la metodología para su aplicación.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Auditorías',
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
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Claudia Patricia Sánchez Peñaranda',
        cargo: 'Instructura',
        centro: 'Agrosena',
      },
      {
        nombre: 'Fredy Orlando Ibáñez Morales ',
        cargo: 'Instructor',
        centro: 'Agroambiental',
      },
      {
        nombre: 'Yanet Bolaños Botina',
        cargo: 'Instructura',
        centro: 'Agroambiental',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
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
        nombre: [
          'Anllelo Andres Reina Montañez',
          'Camilo Andrés Villamizar Lizcano',
          'Gilberto Junior Rodríguez Rodríguez',
          'John Jairo Arciniegas González',
          'María Carolina Tamayo López',
          'Wilson Andrés Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Diseño web y Producción audiovisual',
      },
      {
        nombre: 'Sergio Omar Camacho Orduz',
        cargo: 'Desarrollo front-end',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios',
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
        'Persona que provee conocimiento específico o experticia al equipo auditor. <br> Persona que aporta conocimientos o experiencia específica al equipo auditor (no actúa como auditor).',
    },
    {
      termino: 'Evidencia de auditoría',
      significado:
        'Registros, declaraciones de hechos o cualquier otra información que son pertinentes para los criterios de la auditoría y que son verificables.',
    },
    {
      termino: 'Evidencia objetiva',
      significado:
        'Datos que soportan la existencia o veracidad de algo.<br>Nota: puede ser obtenida por medio de observación, medición, prueba o por otros medios.<br>Nota: para el propósito de la auditoría consiste generalmente en registros, declaraciones de hecho u otro tipo de información relevante para el criterio de la auditoría, y es verificable.',
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
        'Higuera, P., E., Ávila, C., P., González, M., L., Infante, G., L., & Cabrera, P., D. (2019).  Plan de auditoría para el programa de auditoría interna plan HACCP de la compañía Productos Alimenticios San Simeón. [Trabajo presentado como requisito para optar el título de Ingeniero de Alimentos, Universidad Nacional Abierta y a Distancia - UNAD]. Repositorio institucional UNAD.]',
      tipo: 'Otro',
      link: 'downloads/dgcabrerap.pdf',
    },
    {
      texto:
        'ISO 2018. Norma Internacional ISO 19011: 2018. Directrices para la auditoría de los sistemas de gestión. ',
      tipo: 'Otro',
      link: 'downloads/norma-iso-19011-2018.pdf',
    },
  ],
}
