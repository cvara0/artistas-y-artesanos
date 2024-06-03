<script setup>
import Tarjeta from '../components/UI/Tarjeta.vue'
import { ref, onMounted, watch, computed, onUpdated, onBeforeMount, onBeforeUpdate } from 'vue'
import {artesDb} from '../data/artesData'
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useFavoritosStore } from '@/stores/useFavoritosStore';

const favoritosStore = useFavoritosStore()

onMounted(()=>{
   favoritosStore.favoritos = JSON.parse(localStorage.getItem('favoritos'))
})



</script>

<template>
  <main>
   
    <div class="cards-list">
        <h1 class="caveat animate__animated animate__zoomIn">Mis Favoritos</h1>
       <Tarjeta 
          :productos = "favoritosStore.favoritos"
          :esFavorito = true
       />
    </div>
  </main>
</template>

<style scoped>
  .cards-list {
    z-index: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  @media all and (max-width: 500px) {
  .card-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}
</style>