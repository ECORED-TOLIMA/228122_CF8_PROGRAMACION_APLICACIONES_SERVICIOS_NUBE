<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos relacionados con la ingeniería y gestión de requisitos, los fundamentos de redes y sistemas operativos, la computación en la nube, la virtualización, los contenedores y la gestión de la infraestructura tecnológica.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la ingeniería de requisitos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar la interfaz gráfica del sistema.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar, analizar y documentar las necesidades que debe satisfacer una solución de <em>software</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Configurar servidores virtuales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar bases de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes corresponde a un requisito no funcional?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registrar usuarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generar reportes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Consultar información.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Garantizar tiempos adecuados de respuesta del sistema.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué técnica permite obtener información directamente de los usuarios mediante preguntas estructuradas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Observación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Entrevista.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Prototipado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Priorización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: 'La priorización de requisitos permite:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar cuáles requisitos deben desarrollarse primero según su importancia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Crear máquinas virtuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Instalar un sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Configurar protocolos de red.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'La especificación de requisitos tiene como finalidad:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Instalar aplicaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Configurar servidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Describir de manera clara y verificable las necesidades del sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseñar redes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué ventaja ofrece la documentación de requisitos?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce el almacenamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elimina las pruebas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituye la programación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Facilita la trazabilidad y el control de cambios.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la función principal de un sistema operativo de red?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear aplicaciones móviles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Administrar recursos y servicios compartidos entre equipos conectados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Editar documentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar páginas <em>web</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes corresponde a un componente físico de una red?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Switch</em>.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Dirección IP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Protocolo HTTP.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'DNS.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué característica distingue a la computación en la nube?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo funciona en redes locales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Requiere instalar todos los recursos físicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permite acceder a recursos tecnológicos a través de Internet.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo puede utilizarse en grandes empresas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál modelo de servicio proporciona infraestructura virtualizada como servidores y almacenamiento?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'IaaS',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'PaaS',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'SaaS',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'FaaS',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Cuál es un modelo de despliegue de la nube?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Docker.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Kubernetes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nube híbrida.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Hipervisor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: 'La virtualización permite:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la necesidad de sistemas operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ejecutar múltiples entornos virtuales sobre un mismo <em>hardware</em> físico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir Internet.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear únicamente aplicaciones <em>web</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué característica distingue a los contenedores?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Requieren un sistema operativo completo para cada instancia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo pueden ejecutarse en la nube pública.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comparten el sistema operativo del anfitrión y son ligeros.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Funcionan únicamente con bases de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué elemento almacena todo lo necesario para crear un contenedor?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Hipervisor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Volumen.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nodo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Imagen.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Cuál es una función de los servicios de red?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar la comunicación y el intercambio de recursos entre dispositivos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar el sistema operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear documentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar bases de datos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué representa un acuerdo de nivel de servicio (SLA)?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un protocolo de Internet.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una máquina virtual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un compromiso sobre la calidad y disponibilidad de un servicio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un sistema operativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál protocolo se utiliza principalmente para acceder a páginas <em>web</em>?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'SMTP',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'HTTP/HTTPS',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'FTP',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'DHCP',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué actividad hace parte de la gestión operativa de la infraestructura?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear requisitos funcionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elaborar diagramas UML.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Supervisar el funcionamiento de los recursos tecnológicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Diseñar interfaces gráficas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: 'El aprovisionamiento de servicios en la nube consiste en:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reparar equipos físicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Configurar y habilitar los recursos tecnológicos requeridos por los usuarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Desarrollar algoritmos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Crear bases de datos relacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué aspecto debe considerarse durante la contratación de servicios tecnológicos?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El color de la interfaz del proveedor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El número de oficinas del proveedor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La publicidad del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La disponibilidad, seguridad y necesidades de la organización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Ha demostrado comprender los fundamentos de la infraestructura tecnológica y los servicios en la nube, fortaleciendo las competencias para afrontar los retos de los entornos digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
