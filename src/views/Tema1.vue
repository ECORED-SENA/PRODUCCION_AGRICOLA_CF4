<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Auditorías

    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          img(src='@/assets/curso/auditoria_titulo.svg', alt='Imagen que representa el concepto de auditoria')
        .col-lg-7
          .bloque-texto-a__texto.p-4.h-100
            div(style="display: table; height: 100%; overflow: hidden;")
              div(style="display: table-cell; vertical-align: middle;")
                p En la implementación de Buenas Prácticas Agrícolas y en la mayoría de sistemas de aseguramiento de calidad hay que adelantar actividades de auditoría que nos ayuden a establecer el grado de cumplimiento frente a los estándares normativos para poder optar a una certificación.


    .titulo-segundo
      #t_1_1.h4 1.1   Concepto de auditoría

    .row.justify-content-center
      .col-11
        .cajon--azul.p-4.mb-5.mb-lg-0
          .row.align-items-center
            .col-md-9
              p Proceso sistemático, independiente y documentado para obtener evidencias  y evaluarlas de manera objetiva, con el fin de determinar el grado en que se cumplen los criterios de auditoría.
            .col-md-3
              img(src='@/assets/curso/concepto_auditoria.svg', alt='Imagen que representa el concepto de auditoria', style='height: 180px')


    .tarjeta--container.row.mb-1.mt-5
      .col-md.tarjeta.tarjeta--verdeclaro.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/auditoria_combinada.svg', alt='Imagen que representa el auditoria conjunta')
        .h3.text-center Auditoría<br>combinada
        p.text-center Auditoría llevada a cabo en dos o más sistemas de  gestión.

      .col-md.tarjeta.tarjeta--celeste.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/auditoria_conjunta.svg', alt='Imagen que representa el auditoria conjunta')
        .h3.text-center Auditoría<br>conjunta
        p.text-center Auditoría llevada a cabo a un único auditado por dos o más organizaciones auditoras.

    div.text-center.mb-5 Nota.  ISO 9000:2015.

    .titulo-segundo
      #t_1_2.h4 1.2   Tipos de auditorías

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/yjTzSupLG64" title="Tipos de auditoria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4 A continuación, puede revisar los tipos de auditoría que se realizan en este campo.

    TabsC.mb-5
      .py-3.py-md-4(titulo="Auditorías internas").background-azulclaro-3
        .row.m-5
          .col-md-6
            figure
              img(src='@/assets/curso/auditoria_interna.svg', alt='Imagen que representa una auditoria interna')
          .col-md-6.mb-4.mb-md-0
            .h4 Auditorías internas
            p Es la auditoría realizada por la organización a sus propios sistemas y procedimientos, normalmente conocidas como auditorías de primera parte, son realizadas por o en nombre de la misma organización.
            br
            | Su objetivo es <strong> asegurar el mantenimiento, desarrollo y mejoramiento del sistema de calidad</strong>.

      .py-3.py-md-4(titulo="Auditorías externas").background-azulclaro-3
        .row.m-5
          .col-md-6
            .h4 Auditorías externas
            p Incluidas las denominadas auditorías de segunda y tercera parte.
            br
            br
            | <strong>Auditorías de segunda parte</strong>:  son realizadas por partes que tienen algún interés en la organización, como clientes o individuos en su nombre, entre la cuales están la auditoría a proveedor externo y auditoría a partes interesadas externas.
            br
            br
            | Su objetivo es <strong>determinar la adecuación y evaluar el desempeño de proveedores externos y partes interesadas externas.</strong>
            br
            br
            | <strong>Auditorías de tercera parte:</strong>  son realizadas por organismos independientes de auditoría, tales como aquellas que otorgan certificación/registro de conformidad o agencias gubernamentales.
            br
            br
            | Por tanto, en la auditoría de tercera parte se encuentra la auditoría de certificación, acreditación y auditoría legal, regulatoria o similar.
            br
            br
            | Su objetivo es <strong>determinar si el sistema de calidad de una organización ha sido documentado e implementado de acuerdo con una norma/reglamento específico.</strong>
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/auditoria_externa.svg', alt='Imagen que representa una auditoria externa')

    .titulo-segundo
      #t_1_3.h4 1.3   Metodología para su realización

    .row.align-items-center
      .col-md
        p La calidad es una ventaja competitiva para todo tipo de empresa, es así como las implantaciones de buenas prácticas agrícolas en los sistemas productivos aportan dicha ventaja de calidad y por ende, una vez la finca o la unidad productiva ha inculcado el desarrollo de BPA obliga a la gerencia a estar atenta sobre su comportamiento, cuidando la forma como se está manteniendo, su alcance, logros, así como sus debilidades.
        br
        br
        | Por tanto, realizar auditoría al proceso de BPA es importante, ya que permite a la unidad productiva mejorar sus funciones de forma continua y, verificar si las actividades relacionadas con BPA están conformes con las especificaciones técnicas y normativas.
      .col-md-4
        img(src='@/assets/curso/business_analysis.svg', alt='Imagen que representa el concepto de auditoria', style='height: 320px;')

    p.mt-4 Para realizar el proceso de auditoría debe realizar un seguimiento que implica “ir detrás” y controlar para medir el progreso y los niveles de cumplimiento, así mismo, indicar acciones correctivas o quizás el establecimiento de nuevas metas y planes.
    br
    p.mb-4 Mediante la evaluación puede verificar en qué grado los objetivos específicos establecidos en su programa de BPA se están cumpliendo, y así poder identificar en qué medida los objetivos trazados son alcanzables y si los métodos fueron adecuados.

    .row
      .col-1
      .col-11
        h5.mt-5.mb-5 Etapas de la auditoria
    img.w-100(src='@/assets/curso/mapa_conceptual_1.svg', alt='Etapas de la auditoria')

    .row
      .col-1
      .col-10
        h5.mt-5.mb-5 Etapas de la auditoria
        img.w-100.mb-5(src='@/assets/curso/mapa_mental_1.svg', alt='Etapas de la auditoria')

    .row
      .col-1
      .col-10
        p.h5.mb-4 Inicio de la auditoría
        .cajon--azul.p-4.mb-5.mb-lg-0
          p.mb-4 <strong>Establecimiento del contacto inicial con el auditado:</strong> el líder del equipo auditor debe asegurarse de que se hace contacto inicial con el auditado para:
          ul.lista-ul--color
            li
              i.fas.fa-file-alt
              | Confirmar los canales de comunicación.
            li
              i.fas.fa-file-alt
              | Proveer información relevante de los objetivos, alcance, criterios, métodos de la auditoría y la composición del equipo auditor, incluyendo los expertos técnicos.
            li
              i.fas.fa-file-alt
              | Solicitar acceso a la información relevante.
            li
              i.fas.fa-file-alt
              | Determinar requisitos legales y reglamentarios aplicables y otros requisitos relevantes.
            li
              i.fas.fa-file-alt
              | Realizar acuerdos para la auditoría, incluyendo el cronograma; determinar cualquier acuerdo específico en la ubicación en lo referente a acceso, salud, seguridad, confidencialidad.
        .cajon--rojo.p-4.mb-5.mb-lg-0.mt-4
          p.mb-4 <strong>Preparación de actividades:</strong> se deben realizar las siguientes tareas.
          ul.lista-ul--color
            li
              i.fas.fa-file-alt
              | Revisión de la información documentada (documentos y registros del sistema de gestión, así como informes de auditorías previos.
            li
              i.fas.fa-file-alt
              | Planificación de la auditoría – elaboración del plan de auditoría: en la planificación de la auditoría, el líder del equipo auditor debe considerar la composición del equipo auditor y su competencia general; las técnicas apropiadas de muestreo y riesgos.
            li
              i.fas.fa-file-alt
              | Asignación de tareas al equipo: el líder del equipo auditor en acuerdo con el equipo auditor debe asignar a cada miembro procesos específicos, actividades, funciones o ubicaciones y, según sea apropiado, tiene autoridad para tomar decisiones.
            li
              i.fas.fa-file-alt
              | Preparación de la información documentada para la auditoría: se debe elaborar el documento de trabajo que serán las listas de variación, tenga en cuenta para su elaboración los procesos que se llevan a cabo, procedimientos pertinentes, documentos y registros que se utilizan en el proceso y los requisitos de la norma a auditar.

        p.mt-5(style="font-size: 1.5em") <strong>Realización de actividades:</strong> ejecución de la auditoría

        ol.lista-ol--cuadro
          hr
          li
            .lista-ol--cuadro__vineta
              span a
            | <strong>Reunión de apertura:</strong> como actividad de inicio.
          hr
          li
            .lista-ol--cuadro__vineta
              span b
            .col-12
              p <strong>Recolección y verificación de la información:</strong> en la medida de lo posible, los auditores deben considerar si la información proporcionada es suficiente evidencia objetiva para demostrar conformidad de los requisitos. <br><br> Para esto tenga en cuenta que la información cumpla con los siguientes ítem:
              .row.m-5
                .col-sm-6.col-lg-3.mb-4.mb-lg-0
                  .tarjeta.tarjeta-100.p-3.background-azulclaro-3
                    .row.justify-content-center.mb-3
                      .col-7
                        figure
                          img(src='@/assets/curso/recoleccion_completa.svg', alt='Recoleccion completa', style='width: 200px')

                    .h5.text-center COMPLETA
                    p.text-small Todo el contenido esperado esté incluido en la información documentada.

                .col-sm-6.col-lg-3.mb-4.mb-lg-0
                  .tarjeta.tarjeta-100.p-3.background-azulclaro-3
                    .row.justify-content-center.mb-3
                      .col-7
                        figure
                          img(src='@/assets/curso/recoleccion_correcta.svg', alt='Recoleccion correcta', style='width: 200px')

                    .h5.text-center CORRECTA
                    p.text-small El contenido está conforme respecto a otras fuentes confiables tales como normas o regulaciones.

                .col-sm-6.col-lg-3.mb-4.mb-sm-0
                  .tarjeta.tarjeta-100.p-3.background-azulclaro-3
                    .row.justify-content-center.mb-3
                      .col-7
                        figure
                          img(src='@/assets/curso/recoleccion_consistente.svg', alt='Recoleccion consistente')

                    .h5.text-center CONSISTENTE
                    p.text-small La información documentada es consistente individualmente y con otros documentos relacionados.

                .col-sm-6.col-lg-3
                  .tarjeta.tarjeta-100.p-4.background-azulclaro-3
                    .row.justify-content-center.mb-3
                      .col-7
                        figure
                          img(src='@/assets/curso/recoleccion_actualizada.svg', alt='Recoleccion actualizada')

                    .h5.text-center ACTUALIZADA
                    p.text-small El contenido está actualizado.
              .p-4
                p Por lo tanto, para el desarrollo de la auditoría a una unidad productiva es necesario realizar la revisión de cada uno de los procesos que se han desarrollado en la implementación de BPA y la normativa aplicable, para esto el personal encargado de la auditoría debe realizar la verificación de las evidencias de cumplimiento frente a los puntos contenidos en los protocolos, y documentar el cumplimiento de dichas evidencias.
                br
                p Para dar inicio a la auditoría el personal seleccionado como auditor debe diligenciar completamente la lista de verificación del estándar establecida en la normatividad de BPA; en el diligenciamiento de la lista de chequeo debe seleccionar e incluir comentarios y/o justificaciones en todos los puntos mayores y en todos los requisitos fundamentales, mayores y menores o puntos recomendados cuyo resultado sea No cumple (NO) o No Aplica (N/A).
                br
                div
                  ul.lista-ul--color
                    li
                      i.fas.fa-file-alt
                      | Cuando se opta por certificación individual es posible que el mismo productor realice una autoinspección para detectar los incumplimientos, diligenciando para tal efecto el formato de acciones correctivas y documentar el seguimiento al cierre de dichos incumplimientos.
                    li
                      i.fas.fa-file-alt
                      | En el caso de la implementación y certificación de BPA en grupos de productores, las auditorías internas se deben realizar a cada una de las unidades productivas, el auditor interno debe cumplir con unos requisitos mínimos de formación y competencia.

          hr.mt-0
          li
            .lista-ol--cuadro__vineta
              span c
            .col-12
              p.mb-4(style="width: 100%;") <strong>Generación de hallazgos:</strong> los hallazgos de auditoría pueden indicar la conformidad o no conformidad respecto a los criterios de auditoría. Cuando se determinen los hallazgos de la auditoría se debe considerar lo siguiente:
              div
                ul.lista-ul--color
                  li
                    i.fas.fa-file-alt
                    | El seguimiento a los registros y conclusiones de auditorías previas.
                  li
                    i.fas.fa-file-alt
                    | Requisitos del cliente de la auditoría.
                  li
                    i.fas.fa-file-alt
                    | Precisión, suficiencia e idoneidad de la evidencia objetiva que soporta los hallazgos de la auditoría.
                  li
                    i.fas.fa-file-alt
                    | Hallazgos que exceden las prácticas normales u oportunidades de mejora.
          hr
          li
            .lista-ol--cuadro__vineta
              span d
            .col-12
              p(style="width: 100%;") <strong>Registro de no conformidades:</strong> para el registro de las no conformidades se deben considerar los siguientes pasos:
              div.mt-3
                ul.lista-ul--color
                  li
                    i.fas.fa-file-alt
                    | Descripción o referencia a los criterios de auditoría.
                  li
                    i.fas.fa-file-alt
                    | Evidencia de auditoría.
                  li
                    i.fas.fa-file-alt
                    | Declaración de la no conformidad.
          hr
          li
            .lista-ol--cuadro__vineta
              span e
            .col-12
              p(style="width: 100%;") <strong>Conclusión:</strong>  las conclusiones de auditoría deben direccionar aspectos tales como:
              div.mt-3
                ul.lista-ul--color
                  li
                    i.fas.fa-file-alt
                    | La eficaz implementación, mantenimiento y mejora del sistema de gestión.
                  li
                    i.fas.fa-file-alt
                    | El logro de los objetivos de auditoría, cubrimiento del alcance y cumplimiento de los criterios de auditoría.
                  li
                    i.fas.fa-file-alt
                    | Hallazgos similares levantados en diferentes áreas que fueron auditadas en una auditoría individual o conjunta previa, con el propósito de identificar tendencias.
          hr
          li
            .lista-ol--cuadro__vineta
              span f
            .col-12
              p(style="width: 100%;") <strong>Reunión de cierre:</strong> se lleva a cabo por parte del auditor líder.
              div.mt-3
                ul.lista-ul--color
                  li
                    i.fas.fa-file-alt
                    | El auditor debe estar preparado para explicar todos los hallazgos y evidencias en forma cuidadosa y precisa.
                  li
                    i.fas.fa-file-alt
                    | Asegurarse que el auditado comprende todos los hallazgos, las no conformidades e inquietudes.
                  li
                    i.fas.fa-file-alt
                    | Debe llevarse a cabo inmediatamente después de la conclusión de la evaluación del sistema.
                  li
                    i.fas.fa-file-alt
                    | Nombrar fortalezas y debilidades.
                  li
                    i.fas.fa-file-alt
                    | Completar los formatos de acciones correctivas solicitadas y de acuerdo con las fechas para el cierre de la acción correctiva.
          hr.mb-5

        .cajon--azul.p-4.mb-5.mb-lg-0
          p.mb-4 <strong>Preparación de informe:</strong> el informe de la auditoría debe llevar como mínimo:
          ul.lista-ul--color
            li
              i.fas.fa-file-alt
              | Nombre de la organización.
            li
              i.fas.fa-file-alt
              | Fecha y lugar de la auditoría.
            li
              i.fas.fa-file-alt
              | Objetivos, alcance y criterios de la auditoría.
            li
              i.fas.fa-file-alt
              | Personal clave contactado.
            li
              i.fas.fa-file-alt
              | Miembros del equipo auditor.
            li
              i.fas.fa-file-alt
              | Solicitudes de acciones correctivas emitidas.
            li
              i.fas.fa-file-alt
              | Conclusión.
            li
              i.fas.fa-file-alt
              | Resumen de los principales puntos de la auditoría (análisis de las fortalezas del sistema y capacidad del sistema para lograr los objetivos de calidad definidos).
            li
              i.fas.fa-file-alt
              | Lista de distribución.

        .cajon--rojo.p-4.mb-5.mb-lg-0.mt-5
          p <strong>Actividades de seguimiento:</strong> este punto consiste en verificar el cumplimiento del plan de mejora continua de acuerdo con la propuesta, planificación e implementación.
          br
          p La evaluación es necesaria para poder observar las anomalías que han surgido en el tiempo de ejecución, para lo cual se recomienda realizar un informe sobre la evaluación, indicando las ventajas y desventajas de los resultados obtenidos del plan de mejora.

        .cajon--azul.p-4.mb-5.mb-lg-0.mt-5
          p.mb-4 <strong>Registro de acciones correctivas:</strong>
          ul.lista-ul--color
            li
              i.fas.fa-file-alt
              | El registro de acciones correctivas debe diligenciarse con copia para el productor y el auditor interno; el cual debe incluir todos los puntos mayores y menores cuyo resultado haya sido no cumple, ya que estas son las que se convierten en las no conformidades resultantes de la auditoría interna.
            li
              i.fas.fa-file-alt
              | En el registro de acciones correctivas se debe incluir una descripción breve del hallazgo que dio como resultado la no conformidad.
            li
              i.fas.fa-file-alt
              | Formular las acciones que deben seguirse para corregir el incumplimiento o no conformidad.
            li
              i.fas.fa-file-alt
              | Toda acción correctiva debe tener un responsable para su implementación y seguimiento.
            li
              i.fas.fa-file-alt
              | Toda acción correctiva debe tener una fecha límite para su implementación.
            li
              i.fas.fa-file-alt
              | Cuando se realice el seguimiento a las acciones correctivas se debe registrar al responsable del seguimiento, la fecha y si la no conformidad queda cerrada o no.
            li
              i.fas.fa-file-alt
              | Para definir si la no conformidad queda cerrada el auditor debe verificar que las acciones correctivas tomadas fueron efectivas, en caso contrario se deja abierta la no conformidad y se redacta otra vez en un nuevo registro de acciones correctivas, para definir nuevamente plazos y responsables.

        img.p-5(src='@/assets/curso/mapa_conceptual_2.svg', alt='Etapas de la auditoria')

        p.mb-5 En conclusión, dentro de las tareas claves del auditor está realizar inspecciones de las unidades productivas y sitios de manipulación del producto para evaluar el cumplimiento con el protocolo seleccionado y elaborar informes precisos de dichas inspecciones, que incluyan la documentación de las no conformidades detectadas y el diligenciamiento del formato de registro de acciones correctivas. El auditor interno debe ser independiente y no puede inspeccionar su propio trabajo.

    .titulo-segundo
      #t_1_4.h4 1.4   Aplicación de la auditoría en la empresa

    .cajon--azul.p-4.mb-5.mb-lg-0
      .row
        .col-md-7
          ul.lista-ul--color.green
            li
              i.fas.fa-check
              | La auditoría ayuda a verificar y evaluar las actividades relacionadas con la calidad, así como la identificación y mejora de las áreas no conformes con el modelo exigido.
            li
              i.fas.fa-check
              | Proporciona a la organización el poder ofrecer un producto/servicio que satisfaga las necesidades de los clientes, y que sea reconocida por su prestigio y buena calidad.
            li
              i.fas.fa-check
              | Permite ser competitiva con respecto a otras empresas que ofrezcan el mismo producto/servicio.
            li
              i.fas.fa-check
              | Es una herramienta que contribuye al mejoramiento de la calidad, dirigida al usuario que requiere el producto/servicio.
            li
              i.fas.fa-check
              | La empresa auditada mantiene al día sus actividades (procesos, producción, sistema, etc.).

        .col-md-5
          img(src='@/assets/curso/final.svg', alt='Aplicacion de la auditoria')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
