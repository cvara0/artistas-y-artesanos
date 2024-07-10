<script setup>
import Tarjeta from '../components/UI/TarjetasObras.vue'
import { ref, onMounted, watch, computed, onUpdated, onBeforeMount, onBeforeUpdate } from 'vue'
import {artesDb} from '../data/artesData'
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const usuariosRef = ref([])
  
onMounted(()=>{
    //artesRef.value = artesDb
})

</script>

<template>
  <main>
  <!--
    <div class="cards-list">
        <h1 class="caveat">Obras de Arte</h1>
       <Tarjeta 
          :productos="artesRef"
       />
    </div>-->
  </main>
</template>
