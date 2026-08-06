<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La infraestructura tecnológica y los servicios en la nube constituyen la base para el desarrollo, implementación y administración de soluciones digitales modernas. La adecuada identificación y gestión de requisitos, el conocimiento de los sistemas operativos y las redes, junto con la comprensión de la computación en la nube, la virtualización, los contenedores y los servicios de infraestructura, permiten diseñar entornos tecnológicos eficientes, seguros y escalables. Estos fundamentos facilitan la toma de decisiones relacionadas con el aprovisionamiento de recursos y la gestión de servicios tecnológicos, contribuyendo al desarrollo de soluciones alineadas con las necesidades de las organizaciones y los desafíos de la transformación digital.
    .row.justify-content-center
      .col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presentan los principales temas relacionados con la infraestructura tecnológica y los servicios en la nube, incluyendo la ingeniería y gestión de requisitos, los fundamentos de redes y sistemas operativos, la computación en la nube, los contenedores y los servicios de red para la gestión de infraestructura tecnológica.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
