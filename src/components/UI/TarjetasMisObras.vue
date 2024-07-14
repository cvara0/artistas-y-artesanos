<script setup>
import { useObrasStore } from '@/stores/useObrasStore';
import { computed, reactive } from 'vue';

const obrasStore = useObrasStore()

const alerta = reactive({
    tipo: "",
    mensaje: ""
})

const props = defineProps({
    obras: {
        type: Array,
        required: true
    }
})

const obraAEditar = reactive({
    "id_obra": 0,
    "id_tipo_obra": 0,
    "foto": null,
    "titulo": "",
    "descripcion": ""
})

const onFileChange = (event) => {
    obraAEditar.foto = event.target.files[0];
};


async function editarObra(obra) {
    if (Object.values(obra).includes('')) {
        alerta.mensaje = '*Todos los campos son obligatorios'
        alerta.tipo = 'obligatorios'
        timeout()
        return
    }
    obraAEditar.id_obra = obra.id_obra
    obraAEditar.id_tipo_obra = obra.id_tipo_obra
    obraAEditar.titulo = obra.titulo
    obraAEditar.descripcion = obra.descripcion

    await obrasStore.editarObra(obraAEditar)
}


function timeout() {
    setTimeout(() => {
        alerta.mensaje = ''
        alerta.tipo = ''
    }, 3000)
}

async function eliminarObra(id_obra, titulo) {
    await obrasStore.eliminarObra(id_obra, titulo)
}


</script>

<template>


    <!-- <div class="input-group input-group-sm">
    <div class="input-group-prepend">
      <span class="input-group-text caveat" id="inputGroup-sizing-sm">Buscar</span>
    </div>
    <input type="text" class="form-control" v-model="aBuscar" aria-label="Small"
      aria-describedby="inputGroup-sizing-sm">
  </div> -->

    <div class="row justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 mt-1">

        <div v-for="obra in props.obras" :key="obra.id_obra">
            <input type="button" @click="eliminarObra(obra.id_obra, obra.titulo)" class="btn btn-outline-danger"
                value="&nbsp ❌ &nbsp">
            <input type="button" class="btn btn-outline-warning" :data-toggle="`modal`"
                :data-target="`#editarObraModalCenter${obra.id_obra}`" value="&nbsp 📝  &nbsp">
            <div class="col">

                <div class="card bg-transparent" :data-toggle="`modal`"
                    :data-target="`#fotosModalCenter${obra.id_obra}`">
                    <div class="container" style="text-align: center;">
                        <h5> {{ obra.titulo }} </h5>
                        <img :src="`http://127.0.0.1:5000/static/fotos/${obra.foto}`" class="card-img-top"
                            alt="{{obra.foto}}" />
                    </div>
                </div>

                <!-- Modal ver obra-->
                <div class="modal fade" :id="`fotosModalCenter${obra.id_obra}`" tabindex="-1" role="dialog"
                    aria-labelledby="fotosModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div style="background-color: black;" class="modal-content">
                            <div class="modal-header row">
                                <h5 style="overflow: auto;" class="modal-title col-auto" id="fotosModalLongTitle">{{
                                    obra.titulo }}</h5>
                            </div>
                            <div class="modal-body">
                                <img class="d-block w-100" :src="`http://127.0.0.1:5000/static/fotos/${obra.foto}`" alt="First slide">
                                <hr style="border: 1px solid">
                                <p> {{ obra.descripcion }} </p>
                            </div>
                            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
                <!--Fin Modal ver obra -->

                <!-- Modal editar obra -->
                <div class="modal fade" :id="`editarObraModalCenter${obra.id_obra}`" tabindex="-1" role="dialog"
                    aria-labelledby="editarObraModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div style="background-color:black;" class="modal-content">
                            <div class="modal-header">
                                <h5>Editar Obra</h5>

                            </div>
                            <div class="modal-body">

                                <form @submit.prevent="editarObra(obra)" enctype="multipart/form-data" method="PATCH">
                                    <div class="mb-3">
                                        <label for="titulo" class="form-label">Título:</label>
                                        <input type="text" class="form-control" id="titulo" v-model="obra.titulo">
                                    </div>

                                    <div class="mb-3">
                                        <label for="descripcion" class="form-label">Descripción:</label>
                                        <textarea type="text" class="form-control" id="descripcion"
                                            v-model="obra.descripcion"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="rubro" class="form-label">Tipo de obra:</label>
                                        <select id="rubro" class="form-select" aria-label="Default select example"
                                            v-model="obra.id_tipo_obra">
                                            <option selected>Seleccione</option>
                                            <option value=1>Arte</option>
                                            <option value=2>Artesanía</option>
                                            <option value=3>Diseño Industrial</option>
                                            <option value=4>Diseño Gráfico</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="foto" class="form-label">Imagen:</label>
                                        <input type="file" class="form-control" id="foto" @change="onFileChange">
                                    </div>

                                    <div class="row">
                                        <input type="submit" class="btn btn-outline-success col-6"
                                            value="Guardar cambios">
                                        <input type="button" class="btn btn-outline-danger col-6" data-dismiss="modal"
                                            value="Cancelar">
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- fin modal editar obra -->


            </div>
        </div>

    </div>



</template>
