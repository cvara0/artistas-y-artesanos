import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
import {productosDb} from '../data/productosData'
import { obrasDb } from '@/data/obrasData'
import axios from 'axios'

export const useObrasStore = defineStore('obras', () => {
 

  const obras = ref([])
  const obras_por_id_tipo_obra = async (id_tipo_obra) => {
        try {
            const data = await axios.get(`http://127.0.0.1:5000/obras/${id_tipo_obra}`)
            obras.value = data.data
          
        } catch (error) {
            console.error("Error fetching obras:", error)
        }
    }

  return {
    obras,
    obras_por_id_tipo_obra
  }
})