<script setup>
import { onMounted, computed } from 'vue';
import { RouterLink } from 'vue-router'

const hayUsuarioActual = computed(() => {
    return localStorage.getItem('usuario_actual') !== null;
})
// Reemplaza 'clave' con la clave que quieres verificar en el localStorage


</script>

<template>
    <nav class="row justify-content-center playwrite-de-grund mt-4">

        <RouterLink :to="{ name: 'home' }" class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 button-74"
            style="text-decoration: none;">Inicio
        </RouterLink>

        <RouterLink :to="{ name: 'obras', params: { id_tipo_obra: 1 } }"
            class="col-xl-2 col-lg-3 col-md-3 col-sm-5 col-6 button-74" style="text-decoration: none;">Obras de Arte
        </RouterLink>
        <RouterLink :to="{ name: 'obras', params: { id_tipo_obra: 2 } }"
            class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 button-74" style="text-decoration: none;">Artesanías
        </RouterLink>
        <RouterLink :to="{ name: 'obras', params: { id_tipo_obra: 3 } }"
            class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-6 button-74" style="text-decoration: none;">Diseño Industrial
        </RouterLink>
        <RouterLink :to="{ name: 'obras', params: { id_tipo_obra: 4 } }"
            class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-6 button-74" style="text-decoration: none;">Diseño Gráfico
        </RouterLink>

        <RouterLink :to="{ name: 'mis-obras' }" class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 button-74"
            v-if="hayUsuarioActual" style="text-decoration: none;">Mis Obras
        </RouterLink>


     <!--    <RouterLink :to="{ name: 'usuarios' }" class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-6 button-74"
            style="text-decoration: none;">Novedades
        </RouterLink>
        <RouterLink :to="{ name: 'contacto' }" class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 button-74"
            style="text-decoration: none;">Contacto
        </RouterLink> -->

    </nav>
</template>
