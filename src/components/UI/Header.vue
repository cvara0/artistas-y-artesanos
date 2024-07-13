<script setup>
import { onMounted, reactive, computed,ref } from 'vue'
import { useUsuariosStore } from '@/stores/useUsuariosStore'
import { useRouter } from 'vue-router'

const usuarioStore = useUsuariosStore()
const router = useRouter()

const alerta = reactive({
  tipo: "",
  mensaje: ""
})

const usuario = reactive({
  nombre: "",
  apellido: "",
  id_tipo_usuario: 0,
  email: "",
  clave: "",
  telefono: 0
})

const usuarioSesion = reactive({
  email: "",
  clave: ""
})

const nombreUsuario = ref('')
 

const validarRegistrarse = async () => {
  if(Object.values(usuario).includes('')){
      alerta.mensaje = '*Todos los campos son obligatorios'
      alerta.tipo = 'obligatorios'
      timeout()
    return
  } 
  await usuarioStore.registrarUsuario(usuario)
}

const validarIniciarSesion = async () => {
  if(Object.values(usuarioSesion).includes('')){
      alerta.mensaje = '*Todos los campos son obligatorios'
      alerta.tipo = 'obligatorios'
      timeout()
    return
  } 
  await usuarioStore.iniciarSesion(usuarioSesion)
}

function timeout(){
    setTimeout(()=>{
      alerta.mensaje = ''
      alerta.tipo = ''
      },3000)
  }

  const cerrarSesion = async () => {
    if(confirm("¿Cerrar sesión actual?"))
      await usuarioStore.cerrarSesion() 
  }

const hayUsuarioActual = computed(()=>{
    const hayUsuario = localStorage.getItem('usuario_actual')!== null
    if(hayUsuario){
      const usuario = JSON.parse(localStorage.getItem('usuario_actual'))
      nombreUsuario.value = usuario.nombre
    }
    return hayUsuario
})
   



</script>

<template>
    <header>
        <div class="row">
          <div class="col-xl-10 col-lg-10 col-md-8 col-sm-8 col-6">
              <h3 class="playwrite-de-grund"> Arte y Artesanías Agentinas</h3>
              <h3 class="playwrite-de-grund"> Bienvenid@ {{nombreUsuario}}</h3>
            </div>
          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
               <div v-if="hayUsuarioActual">
                    <button 
                    type="button"
                    class="button-74"
                    @click="cerrarSesion"
                  > Salir </button>
               </div>
              <div v-else>
                  <button
                      class="button-74"
                      style="text-decoration: none;"
                      :data-toggle="`modal`"
                      :data-target="`#iniciarSesionModalCenter`"
                    > &nbsp 🔐 &nbsp
                  </button> 
                  <button
                    class="button-74"
                    style="text-decoration: none;"
                    :data-toggle="`modal`"
                    :data-target="`#registrarseModalCenter`"
                    > &nbsp 📝 &nbsp
                  </button>
              </div>
               
             
   
          </div>
        </div>

     <!-- Modal registrarse -->
     <div class="modal fade" :id="'registrarseModalCenter'" tabindex="-1" role="dialog"
          aria-labelledby="registrarseModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div style="background-color:black;" class="modal-content">
              <div class="modal-header">
               <h5>Formulario de Registro</h5>
          
              </div>
              <div class="modal-body">

                <form @submit.prevent="validarRegistrarse" method="POST">
                  <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre:</label>
                    <input type="text" class="form-control" id="nombre" v-model="usuario.nombre">
                  </div>
                  <div class="mb-3">
                    <label for="apellido" class="form-label">Apellido:</label>
                    <input type="text" class="form-control" id="apellido" v-model="usuario.apellido">
                  </div>
                  <div class="mb-3">
                    <label for="rubro" class="form-label">Mi rubro es:</label>
                    <select id="rubro" class="form-select" aria-label="Default select example" v-model="usuario.id_tipo_usuario">
                      <option selected>Seleccione</option>
                      <option value=1>Artes</option>
                      <option value=2>Artesanías</option>
                      <option value=3>Diseño Industrial</option>
                      <option value=4>Diseño Gráfico</option>
                      <option value=5>Ninguno de los anteriores</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="telefono" class="form-label">Teléfono:</label>
                    <input type="number" class="form-control" id="telefono" v-model="usuario.telefono">
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" v-model="usuario.email">
                  </div>
                  <div class="mb-3">
                    <label for="clave" class="form-label">Contraseña:</label>
                    <input type="password" class="form-control" id="clave" v-model="usuario.clave">
                  </div>
                  
                  <h5 v-if="alerta.tipo =='obligatorios'" class="text-danger">{{alerta.mensaje}}</h5>
                  
                  <div class="row">
                    <input type="submit" class="btn btn-outline-success col-6" value="Registrarse">
                    <input type="button" class="btn btn-outline-danger col-6" data-dismiss="modal" value="Cancelar">
                  </div>
                  
                </form>
                
            </div>
          </div>
        </div>
      </div>
      <!-- fin modal registrarse-->

          <!-- Modal iniciar sesion -->
     <div class="modal fade" :id="'iniciarSesionModalCenter'" tabindex="-1" role="dialog"
          aria-labelledby="iniciarSesionModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div style="background-color:black;" class="modal-content">
              <div class="modal-header">
               <h5>Formulario de Inicio de Sesión</h5>
          
              </div>
              <div class="modal-body">

                <form @submit.prevent="validarIniciarSesion" method="POST">
                
                  <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" v-model="usuarioSesion.email">
                  </div>
                  <div class="mb-3">
                    <label for="clave" class="form-label">Contraseña:</label>
                    <input type="password" class="form-control" id="clave" v-model="usuarioSesion.clave">
                  </div>
                  
                  <h5 v-if="alerta.tipo =='obligatorios'" class="text-danger">{{alerta.mensaje}}</h5>
                  
                  <div class="row">
                    <input type="submit" class="btn btn-outline-success col-6" value="Iniciar sesión">
                    <input type="button" class="btn btn-outline-danger col-6" data-dismiss="modal" value="Cancelar">
                  </div>
                  
                </form>
                
            </div>
          </div>
        </div>
      </div>
      <!-- fin modal registrarse-->

    
    </header>
</template>

