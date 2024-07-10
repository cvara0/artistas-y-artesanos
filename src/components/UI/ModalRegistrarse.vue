<script setup>
    import { reactive } from 'vue'
    import { FormKit } from '@formkit/vue'

    const state = reactive({
        nombre: '',
        apellido: '',
        provincia: '',
        departamento: '',
        email: '',
        password1: '',
        password2: '',
        soyArtista: '',
        soyArtesano: '',
        soyCliente: '',
        telefono:''

    })

    const validar = () =>{
        console.log("wesa");
    }
</script>

<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

<!-- Modal con formkit -->
<div class="modal fade" id="registrarseModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="registrarseModalLongTitle">Registrarse  <span style="color: red">(no funcional)</span></h5>
          </div>
          <div class="modal-body">
            <FormKit 
                type="form" 
                submit-label="Registrarse"
                incomplete-message= "No se pudo registrar"    
            >
                <FormKit 
                    type="text" 
                    label="Nombre completo" 
                    placeholder="Ingrese su nombre completo" 
                    validation="required"
                    :validation-messages="{required: 'Campo obligatorio'}"
                    validation-visibility="dirty"

                />
                <FormKit 
                    type="text" 
                    label="Apellido" 
                    placeholder="Ingrese su apellido" 
                    validation="required"
                    :validation-messages="{required: 'Campo obligatorio'}"
                />
                <FormKit 
                    type="number" 
                    label="WhatsApp" 
                    placeholder="Ingrese su número de telefono celular" 
                    validation="required"
                    :validation-messages="{required: 'Campo obligatorio'}"
                />
                <FormKit
                    type="select"
                    label="Provincia"
                    placeholder="Seleccione provincia"
                    validation="required"
                    :validation-messages="{required: 'Campo obligatorio'}"
                    :options="['Buenos Aires', 'Corrientes', 'Misiones','Etc']"
                />
                <FormKit
                    type="select"
                    label="Departamento"
                    placeholder="Seleccione departamento"
                    validation="required"
                    :validation-messages="{required: 'Campo obligatorio'}"
                    :options="['Obera', 'Posadas', 'San Ignacio','Etc']"
                />
                <FormKit
                    type="email"
                    label="Email"
                    placeholder="Ingrese su Email"
                    validation="required"
                    :validation-messages="{required: 'Campo obligatorio'}"
                />
                <FormKit
                    type="password"
                    label="Contraseña1"
                    placeholder="Ingrese su contraseña"
                    validation="required"
                    :validation-messages="{required: 'Campo obligatorio'}"
                />
                <FormKit
                    type="password"
                    label="Contraseña2"
                    placeholder="Ingrese su contraseña nuevamente"
                    validation="required"
                    :validation-messages="{required: 'Campo obligatorio'}"
                />
                <FormKit
                    v-model="value"
                    type="checkbox"
                    label="Soy"
                    :options="['Artista', 'Artesano', 'Cliente']"
                    decorator-icon="happy"
                    validation="required|min:1"
                    incomplete-message= "Seleccione al menos uno"
                />
        
            </FormKit>

        </div>
      </div>
    </div>
</div>
    <!--Fin Modal -->
</template>
