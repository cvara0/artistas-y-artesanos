<script setup>
import ListaTarjeta from '../components/UI/TarjetasObras.vue'
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
       <ListaTarjeta 
          :productos="artesaniasStore.artesanias"
          :esFavorito = "false"
       />
    </div>
  </main>
</template>
