<script setup>
import RatingStar from './RatingStar.vue'
import { computed, onBeforeMount, onBeforeUpdate, onMounted, ref, watch } from 'vue'

const props = defineProps({
  producto: {
    type: Object,
    required:true
  },
  autor: {
    type: Object,
    required:true
  },
  esFavorito:{
    type: Object,
    required: true
  }
})

defineEmits(['agregar-favorito','quitar-favorito'])


</script>

<template>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

    <!-- Modal -->
    <div class="modal fade" :id="`fotosModalCenter${producto.idProducto}`" tabindex="-1" role="dialog" aria-labelledby="fotosModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document"> 
         
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="fotosModalLongTitle">{{producto.titulo}}</h5>
                <p>Por {{ autor.nombre}} </p>
                <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>-->
              </div>
              <div class="modal-body">
                <div :id="`carouselFotosIndicators${producto.idProducto}`" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li :data-target="`#carouselFotosIndicators${producto.idProducto}`" data-slide-to="0" class="active"></li>
                      <li :data-target="`#carouselFotosIndicators${producto.idProducto}`" data-slide-to="1"></li>
                      <li :data-target="`#carouselFotosIndicators${producto.idProducto}`" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" :src="producto.urlImagen1" alt="First slide">
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" :src="producto.urlImagen2" alt="Second slide">
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" :src="producto.urlImagen3" alt="Third slide">
                      </div>
                    </div>
                    <a class="carousel-control-prev" :href="`#carouselFotosIndicators${producto.idProducto}`" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Anterior</span>
                    </a>
                    <a class="carousel-control-next" :href="`#carouselFotosIndicators${producto.idProducto}`" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Siguiente</span>
                    </a>
                  </div>
              </div>
              <div class="modal-footer">
               
                <!--<RatingStar></RatingStar>-->
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cerrar</button>
                <button v-if="props.esFavorito" @click="$emit('quitar-favorito',producto.idProducto)" type="button" class="btn btn-outline-danger">Quitar</button>
                <button type="button" class="btn btn-outline-success">Contactar</button>
                <button v-if="!esFavorito" @click="$emit('agregar-favorito',producto)" type="button" class="btn btn-outline-danger">♥</button>
                
              </div>
            </div>
          </div>
          </div>
        <!--Fin Modal -->

</template>

