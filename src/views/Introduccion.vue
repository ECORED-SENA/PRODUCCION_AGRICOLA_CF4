<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/bGIAk8dI4z0" title="Introduccion" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5 La auditoría presenta gran relevancia para una empresa, ya que esta surge como respuesta de control y vigilancia de los procesos, procedimientos y actividades ejecutados por la entidad, convirtiéndose en una herramienta de prevención que ayuda al correcto cumplimiento de los objetivos y metas de las empresas, minimizando el riesgo del mal uso de los recursos o de su pérdida absoluta. En este material se presenta el concepto de auditoría, los tipos de auditoría, la metodología para su realización y la aplicación de la auditoría en una empresa específica.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
