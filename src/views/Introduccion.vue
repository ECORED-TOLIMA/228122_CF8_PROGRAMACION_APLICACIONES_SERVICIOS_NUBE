<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-down") La transformación digital ha impulsado a las organizaciones a modernizar sus infraestructuras tecnológicas para responder de manera eficiente a las necesidades de disponibilidad, escalabilidad y continuidad de los servicios. En este contexto, la planeación de los requerimientos, el diseño de la infraestructura y el aprovisionamiento de plataformas constituyen procesos fundamentales para implementar aplicaciones y servicios que satisfagan las demandas de los usuarios y los objetivos del negocio.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/intro/img01.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C08.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Este componente presenta los fundamentos necesarios para comprender la ingeniería y gestión de requisitos, los sistemas operativos de red, la computación en la nube, la virtualización, los contenedores y los servicios de red. Estos conocimientos permiten reconocer los elementos que intervienen en la construcción de infraestructuras tecnológicas modernas y seleccionar los recursos adecuados para el despliegue de aplicaciones y servicios.
        p.mb-0(data-aos="fade-down") Asimismo, se abordan los principales modelos de servicios en la nube, los mecanismos de virtualización y contenerización, así como los conceptos relacionados con el aprovisionamiento de servicios e infraestructura tecnológica. La comprensión de estos temas favorece la adopción de soluciones flexibles, escalables y acordes con las necesidades técnicas y organizacionales.
    p.mb-4(data-aos="fade-down") El desarrollo de estos contenidos proporciona las bases para planear y aprovisionar plataformas tecnológicas que soporten el despliegue de aplicaciones y servicios, contribuyendo al fortalecimiento de competencias relacionadas con la administración de infraestructuras en entornos de computación en la nube.
    p.mb-4(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>
<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
