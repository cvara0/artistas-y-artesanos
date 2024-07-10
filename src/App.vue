<script setup>
  import { RouterView } from 'vue-router'
  import Header from './components/UI/Header.vue'
  import NavBar from './components/UI/NavBar.vue'
</script>

<template>

    <Header></Header>
    <NavBar></NavBar>

    <br>

    <main>
      <RouterView/>
    </main>
    <hr>
    <footer>
      <p>&copy; 2024 Arte y Artesanías Argentinas. Todos los derechos reservados.</p>
    </footer>

</template>

