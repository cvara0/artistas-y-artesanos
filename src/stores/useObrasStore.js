import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import {productosDb} from '../data/productosData'
import { obrasDb } from '@/data/obrasData'
import axios from 'axios'

export const useObrasStore = defineStore('obras', () => {
 
  const url ='http://127.0.0.1:5000'

  const obras = ref([])
  const misObras = ref([])
  const obras_por_id_tipo_obra = async (id_tipo_obra) => {
        try {
            const data = await axios.get(`${url}/obras/${id_tipo_obra}`)
            obras.value = data.data
          
        } catch (error) {
            console.error("Error al traer las obras:", error)
        }
    }

    const obras_por_id_usuario = async (id_usuario_actual) => {
        try {
            const data = await axios.get(`${url}/mis-obras/${id_usuario_actual}`)
            misObras.value = data.data
        } catch (error) {
            console.error("Error al traer mis obras:", error)
            alert('Error al traer mis obras vue')
        }
    }

    const editarObra = async (obra) => {
        try {
    
            await axios.patch(`${url}/mis-obras/editar-obra`,obra).then((resp)=>{
    
                if(resp.data.cod === 0){
                    location.reload()
                }  
                if(resp.data.cod === 1)
                    alert(resp.data.mensaje)
            })
            

            
        } catch (error) {
            console.error("Error al editar obra desde vue:", error)
            alert('Error al editar obra desde vue')
        }
    }
    
  return {
    obras,
    misObras,
    obras_por_id_tipo_obra,
    obras_por_id_usuario,
    editarObra
  }
})