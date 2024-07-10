<script setup>
import Tarjeta from '../components/UI/TarjetasObras.vue'
import { ref, onMounted, watch, computed, onUpdated, onBeforeMount, onBeforeUpdate } from 'vue'
import { useArtesStore } from '@/stores/useArtesStore';

import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const artesStore = useArtesStore()
  
</script>

<template>

<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

  <main>

    <div class="cards-list">
        <h1 class="caveat animate__animated animate__zoomIn">Obras de Arte</h1>
        <div class="w3-container">
          <div class="w3-center">
            <div class="w3-bar w3-large">
              <a href="#" class="w3-button">&laquo;</a>
              <a href="#" class="w3-button">1</a>
              <a href="#" class="w3-button">2</a>
              <a href="#" class="w3-button">3</a>
              <a href="#" class="w3-button">4</a>
              <a href="#" class="w3-button">&raquo;</a>
            </div>
          </div>
        </div>
       <Tarjeta 
          :productos="artesStore.artes"
          :esFavorito = "false"
       />
  
    </div>
    <div class="w3-container">
          <div class="w3-center">
            <div class="w3-bar w3-large">
              <a href="#" class="w3-button">&laquo;</a>
              <a href="#" class="w3-button">1</a>
              <a href="#" class="w3-button">2</a>
              <a href="#" class="w3-button">3</a>
              <a href="#" class="w3-button">4</a>
              <a href="#" class="w3-button">&raquo;</a>
            </div>
          </div>
        </div>
  </main>
</template>
