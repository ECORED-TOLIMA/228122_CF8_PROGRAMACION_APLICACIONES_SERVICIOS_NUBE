<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Computación en la nube y virtualización
    p.mb-4(data-aos="fade-down") La computación en la nube y la virtualización son tecnologías fundamentales para la transformación digital de las organizaciones, ya que permiten optimizar el uso de los recursos informáticos, mejorar la escalabilidad de los servicios y reducir los costos de infraestructura. Estas tecnologías constituyen la base de gran parte de las aplicaciones y servicios utilizados actualmente en entornos empresariales, educativos y gubernamentales.
    .bloque-texto-g.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La computación en la nube consiste en el suministro de recursos tecnológicos, como servidores, almacenamiento, redes, bases de datos y aplicaciones, a través de Internet. Este modelo permite acceder a los servicios bajo demanda, sin necesidad de adquirir o mantener toda la infraestructura física de forma local. Como resultado, las organizaciones pueden ampliar o reducir la capacidad de sus recursos según las necesidades del negocio, favoreciendo la flexibilidad, la disponibilidad y la continuidad de los servicios.
    p.mb-4(data-aos="fade-down") Por su parte, la virtualización es una tecnología que permite crear versiones virtuales de recursos físicos, como servidores, sistemas operativos, redes o dispositivos de almacenamiento. Mediante <em>software</em> especializado, un único equipo físico puede ejecutar múltiples entornos virtuales independientes, optimizando el aprovechamiento del <em>hardware</em> y facilitando la administración de los recursos tecnológicos.
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-8.col-12.order-lg-1.order-2
        .row.mb-4
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t3/img03.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0(data-aos="fade-down") La combinación de la computación en la nube y la virtualización ha impulsado el desarrollo de infraestructuras más eficientes, seguras y escalables. Los proveedores de servicios en la nube utilizan ampliamente tecnologías de virtualización para ofrecer recursos compartidos a múltiples usuarios, garantizando el aislamiento de los entornos, la disponibilidad de los servicios y un uso eficiente de la infraestructura.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En el contexto de la programación de aplicaciones y servicios para la nube, el conocimiento de estos conceptos permite comprender cómo se implementan, despliegan y administran soluciones tecnológicas modernas. Asimismo, facilita el desarrollo de aplicaciones capaces de operar en entornos distribuidos, adaptarse a cambios en la demanda y aprovechar los modelos de servicio Infraestructura como Servicio (IaaS), Plataforma como Servicio (PaaS) y <em>software</em> como Servicio (SaaS), contribuyendo a la innovación y la competitividad de las organizaciones.
      .col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img02.jpg', alt='Imagen decorativa')
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Conceptos y características de #[em <em>cloud</em> computing]
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-8.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-3(data-aos="fade-down") La computación en la nube (<em><em>cloud</em> computing</em>) es un modelo tecnológico que permite acceder a recursos informáticos, como servidores, almacenamiento, redes, bases de datos y aplicaciones, a través de Internet. Su principal objetivo es ofrecer estos recursos como servicios bajo demanda, eliminando la necesidad de que las organizaciones administren toda la infraestructura física de manera local. Este enfoque proporciona flexibilidad, escalabilidad y optimización de costos, facilitando el acceso a recursos tecnológicos desde cualquier lugar y dispositivo con conexión a la red.
          .row.mb-0
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t3/img05.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0(data-aos="fade-down") <em><em>cloud</em> computing</em> ha transformado la forma en que las organizaciones desarrollan, implementan y administran aplicaciones, ya que facilita la respuesta a cambios en la demanda y mejora la disponibilidad de los servicios digitales. Gracias a este modelo, las organizaciones pueden concentrarse en sus procesos de negocio mientras los proveedores de servicios en la nube gestionan gran parte de la infraestructura tecnológica.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img04.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") A continuación, se presentan algunas de las principales características de la computación en la nube:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img06.svg' alt='AvatarTop')
          h4.text-center Autoservicio bajo demanda
          p Permite a los usuarios acceder y aprovisionar recursos tecnológicos cuando los necesiten, sin intervención directa del proveedor.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img07.svg' alt='AvatarTop')
          h4.text-center Acceso amplio a la red
          p Los servicios pueden utilizarse desde diferentes dispositivos conectados a Internet, facilitando la movilidad y el trabajo remoto.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img08.svg' alt='AvatarTop')
          h4.text-center Escalabilidad
          p Los recursos pueden aumentar o disminuir según la demanda, optimizando el rendimiento y los costos operativos.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img09.svg' alt='AvatarTop')
          h4.text-center Recursos compartidos
          p La infraestructura es utilizada por múltiples usuarios mediante mecanismos de aislamiento y administración eficiente.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img10.svg' alt='AvatarTop')
          h4.text-center Servicio medible
          p El consumo de recursos puede supervisarse y controlarse, permitiendo pagar únicamente por los recursos utilizados.
    p.mb-4(data-aos="fade-down") Además de estas características, la computación en la nube se ha convertido en un habilitador estratégico para la transformación digital de las organizaciones. Su adopción permite acelerar los procesos de innovación, reducir los tiempos de implementación de nuevos servicios y optimizar el uso de los recursos tecnológicos.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img11.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-1
          p.mb-0(data-aos="fade-down") Gracias a la disponibilidad de infraestructuras distribuidas y servicios administrados, las organizaciones pueden concentrar sus esfuerzos en el desarrollo de soluciones y en la generación de valor para sus usuarios, delegando gran parte de la gestión técnica en los proveedores de servicios en la nube.
    .row.justify-content-center.align-items-center.mb-0
      .col-lg-7.col-12.order-lg-1.order-2
        .row.mb-4
          p.mb-0(data-aos="fade-down") Asimismo, este modelo favorece la colaboración entre equipos de trabajo, facilita el acceso remoto a la información y permite mantener la continuidad de las operaciones frente a cambios en la demanda o situaciones que requieren alta disponibilidad de los servicios. Estas ventajas han impulsado su adopción en sectores como la educación, la salud, la industria, el comercio, el gobierno y los servicios financieros.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En el contexto de la infraestructura tecnológica y los servicios de red, la computación en la nube proporciona un entorno flexible para desplegar aplicaciones, administrar recursos y garantizar niveles adecuados de rendimiento, seguridad y disponibilidad. Por esta razón, su comprensión constituye una competencia fundamental para el diseño, la implementación y la administración de soluciones tecnológicas modernas.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img12.svg', alt='Imagen decorativa')
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Infraestructura tecnológica y requerimientos no funcionales
    p.mb-4(data-aos="fade-down") La infraestructura tecnológica corresponde al conjunto de recursos físicos, virtuales y de comunicaciones que soportan la operación de aplicaciones, servicios y sistemas de información. En entornos de computación en la nube, esta infraestructura incluye servidores, redes, almacenamiento, sistemas operativos, plataformas de virtualización y servicios administrados que trabajan de manera integrada para garantizar el funcionamiento de las soluciones tecnológicas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.col-12.order-lg-1.order-2
        .row.mb-4
          p.mb-0(data-aos="fade-down") A diferencia de los entornos tradicionales, donde las organizaciones deben adquirir y mantener su propia infraestructura, la computación en la nube permite acceder a estos recursos como servicios bajo demanda. Este modelo facilita la asignación dinámica de capacidades de procesamiento, almacenamiento y conectividad, adaptándose a las necesidades de cada organización y optimizando el uso de los recursos disponibles.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") El diseño de una infraestructura tecnológica no depende únicamente de los recursos físicos o virtuales que la conforman. También requiere considerar los requerimientos no funcionales, los cuales establecen las características de calidad que debe cumplir una solución tecnológica para satisfacer las necesidades de los usuarios y garantizar un funcionamiento eficiente.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img13.jpg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t3/img14.svg', alt='Imagen decorativa')
      .col.col-lg-11.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-1
          p.mb-0(data-aos="fade-down") Los requerimientos no funcionales no describen las funciones que realiza un sistema, sino las condiciones bajo las cuales debe operar. Estos requisitos permiten definir aspectos relacionados con el desempeño, la seguridad, la disponibilidad, la confiabilidad y la capacidad de crecimiento de la infraestructura tecnológica.
    p.mb-4(data-aos="fade-down") En la siguiente tabla, se presentan algunos de los principales requerimientos no funcionales considerados en el diseño e implementación de soluciones basadas en computación en la nube.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Requerimientos no funcionales en infraestructura tecnológica
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Requerimiento
                th(data-aos="fade-down")(style= "width: 40%") Descripción
                th(data-aos="fade-down")(style= "width: 40%") Aplicación en la nube
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Disponibilidad
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Capacidad del servicio para permanecer operativo durante el tiempo requerido.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Garantiza el acceso continuo a aplicaciones y servicios.
              tr
                td(data-aos="fade-down") Escalabilidad
                td(data-aos="fade-down") Posibilidad de aumentar o reducir recursos según la demanda.
                td(data-aos="fade-down") Permite adaptar la infraestructura a cambios en la carga de trabajo.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Rendimiento
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Capacidad para responder de manera eficiente a las solicitudes de los usuarios.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Optimiza los tiempos de respuesta y el uso de los recursos.
              tr
                td(data-aos="fade-down") Seguridad
                td(data-aos="fade-down") Protección de la información y de los recursos tecnológicos.
                td(data-aos="fade-down") Incluye mecanismos de autenticación, autorización, cifrado y monitoreo.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Confiabilidad
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Capacidad del sistema para operar correctamente durante un período determinado.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Reduce fallos y mejora la continuidad del servicio.
              tr
                td(data-aos="fade-down") Mantenibilidad
                td(data-aos="fade-down") Facilidad para realizar actualizaciones, configuraciones y correcciones.
                td(data-aos="fade-down") Simplifica la administración y evolución de la infraestructura.
    p.mb-0(data-aos="fade-down") La adecuada definición de estos requerimientos permite seleccionar la infraestructura más apropiada para cada solución tecnológica y establecer criterios para su implementación, administración y mejora continua. En entornos de computación en la nube, estos aspectos adquieren especial importancia debido a la naturaleza dinámica de los recursos y a la necesidad de garantizar servicios disponibles, seguros y con un rendimiento acorde con las demandas de las organizaciones.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Tipos de servicios en la nube
    p.mb-4(data-aos="fade-down") La computación en la nube ofrece diferentes modelos de servicio que permiten a las organizaciones acceder a recursos tecnológicos según sus necesidades y el nivel de administración que deseen asumir. Estos modelos distribuyen las responsabilidades entre el proveedor de servicios en la nube y el usuario, facilitando desde el acceso a infraestructura hasta el uso de aplicaciones completamente administradas.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-12.order-lg-1.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") Los principales tipos de servicios en la nube son <b>Infraestructura como Servicio (IaaS), Plataforma como Servicio (PaaS) y <em>software</em> como Servicio (SaaS)</b>. Cada uno ofrece diferentes niveles de control, flexibilidad y responsabilidad sobre la infraestructura tecnológica y las aplicaciones.
    .bg05.p-5.px-5.mb-4
      .tarjeta.tarjeta--blanca.p-4
        SlyderA(tipo="b")
          .row
            .col-lg-6.order-2.order-lg-1.mb-4.mb-md-0
              h4 Infraestructura como Servicio (IaaS)
              ul.lista-ul.mb-0
                li.mb-0 Proporciona recursos informáticos básicos, como servidores virtuales, almacenamiento y redes, a través de Internet. En este modelo, el proveedor administra la infraestructura física, mientras que el usuario es responsable de configurar los sistemas operativos, las aplicaciones y los datos según sus necesidades.
                li.mb-0 Este modelo ofrece un alto nivel de flexibilidad y resulta adecuado para organizaciones que requieren mayor control sobre su infraestructura tecnológica.
            .col-lg-6.order-1.order-lg-2.mb-4.mb-md-4
              figure
                img(src='@/assets/curso/temas/t3/img15.jpg', alt='Texto que describa la imagen')
          .row
            .col-lg-6.order-2.order-lg-1.mb-4.mb-md-0
              h4 Plataforma como Servicio (PaaS)
              ul.lista-ul.mb-0
                li.mb-0 Proporciona un entorno de desarrollo y ejecución de aplicaciones que incluye infraestructura, sistemas operativos, herramientas de programación y servicios de soporte. De esta manera, los desarrolladores pueden crear, probar e implementar aplicaciones sin preocuparse por la administración de la infraestructura subyacente.
                li.mb-0 Este modelo reduce la complejidad técnica y acelera el desarrollo de soluciones de <em>software</em>.
            .col-lg-6.order-1.order-lg-2.mb-4.mb-md-4
              figure
                img(src='@/assets/curso/temas/t3/img16.jpg', alt='Texto que describa la imagen')
          .row
            .col-lg-6.order-2.order-lg-1.mb-4.mb-md-0
              h4 <em>software</em> como Servicio (SaaS)
              ul.lista-ul.mb-0
                li.mb-0 Permite utilizar aplicaciones disponibles a través de Internet sin necesidad de instalarlas o administrarlas localmente. El proveedor se encarga de la infraestructura, el mantenimiento, las actualizaciones y la seguridad, mientras que el usuario accede al servicio mediante un navegador <em>web</em> o una aplicación cliente.
                li.mb-0 Este modelo facilita el acceso a herramientas de productividad, colaboración, gestión empresarial y otros servicios ampliamente utilizados por organizaciones y usuarios.
            .col-lg-6.order-1.order-lg-2.mb-4.mb-md-4
              figure
                img(src='@/assets/curso/temas/t3/img17.jpg', alt='Texto que describa la imagen')
    p.mb-4(data-aos="fade-down") A continuación, se presenta una comparación general de los principales tipos de servicios en la nube.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 12.
          span Comparación de los tipos de servicios en la nube
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 10%") Modelo
                th(data-aos="fade-down")(style= "width: 30%") ¿Qué proporciona?
                th(data-aos="fade-down")(style= "width: 30%") Responsabilidad del usuario
                th(data-aos="fade-down")(style= "width: 30%") Ejemplos de uso
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") IaaS
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Infraestructura virtual (servidores, almacenamiento y redes).
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Configurar sistemas operativos, aplicaciones y datos.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Hospedaje de aplicaciones, servidores virtuales y ambientes de desarrollo.
              tr
                td(data-aos="fade-down") PaaS
                td(data-aos="fade-down") Plataforma de desarrollo con herramientas y servicios preconfigurados.
                td(data-aos="fade-down") Desarrollar, probar y administrar aplicaciones.
                td(data-aos="fade-down") Desarrollo e implementación de aplicaciones <em>web</em> y móviles.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") SaaS
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Aplicaciones listas para utilizar mediante Internet.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Administrar el uso de la aplicación y la información generada.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Correo electrónico, ofimática, videoconferencias y gestión empresarial.
    p.mb-0(data-aos="fade-down") Cada uno de estos modelos responde a diferentes necesidades organizacionales y niveles de responsabilidad en la administración de los recursos tecnológicos. La selección del modelo más adecuado depende de factores como el tipo de aplicación, el grado de control requerido, los recursos disponibles y los objetivos de la organización. Comprender estas diferencias, facilita la adopción de soluciones basadas en computación en la nube y contribuye a una gestión más eficiente de la infraestructura y los servicios tecnológicos.
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Modelos de despliegue en la nube
    p.mb-4(data-aos="fade-down") Los modelos de despliegue en la computación en la nube definen la forma en que se organiza, administra y pone a disposición de los usuarios la infraestructura tecnológica que soporta los servicios digitales. Mientras que los modelos de servicio, como Infraestructura como Servicio (IaaS), Plataforma como Servicio (PaaS) y <em>software</em> como Servicio (SaaS), describen el tipo de recurso que ofrece el proveedor, los modelos de despliegue establecen dónde se alojan los recursos y cómo se administran.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-12.col-lg-10.order-lg-1.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") Comprender estos modelos es fundamental, ya que cada uno responde a diferentes necesidades organizacionales relacionadas con la seguridad de la información, el nivel de control sobre la infraestructura, los costos operativos y la capacidad de crecimiento de los servicios. Los principales modelos de despliegue son la nube pública, la nube privada y la nube híbrida.
    AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta tarjeta--C15" data-aos="zoom-in")
      .row.justify-content-center(titulo="a) Nube pública")
        .col-10.order-lg-1.order-2
          p Corresponde a un modelo en el que la infraestructura tecnológica es administrada por un proveedor externo y compartida entre múltiples usuarios a través de Internet. Los recursos, como servidores, almacenamiento y aplicaciones, se encuentran disponibles bajo un esquema de pago por uso, lo que permite acceder a ellos sin necesidad de adquirir ni mantener infraestructura propia.
          p Este modelo se caracteriza por su alta escalabilidad, disponibilidad y facilidad de acceso, siendo una alternativa adecuada para organizaciones que requieren flexibilidad y un rápido crecimiento de sus servicios digitales.
        .col-10.order-lg-2.order-1
          figure
            img(src='@/assets/curso/temas/t3/img18.jpg', alt='Imagen decorativa')
          .cajon.cajon.C03.p-4
            p.mb-0(data-aos="fade-down") Como ejemplo, una empresa de comercio electrónico puede utilizar servicios de nube pública para alojar su plataforma de ventas y gestionar su base de datos, incrementando su capacidad durante temporadas de alta demanda sin realizar inversiones adicionales en infraestructura.
      .row.justify-content-center(titulo="b) Nube privada")
        .col-10.order-lg-1.order-2
          p Ofrece una infraestructura exclusiva para una única organización. Puede implementarse en centros de datos propios o mediante proveedores especializados que suministran recursos dedicados, permitiendo un mayor control sobre la administración, la configuración y la protección de la información.
          p Este modelo resulta apropiado para organizaciones que manejan información sensible o deben cumplir requisitos regulatorios estrictos, ya que facilita la personalización de políticas de seguridad y el control de acceso a los recursos tecnológicos.
        .col-10.order-lg-2.order-1
          figure
            img(src='@/assets/curso/temas/t3/img19.jpg', alt='Imagen decorativa')
          .cajon.cajon.C03.p-4
            p.mb-0(data-aos="fade-down") Por ejemplo, una institución del sector salud puede implementar una nube privada para almacenar historias clínicas electrónicas, garantizando la confidencialidad de la información y el cumplimiento de las disposiciones relacionadas con la protección de datos.
      .row.justify-content-center(titulo="c) Nube híbrida")
        .col-10.order-lg-1.order-2
          p Integra recursos de la nube pública y la nube privada, permitiendo distribuir las aplicaciones y la información según las necesidades de la organización. De esta manera, los sistemas críticos permanecen en un entorno privado, mientras que las cargas de trabajo variables pueden ejecutarse en la nube pública para aprovechar su capacidad de escalamiento.
          p Este modelo combina el control y la seguridad de la nube privada con la flexibilidad y la eficiencia económica de la nube pública, favoreciendo la continuidad de los servicios y la optimización de los recursos tecnológicos.
        .col-10.order-lg-2.order-1
          figure
            img(src='@/assets/curso/temas/t3/img20.jpg', alt='Imagen decorativa')
          .cajon.cajon.C03.p-4
            p.mb-0(data-aos="fade-down") Como ejemplo, el SENA podría mantener la información académica y administrativa en una nube privada, mientras que los contenidos de formación virtual y otros recursos educativos se alojan en una nube pública para facilitar el acceso simultáneo de los aprendices en todo el país.
    p.mb-4(data-aos="fade-down") A continuación, se presenta una comparación de los principales modelos de despliegue en la nube:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 13.
          span Comparación de los modelos de despliegue en la nube
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 10%") Modelo
                th(data-aos="fade-down")(style= "width: 30%") Características principales
                th(data-aos="fade-down")(style= "width: 30%") Ventajas
                th(data-aos="fade-down")(style= "width: 30%") Aplicaciones comunes
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Nube pública
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Infraestructura compartida administrada por un proveedor externo.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Alta escalabilidad, disponibilidad y pago por uso.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Aplicaciones <em>web</em>, almacenamiento, desarrollo de <em>software</em> y servicios digitales.
              tr
                td(data-aos="fade-down") Nube privada
                td(data-aos="fade-down") Infraestructura exclusiva para una organización.
                td(data-aos="fade-down") Mayor control, seguridad y personalización.
                td(data-aos="fade-down") Sistemas críticos, entidades financieras, instituciones gubernamentales y organizaciones con altos requerimientos de seguridad.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Nube híbrida
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Combina recursos de nube pública y privada.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Flexibilidad, optimización de costos y continuidad del negocio.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Integración de aplicaciones, respaldo de información y distribución de cargas de trabajo.
    p.mb-0(data-aos="fade-down") La selección del modelo de despliegue depende de factores como la sensibilidad de la información, los recursos disponibles, los costos de implementación y los objetivos estratégicos de la organización. Comprender las características de cada alternativa facilita la adopción de soluciones de computación en la nube acordes con las necesidades de diferentes entornos.
    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Virtualización y tipos de virtualización
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t4/img21.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") La virtualización es una tecnología que permite crear versiones virtuales de recursos informáticos, como servidores, sistemas operativos, redes o dispositivos de almacenamiento, utilizando una misma infraestructura física. Mediante este proceso, un único equipo puede ejecutar varios entornos independientes, optimizando el aprovechamiento de los recursos disponibles y facilitando la administración de la infraestructura tecnológica.
    p(data-aos="fade-down") La virtualización constituye uno de los fundamentos de la computación en la nube, ya que permite ofrecer recursos informáticos de forma flexible, escalable y eficiente. Gracias a esta tecnología, es posible aprovisionar máquinas virtuales según las necesidades de los usuarios, reducir costos operativos y mejorar la disponibilidad de los servicios.
    p.mb-4(data-aos="fade-down") La virtualización puede implementarse de diferentes maneras, dependiendo del recurso que se virtualiza y del propósito para el cual se utiliza. Cada tipo ofrece características particulares que responden a distintas necesidades dentro de los entornos tecnológicos.
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img22.svg' alt='AvatarTop')
          h4.text-center Virtualización de servidores
          p Permite ejecutar varios servidores virtuales sobre un mismo servidor físico.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img23.svg' alt='AvatarTop')
          h4.text-center Virtualización de sistemas operativos
          p Posibilita la ejecución de múltiples sistemas operativos de forma aislada.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img24.svg' alt='AvatarTop')
          h4.text-center Virtualización de almacenamiento
          p Agrupa diferentes dispositivos de almacenamiento en un recurso lógico.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img25.svg' alt='AvatarTop')
          h4.text-center Virtualización de redes
          p Crea redes virtuales independientes sobre una infraestructura física compartida.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t3/img26.svg' alt='AvatarTop')
          h4.text-center Virtualización de escritorios
          p Facilita el acceso remoto a entornos de trabajo desde diferentes dispositivos.
    p.mb-4(data-aos="fade-down") A continuación, se resumen las principales características de los tipos de virtualización:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 14.
          span Tipos de virtualización y sus aplicaciones
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Tipo de virtualización
                th(data-aos="fade-down")(style= "width: 70%") Aplicación principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Servidores
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Consolidación de servidores físicos y optimización de recursos.
              tr
                td(data-aos="fade-down") Sistemas operativos
                td(data-aos="fade-down") Ejecución de múltiples sistemas operativos independientes.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Almacenamiento
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Administración unificada de recursos de almacenamiento.
              tr
                td(data-aos="fade-down") Redes
                td(data-aos="fade-down") Creación de redes virtuales y segmentación del tráfico.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Escritorios
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Acceso remoto y centralizado a entornos de trabajo.
    p.mb-0(data-aos="fade-down") La virtualización proporciona la base tecnológica sobre la cual operan numerosos servicios de computación en la nube. Al permitir la creación y administración eficiente de recursos virtuales, facilita el aprovisionamiento de infraestructura, mejora la utilización del <em>hardware</em> y contribuye a la flexibilidad requerida por los entornos de nube. Asimismo, constituye un antecedente importante para comprender el funcionamiento de los contenedores, los cuales representan un enfoque diferente para el aislamiento y despliegue de aplicaciones.
    separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 Plataformas de computación en la nube
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.col-12.order-lg-2.order-2
        .row.mb-4
          p.mb-0(data-aos="fade-down") Las plataformas de computación en la nube son entornos tecnológicos que permiten acceder, administrar y utilizar recursos informáticos a través de Internet sin necesidad de mantener una infraestructura física propia. Estas plataformas ofrecen servicios como procesamiento, almacenamiento, redes, bases de datos, herramientas de desarrollo e inteligencia artificial, disponibles bajo modelos de pago por uso y con capacidad de adaptarse a las necesidades de cada organización.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") A través de estas plataformas es posible crear, implementar y administrar aplicaciones, configurar recursos tecnológicos y supervisar el consumo de los servicios contratados. Además, proporcionan herramientas de automatización, mecanismos de seguridad y servicios de monitoreo que facilitan la gestión de infraestructuras en la nube.
      .col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t3/img27.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Actualmente existen diferentes proveedores de servicios <em>cloud</em> que ofrecen soluciones con características similares, aunque cada uno incorpora herramientas y servicios especializados orientados a distintos tipos de organizaciones y proyectos. Entre las plataformas más utilizadas se encuentran Amazon <em>web</em> Services (AWS), Microsoft Azure, Google <em>cloud</em> Platform (GCP) y Oracle <em>cloud</em> Infrastructure (OCI).
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 15.
          span Comparación de plataformas en la nube
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Característica
                th(data-aos="fade-down")(style= "width: 20%") AWS
                th(data-aos="fade-down")(style= "width: 20%") Microsoft Azure
                th(data-aos="fade-down")(style= "width: 20%") Google <em>cloud</em> Platform
                th(data-aos="fade-down")(style= "width: 20%") Oracle <em>cloud</em> Infrastructure
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Enfoque principal
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Amplio portafolio de servicios en la nube.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Integración con el ecosistema Microsoft y entornos híbridos.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Análisis de datos, inteligencia artificial y contenedores.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Bases de datos y aplicaciones empresariales.
              tr
                td(data-aos="fade-down") Servicios ofrecidos
                td(data-aos="fade-down") IaaS, PaaS y SaaS.
                td(data-aos="fade-down") IaaS, PaaS y SaaS.
                td(data-aos="fade-down") IaaS, PaaS y SaaS.
                td(data-aos="fade-down") IaaS, PaaS y SaaS.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Escalabilidad
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Alta.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Alta.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Alta.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Alta.
              tr
                td(data-aos="fade-down") Casos de uso frecuentes
                td(data-aos="fade-down") Aplicaciones empresariales, almacenamiento y desarrollo de <em>software</em>.
                td(data-aos="fade-down") Organizaciones que utilizan tecnologías Microsoft.
                td(data-aos="fade-down") Big Data, aprendizaje automático y análisis de datos.
                td(data-aos="fade-down") Soluciones corporativas y gestión de bases de datos.
    p.mb-4(data-aos="fade-down") Aunque estas plataformas presentan diferencias en sus herramientas y servicios, todas permiten implementar infraestructuras escalables, administrar recursos tecnológicos y desplegar aplicaciones de forma segura y eficiente. La selección de una plataforma depende de factores como las necesidades del proyecto, los servicios requeridos, el presupuesto disponible y el nivel de integración con otras tecnologías utilizadas por la organización.
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        .cajon.cajon.C08.color-primario.p-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t3/img28.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 En conclusión, las plataformas de computación en la nube constituyen el entorno donde se implementan los modelos y servicios estudiados en este capítulo. Conocer sus características generales facilita la comprensión del ecosistema <em>cloud</em> y proporciona criterios básicos para identificar la alternativa más adecuada según los requerimientos de cada proyecto.
</template>
<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
