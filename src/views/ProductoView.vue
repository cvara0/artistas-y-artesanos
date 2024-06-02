<script setup>



</script>

<template>
    <div id="carouselFotosIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselFotosIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselFotosIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselFotosIndicators" data-slide-to="2"></li>
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
                    <a class="carousel-control-prev" href="#carouselFotosIndicators" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Anterior</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselFotosIndicators" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Siguiente</span>
                    </a>
                  </div>
                
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-outline-success">Contactar</button>
                <button  type="button" class="btn btn-outline-danger">♥</button>
</template>



<style lang="scss" scoped>

</style>