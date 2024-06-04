<script setup>
import Tarjeta from '../components/UI/Tarjeta.vue'
import { ref, onMounted, watch, computed, onUpdated, onBeforeMount, onBeforeUpdate } from 'vue'
import {productosDb} from '../data/productosData'
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useArtesaniasStore } from '@/stores/useArtesaniasStore';

const artesaniasStore = useArtesaniasStore()


</script>

<template>
  <main>

    <div class="cards-list">
        <h1 class="caveat animate__animated animate__zoomIn">Artesanias</h1>
       <Tarjeta 
          :productos="artesaniasStore.artesanias"
          :esFavorito = "false"
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