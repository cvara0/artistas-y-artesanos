<script setup>
  import { RouterView } from 'vue-router'
  import BotonNav from './components/UI/BotonNav.vue'
  import Header from './components/UI/Header.vue'

</script>

<template>
    <Header></Header>
    <hr>
    <nav class="container-nav caveat animate__animated animate__fadeInUp">
        <BotonNav ruta="home">Inicio</BotonNav>
        <BotonNav ruta="artes">Obras de Arte</BotonNav>
        <BotonNav ruta="artesanias">Artesanias</BotonNav>
        <BotonNav ruta="favoritos">Favoritos</BotonNav>
        <BotonNav ruta="usuarios">Usuarios</BotonNav>
        <BotonNav ruta="home">Agregar</BotonNav>
    </nav>
    <br>
    <main>
      <RouterView/>
    </main>
    <hr>
    <footer>
      <p>&copy; 2024 Arte y Artesanías Argentinas. Todos los derechos reservados.</p>
    </footer>

</template>

<style scoped>

  .r{
    border: 2px red solid;
  }

 
  nav {
        display: flex;
        align-items: center; 
        justify-content: space-between;
        flex-wrap: wrap;
        }
  main{
    margin-top: 1rem;
  }

  footer{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center
  }


</style>
