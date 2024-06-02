<script setup>
import ModalFotos from '@/components/UI/ModalFotos.vue'
import {usuariosDb} from '../../data/usuariosData'
import { computed, reactive, ref, watch } from 'vue';

const props = defineProps({
  productos: {
    type: Object,
    required: true
  },
  esFavorito: {
    type: Boolean,
    required: true
  }
})

const state = reactive({
  usuario : {}
})

const buscarAutor = (i) => {
    state.usuario = usuariosDb.find(u => u.idUsuario === i)
}

const favoritos = ref([])

const agregarFavorito = (producto) => {

    const favoritosStorage = localStorage.getItem('favoritos')
    favoritos.value = JSON.parse(favoritosStorage)

    const existeFavorito = favoritos.value.findIndex(i => i.idProducto === producto.idProducto)
    if(existeProducto<0){
      favoritos.value.push(producto)
      guardarLocalStorage()
      alert("Producto agregado a favoritos")
    } else{
      alert("Producto ya agregado a favoritos anteriormente")
      return
    } 
  }
  const guardarLocalStorage = () => {
    localStorage.setItem('favoritos',JSON.stringify(favoritos.value))
  }

  const quitarFavorito = (idProducto) => {
    const favoritosStorage = localStorage.getItem('favoritos')
    favoritos.value = JSON.parse(favoritosStorage)
    favoritos.value = favoritos.value.filter(i => i.idProducto !== idProducto)
    alert("Producto eliminado de favoritos")
    guardarLocalStorage()
    location.reload()
  }
  


</script>

<template>
   <div class="input-group input-group-sm">
     <div class="input-group-prepend"> 
      <span class="input-group-text caveat" id="inputGroup-sizing-sm">Buscar</span>
    </div>
    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
  </div>
  <div v-for="producto in props.productos" :key="producto.idProducto" >
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
            @agregar-favorito ="agregarFavorito"
            @quitar-favorito = "quitarFavorito"
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