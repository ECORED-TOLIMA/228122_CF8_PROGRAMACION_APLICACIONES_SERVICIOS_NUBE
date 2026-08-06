<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Contenedores y administración de recursos
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.col-12.order-lg-2.order-2
        p.mb-4(data-aos="fade-down") Los contenedores son una tecnología de virtualización ligera que permite empaquetar aplicaciones junto con sus dependencias, bibliotecas y configuraciones necesarias para su ejecución. A diferencia de las máquinas virtuales, los contenedores comparten el núcleo del sistema operativo anfitrión, lo que reduce el consumo de recursos y mejora el rendimiento. Esta tecnología es ampliamente utilizada en entornos de desarrollo, pruebas, despliegue continuo y computación en la nube debido a su portabilidad, escalabilidad y facilidad de administración.
        .cajon.cajon.C08.color-primario.p-4.mb-0
          p.mb-0(data-aos="fade-down") La administración de recursos en entornos basados en contenedores permite controlar el uso del procesador, la memoria, el almacenamiento y la red, garantizando que las aplicaciones funcionen de manera eficiente y estable. Asimismo, facilita la asignación adecuada de recursos según las necesidades de cada aplicación, contribuyendo al aprovechamiento de la infraestructura tecnológica.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t4/img01.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Los propósitos de la implementación de contenedores y la administración eficiente de recursos son:
    .row.mb-4.justify-content-center
      .col.col-lg-12
        .row
          .col-lg-4.col-md-12.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t4/img02.svg' alt='Imagen decorativa')
              .tarjeta.tarjeta--C14
                .p-4
                  p.mb-0 Aprovechar de manera eficiente la capacidad de procesamiento, memoria y almacenamiento disponibles.
          .col-lg-4.col-md-12.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t4/img03.svg' alt='Imagen decorativa')
              .tarjeta.tarjeta--C14
                .p-4
                  p.mb-0 Permitir la implementación rápida y consistente de aplicaciones en diferentes entornos.
          .col-lg-4.col-md-12.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t4/img04.svg' alt='Imagen decorativa')
              .tarjeta.tarjeta--C14
                .p-4
                  p.mb-0 Incrementar o reducir recursos según la demanda de los servicios.
    .row.mb-4.justify-content-center
      .col.col-lg-12
        .row.justify-content-center
          .col-lg-4.col-md-12.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t4/img05.svg' alt='Imagen decorativa')
              .tarjeta.tarjeta--C14
                .p-4
                  p.mb-0 Facilitar la ejecución uniforme de aplicaciones en distintos sistemas y plataformas.
          .col-lg-4.col-md-12.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t4/img06.svg' alt='Imagen decorativa')
              .tarjeta.tarjeta--C14
                .p-4
                  p.mb-0 Supervisar el rendimiento y la disponibilidad de los recursos tecnológicos.
    .row.justify-content-center.align-items-center.mb-0
      .col.col-lg-1.col-6.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img07.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-4.py-3
          p.mb-0(data-aos="fade-down") La adopción de contenedores contribuye a la construcción de infraestructuras más ágiles, flexibles y eficientes, facilitando el desarrollo y la operación de aplicaciones modernas en entornos de computación en la nube.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Características de los contenedores
    p(data-aos="fade-down") Los contenedores se han consolidado como una de las principales tecnologías para el desarrollo y la implementación de aplicaciones en entornos de computación en la nube. Su arquitectura ligera y la posibilidad de ejecutar aplicaciones de manera consistente en diferentes plataformas facilitan la automatización de procesos, el aprovechamiento de los recursos tecnológicos y la implementación de arquitecturas modernas.
    p.mb-4(data-aos="fade-down") Principales características de los contenedores:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img08.svg' alt='AvatarTop')
          h4.text-center La portabilidad
          p Permite ejecutar una aplicación en diferentes entornos sin necesidad de modificar su configuración. Esto facilita el traslado de aplicaciones entre ambientes de desarrollo, pruebas y producción, garantizando un comportamiento consistente.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img09.svg' alt='AvatarTop')
          h4.text-center El aislamiento
          p Permite que cada contenedor opere de manera independiente, evitando que los procesos o fallos de una aplicación afecten el funcionamiento de las demás. Esta característica mejora la estabilidad y fortalece la seguridad del entorno de ejecución.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img10.svg' alt='AvatarTop')
          h4.text-center La escalabilidad
          p Facilita aumentar o disminuir la cantidad de contenedores según la demanda de los servicios o las necesidades de procesamiento. Esta capacidad resulta especialmente útil en aplicaciones <em>web</em>, plataformas de comercio electrónico y servicios empresariales.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img11.svg' alt='AvatarTop')
          h4.text-center La eficiencia en el uso de recurso
          p Se logra al compartir el sistema operativo anfitrión, reduciendo el consumo de memoria y procesamiento frente a otros mecanismos de virtualización. Esto permite ejecutar un mayor número de aplicaciones sobre una misma infraestructura.
        .tarjeta.tarjeta--bg04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/t4/img12.svg' alt='AvatarTop')
          h4.text-center La automatización
          p Favorece procesos como el despliegue, la actualización y la recuperación de aplicaciones, reduciendo los tiempos de implementación y mejorando la continuidad operativa de los servicios.
    p.mb-0(data-aos="fade-down") En conjunto, estas características convierten a los contenedores en una tecnología fundamental para el desarrollo de aplicaciones modernas y la implementación de arquitecturas basadas en microservicios, contribuyendo a optimizar la administración de recursos y la disponibilidad de los servicios en entornos de computación en la nube.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Imágenes, volúmenes y enlaces
    p.mb-4(data-aos="fade-down") Una gestión adecuada de las imágenes contribuye a mantener la consistencia de los entornos de ejecución, optimizar el uso del almacenamiento y facilitar la implementación de nuevas versiones de las aplicaciones. Estas prácticas favorecen la automatización de los procesos de despliegue y fortalecen la eficiencia en la administración de infraestructuras basadas en contenedores.
    .row.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-8.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        AcordionA.mb-0(tipo="a" clase-tarjeta="tarjeta tarjeta--C15" data-aos="zoom-in")
          .row.justify-content-center(titulo="Imágenes")
            .col-12.order-lg-1.order-2
              ul.lista-ul.mb-0
                li.mb-4
                  i.lista-ul__vineta
                  p.mb-0 Las imágenes son plantillas que contienen el sistema de archivos, las bibliotecas, las dependencias, la configuración y las aplicaciones necesarias para crear un contenedor. A partir de una misma imagen es posible generar múltiples contenedores con una configuración idéntica, garantizando consistencia entre los entornos de desarrollo, pruebas y producción.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0  Las imágenes se almacenan en repositorios locales o remotos, desde donde pueden compartirse, actualizarse y reutilizarse para implementar aplicaciones de manera rápida y estandarizada.
          .row.justify-content-center(titulo="Volúmenes")
            .col-12.order-lg-1.order-2
              ul.lista-ul.mb-0
                li.mb-4
                  i.lista-ul__vineta
                  p.mb-0 Los volúmenes constituyen mecanismos de almacenamiento persistente que permiten conservar la información generada por las aplicaciones, incluso cuando un contenedor es detenido, eliminado o reemplazado. Gracias a esta característica, los datos permanecen disponibles y pueden ser reutilizados por nuevos contenedores.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 Su utilización resulta especialmente importante en aplicaciones que administran bases de datos, archivos de configuración o información de usuarios, donde la conservación de los datos es un requisito fundamental.
          .row.justify-content-center(titulo="Enlaces")
            .col-12.order-lg-1.order-2
              ul.lista-ul.mb-0
                li.mb-4
                  i.lista-ul__vineta
                  p.mb-0 Los enlaces permiten establecer la comunicación entre contenedores para intercambiar información y acceder a servicios compartidos. Aunque actualmente existen mecanismos de comunicación más avanzados basados en redes de contenedores, el concepto de enlace continúa siendo útil para comprender cómo interactúan diferentes aplicaciones dentro de un mismo entorno.
                li.mb-0
                  i.lista-ul__vineta
                  p.mb-0 La comunicación entre contenedores facilita la construcción de aplicaciones distribuidas, en las que distintos servicios trabajan de forma coordinada para ofrecer una solución integrada.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/t4/img13.png', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") A continuación, se presenta una comparación de los principales elementos utilizados en la gestión de contenedores:
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 16.
          span Imágenes, volúmenes y enlaces en contenedores
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Elemento
                th(data-aos="fade-down")(style= "width: 40%") Función principal
                th(data-aos="fade-down")(style= "width: 40%") Beneficio
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Imagen
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Contiene la configuración y los archivos necesarios para crear un contenedor.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Permite implementar aplicaciones de manera consistente en diferentes entornos.
              tr
                td(data-aos="fade-down") Volumen
                td(data-aos="fade-down") Almacena información de forma persistente.
                td(data-aos="fade-down") Conserva los datos aunque el contenedor sea eliminado o reemplazado.
              tr
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Enlace
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Facilita la comunicación entre contenedores.
                td(data-aos="fade-down")(style="background-color: #EEF1F7") Favorece la integración y el funcionamiento coordinado de aplicaciones y servicios.
    p.mb-0(data-aos="fade-down") En conjunto, las imágenes, los volúmenes y los enlaces constituyen elementos fundamentales para la administración de contenedores, ya que permiten implementar aplicaciones de forma consistente, conservar la información generada durante su ejecución y facilitar la comunicación entre los diferentes servicios que conforman una solución basada en contenedores.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Despliegue y gestión de imágenes
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") El despliegue de imágenes consiste en utilizar una imagen previamente creada para generar uno o varios contenedores capaces de ejecutar una aplicación en diferentes entornos. Este proceso garantiza que la aplicación conserve la misma configuración, dependencias y comportamiento, reduciendo errores asociados a diferencias entre los ambientes de desarrollo, pruebas y producción.
        .cajon.cajon.C08.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") La gestión de imágenes comprende el conjunto de actividades orientadas a crear, almacenar, identificar, distribuir, actualizar y eliminar imágenes de manera organizada. Una adecuada administración facilita el control de versiones, la reutilización de componentes y el mantenimiento de aplicaciones basadas en contenedores.
        p.mb-0(data-aos="fade-down") El proceso de despliegue y gestión de imágenes incluye las siguientes actividades principales:
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/t4/img14.jpg', alt='Imagen decorativa')
    .row.mb-4
      .col-12
        .px-0.py-0
          .row.align-items-center.bg01(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block.py-0.px-2
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/t4/img15.png", alt="Imagen decorativa")
            .col-lg-8.px-0.py-4
              SlyderF.custom.color-acento-botones.px-lg-5.py-0.px-0(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img16.svg", alt="Imagen decorativa").img100.m-auto
                  p Servicios de autenticación y administración de usuarios.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img17.svg", alt="Imagen decorativa").img100.m-auto
                  p Servicios de archivos e impresión compartida.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img18.svg", alt="Imagen decorativa").img100.m-auto
                  p Servicios de directorio para la administración centralizada de recursos.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img19.svg", alt="Imagen decorativa").img100.m-auto
                  p Servicios de nombres de dominio (DNS) y asignación dinámica de direcciones IP (DHCP).
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img20.svg", alt="Imagen decorativa").img100.m-auto
                  p Servidores <em>web</em>, bases de datos y aplicaciones empresariales.
                .tarjeta.tarjeta--slyder.p-4.py-2
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-6
                      img(src="@/assets/curso/temas/t4/img21.svg", alt="Imagen decorativa").img100.m-auto
                  p Plataformas de virtualización.
    p.mb-0(data-aos="fade-down") Una gestión adecuada de las imágenes contribuye a mantener la consistencia de los entornos de ejecución, optimizar el uso del almacenamiento y facilitar la implementación de nuevas versiones de las aplicaciones. Estas prácticas favorecen la automatización de los procesos de despliegue y fortalecen la eficiencia en la administración de infraestructuras basadas en contenedores.
</template>
<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
