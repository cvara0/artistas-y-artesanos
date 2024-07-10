<script setup>
import ModalFotos from '@/components/UI/ModalFotos.vue'
import { usuariosDb } from '../../data/usuariosData'
import { computed, onMounted, reactive, ref, watch } from 'vue';

const props = defineProps({
  obras: {
    type: Array,
    required: true
  }
})

/*const obrasRef = ref([])
onMounted(()=>{
 obrasRef.value = props.obras
 
})
const aBuscar = ref('')

const state = reactive({
 usuario : {}
})

const buscarAutor = (i) => {
   state.usuario = usuariosDb.find(u => u.idUsuario === i)
}
watch(aBuscar, ()=>{
   obrasRef.value = props.productos
   productosRef.value = productosRef.value.filter(i => i.titulo.toLowerCase().includes(aBuscar.value.toLowerCase()))

},{
 deep: false
})

*/



</script>

<template>


  <div class="input-group input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text caveat" id="inputGroup-sizing-sm">Buscar</span>
    </div>
    <input type="text" class="form-control" v-model="aBuscar" aria-label="Small"
      aria-describedby="inputGroup-sizing-sm">
  </div>

  <div class="row justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 mt-1">

    <div v-for="obra in props.obras"><!-- :key="producto.idProducto" -->
      <div class="col">
        <div @click="" class="card bg-transparent" :data-toggle="`modal`"
          :data-target="`#fotosModalCenter${obra.id_obra}`">

          <div class="container text-white">
            <img :src="obra.foto" class="card-img-top" alt="{{obra.foto}}" />
            <h5>Título: {{ obra.titulo }} <br> por: aca el autor</h5>
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" :id="`fotosModalCenter${obra.id_obra}`" tabindex="-1" role="dialog"
          aria-labelledby="fotosModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="fotosModalLongTitle">{{ obra.titulo }}</h5>
                <p>Por nada por ahora </p>
              </div>
              <div class="modal-body">
                <img class="d-block w-100" :src="obra.foto" alt="First slide">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cerrar</button>
                <!--       <button v-if="props.esFavorito" @click="favoritosStore.eliminarFavorito(producto.idProducto)" data-dismiss="modal" type="button" class="btn btn-outline-danger">Quitar</button> -->
                <button type="button" class="btn btn-outline-success">Contactar</button>
                <!--  <button v-if="!esFavorito" @click="favoritosStore.guardarFavorito(producto)" type="button" class="btn btn-outline-danger">♥</button> -->
              </div>
            </div>
          </div>
        </div>
        <!--Fin Modal -->
      </div>
    </div>

  </div>



</template>
