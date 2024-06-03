<script setup>
import ModalIngresar from './ModalIngresar.vue'
import ModalRegistrarse from './ModalRegistrarse.vue'
</script>

<template>
    <header class="container-header animate__animated animate__zoomIn">
      <h1 class="item-header caveat">Arte y Artesanías Argentinas</h1>
      <div class="item-header">
        <a class="item-header caveat" data-toggle="modal" data-target="#registrarseModalCenter"   href=#>Registrarse</a>
        <a class="item-header caveat" data-toggle="modal" data-target="#ingresarModalCenter"  href=#>Ingresar</a>
      </div>
      <ModalIngresar></ModalIngresar>
      <ModalRegistrarse></ModalRegistrarse>
    </header>
</template>



<style scoped>

header h1{
    font-size: 36pt;
  }

  header div a {
    text-decoration: none;
    font-size: large;
  }

  header {
        display: flex;
        align-items: center; 
        justify-content: space-between;
        flex-wrap: wrap;
        background-image: url('../../assets/arg-8.png');
        background-position: 50% 50%;
        background-size: contain;
        background-repeat: no-repeat;
        
        }

        .item-header {
          margin: 1rem;
          padding: 1rem;
          justify-self: center;
        }

</style>