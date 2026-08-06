export default {
  global: {
    Name: 'Infraestructura tecnológica y servicios en la nube',
    Description:
      'Este componente aborda los fundamentos de la infraestructura tecnológica y los servicios en la nube mediante el estudio de la ingeniería de requisitos, los sistemas operativos de red, la computación en la nube, los contenedores y los servicios de infraestructura. Estos conocimientos permiten comprender los procesos necesarios para el aprovisionamiento y despliegue de servicios y aplicaciones.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ingeniería y gestión de requisitos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y tipos de requisitos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Ingeniería de requisitos y sus fases',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Técnicas de análisis de requisitos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Priorización de requisitos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Especificación requisitos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Documentación de requisitos',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de redes y sistemas operativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sistemas operativos de red',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Distribuciones, versiones y licenciamiento',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Aplicaciones y servicios disponibles',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Componentes físicos y lógicos de una red',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Computación en la nube y virtualización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptos y características de <em>cloud computing</em>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Infraestructura tecnológica y requerimientos no funcionales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tipos de servicios en la nube',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Modelos de despliegue en la nube',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Virtualización y tipos de virtualización',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Plataformas de computación en la nube',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Contenedores y administración de recursos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Características de los contenedores',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Imágenes, volúmenes y enlaces',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Despliegue y gestión de imágenes',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Servicios de red y gestión de infraestructura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Conceptos de servicios de red',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Acuerdos de nivel de servicio y calidad del servicio',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Protocolos y servicios de red',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Gestión operativa de la infraestructura',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Aprovisionamiento de servicios en la nube',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Contratación de servicios tecnológicos',
            hash: 't_5_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acuerdo de nivel de servicio (SLA)',
      significado:
        'compromiso establecido entre un proveedor y un cliente que define las condiciones de calidad, disponibilidad y desempeño que debe cumplir un servicio.',
    },
    {
      termino: 'Computación en la nube',
      significado:
        'modelo que permite acceder a recursos tecnológicos, como servidores, almacenamiento y aplicaciones, a través de Internet bajo demanda.',
    },
    {
      termino: 'Contenedor',
      significado:
        'unidad de <em>software</em> que empaqueta una aplicación junto con sus dependencias para ejecutarla de forma consistente en diferentes entornos.',
    },
    {
      termino: 'Escalabilidad',
      significado:
        'capacidad de un sistema para aumentar o disminuir sus recursos según las necesidades de procesamiento, almacenamiento o usuarios.',
    },
    {
      termino: 'Especificación de requisitos',
      significado:
        'documento que describe de forma clara, completa y verificable las necesidades y características que debe cumplir una solución de <em>software</em>.',
    },
    {
      termino: 'Infraestructura tecnológica',
      significado:
        'conjunto de recursos físicos, lógicos y de comunicación que soportan la operación de aplicaciones y servicios informáticos.',
    },
    {
      termino: 'Ingeniería de requisitos',
      significado:
        'disciplina encargada de identificar, analizar, documentar, validar y gestionar las necesidades que debe satisfacer un sistema.',
    },
    {
      termino: 'Máquina virtual',
      significado:
        'entorno informático que emula el funcionamiento de un computador físico mediante recursos virtualizados.',
    },
    {
      termino: 'Plataforma de computación en la nube',
      significado:
        'entorno proporcionado por un proveedor que ofrece servicios y herramientas para desarrollar, implementar y administrar recursos tecnológicos en la nube.',
    },
    {
      termino: 'Protocolo de red',
      significado:
        'conjunto de reglas que permiten la comunicación e intercambio de información entre dispositivos conectados a una red.',
    },
    {
      termino: 'Requisito no funcional',
      significado:
        'característica que define atributos de calidad de un sistema, como rendimiento, seguridad, disponibilidad o escalabilidad.',
    },
    {
      termino: 'Servicios de red',
      significado:
        'funcionalidades que permiten la comunicación, el intercambio de información y el acceso a recursos compartidos dentro de una infraestructura tecnológica.',
    },
    {
      termino: 'Trazabilidad de requisitos',
      significado:
        'capacidad para seguir el ciclo de vida de un requisito desde su identificación hasta su implementación, validación y mantenimiento.',
    },
    {
      termino: 'Virtualización',
      significado:
        'tecnología que permite crear versiones virtuales de recursos físicos, como servidores, sistemas operativos, redes o almacenamiento, optimizando el uso de la infraestructura.',
    },
  ],
  referencias: [
    {
      referencia:
        'Mell, P., & Grance, T. (2011). <em>The NIST definition of cloud computing</em>. National Institute of Standards and Technology. https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf',
      link: 'https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2012). <em>Cloud computing synopsis and recommendations</em> (Special Publication 800-146). U.S. Department of Commerce.',
      link: '',
    },
    {
      referencia:
        'Pressman, R. S., & Maxim, B. R. (2020). <em>Ingeniería del software: Un enfoque práctico</em> (9.ª ed.). McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Sommerville, I. (2016). <em>Ingeniería de software</em> (10.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Stallings, W. (2018). <em>Sistemas operativos: Aspectos internos y principios de diseño</em> (9.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'Stallings, W. (2020). <em>Comunicaciones y redes de computadores</em> (11.ª ed.). Pearson.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
