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
      if (newIdTipoObra) {
        cargarObras(newIdTipoObra)
      }
    }, { immediate: true })

</script>

<template>
  <main>

    <div class="cards-list">
      <h1 class="caveat animate__animated animate__zoomIn">Artesanias</h1>
      <TarjetasObras :obras="obras" />
    </div>
  </main>
</template><!-- $route.params.id_tipo_obra -->
