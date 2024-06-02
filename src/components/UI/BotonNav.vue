<script setup>
  import {RouterLink} from 'vue-router'

  defineProps({
    ruta: {
      type: String
    }
  })

</script>

<template>
      <RouterLink
          :to="{name: ruta}"
          class="boton-nav"
          style="text-decoration: none;"
      >
        - <slot></slot> -
      </RouterLink>
</template>
