<script setup>
import Tarjeta from '../components/UI/Tarjeta.vue'
import { ref, onMounted, watch, computed, onUpdated, onBeforeMount, onBeforeUpdate } from 'vue'
import {artesDb} from '../data/artesData'
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const favoritosRef = ref([])

onMounted(()=>{
    const favoritosStorage = localStorage.getItem('favoritos')
    if(favoritosStorage){
        favoritosRef.value = JSON.parse(favoritosStorage)
    }else{
        alert("favoritos vacio")
    }
})



</script>

<template>
  <main>
   
    <div class="cards-list animate__animated animate__fadeIn">
        <h1 class="caveat">Mis Favoritos</h1>
       <Tarjeta 
          :productos = "favoritosRef"
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