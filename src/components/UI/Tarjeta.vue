<script setup>
import ModalFotos from '@/components/UI/ModalFotos.vue'
import {usuariosDb} from '../../data/usuariosData'
import { computed, onMounted, reactive, ref, watch } from 'vue';

const props = defineProps({
  productos: {
    type: Array,
    required: true
  },
  esFavorito: {
    type: Boolean,
    required: true
  }
})

const productosRef = ref([])
const aBuscar = ref('')

const state = reactive({
  usuario : {}
})

const buscarAutor = (i) => {
    state.usuario = usuariosDb.find(u => u.idUsuario === i)
}

watch(aBuscar, ()=>{
    productosRef.value = props.productos
    productosRef.value = productosRef.value.filter(i => i.titulo.toLowerCase().includes(aBuscar.value.toLowerCase()))

},{
  deep: false
})

onMounted(()=>{
  productosRef.value = props.productos
})

  //TODO cambiar props por stores y agregar :on-keydown="buscarProducto"


</script>

<template>
   <div class="input-group input-group-sm">
     <div class="input-group-prepend"> 
      <span class="input-group-text caveat" id="inputGroup-sizing-sm">Buscar</span>
    </div>
    <input type="text" class="form-control" v-model="aBuscar" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
  </div>
  <div v-for="producto in productosRef" :key="producto.idProducto">
    <div @click="buscarAutor(producto.idUsuario)" class="card 1" :data-toggle="`modal`" :data-target="`#fotosModalCenter${producto.idProducto}`">
            <div class="card_image"> <img :src="producto.urlImagen1"/> </div>
            <div class="card_title title-white">
                <p>{{ producto.titulo }}</p>
            </div> 
    </div>
        
          <ModalFotos
            :producto = "producto"
            :autor = "state.usuario"
            :esFavorito = "props.esFavorito"
          />
  </div>
        
   
</template>

<style scoped>


.card {
  margin: 20px auto;
  width: 200px;
  height: 200px;
  cursor: pointer;
  transition: 0.5s;
}

.card .card_image {
  width: inherit;
  height: inherit;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  object-fit: cover;
}

.card .card_title{
  text-align: center;
  font-family: caveat;
  font-weight: bold;
  font-size: 25px;
  margin-top: -40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.3);
}

.card:hover {
  transform: scale(1.1, 1.1);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}





</style>