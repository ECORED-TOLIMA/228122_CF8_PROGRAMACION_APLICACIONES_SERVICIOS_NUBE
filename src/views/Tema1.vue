<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ingeniería y gestión de requisitos
    p.mb-4(data-aos="fade-down") La implementación de una infraestructura tecnológica y de servicios en la nube requiere identificar y gestionar los requisitos que garanticen el funcionamiento adecuado de las aplicaciones y los recursos tecnológicos. Estos requisitos permiten definir las capacidades técnicas necesarias para soportar los servicios, considerando aspectos como el rendimiento, la disponibilidad, la escalabilidad, la conectividad y la continuidad de la operación.
    .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La ingeniería de requisitos proporciona un proceso sistemático para identificar, analizar, documentar, validar y gestionar las necesidades técnicas y operativas de una solución tecnológica. En el contexto de la infraestructura, este proceso facilita la selección de plataformas, recursos de cómputo, redes, sistemas operativos y servicios en la nube acordes con los objetivos del proyecto y las necesidades de la organización.
    p.mb-4(data-aos="fade-down") Una vez identificados, los requisitos deben documentarse de manera clara y mantenerse actualizados durante el ciclo de vida de la solución. La gestión de requisitos incluye actividades como el control de cambios, la trazabilidad y el seguimiento de las modificaciones, permitiendo adaptar la infraestructura ante nuevas necesidades sin afectar la disponibilidad de los servicios.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img02.svg', alt='Imagen decorativa')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") La adecuada gestión de los requisitos contribuye a reducir riesgos durante el despliegue y la operación de la infraestructura tecnológica, favoreciendo la implementación de entornos confiables, escalables y alineados con las necesidades del negocio.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto y tipos de requisitos
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img03.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Los requisitos constituyen la base para planificar, implementar y administrar infraestructuras tecnológicas y servicios en la nube, ya que permiten definir las capacidades, restricciones y condiciones necesarias para garantizar el funcionamiento adecuado de las soluciones tecnológicas.
        p.mb-0(data-aos="fade-down") En proyectos de infraestructura tecnológica, los requisitos orientan decisiones relacionadas con la capacidad de procesamiento, el almacenamiento, la conectividad, la disponibilidad, la seguridad, la escalabilidad y la continuidad de los servicios. De acuerdo con su propósito, los requisitos pueden clasificarse en diferentes categorías, como se presenta en la siguiente tabla.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Tipos de requisitos y ejemplos de aplicación
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Tipo
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Ejemplo
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Funcionales
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Describen las funciones o servicios que debe proporcionar la solución.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Permitir la autenticación de usuarios.
              tr
                td(data-aos="fade-down") No funcionales
                td(data-aos="fade-down") Definen criterios de calidad y desempeño.
                td(data-aos="fade-down") Disponibilidad del servicio del 99,9 %.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") De negocio
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Establecen objetivos y necesidades organizacionales.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Reducir costos de infraestructura tecnológica.
              tr
                td(data-aos="fade-down") De usuario
                td(data-aos="fade-down") Representan las necesidades y expectativas de los usuarios finales.
                td(data-aos="fade-down") Acceder a los servicios desde dispositivos móviles.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Técnicos
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Especifican tecnologías, estándares o restricciones de implementación.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Implementar la solución sobre una infraestructura en la nube híbrida.
    p.mb-4(data-aos="fade-down") La identificación y clasificación de los requisitos facilita la planificación de la infraestructura tecnológica y la selección de los recursos necesarios para soportar las aplicaciones y los servicios. Asimismo, permite establecer prioridades, estimar capacidades y verificar que la solución implementada responda a las necesidades técnicas y organizacionales definidas para el proyecto.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img04.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Además de su clasificación, los requisitos deben ser claros, consistentes, verificables y trazables, de manera que puedan implementarse y evaluarse durante todo el ciclo de vida de la infraestructura tecnológica. Estas características facilitan la comunicación entre los equipos responsables del diseño, la implementación y la administración de los servicios, además de apoyar el control de cambios y la toma de decisiones.
        p.mb-0(data-aos="fade-down") En los entornos de computación en la nube, una adecuada definición de los requisitos contribuye a implementar infraestructuras escalables, disponibles y confiables, optimizando el uso de los recursos tecnológicos y favoreciendo la continuidad de los servicios ofrecidos por la organización.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Ingeniería de requisitos y sus fases
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La ingeniería de requisitos es un proceso sistemático que permite identificar, analizar, documentar, validar y gestionar las necesidades que debe satisfacer una solución tecnológica. En el contexto de la infraestructura tecnológica y los servicios en la nube, este proceso facilita la definición de las capacidades técnicas, los recursos y las condiciones necesarias para implementar entornos que respondan a los objetivos de la organización y garanticen el funcionamiento adecuado de las aplicaciones.
    p(data-aos="fade-down") La aplicación de la ingeniería de requisitos contribuye a reducir riesgos durante la implementación de la infraestructura, optimizar el uso de los recursos tecnológicos y facilitar la toma de decisiones relacionadas con el despliegue y la administración de los servicios. Asimismo, favorece la comunicación entre las partes involucradas y proporciona información para controlar los cambios que puedan presentarse durante el ciclo de vida del proyecto.
    p.mb-4(data-aos="fade-down") A continuación, se presentan las principales fases de la ingeniería de requisitos y su relación dentro del proceso de implementación de una solución tecnológica.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Etapas de la ingeniería de requisitos
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t1/img06.svg', alt='En la figura 1 se presenta el proceso general de la ingeniería de requisitos, desde el estudio de factibilidad hasta la validación de los requisitos para orientar la implementación de soluciones tecnológicas.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t1/img07.svg', alt='En la figura 1 se presenta el proceso general de la ingeniería de requisitos, desde el estudio de factibilidad hasta la validación de los requisitos para orientar la implementación de soluciones tecnológicas.')
    p.mb-4(data-aos="fade-down") Cada una de estas fases aporta información que permite comprender las necesidades del proyecto y establecer los requisitos que orientarán el diseño, la implementación y la administración de la infraestructura tecnológica.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Fases de la ingeniería de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Fase
                th(data-aos="fade-down")(style= "width: 70%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Estudio de factibilidad
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Evalúa la viabilidad técnica, económica y operativa del proyecto para determinar si la solución puede implementarse.
              tr
                td(data-aos="fade-down") Obtención y análisis de requisitos
                td(data-aos="fade-down") Identifica y analiza las necesidades de la organización, los usuarios y las restricciones técnicas que debe cumplir la solución.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Especificación de requisitos
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Documenta los requisitos de forma clara, organizada y verificable para orientar el diseño y la implementación de la infraestructura.
              tr
                td(data-aos="fade-down") Validación de requisitos
                td(data-aos="fade-down") Verifica que los requisitos definidos sean completos, consistentes y acordes con las necesidades y objetivos del proyecto.
    p.mb-0(data-aos="fade-down") La aplicación de estas fases permite definir los requisitos necesarios para implementar infraestructuras tecnológicas y servicios en la nube de manera organizada, reduciendo riesgos y favoreciendo la disponibilidad, la escalabilidad y la calidad de los servicios ofrecidos.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Técnicas de análisis de requisitos
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img08.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Las técnicas de análisis de requisitos son métodos utilizados para comprender, organizar y evaluar las necesidades de una organización antes de implementar una infraestructura tecnológica o un servicio en la nube. Su aplicación permite identificar requisitos funcionales y no funcionales, detectar inconsistencias, establecer prioridades y reducir riesgos asociados a errores de interpretación.
        .cajon.color-secundario.cajon.C02.p-4.mb-4
          p.mb-0(data-aos="fade-down") Estas técnicas facilitan la comunicación entre las partes interesadas y los equipos responsables del diseño, la implementación y la administración de la infraestructura tecnológica. Además, proporcionan información confiable para la toma de decisiones y la definición del alcance de la solución.
        p.mb-0(data-aos="fade-down") La siguiente tabla presenta algunas de las técnicas más utilizadas en el análisis de requisitos y su principal aplicación en proyectos de infraestructura tecnológica.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Técnicas de análisis de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Técnica
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Aplicación
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Entrevistas
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Recolección directa de información con usuarios o expertos.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Identificar necesidades de infraestructura y servicios.
              tr
                td(data-aos="fade-down") Encuestas
                td(data-aos="fade-down") Obtención de información de múltiples participantes.
                td(data-aos="fade-down") Recopilar requerimientos generales.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Observación
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Análisis del entorno y de los procesos operativos.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Detectar necesidades no documentadas.
              tr
                td(data-aos="fade-down") Talleres
                td(data-aos="fade-down") Sesiones colaborativas con las partes interesadas.
                td(data-aos="fade-down") Definir y priorizar requisitos.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Análisis documental
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Revisión de normas, manuales y procedimientos.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Identificar requisitos existentes y restricciones técnicas.
    p.mb-4(data-aos="fade-down") La selección adecuada de estas técnicas mejora la calidad de los requisitos, facilita la toma de decisiones y contribuye a la implementación de infraestructuras tecnológicas acordes con las necesidades de la organización.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-4(data-aos="fade-down") La aplicación de estas técnicas no debe considerarse un proceso aislado, sino una actividad continua durante todo el ciclo de vida del proyecto. En muchos casos, es necesario combinar varias de ellas para obtener una visión más completa de las necesidades de la organización y de los requisitos técnicos. Por ejemplo, una entrevista puede complementarse con la observación directa y el análisis documental para validar la información recopilada y reducir posibles inconsistencias.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t1/img10.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") Asimismo, el análisis de requisitos permite identificar dependencias, restricciones técnicas, riesgos y oportunidades de mejora que pueden influir en la planificación, implementación y administración de la infraestructura tecnológica. Una adecuada selección de técnicas favorece la participación de las partes interesadas, mejora la calidad de la información recopilada y facilita la priorización de necesidades según los objetivos del proyecto.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t1/img09.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") En proyectos relacionados con infraestructura tecnológica y servicios en la nube, estas técnicas son especialmente importantes debido a la integración de múltiples plataformas, la administración de recursos distribuidos y la necesidad de garantizar aspectos como la disponibilidad, la escalabilidad, la seguridad y el rendimiento. Por esta razón, el análisis de requisitos constituye una etapa fundamental para implementar servicios tecnológicos alineados con las necesidades de la organización.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Priorización de requisitos
    p.mb-4(data-aos="fade-down") La priorización de requisitos es una actividad fundamental para planificar la implementación de infraestructuras tecnológicas y servicios en la nube. Su propósito es establecer cuáles requisitos deben atenderse primero de acuerdo con su impacto en la operación, su importancia para la organización, la disponibilidad de recursos y la viabilidad técnica. Una de las técnicas más utilizadas para este propósito es el método MoSCoW, que clasifica los requisitos según su nivel de prioridad para facilitar la planificación y la toma de decisiones.
    figure.mb-4
      img(src='@/assets/curso/temas/t1/img11.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") A continuación, se presenta la estructura general del método MoSCoW, utilizado para priorizar requisitos en proyectos de infraestructura tecnológica y servicios en la nube.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C12.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t1/img12.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Must Have
          .col-xl.col-lg-6.tarjeta.tarjeta--C13.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t1/img13.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Should Have
          .col-xl.col-lg-6.tarjeta.tarjeta--C14.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t1/img14.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Could Have
          .col-xl.col-lg-6.tarjeta.tarjeta--C17.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/temas/t1/img15.svg', alt='Imagen decorativa')(style="width: 100%")
            h4.text-center Could Have
    p.mb-4(data-aos="fade-down") La siguiente tabla describe las categorías del método MoSCoW y su aplicación en proyectos de infraestructura tecnológica.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Categorías del método MoSCoW para la priorización de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Categoría
                th(data-aos="fade-down")(style= "width: 70%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Must Have
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Requisitos indispensables para garantizar el funcionamiento de la infraestructura o del servicio.
              tr
                td(data-aos="fade-down") Should Have
                td(data-aos="fade-down") Requisitos importantes que mejoran el desempeño o la calidad del servicio, aunque su ausencia no impide la operación.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Could Have
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Requisitos deseables cuya implementación depende de la disponibilidad de recursos y del tiempo del proyecto.
              tr
                td(data-aos="fade-down") Won't Have
                td(data-aos="fade-down") Requisitos identificados para futuras fases o versiones del proyecto, sin prioridad en la implementación actual.
    p.mb-0(data-aos="fade-down") La aplicación del método MoSCoW facilita la asignación de prioridades, optimiza el uso de los recursos disponibles y contribuye a implementar infraestructuras tecnológicas y servicios en la nube de manera organizada, garantizando que los requisitos críticos sean atendidos durante las primeras etapas del proyecto.
    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.5 Especificación requisitos
    .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img16.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Una vez identificados, analizados y priorizados los requisitos, es necesario describirlos de manera clara, organizada y verificable para que sirvan como base en el diseño, desarrollo y validación de una solución tecnológica. Este proceso se conoce como especificación de requisitos y tiene como propósito transformar las necesidades del usuario en información estructurada que pueda ser comprendida por todos los participantes del proyecto.
    p.mb-4(data-aos="fade-down") Una especificación adecuada reduce ambigüedades, facilita la comunicación entre las partes interesadas y contribuye a disminuir errores durante el desarrollo del <em>software</em>. Además, permite establecer un punto de referencia para verificar que la solución implementada cumple con los requisitos definidos.
    .row.mb-4
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/t1/img17.svg' alt="Imagen decorativa")
        h5.text-center.mb-0 Necesidades del usuario
      .col-lg.col-md-6.tarjeta--tabla.tarjeta--tabla4.p-4(data-aos="flip-right")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/t1/img18.svg' alt="Imagen decorativa")
        h5.text-center.mb-0 Análisis de requisitos
      .col-lg.col-md-6.tarjeta--tabla.tarjeta--tabla3.p-4(data-aos="flip-left")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/t1/img19.svg' alt="Imagen decorativa")
        h5.text-center.mb-0 Especificación de requisitos (ERS)
      .col-lg.col-md-6.tarjeta--tabla.tarjeta--tabla4.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/t1/img20.svg' alt="Imagen decorativa")
        h5.text-center.mb-0 Diseño y desarrollo del sistema
    p(data-aos="fade-down") Los requisitos deben redactarse utilizando un lenguaje preciso, evitando interpretaciones ambiguas y describiendo únicamente las características que el sistema debe satisfacer. Para ello, es importante que cada requisito sea completo, consistente y verificable, de manera que pueda comprobarse objetivamente su cumplimiento.
    p.mb-4(data-aos="fade-down") Las características de una buena especificación de requisitos son:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t1/img21.png", alt="Imagen decorativa")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img22.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Clara
                  p Utiliza un lenguaje comprensible y sin ambigüedades.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img23.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Completa
                  p Incluye toda la información necesaria para comprender el requisito.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img24.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Consistente
                  p No presenta contradicciones con otros requisitos.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img25.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Verificable
                  p Permite comprobar objetivamente su cumplimiento.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img26.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Trazable
                  p Facilita identificar su origen y realizar seguimiento durante el proyecto.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t1/img27.svg", alt="Imagen decorativa").img100.m-auto
                  h4 Modificable
                  p Admite actualizaciones sin afectar la integridad del documento.
    p(data-aos="fade-down") La especificación de requisitos suele consolidarse en un documento denominado Especificación de Requisitos de <em>software</em> (ERS), el cual reúne de manera organizada la información necesaria para orientar el desarrollo de un sistema. Este documento describe las funcionalidades esperadas, las restricciones, las interfaces, los requisitos de calidad y demás aspectos que servirán como referencia durante las etapas de diseño, construcción, pruebas y mantenimiento.
    p.mb-4(data-aos="fade-down") A continuación, se presentan algunos de los componentes que habitualmente conforman un documento de especificación de requisitos.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Componentes básicos de una especificación de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Componente
                th(data-aos="fade-down")(style= "width: 70%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Introducción
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Presenta el propósito, alcance y contexto del proyecto.
              tr
                td(data-aos="fade-down") Descripción general
                td(data-aos="fade-down") Resume las características generales del sistema y su entorno.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Requisitos funcionales
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Describe las funciones que debe realizar el sistema.
              tr
                td(data-aos="fade-down") Requisitos no funcionales
                td(data-aos="fade-down") Define atributos como seguridad, rendimiento, disponibilidad y usabilidad.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Interfaces
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Especifica la interacción con usuarios, dispositivos u otros sistemas.
              tr
                td(data-aos="fade-down") Restricciones
                td(data-aos="fade-down") Registra condiciones técnicas, normativas o de negocio que deben cumplirse.
    p.mb-4(data-aos="fade-down") La elaboración de documentos de especificación puede apoyarse en estándares que establecen una estructura organizada para presentar la información de manera uniforme. Uno de los referentes más conocidos ha sido el estándar IEEE 830, utilizado durante muchos años como guía para la elaboración de la Especificación de Requisitos de <em>software</em> (ERS). Aunque actualmente este estándar fue sustituido por la norma ISO/IEC/IEEE 29148, continúa siendo una referencia ampliamente utilizada en procesos de formación para comprender la organización y documentación de los requisitos de <em>software</em>.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t1/img28.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-1
          p.mb-0(data-aos="fade-down") En síntesis, la especificación de requisitos constituye una actividad fundamental de la ingeniería de requisitos, ya que proporciona una descripción estructurada de las necesidades del proyecto y establece una base confiable para el desarrollo, la validación y el mantenimiento de soluciones tecnológicas.
    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.6 Documentación de requisitos
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img29.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") La documentación de requisitos consiste en registrar de manera organizada la información obtenida durante el proceso de levantamiento y análisis de requisitos. Su propósito es conservar un registro claro de las necesidades identificadas, facilitar la comunicación entre los interesados y proporcionar un mecanismo de consulta durante las diferentes etapas del desarrollo de la solución tecnológica.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") Una documentación adecuada permite controlar los cambios, realizar seguimiento a los requisitos y verificar que las funcionalidades implementadas correspondan a las necesidades inicialmente definidas. Asimismo, constituye un insumo para las actividades de diseño, construcción, pruebas, mantenimiento y gestión del proyecto.
    p.mb-4(data-aos="fade-down") Para facilitar la organización de la información, los requisitos suelen registrarse mediante diferentes documentos y herramientas que permiten clasificarlos, identificarlos y realizar seguimiento durante todo el ciclo de vida del proyecto.
    .row.bg03.justify-content-center.align-items-center.px-3.mb-4
      .col.col-lg-3.col-6.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t1/img30.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--blanca.p-4
          p.text-bold.mb-4 Información básica para documentar requisitos:
          ul.lista-ul--color.mb-4(data-aos="fade-down")
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Identificador único.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Nombre o título del requisito.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Descripción.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Tipo de requisito (funcional o no funcional).
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Prioridad.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Fuente del requisito.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Responsable.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Estado.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Observaciones.
    p.mb-4(data-aos="fade-down") En la siguiente tabla, se presentan algunos de los documentos utilizados con mayor frecuencia para registrar y administrar los requisitos de un proyecto de <em>software</em>.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Documentos utilizados en la documentación de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Documento
                th(data-aos="fade-down")(style= "width: 70%") Finalidad
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Lista de requisitos
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Registrar de forma organizada los requisitos identificados durante el análisis.
              tr
                td(data-aos="fade-down") Matriz de requisitos
                td(data-aos="fade-down") Facilitar la clasificación, el seguimiento y la administración de los requisitos.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Matriz de trazabilidad
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Relacionar cada requisito con las actividades, entregables, pruebas y componentes del sistema.
              tr
                td(data-aos="fade-down") Registro de cambios
                td(data-aos="fade-down") Documentar las modificaciones realizadas a los requisitos durante el proyecto.
    .row.justify-content-center.mb-4
      .col-lg-10.col-12
        .cajon.cajon.C08.color-primario.p-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t1/img31.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 La documentación de requisitos debe mantenerse actualizada durante todo el ciclo de vida del proyecto, ya que las necesidades de los usuarios, las condiciones del negocio o los aspectos tecnológicos pueden generar modificaciones que deben registrarse oportunamente. Un adecuado control de estos cambios contribuye a preservar la coherencia de la información y facilita la toma de decisiones por parte del equipo de desarrollo.
    p.mb-4(data-aos="fade-down") Como complemento a la documentación, la trazabilidad permite identificar el origen de cada requisito y establecer su relación con las actividades de análisis, diseño, desarrollo, pruebas e implementación. De esta manera, es posible verificar que todos los requisitos definidos hayan sido atendidos y que cualquier modificación realizada pueda ser evaluada en función de su impacto sobre el proyecto.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Ejemplo simplificado de trazabilidad de requisitos
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t1/img32.svg', alt=' En la figura 2 se presenta un ejemplo simplificado de la trazabilidad de requisitos entre las etapas de diseño, desarrollo y pruebas.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t1/img33.svg', alt=' En la figura 2 se presenta un ejemplo simplificado de la trazabilidad de requisitos entre las etapas de diseño, desarrollo y pruebas.')
    p.mb-0(data-aos="fade-down") En conclusión, la documentación de requisitos constituye un elemento esencial para la gestión de proyectos de <em>software</em>, ya que organiza la información obtenida durante la ingeniería de requisitos, facilita el seguimiento de los cambios y proporciona una base confiable para el desarrollo, la validación y el mantenimiento de las soluciones tecnológicas.
  </template>
<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
