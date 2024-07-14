<script setup>
import TarjetasMisObras from '../components/UI/TarjetasMisObras.vue'
import { ref, onMounted, watch, computed, onUpdated, onBeforeMount, onBeforeUpdate, reactive } from 'vue'
import { productosDb } from '../data/productosData'
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import { useObrasStore } from '@/stores/useObrasStore';

const route = useRoute()
const obrasStore = useObrasStore()
const obras = ref([])
const obra = reactive({
    "id_tipo_obra": 0,
    "foto": null,
    "titulo": "",
    "descripcion": "",
    "id_usuario": 0
})

const alerta = reactive({
    "tipo": "",
    "mensaje": "",
})

const onFileChange = (event) => {
    obra.foto = event.target.files[0];
};

async function agregarObra(obra) {
    if (Object.values(obra).includes('')) {
        alerta.mensaje = '*Todos los campos son obligatorios'
        alerta.tipo = 'obligatorios'
        timeout()
        return
    }
    await obrasStore.agregarObra(obra)
}

function timeout() {
    setTimeout(() => {
        alerta.mensaje = ''
        alerta.tipo = ''
    }, 3000)
}

const cargarObras = async () => {
    const usuario = JSON.parse(localStorage.getItem('usuario_actual'))
    await obrasStore.obras_por_id_usuario(usuario.id_usuario)
    obras.value = obrasStore.misObras
}

watch(() => route.params.id_tipo_obra, () => {
    cargarObras()
}, { immediate: true })

const hayUsuarioActual = computed(() => {
    
    return localStorage.getItem('usuario_actual') !== null;
})


</script>

<template>
    <main v-if="hayUsuarioActual">

        <div class="cards-list">
            <h1 class="playwrite-de-grund animate__animated animate__fadeInDown">
                Mis Obras
                <input type="button" class="btn btn-outline-primary" :data-toggle="`modal`"
                    data-target=#agregarObraModalCenter value="&nbsp ➕  &nbsp">
            </h1>

            <TarjetasMisObras :obras="obras" />
        </div>

    </main>
    <!-- Modal agregar obra -->
    <div class="modal fade" id="agregarObraModalCenter" tabindex="-1" role="dialog"
        aria-labelledby="agregarObraModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div style="background-color:black;" class="modal-content">
                <div class="modal-header">
                    <h5>Agregar Obra</h5>

                </div>
                <div class="modal-body">
                    <form @submit.prevent="agregarObra(obra)" enctype="multipart/form-data" method="POST">
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
                            <label for="foto" class="form-label">imagen:</label>
                            <input type="file" class="form-control" id="foto" @change="onFileChange">
                        </div>

                        <div class="row">
                            <input type="submit" class="btn btn-outline-success col-6" value="Agregar obra">
                            <input type="button" class="btn btn-outline-danger col-6" data-dismiss="modal"
                                value="Cancelar">
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- fin modal editar obra -->
</template><!-- $route.params.id_tipo_obra -->