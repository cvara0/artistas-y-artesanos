import { ref, onMounted, computed } from "vue";
import { defineStore } from "pinia";
import { productosDb } from "../data/productosData";
import { obrasDb } from "@/data/obrasData";
import axios from "axios";

export const useObrasStore = defineStore("obras", () => {
  const url = 'cvara.pythonanywhere.com'//"http://127.0.0.1:5000";

  const obras = ref([]);
  const misObras = ref([]);

  const obras_por_id_tipo_obra = async (id_tipo_obra) => {
    try {
      const data = await axios.get(`${url}/obras/${id_tipo_obra}`);
      obras.value = data.data;
    } catch (error) {
      console.error("Error al traer las obras:", error);
    }
  };

  const obras_por_id_usuario = async (id_usuario_actual) => {
    try {
      const data = await axios.get(`${url}/mis-obras/${id_usuario_actual}`);
      misObras.value = data.data;
    } catch (error) {
      console.error("Error al traer mis obras:", error);
      alert("Error al traer mis obras vue");
    }
  };

  async function agregarObra(obra) {
    try {
      const hayUsuario = localStorage.getItem("usuario_actual") !== null;
      if (hayUsuario) {
        const usuario = JSON.parse(localStorage.getItem("usuario_actual"));
        obra.id_usuario = usuario.id_usuario;

        const ObraFd = new FormData();
        ObraFd.append("id_tipo_obra", obra.id_tipo_obra);
        ObraFd.append("foto", obra.foto);
        ObraFd.append("titulo", obra.titulo);
        ObraFd.append("descripcion", obra.descripcion);
        ObraFd.append("id_usuario", obra.id_usuario);

        await axios
          .post(`${url}/mis-obras/registrar-obra`, ObraFd, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((resp) => {
            if (resp.data.cod === 0) {
              alert(resp.data.mensaje);
              location.reload();
            }
            if (resp.data.cod === 1) alert(resp.data.mensaje);
            if (resp.data.cod === 2) alert(resp.data.mensaje);
            if (resp.data.cod === 3) alert(resp.data.mensaje);
          });
      } else {
        alert("Error al encontrar usuario desde vue");
      }
    } catch (error) {
      console.error("Error al agregar desde vue:", error);
      alert("Error al agregar obra desde vue");
    }
  }

  async function editarObra(obra) {
    try {
      const ObraFd = new FormData();
      ObraFd.append("id_obra", obra.id_obra);
      ObraFd.append("id_tipo_obra", obra.id_tipo_obra);
      ObraFd.append("foto", obra.foto);
      ObraFd.append("titulo", obra.titulo);
      ObraFd.append("descripcion", obra.descripcion)
        console.log(ObraFd.get("foto"))
      await axios
        .patch(`${url}/mis-obras/editar-obra`, ObraFd, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((resp) => {
          if (resp.data.cod === 0) {
            alert(resp.data.mensaje);
            location.reload();
          }
          if (resp.data.cod === 1) alert(resp.data.mensaje);
        });
    } catch (error) {
      console.error("Error al editar obra desde vue:", error);
      alert("Error al editar obra desde vue");
    }
  }

  async function eliminarObra(id_obra, titulo) {
    if (confirm(`¿Eliminar obra ${titulo}?`) === true) {
      try {
        await axios
          .delete(`${url}/mis-obras/eliminar-obra/${id_obra}`)
          .then((resp) => {
            if (resp.data.cod === 0) {
              alert(resp.data.mensaje);
              location.reload();
            }
            if (resp.data.cod === 1) alert(resp.data.mensaje);
          });
      } catch (error) {
        console.error("Error al eliminar obra desde vue:", error);
        alert("Error al eliminar obra desde vue");
      }
    }
  }

  return {
    obras,
    misObras,
    obras_por_id_tipo_obra,
    obras_por_id_usuario,
    agregarObra,
    editarObra,
    eliminarObra,
  };
});
