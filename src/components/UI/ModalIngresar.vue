<script setup>
import { reactive } from 'vue'

const state = reactive({
    email: '',
    password:''
})

</script>

<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

<!-- Modal con formkit -->
<div class="modal fade" id="ingresarModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ingresarModalLongTitle">Iniciar Sesión <span style="color: red">(no funcional)</span></h5>
          </div>
          <div class="modal-body">
            <form>
                <div class="form-group">
                    <label for="ingresarInputEmail1">Email</label>
                    <input v-model="state.email" type="email" class="form-control" id="ingresarInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="ingresarInputPassword1">Contraseña</label>
                    <input v-model="state.password" type="password" class="form-control" id="ingresarInputPassword1" placeholder="Password">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="submit" class="btn btn-outline-dark">Ingresar</button>   
                </div>
            </form>
          
        </div>
      </div>
    </div>
</div>
    <!--Fin Modal -->
</template>



<style lang="scss" scoped>

</style>