<script setup>


const props = defineProps({
  obras: {
    type: Array,
    required: true
  }
})

</script>

<template>


<!--   <div class="input-group input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text caveat" id="inputGroup-sizing-sm">Buscar</span>
    </div>
    <input type="text" class="form-control" v-model="aBuscar" aria-label="Small"
      aria-describedby="inputGroup-sizing-sm">
  </div> -->

  <div class="row justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 mt-1">

    <div v-for="obra in props.obras" :key="obra.id_obra">
   
      <div class="col">
        <div class="card bg-transparent" :data-toggle="`modal`" :data-target="`#fotosModalCenter${obra.id_obra}`">
          <div class="container" style="text-align: center;">
            <h5> {{ obra.titulo }} </h5>
            <img :src="obra.foto" class="card-img-top" alt="{{obra.foto}}" />
            <p>por: {{ obra.nombre }} {{ obra.apellido }}</p>
          </div>
        </div>

        <!-- Modal ver obra-->
        <div class="modal fade" :id="`fotosModalCenter${obra.id_obra}`" tabindex="-1" role="dialog"
          aria-labelledby="fotosModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div style="background-color: black;" class="modal-content">
              <div class="modal-header row">
                <h5 style="overflow: auto;" class="modal-title col-auto" id="fotosModalLongTitle">{{ obra.titulo }}</h5>
                <div class="col-auto">
                  <p>Por {{ obra.nombre }} {{ obra.apellido }} &nbsp; {{ obra.id_tipo_usuario }} </p>
                </div>

              </div>
              <div class="modal-body">
                <img class="d-block w-100" :src="obra.foto" alt="First slide">
                <hr style="border: 1px solid">
                <p> {{ obra.descripcion }} </p>
              </div>

              <button type="button" class="btn btn-outline-success">Contactar</button>
              <br>
              <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
        <!--Fin Modal ver obra -->

      </div>
    </div>

  </div>



</template>
