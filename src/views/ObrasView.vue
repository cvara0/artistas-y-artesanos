<script setup>
import TarjetasObras from '../components/UI/TarjetasObras.vue'
import { ref, onMounted, watch, computed, onUpdated, onBeforeMount, onBeforeUpdate } from 'vue'
import { productosDb } from '../data/productosData'
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useObrasStore } from '@/stores/useObrasStore';

    const route = useRoute()
    const obrasStore = useObrasStore()
    const obras = ref([])

    const cargarObras = async (id_tipo_obra) => {
      await obrasStore.obras_por_id_tipo_obra(id_tipo_obra)
      obras.value = obrasStore.obras
    }



    watch(() => route.params.id_tipo_obra, (newIdTipoObra) => {
        cargarObras(newIdTipoObra)
    }, { immediate: true })

</script>

<template>
  <main>

    <div class="cards-list">
      <h1 v-if="route.params.id_tipo_obra == 1 " class="playwrite-de-grund animate__animated animate__fadeInDown">Obras de Arte</h1>
      <h1 v-if="route.params.id_tipo_obra == 2 " class="playwrite-de-grund animate__animated animate__fadeInDown">Artesanías</h1>
      <h1 v-if="route.params.id_tipo_obra == 3 " class="playwrite-de-grund animate__animated animate__fadeInDown">Diseño Industrial</h1>
      <h1 v-if="route.params.id_tipo_obra == 4 " class="playwrite-de-grund animate__animated animate__fadeInDown">Diseño Gráfico</h1>
      
      <TarjetasObras 
        :obras="obras"
      />
    
    </div>
  </main>
</template><!-- $route.params.id_tipo_obra -->
