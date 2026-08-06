<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos de redes y sistemas operativos
    p.mb-4(data-aos="fade-down") Las redes de computadores y los sistemas operativos constituyen la base sobre la cual funcionan las aplicaciones, los servicios digitales y las infraestructuras tecnológicas modernas. Su comprensión es fundamental para la implementación y administración de soluciones informáticas, especialmente en entornos de computación en la nube, donde la conectividad, la disponibilidad y el acceso a los recursos son aspectos esenciales.
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Una red de computadores es un conjunto de dispositivos interconectados que intercambian información y comparten recursos mediante protocolos de comunicación. Estas redes facilitan la transmisión de datos entre usuarios, aplicaciones y sistemas, favoreciendo la colaboración y el acceso a recursos distribuidos. Entre sus principales componentes se encuentran los dispositivos finales, los servidores, los medios de transmisión, los equipos de interconexión y los protocolos de red.
    p.mb-4(data-aos="fade-down") Por su parte, un sistema operativo es el <em>software</em> encargado de administrar los recursos de <em>hardware</em> y proporcionar los servicios necesarios para la ejecución de aplicaciones. Actúa como intermediario entre el usuario, los programas y los componentes físicos del equipo, gestionando procesos, memoria, almacenamiento, dispositivos de entrada y salida, así como mecanismos de seguridad.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img02.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") La integración entre redes y sistemas operativos hace posible la implementación de entornos informáticos eficientes, seguros y escalables. Además, los sistemas operativos modernos incorporan herramientas para la configuración de redes, la administración de usuarios, el control de acceso y el monitoreo de servicios, favoreciendo la operación de infraestructuras locales y de entornos basados en la nube.
        p.mb-0(data-aos="fade-down") En el contexto de la programación de aplicaciones y servicios para la nube, el conocimiento de estos fundamentos permite comprender cómo se comunican los sistemas, cómo se administran los recursos informáticos y cómo se implementan servicios capaces de operar de manera confiable en entornos distribuidos. Estos conocimientos constituyen la base para diseñar, implementar y mantener soluciones tecnológicas alineadas con las necesidades de las organizaciones.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Sistemas operativos de red
    p.mb-4(data-aos="fade-down") Los sistemas operativos de red son plataformas diseñadas para administrar y coordinar los recursos de una red de computadores, permitiendo la comunicación, el intercambio de información y la gestión centralizada de usuarios, dispositivos y servicios. Su principal objetivo es garantizar que los recursos tecnológicos estén disponibles de forma segura, eficiente y controlada para los usuarios autorizados de una organización.
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          p.mb-0(data-aos="fade-down") A diferencia de los sistemas operativos orientados al uso personal, estas plataformas incorporan funcionalidades especializadas para administrar entornos con múltiples usuarios y equipos conectados. Entre estas funcionalidades se encuentran la autenticación de usuarios, el control de acceso a los recursos, la administración de permisos, la configuración de servicios de red y el monitoreo del estado de la infraestructura. Estas capacidades permiten mantener la disponibilidad de los servicios y facilitar la administración de redes tanto locales como distribuidas.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t2/img03.jpg', alt='Imagen decorativa')
    p(data-aos="fade-down") En la actualidad, los sistemas operativos de red constituyen un elemento esencial en los centros de datos y en los entornos de computación en la nube, donde soportan el funcionamiento de servidores físicos y virtuales encargados de ejecutar aplicaciones, almacenar información y ofrecer servicios a usuarios ubicados en diferentes lugares. Gracias a estas plataformas es posible administrar recursos de manera centralizada, automatizar tareas, fortalecer la seguridad y garantizar la continuidad de la operación.
    p.mb-4(data-aos="fade-down") Entre los servicios que normalmente proporcionan estos sistemas operativos se encuentran:
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t2/img04.png", alt="Imagen decorativa")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img05.svg", alt="Imagen decorativa").img100.m-auto
                  p Servicios de autenticación y administración de usuarios.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img06.svg", alt="Imagen decorativa").img100.m-auto
                  p Servicios de archivos e impresión compartida.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img07.svg", alt="Imagen decorativa").img100.m-auto
                  p Servicios de directorio para la administración centralizada de recursos.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img08.svg", alt="Imagen decorativa").img100.m-auto
                  p Servicios de nombres de dominio (DNS) y asignación dinámica de direcciones IP (DHCP).
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img09.svg", alt="Imagen decorativa").img100.m-auto
                  p Servidores <em>web</em>, bases de datos y aplicaciones empresariales.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img10.svg", alt="Imagen decorativa").img100.m-auto
                  p Plataformas de virtualización.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t2/img11.svg", alt="Imagen decorativa").img100.m-auto
                  p Herramientas de administración y monitoreo remoto.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img12.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Por ejemplo, cuando una organización implementa una aplicación o un servicio en la nube, el sistema operativo del servidor administra los recursos de procesamiento, memoria, almacenamiento y red necesarios para su funcionamiento. Al mismo tiempo, controla el acceso de los usuarios, supervisa el estado de los servicios y registra los eventos que permiten detectar fallas o incidentes de seguridad.
        .cajon.cajon.C08.color-primario.p-4.mb-4
          p.mb-0(data-aos="fade-down") Entre los sistemas operativos de red más utilizados se encuentran las distribuciones Linux orientadas a servidores, Microsoft Windows Server y otras plataformas especializadas para la administración de infraestructuras tecnológicas. La elección de una solución depende de factores como los requerimientos de la organización, el nivel de seguridad, la escalabilidad, el rendimiento y la compatibilidad con los servicios que se desean implementar.
        p.mb-0(data-aos="fade-down") La siguiente tabla presenta algunas de las principales características de los sistemas operativos de red.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Características de los sistemas operativos de red
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Característica
                th(data-aos="fade-down")(style= "width: 70%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Administración centralizada
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Gestiona usuarios, grupos, dispositivos y recursos desde un único punto de control.
              tr
                td(data-aos="fade-down") Compartición de recursos
                td(data-aos="fade-down") Facilita el acceso a archivos, impresoras, aplicaciones y otros recursos compartidos.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Seguridad
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Implementa mecanismos de autenticación, autorización, cifrado y auditoría para proteger la información.
              tr
                td(data-aos="fade-down") Soporte para servicios de red
                td(data-aos="fade-down") Permite ejecutar servicios como DNS, DHCP, servidores <em>web</em>, bases de datos y aplicaciones empresariales.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Administración remota
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Facilita la supervisión y gestión de la infraestructura desde diferentes ubicaciones.
              tr
                td(data-aos="fade-down") Escalabilidad
                td(data-aos="fade-down") Permite ampliar la capacidad de la infraestructura conforme aumentan los usuarios y los servicios.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Alta disponibilidad
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Favorece la continuidad del servicio mediante mecanismos de redundancia y recuperación ante fallos.
    p.mb-0(data-aos="fade-down") El conocimiento de los sistemas operativos de red constituye una base para la implementación y administración de infraestructuras tecnológicas y servicios en la nube. Comprender sus características y funcionalidades facilita la gestión eficiente de servidores, redes y aplicaciones, contribuyendo al desarrollo de soluciones seguras, escalables y alineadas con las necesidades de las organizaciones.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Distribuciones, versiones y licenciamiento
    .row.justify-content-center.mb-4
      .col.col-12
        .cajon.cajon.C08.color-primario.p-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img13.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 Los sistemas operativos de red se distribuyen en diferentes versiones y modalidades de licenciamiento para responder a las necesidades de organizaciones, desarrolladores y proveedores de servicios tecnológicos. La elección de una plataforma adecuada influye en aspectos como el rendimiento, la seguridad, la compatibilidad con las aplicaciones y los costos asociados a su implementación y mantenimiento.
    p(data-aos="fade-down") Las distribuciones corresponden a variantes de un sistema operativo que incorporan herramientas, configuraciones y funcionalidades orientadas a diferentes escenarios de uso. Las versiones representan las actualizaciones que incluyen mejoras de rendimiento, correcciones de errores, nuevas funcionalidades y actualizaciones de seguridad. Por su parte, el licenciamiento establece las condiciones legales para utilizar, modificar y distribuir el <em>software</em>.
    p.mb-4(data-aos="fade-down") En términos generales, los sistemas operativos pueden clasificarse según su modelo de licenciamiento en:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t2/img14.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.justify-content-center.align-items-start
            h4 Código abierto
            p.mb-0 Permiten acceder al código fuente, modificarlo y redistribuirlo de acuerdo con los términos de su licencia. Generalmente cuentan con una amplia comunidad de desarrollo y actualización.
      .col-lg-6.col-12.mb-4.d-flex
        .card-custom.w-100.d-flex.flex-column
          figure.px-0.mb-0
            img(src='@/assets/curso/temas/t2/img15.png', alt='Imagen decorativa')
          .bg-c1.flex-grow-1.d-flex.flex-column.justify-content-center.align-items-start
            h4 Comerciales o propietarios
            p.mb-0 Requieren la adquisición de una licencia de uso y ofrecen soporte técnico especializado, certificaciones y actualizaciones administradas por el fabricante.
    p.mb-4(data-aos="fade-down") La siguiente tabla presenta algunos ejemplos de distribuciones y sistemas operativos utilizados en entornos de red.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Distribuciones, versiones y tipos de licenciamiento
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Sistema operativo
                th(data-aos="fade-down")(style= "width: 20%") Distribución o versión
                th(data-aos="fade-down")(style= "width: 20%") Licenciamiento
                th(data-aos="fade-down")(style= "width: 20%") Características principales
                th(data-aos="fade-down")(style= "width: 20%") Uso frecuente
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Ubuntu Server
                td(data-aos="fade-down")(style="background-color: #EEF1F7") 24.04 LTS
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Código abierto
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Estable, fácil de administrar y con soporte de largo plazo.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Servidores <em>web</em>, bases de datos y servicios en la nube.
              tr
                td(data-aos="fade-down") Debian
                td(data-aos="fade-down") Debian 12
                td(data-aos="fade-down") Código abierto
                td(data-aos="fade-down") Alta estabilidad, seguridad y amplia compatibilidad de paquetes.
                td(data-aos="fade-down") Infraestructura empresarial y servidores críticos.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Red Hat Enterprise Linux (RHEL)
                td(data-aos="fade-down")(style="background-color: #EEF1F7") RHEL 9
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Comercial
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Soporte empresarial, actualizaciones certificadas y alta disponibilidad.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Centros de datos y grandes organizaciones.
              tr
                td(data-aos="fade-down") Rocky Linux
                td(data-aos="fade-down") Rocky Linux 9
                td(data-aos="fade-down") Código abierto
                td(data-aos="fade-down") Compatible con RHEL y orientado a entornos empresariales.
                td(data-aos="fade-down") Virtualización y servidores corporativos.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Windows Server
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Windows Server 2025
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Comercial
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Integración con Active Directory y servicios Microsoft.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Redes empresariales y administración de dominios.
              tr
                td(data-aos="fade-down") SUSE Linux Enterprise Server
                td(data-aos="fade-down") SLES 15 SP6
                td(data-aos="fade-down") Comercial
                td(data-aos="fade-down") Alto rendimiento, seguridad y soporte para cargas críticas.
                td(data-aos="fade-down") Entornos corporativos y computación en la nube.
    .row.bg03.justify-content-center.align-items-center.px-3.mb-4
      .col.col-lg-3.col-6.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img16.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        .tarjeta.tarjeta--blanca.p-4
          p.mb-4 La selección de una distribución y de su modelo de licenciamiento debe responder a las necesidades de la organización. Para ello, es recomendable evaluar aspectos como:
          ul.lista-ul--color.mb-4(data-aos="fade-down")
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 Los requerimientos técnicos de la infraestructura.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 El nivel de seguridad requerido.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 La disponibilidad de soporte técnico.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 La compatibilidad con aplicaciones y servicios.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 La frecuencia de actualización y mantenimiento.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 La capacidad de crecimiento o escalabilidad.
            li
              i.fas.fa-cloud-arrow-down
              p.mb-0 El presupuesto destinado a la implementación y administración.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C08.color-primario.p-4
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/t2/img17.svg', alt='Imagen decorativa')
            .col-lg-10.col-12
              p.mb-0 Por ejemplo, una pequeña empresa puede optar por una distribución de código abierto como Ubuntu Server o Rocky Linux para reducir costos de licenciamiento, mientras que una organización que requiere soporte especializado y certificaciones oficiales puede elegir soluciones comerciales como Red Hat Enterprise Linux o Windows Server.
    p.mb-0(data-aos="fade-down") Independientemente de la plataforma seleccionada, es recomendable establecer políticas para la actualización de versiones, la gestión de parches de seguridad y el monitoreo del estado del sistema operativo. Estas prácticas contribuyen a proteger la infraestructura frente a vulnerabilidades conocidas, mantener la disponibilidad de los servicios y garantizar un funcionamiento confiable en entornos de computación en la nube.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Aplicaciones y servicios disponibles
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img18.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Los sistemas operativos de red ofrecen una amplia variedad de aplicaciones y servicios que permiten administrar recursos, facilitar la comunicación entre dispositivos y soportar las operaciones de una organización. Estos servicios constituyen la base para el funcionamiento de aplicaciones empresariales, plataformas <em>web</em> y entornos de computación en la nube, contribuyendo a mejorar la disponibilidad, el rendimiento y la seguridad de la infraestructura tecnológica.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") Entre los servicios más utilizados se encuentran aquellos relacionados con el almacenamiento de información, la autenticación de usuarios, el alojamiento de aplicaciones, la administración de bases de datos, la resolución de nombres de dominio, la asignación de direcciones IP, la transferencia de archivos y el monitoreo de recursos. Su integración permite centralizar la administración de la infraestructura y optimizar el acceso a los recursos tecnológicos.
    p.mb-4(data-aos="fade-down") La siguiente tabla presenta algunas de las aplicaciones y servicios más utilizados en los sistemas operativos de red.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Aplicaciones y servicios disponibles en sistemas operativos de red
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 25%") Aplicación o servicio
                th(data-aos="fade-down")(style= "width: 25%") Función principal
                th(data-aos="fade-down")(style= "width: 25%") Beneficios
                th(data-aos="fade-down")(style= "width: 25%") Ejemplos
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Servidor <em>web</em>
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Publicar aplicaciones y sitios <em>web</em>.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Acceso remoto a información y servicios.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Apache, Nginx e IIS.
              tr
                td(data-aos="fade-down") Servidor de archivos
                td(data-aos="fade-down") Compartir y administrar archivos en la red.
                td(data-aos="fade-down") Centralización y control de la información.
                td(data-aos="fade-down") Samba y NFS.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Servidor de bases de datos
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Almacenar y gestionar datos estructurados.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Integridad, disponibilidad y consultas eficientes.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") MySQL, PostgreSQL y SQL Server.
              tr
                td(data-aos="fade-down") Servicio DNS
                td(data-aos="fade-down") Traducir nombres de dominio en direcciones IP.
                td(data-aos="fade-down") Facilita la localización de recursos en la red.
                td(data-aos="fade-down") BIND y Microsoft DNS.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Servicio DHCP
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Asignar direcciones IP automáticamente.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Reduce errores de configuración manual.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") ISC DHCP y Windows DHCP.
              tr
                td(data-aos="fade-down") Directorio y autenticación
                td(data-aos="fade-down") Gestionar usuarios, grupos y permisos.
                td(data-aos="fade-down") Mayor seguridad y control de acceso.
                td(data-aos="fade-down") Active Directory y OpenLDAP.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Monitoreo y administración
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Supervisar recursos y servicios de la red.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Detección temprana de fallos y optimización del rendimiento.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Zabbix, Nagios y Prometheus.
    p.mb-4(data-aos="fade-down") Aunque cada uno de estos servicios cumple una función específica, en la práctica trabajan de manera integrada. Por ejemplo, cuando un usuario accede a una aplicación <em>web</em>, el servicio <b>DNS</b> traduce el nombre del servidor a una dirección IP, <b>DHCP</b> proporciona la configuración de red al equipo cliente, el servicio de directorio y autenticación verifica la identidad del usuario y el servidor <em>web</em> entrega la aplicación solicitada. Si la aplicación requiere almacenar información, el servidor de bases de datos procesa las consultas correspondientes, mientras que las herramientas de monitoreo supervisan el estado de todos estos servicios.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/t2/img19.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") La disponibilidad de aplicaciones y servicios dentro de un sistema operativo de red permite responder a diferentes necesidades organizacionales, desde la administración de usuarios hasta la implementación de plataformas empresariales complejas. Su adecuada selección e integración favorecen la automatización de procesos, mejoran la colaboración entre áreas de trabajo y facilitan la administración centralizada de los recursos tecnológicos.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") Un funcionamiento adecuado depende de una correcta configuración, monitoreo y actualización de los servicios. Una falla en componentes esenciales, como DNS, DHCP o los servicios de autenticación, puede afectar la disponibilidad de las aplicaciones, la conectividad de los usuarios y la continuidad de las operaciones. Por esta razón, es recomendable implementar mecanismos de supervisión, respaldo y recuperación que contribuyan a mantener la estabilidad y confiabilidad de la infraestructura.
    p.mb-0(data-aos="fade-down") La evolución de la virtualización y de la computación en la nube ha ampliado las capacidades de estos servicios, permitiendo desplegarlos de forma flexible, escalable y con altos niveles de disponibilidad. Esto facilita que las organizaciones adapten su infraestructura a las necesidades del negocio, optimicen el uso de los recursos tecnológicos y garanticen un acceso seguro y eficiente a la información y a las aplicaciones que soportan sus procesos.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Componentes físicos y lógicos de una red
    .bloque-texto-g.bloque-texto-g--inverso.cajon.C09.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t2/img20.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Una red de computadores está conformada por componentes físicos y lógicos que trabajan de manera integrada para permitir la comunicación, el intercambio de información y el acceso a recursos compartidos. Los componentes físicos corresponden a los dispositivos y medios tangibles que conforman la infraestructura de la red, mientras que los componentes lógicos incluyen los programas, protocolos y configuraciones que hacen posible la transmisión y administración de los datos.
    p.mb-4(data-aos="fade-down") La interacción entre ambos tipos de componentes permite establecer redes funcionales, seguras y eficientes. Mientras los componentes físicos proporcionan la infraestructura necesaria para transportar la información, los componentes lógicos definen la forma en que los dispositivos se identifican, se comunican y acceden a los servicios disponibles.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Componentes de una red
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/t2/img21.svg', alt='En la figura 3 se presenta un esquema jerárquico de los componentes de una red, clasificados en componentes físicos y componentes lógicos. Los componentes físicos incluyen equipos de red, como servidores, estaciones de trabajo, switches y routers, además de los medios de transmisión, como cable UTP, fibra óptica y redes Wi-Fi. Los componentes lógicos comprenden los protocolos y el direccionamiento, como TCP/IP, IPv4 e IPv6, así como los servicios de red, entre ellos DNS, DHCP y autenticación.')
      .col-12.mb-0
        figure.movil
          img(src='@/assets/curso/temas/t2/img22.svg', alt='En la figura 3 se presenta un esquema jerárquico de los componentes de una red, clasificados en componentes físicos y componentes lógicos. Los componentes físicos incluyen equipos de red, como servidores, estaciones de trabajo, switches y routers, además de los medios de transmisión, como cable UTP, fibra óptica y redes Wi-Fi. Los componentes lógicos comprenden los protocolos y el direccionamiento, como TCP/IP, IPv4 e IPv6, así como los servicios de red, entre ellos DNS, DHCP y autenticación.')
    p.mb-4(data-aos="fade-down") La identificación de estos componentes facilita la comprensión del funcionamiento de una infraestructura tecnológica y permite reconocer la función que desempeña cada elemento dentro de una red de computadores.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Componentes físicos y lógicos de una red
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 15%") Tipo
                th(data-aos="fade-down")(style= "width: 15%") Componente
                th(data-aos="fade-down")(style= "width: 35%") Descripción
                th(data-aos="fade-down")(style= "width: 35%") Función principal
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Físico
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Servidor
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Equipo que proporciona recursos y servicios a otros dispositivos.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Centralizar información y aplicaciones.
              tr
                td(data-aos="fade-down") Físico
                td(data-aos="fade-down") Estación de trabajo
                td(data-aos="fade-down") Equipo utilizado por los usuarios finales.
                td(data-aos="fade-down") Acceder a los recursos de la red.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Físico
                td(data-aos="fade-down")(style="background-color: #EEF1F7") <em>Switch</em>
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Dispositivo que interconecta equipos dentro de una red local.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Dirigir el tráfico de datos.
              tr
                td(data-aos="fade-down") Físico
                td(data-aos="fade-down") <em>Router</em>
                td(data-aos="fade-down") Equipo encargado de conectar diferentes redes.
                td(data-aos="fade-down") Enrutar paquetes de información.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Físico
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Medios de transmisión
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Infraestructura utilizada para transportar la información entre dispositivos.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Facilitar la comunicación de datos.
              tr
                td(data-aos="fade-down") Lógico
                td(data-aos="fade-down") Dirección IP
                td(data-aos="fade-down") Identificador único asignado a un dispositivo en la red.
                td(data-aos="fade-down") Permitir la comunicación entre equipos.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Lógico
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Protocolo TCP/IP
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Conjunto de reglas para la transmisión de datos.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Garantizar la interoperabilidad entre dispositivos.
              tr
                td(data-aos="fade-down") Lógico
                td(data-aos="fade-down") DNS
                td(data-aos="fade-down") Servicio de resolución de nombres de dominio.
                td(data-aos="fade-down") Traducir nombres de dominio en direcciones IP.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Lógico
                td(data-aos="fade-down")(style="background-color: #EEF1F7") DHCP
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Servicio de asignación automática de direcciones IP.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Simplificar la configuración de la red.
              tr
                td(data-aos="fade-down") Lógico
                td(data-aos="fade-down") Servicios de red
                td(data-aos="fade-down") Aplicaciones y procesos que soportan la operación de la red, como autenticación, compartición de archivos o impresión.
                td(data-aos="fade-down") Proporcionar servicios a usuarios y dispositivos.
    p.mb-0(data-aos="fade-down") La integración adecuada de los componentes físicos y lógicos permite implementar redes eficientes, seguras y escalables, capaces de soportar aplicaciones, servicios empresariales y soluciones basadas en computación en la nube. Comprender la función de cada componente facilita la planificación, implementación y administración de infraestructuras tecnológicas acordes con las necesidades de las organizaciones.
</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
