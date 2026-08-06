<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Servicios de red y gestión de infraestructura
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-12.order-lg-2.order-2
        .row.mb-4
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t5/img02.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0(data-aos="fade-down") Las organizaciones dependen de infraestructuras tecnológicas capaces de proporcionar servicios confiables, seguros y disponibles para satisfacer las necesidades de usuarios, aplicaciones y procesos de negocio. En este contexto, los servicios de red permiten la comunicación entre dispositivos, el intercambio de información y el acceso a recursos compartidos, mientras que la gestión de la infraestructura contribuye a garantizar su correcto funcionamiento mediante actividades de administración, monitoreo, mantenimiento y aprovisionamiento.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En los entornos de computación en la nube, estos servicios adquieren un papel fundamental, ya que los recursos tecnológicos se suministran de forma dinámica y pueden adaptarse a las necesidades cambiantes de las organizaciones. Para ello, es necesario comprender los conceptos relacionados con los servicios de red, los acuerdos de nivel de servicio, los principales protocolos de comunicación, la gestión operativa de la infraestructura, el aprovisionamiento de recursos y los criterios básicos para la contratación de servicios tecnológicos.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img01.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") El estudio de estos aspectos permite comprender cómo se administran los recursos tecnológicos y cómo se garantiza la disponibilidad, el rendimiento y la continuidad de los servicios que soportan las aplicaciones y soluciones implementadas en la nube.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Conceptos de servicios de red
    p.mb-4(data-aos="fade-down") Los servicios de red son funciones que permiten a los dispositivos, aplicaciones y usuarios compartir información, acceder a recursos y establecer comunicación dentro de una infraestructura tecnológica. Estos servicios se ejecutan sobre servidores físicos o virtuales y proporcionan las capacidades necesarias para que los diferentes componentes de una red trabajen de manera coordinada.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-6.col-12.order-lg-1.order-2
        .cajon.C08.p-4.h-100.w-100
          p.mb-3(data-aos="fade-down") En entornos organizacionales y de computación en la nube, los servicios de red facilitan la conectividad entre equipos, el acceso a aplicaciones, la administración de recursos compartidos y el intercambio seguro de datos. Su funcionamiento depende de protocolos de comunicación que establecen las reglas para el envío, recepción y procesamiento de la información entre los diferentes dispositivos conectados.
          .tarjeta.tarjeta--blanca.px-4.py-1
            p.mb-0(data-aos="fade-down") Los servicios de red desempeñan funciones específicas dentro de una infraestructura tecnológica. Algunos permiten identificar dispositivos, otros asignan direcciones de red, facilitan el acceso a aplicaciones, administran el intercambio de archivos o soportan la comunicación mediante correo electrónico. De esta manera, cada servicio contribuye al funcionamiento integrado de la red y al acceso oportuno a los recursos disponibles.
      .col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img03.jpg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-6.col-12
        .tarjeta.tarjeta--C18.px-4.py-2
          p.mb-0.text-center(data-aos="fade-down") Características de los servicios de red
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.C08.p-4.h-100.w-100
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              p.mb-0 Facilitan la comunicación entre dispositivos y aplicaciones.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              p.mb-0 Permiten compartir recursos e información.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              p.mb-0 Favorecen la disponibilidad de los servicios tecnológicos.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              p.mb-0 Pueden ejecutarse sobre servidores físicos o virtuales.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              p.mb-0 Son fundamentales para el funcionamiento de los entornos de computación en la nube.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img04.svg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") A continuación, se presentan algunos de los servicios de red más utilizados y su propósito dentro de una infraestructura tecnológica:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 17.
          span Servicios de red y su función
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Servicio
                th(data-aos="fade-down")(style= "width: 70%") Función principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") DNS
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Traduce nombres de dominio en direcciones IP para facilitar la localización de los recursos en la red.
              tr
                td(data-aos="fade-down") DHCP
                td(data-aos="fade-down") Asigna automáticamente direcciones IP y otros parámetros de configuración a los dispositivos conectados.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Servicio <em>web</em>
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Permite el acceso a aplicaciones y sitios mediante navegadores <em>web</em>.
              tr
                td(data-aos="fade-down") Servicio de correo electrónico
                td(data-aos="fade-down") Gestiona el envío y la recepción de mensajes electrónicos.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Servicio de archivos
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Facilita el almacenamiento, acceso y uso compartido de información entre usuarios y equipos.
    p.mb-0(data-aos="fade-down") Los servicios de red constituyen un elemento esencial para el funcionamiento de las infraestructuras tecnológicas actuales, ya que permiten integrar dispositivos, aplicaciones y recursos de manera eficiente. Su adecuada administración favorece la disponibilidad, el rendimiento y la seguridad de las comunicaciones, aspectos que adquieren especial relevancia en los entornos de computación en la nube y en la prestación de servicios tecnológicos.
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Acuerdos de nivel de servicio y calidad del servicio
    p.mb-4(data-aos="fade-down") Los servicios tecnológicos requieren condiciones que garanticen su funcionamiento de manera confiable, eficiente y continua. Para ello, las organizaciones establecen mecanismos que permiten definir las características esperadas del servicio y verificar su desempeño durante la prestación. Entre estos mecanismos se encuentran los acuerdos de nivel de servicio (Service Level Agreement, SLA) y la calidad del servicio (Quality of Service, QoS), conceptos que contribuyen a asegurar que la infraestructura tecnológica responda a las necesidades de los usuarios y de la organización.
    .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t5/img05.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Un acuerdo de nivel de servicio <b>(SLA)</b> es un compromiso formal entre un proveedor y un cliente, en el que se establecen las condiciones bajo las cuales se prestará un servicio tecnológico. En este acuerdo se definen aspectos como la disponibilidad, los tiempos de respuesta, los tiempos de solución de incidentes, las responsabilidades de las partes y los indicadores que permitirán evaluar el cumplimiento del servicio.
    p.mb-4(data-aos="fade-down") Por su parte, la calidad del servicio (QoS) corresponde al conjunto de mecanismos utilizados para administrar el tráfico de la red y garantizar que determinadas aplicaciones o servicios reciban un tratamiento prioritario cuando sea necesario. De esta manera, se favorece el rendimiento de aplicaciones críticas, se optimiza el uso de los recursos disponibles y se mejora la experiencia de los usuarios.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Elementos presentes en un acuerdo de nivel de servicio
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t5/img06.svg', alt=' En la figura 4 se presentan los principales elementos de un acuerdo de nivel de servicio, entre los que se incluyen la disponibilidad del servicio, el tiempo de respuesta, el tiempo de solución de incidentes, las responsabilidades del proveedor y del cliente, y los indicadores utilizados para evaluar el cumplimiento del servicio.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t5/img07.svg', alt=' En la figura 4 se presentan los principales elementos de un acuerdo de nivel de servicio, entre los que se incluyen la disponibilidad del servicio, el tiempo de respuesta, el tiempo de solución de incidentes, las responsabilidades del proveedor y del cliente, y los indicadores utilizados para evaluar el cumplimiento del servicio.')
    p.mb-4(data-aos="fade-down") Posteriormente, se presenta una comparación entre los acuerdos de nivel de servicio y la calidad del servicio.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 18.
          span Comparación entre SLA y QoS
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Aspecto
                th(data-aos="fade-down")(style= "width: 40%") Acuerdo de nivel de servicio (SLA)
                th(data-aos="fade-down")(style= "width: 40%") Calidad del servicio (QoS)
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Propósito
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Establecer los compromisos entre proveedor y cliente.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Optimizar el comportamiento del tráfico de red.
              tr
                td(data-aos="fade-down") Enfoque
                td(data-aos="fade-down") Contractual y administrativo.
                td(data-aos="fade-down") Técnico y operativo.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Aplicación
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Define las condiciones del servicio.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Gestiona la prioridad y el rendimiento de las comunicaciones.
              tr
                td(data-aos="fade-down") Resultado esperado
                td(data-aos="fade-down") Cumplimiento de los niveles de servicio acordados.
                td(data-aos="fade-down") Mejor desempeño de las aplicaciones y servicios de red.
    p.mb-0(data-aos="fade-down") Los acuerdos de nivel de servicio y la calidad del servicio son conceptos complementarios. Mientras el SLA define los compromisos y niveles de desempeño esperados, la QoS proporciona mecanismos técnicos que contribuyen a cumplir dichos compromisos mediante una gestión eficiente de los recursos de la red. En conjunto, ambos favorecen la disponibilidad, el rendimiento y la confiabilidad de los servicios tecnológicos, especialmente en los entornos de computación en la nube.
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Protocolos y servicios de red
    p.mb-4(data-aos="fade-down") La comunicación entre dispositivos dentro de una red requiere reglas que permitan el intercambio ordenado de información y servicios que faciliten el acceso a los recursos disponibles. En este contexto, los protocolos de red establecen las normas para la transmisión de datos, mientras que los servicios de red utilizan dichos protocolos para ofrecer funcionalidades específicas a usuarios, aplicaciones y sistemas.
    figure.mb-4
      img(src='@/assets/curso/temas/t5/img08.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Los protocolos garantizan que la información sea enviada, recibida e interpretada correctamente por los dispositivos conectados. Por su parte, los servicios de red proporcionan funciones como la resolución de nombres de dominio, la asignación de direcciones IP, el acceso a páginas <em>web</em>, el intercambio de archivos o la gestión del correo electrónico. La interacción entre ambos elementos permite el funcionamiento eficiente de las redes y de los servicios ofrecidos en los entornos de computación en la nube.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Relación entre protocolos y servicios de red
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t5/img09.svg', alt='En la figura 5 se presenta la relación entre los principales protocolos de red, los servicios que soportan y su contribución a la comunicación entre usuarios, aplicaciones y dispositivos.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t5/img10.svg', alt='En la figura 5 se presenta la relación entre los principales protocolos de red, los servicios que soportan y su contribución a la comunicación entre usuarios, aplicaciones y dispositivos.')
    p.mb-4(data-aos="fade-down") Los protocolos y los servicios trabajan de manera complementaria. Mientras los protocolos establecen las reglas para la comunicación, los servicios emplean dichas reglas para ofrecer funcionalidades que permiten a los usuarios acceder a aplicaciones, compartir información y utilizar los recursos disponibles en la red.
    .row.bg03.justify-content-center.align-items-center.px-3.mb-4
      .col.col-lg-4.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img11.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        .tarjeta.tarjeta--blanca.p-4
          p.text-bold.mb-4 Las características de los protocolos de red son:
          ul.lista-ul--color.mb-4(data-aos="fade-down")
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Definen las reglas para la transmisión de datos.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Permiten la interoperabilidad entre diferentes dispositivos.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Garantizan el intercambio ordenado de la información.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Facilitan la comunicación en redes locales y en Internet.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Constituyen la base para el funcionamiento de los servicios de red.
    p.mb-4(data-aos="fade-down") A continuación, se presentan algunos de los protocolos más utilizados y los servicios con los que se relacionan.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 19.
          span Protocolos y servicios de red
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Protocolo
                th(data-aos="fade-down")(style= "width: 40%") Servicio asociado
                th(data-aos="fade-down")(style= "width: 40%") Función principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") HTTP/HTTPS
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Servicio <em>web</em>
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Permite el acceso seguro a páginas y aplicaciones <em>web</em>.
              tr
                td(data-aos="fade-down") DNS
                td(data-aos="fade-down") Resolución de nombres
                td(data-aos="fade-down") Convierte nombres de dominio en direcciones IP.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") DHCP
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Configuración de red
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Asigna automáticamente direcciones IP a los dispositivos.
              tr
                td(data-aos="fade-down") SMTP
                td(data-aos="fade-down") Correo electrónico
                td(data-aos="fade-down") Gestiona el envío de mensajes de correo electrónico.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") FTP
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Transferencia de archivos
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Permite el intercambio de archivos entre equipos.
              tr
                td(data-aos="fade-down") SSH
                td(data-aos="fade-down") Acceso remoto
                td(data-aos="fade-down") Facilita la administración segura de equipos remotos.
    p.mb-0(data-aos="fade-down") La selección de protocolos adecuados contribuye al funcionamiento eficiente de los servicios de red, favoreciendo la disponibilidad, la seguridad y el rendimiento de las comunicaciones. En los entornos de computación en la nube, estos protocolos permiten que los recursos y aplicaciones puedan ser accedidos de forma confiable desde diferentes ubicaciones y dispositivos, garantizando la interoperabilidad entre los distintos componentes de la infraestructura tecnológica.
    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Gestión operativa de la infraestructura
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") La gestión operativa de la infraestructura comprende el conjunto de actividades orientadas a garantizar el funcionamiento continuo, seguro y eficiente de los recursos tecnológicos que soportan los servicios de una organización. Estas actividades incluyen la administración de servidores, redes, sistemas de almacenamiento y demás componentes de la infraestructura, con el propósito de asegurar la disponibilidad de los servicios y responder oportunamente a las necesidades de los usuarios.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En los entornos de computación en la nube, la gestión operativa adquiere especial importancia debido a la naturaleza dinámica de los recursos tecnológicos. La supervisión permanente del estado de la infraestructura permite identificar posibles fallas, optimizar el uso de los recursos y mantener la continuidad de los servicios ofrecidos.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img12.jpg', alt='Imagen decorativa')
    .row.bg03.justify-content-center.align-items-center.px-3.mb-4
      .col.col-lg-4.col-6.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img13.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--blanca.p-4
          p.text-bold.mb-4 Las actividades de la gestión operativa de la infraestructura son:
          ul.lista-ul--color.mb-4(data-aos="fade-down")
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Monitoreo del estado de los recursos tecnológicos.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Administración de servidores, redes y almacenamiento.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Mantenimiento preventivo y correctivo.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Gestión de incidentes y atención de fallas.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Optimización del rendimiento de la infraestructura.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Verificación de la disponibilidad de los servicios.
    p.mb-4(data-aos="fade-down") Estas actividades se desarrollan de manera integrada y permanente. El monitoreo permite supervisar el comportamiento de los recursos tecnológicos e identificar oportunamente situaciones que puedan afectar la prestación del servicio. A partir de esta información, se ejecutan acciones de administración, mantenimiento y gestión de incidentes que contribuyen a preservar la estabilidad y el rendimiento de la infraestructura.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img14.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") Asimismo, la optimización de los recursos y la verificación de la disponibilidad de los servicios favorecen la continuidad de la operación y permiten responder de forma eficiente a las necesidades de los usuarios y de la organización.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 6.
          span Ciclo de la gestión operativa de la infraestructura
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t5/img15.svg', alt='En la figura 6  se presenta un ciclo de la gestión operativa de la infraestructura conformado por las etapas de monitoreo, identificación y gestión de incidentes, mantenimiento, optimización de recursos y verificación de la disponibilidad.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t5/img16.svg', alt='En la figura 6  se presenta un ciclo de la gestión operativa de la infraestructura conformado por las etapas de monitoreo, identificación y gestión de incidentes, mantenimiento, optimización de recursos y verificación de la disponibilidad.')
    p.mb-0(data-aos="fade-down") En conclusión, la gestión operativa de la infraestructura constituye un proceso continuo que integra actividades de monitoreo, administración, mantenimiento y mejora de los recursos tecnológicos. Su adecuada ejecución favorece la disponibilidad, el rendimiento y la continuidad de los servicios, aspectos fundamentales para el funcionamiento de las infraestructuras de red y de los entornos de computación en la nube.
    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Aprovisionamiento de servicios en la nube
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") El aprovisionamiento de servicios en la nube es el proceso mediante el cual se asignan, configuran y ponen a disposición los recursos tecnológicos necesarios para atender las necesidades de usuarios, aplicaciones u organizaciones. Estos recursos pueden incluir máquinas virtuales, almacenamiento, redes, bases de datos, plataformas de desarrollo y otros servicios que se suministran de forma flexible y bajo demanda.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") Una de las principales características del aprovisionamiento en la nube es la posibilidad de disponer de recursos de manera rápida y escalable, sin que las organizaciones deban adquirir o administrar directamente la infraestructura física. Este enfoque facilita la adaptación a cambios en la demanda, optimiza el uso de los recursos y contribuye a mejorar la eficiencia operativa.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img17.jpg', alt='Imagen decorativa')
    .row.bg03.justify-content-center.align-items-center.px-3.mb-4
      .col.col-lg-4.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t5/img18.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        .tarjeta.tarjeta--blanca.p-4
          p.text-bold.mb-4 Las actividades de la gestión operativa de la infraestructura son:
          ul.lista-ul--color.mb-4(data-aos="fade-down")
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Asignación de recursos bajo demanda.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Escalabilidad según las necesidades del servicio.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Configuración flexible de los recursos.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Optimización del uso de la infraestructura.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Disponibilidad y acceso a los servicios mediante Internet.
    p.mb-4(data-aos="fade-down") El proceso de aprovisionamiento comprende actividades como la identificación de las necesidades del servicio, la selección de los recursos requeridos, la configuración de la infraestructura y la verificación de su correcto funcionamiento antes de su puesta en operación. Estas actividades permiten garantizar que los recursos suministrados respondan a los requisitos funcionales y no funcionales definidos para la solución tecnológica.
    .row.justify-content-center.mb-3
      .col.col-12
        .row.justify-content-center
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t5/img19.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Identificación de necesidades.
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t5/img20.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Selección de recursos.
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t5/img21.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Configuración del servicio.
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t5/img22.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Implementación.
          .col-lg-4.col-12
            .row.justify-content-center
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C11.p-0.h-100
                  img.w-100.h-100.my-auto(src='@/assets/curso/temas/t5/img23.svg' alt="Imagen decorativa")
              .col-lg-8.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-3.h-100.d-flex.align-items-center
                  h5.mb-0 Verificación y puesta en operación.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.col-12
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En los entornos de computación en la nube, el aprovisionamiento puede realizarse de forma manual o automatizada, dependiendo de las herramientas y tecnologías utilizadas por el proveedor del servicio. La automatización reduce los tiempos de implementación, disminuye la posibilidad de errores y facilita la administración de los recursos tecnológicos.
    p.mb-0(data-aos="fade-down") En conclusión, el aprovisionamiento de servicios en la nube permite suministrar recursos tecnológicos de manera ágil, flexible y eficiente, favoreciendo la disponibilidad de aplicaciones y servicios. Su adecuada planificación y ejecución contribuyen al aprovechamiento de la infraestructura tecnológica y al cumplimiento de los requerimientos definidos por las organizaciones.
    separador
    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.6 Contratación de servicios tecnológicos
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-6.col-12.order-lg-1.order-2
        .cajon.C08.p-4.h-100.w-100
          p.mb-3(data-aos="fade-down") La contratación de servicios tecnológicos es el proceso mediante el cual una organización selecciona un proveedor para suministrar recursos, infraestructura, plataformas o aplicaciones que apoyan el desarrollo de sus procesos. Esta decisión requiere evaluar diferentes aspectos técnicos, económicos y operativos, con el fin de garantizar que los servicios contratados respondan a las necesidades de la organización y contribuyan al cumplimiento de sus objetivos.
      .col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t5/img24.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") En los entornos de computación en la nube, la contratación de servicios adquiere especial relevancia debido a la diversidad de proveedores y modelos de servicio disponibles. Por ello, antes de formalizar un contrato, es necesario analizar las características del servicio ofrecido, los niveles de disponibilidad, las condiciones de seguridad, la escalabilidad, el soporte técnico y los costos asociados.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 20.
          span Criterios para la contratación de servicios tecnológicos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Criterio
                th(data-aos="fade-down")(style= "width: 70%") Aspectos por evaluar
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Necesidades de la organización
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Correspondencia entre las características del servicio y los requerimientos funcionales y no funcionales.
              tr
                td(data-aos="fade-down") Disponibilidad
                td(data-aos="fade-down") Nivel de disponibilidad ofrecido, continuidad del servicio y tiempos de respuesta.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Seguridad
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Protección de la información, mecanismos de autenticación, control de acceso y respaldo de datos.
              tr
                td(data-aos="fade-down") Escalabilidad
                td(data-aos="fade-down") Capacidad para ampliar o reducir recursos de acuerdo con las necesidades de la organización.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Soporte técnico
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Canales de atención, tiempos de respuesta, mantenimiento y resolución de incidentes.
              tr
                td(data-aos="fade-down") Costos
                td(data-aos="fade-down") Modelo de cobro, costos de implementación, operación y crecimiento del servicio.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Cumplimiento normativo
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Cumplimiento de políticas, estándares y requisitos legales aplicables.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t5/img25.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-1
          p.mb-0(data-aos="fade-down") La evaluación de estos criterios permite comparar diferentes alternativas de servicio y seleccionar la opción que mejor se ajuste a las necesidades técnicas, operativas y económicas de la organización. Este análisis contribuye a reducir riesgos, optimizar la inversión en tecnología y favorecer la continuidad de los servicios.
    p.mb-0(data-aos="fade-down") En conclusión, la contratación de servicios tecnológicos constituye una actividad estratégica que requiere evaluar diversos criterios relacionados con el desempeño, la seguridad, la escalabilidad, el soporte, los costos y el cumplimiento normativo. Una selección fundamentada facilita el aprovechamiento de la infraestructura tecnológica y contribuye al cumplimiento de los objetivos organizacionales.
</template>
<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
