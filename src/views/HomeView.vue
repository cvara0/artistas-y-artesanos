<script setup>
import SlideInicio from '../components/UI/SlideInicio.vue'

</script>

<template>
   <SlideInicio class="animate__animated animate__zoomIn"></SlideInicio>
    <hr>
    <section id="about">
        <h1 class="caveat">Quienes Somos</h1>
        <p>Somos un grupo de estudiantes del programa Codo a Codo, compuesto por Luciano Baratta, Dayana Oliveira y Cristian Parra</p>
    </section>
    <hr>
    <section id="mission">
        <h1 class="caveat">Nuestra Misión</h1>
        <p>Difundir las producciones de artesanos en todo el país, 
          creando un vinculo directo entre artistas, artesanos y consumidores, así como divulgar 
          su importancia para la cultura y economía. </p>
    </section>
    <hr>
    <section>
        <h1 class="caveat">Contacto</h1>
        <p>Para más información, por favor contáctanos a través de nuestro formulario de contacto.</p>
  
        <FormKit
                type="form" 
                submit-label="Enviar"
                incomplete-message= "No se pudo enviar"    
            >
                <FormKit 
                    type="text" 
                    label="Nombre completo" 
                    placeholder="Ingrese su nombre completo" 
                    validation="required"
                    :validation-messages="{required: 'Campo obligatorio'}"
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
                    label="Teléfono" 
                    placeholder="Ingrese su número de telefono celular" 
                    validation="required"
                    :validation-messages="{required: 'Campo obligatorio'}"
                />
                <FormKit
                    type="email"
                    label="Email"
                    placeholder="Ingrese su Email"
                    validation="required"
                    :validation-messages="{required: 'Campo obligatorio'}"
                />
                <FormKit
                    type="textarea"
                    label="Mensaje"
                    name="mensaje"
                    placeholder="Escriba aquí su mensaje (máximo 120 caracteres)"
                    validation="length:0,120"
                    validation-visibility="live"
                    :validation-messages="{length: 'Cantidad de caracteres excedida',}"
        
                />
                <FormKit
                    v-model="value"
                    type="checkbox"
                    label="Soy"
                    :options="['Artista', 'Artesano', 'Cliente']"
                    decorator-icon="happy"
                    validation="required|min:1"
                    :validation-messages= "{required:'Seleccione al menos uno'}"
                />
        
            </FormKit>
    </section>


</template>

<style>
  
</style>