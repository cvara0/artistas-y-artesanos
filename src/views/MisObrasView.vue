<script setup>
import TarjetasMisObras from '../components/UI/TarjetasMisObras.vue'
import { ref, onMounted, watch, computed, onUpdated, onBeforeMount, onBeforeUpdate } from 'vue'
import { productosDb } from '../data/productosData'
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useObrasStore } from '@/stores/useObrasStore';

    const route = useRoute()
    const obrasStore = useObrasStore()
    const obras = ref([])

    const cargarObras = async () => {
      const usuario = JSON.parse(localStorage.getItem('usuario_actual'))
      await obrasStore.obras_por_id_usuario(usuario.id_usuario)
      obras.value = obrasStore.misObras
    }

    watch(() => route.params.id_tipo_obra, (newIdTipoObra) => {
        cargarObras()
    }, { immediate: true })



</script>

<template>
  <main>

    <div class="cards-list">
      <h1 class="playwrite-de-grund animate__animated animate__fadeInDown">Mis Obras</h1>
      
      <TarjetasMisObras :obras="obras" />
    
    </div>
  </main>
</template><!-- $route.params.id_tipo_obra -->