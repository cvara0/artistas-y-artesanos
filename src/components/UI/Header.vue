<script setup>
import ModalIngresar from './ModalIngresar.vue'
import ModalRegistrarse from './ModalRegistrarse.vue'
</script>

<template>
    <header>
        <div class="row">
          <div class="col-xl-10 col-lg-10 col-md-8 col-sm-8 col-6">
              <h3 class="playwrite-de-grund"> Arte y Artesanías Agentinas</h3>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
              <a
              class="button-74"
              href="#"
               style="text-decoration: none;"
              > &nbsp 🔐 &nbsp</a> 
              <a
              class="button-74"
              href="#"
               style="text-decoration: none;"
              > &nbsp 📝 &nbsp</a> 
          </div>
        </div>

      <ModalIngresar></ModalIngresar>
      <ModalRegistrarse></ModalRegistrarse>
    </header>
</template>

