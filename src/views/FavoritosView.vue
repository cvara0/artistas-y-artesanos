<script setup>
import Tarjeta from '../components/UI/TarjetasObras.vue'
import { ref, onMounted, watch, computed, onUpdated, onBeforeMount, onBeforeUpdate } from 'vue'
import {artesDb} from '../data/artesData'
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useFavoritosStore } from '@/stores/useFavoritosStore';

const favoritosStore = useFavoritosStore()
const favoritosRef = ([])
onMounted(()=>{
    favoritosRef.values = favoritosStore.favoritos
})

</script>

<template>
  <main>
   
    <div class="cards-list">
        <h1 class="caveat animate__animated animate__zoomIn">Mis Favoritos</h1>
       <Tarjeta 
          :productos = "favoritosStore.favoritos"
          :esFavorito = "true"
       />
    </div>
  </main>
</template>
