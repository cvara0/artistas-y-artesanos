import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {productosDb} from '../data/productosData'

export const useProductosStore = defineStore('productos', () => {
  const artes = ref([])
  artes.value = productosDb.filter(i => i.esArte === true)
  
  const artesanias = ref([])
  artesanias.value = productosDb.filter(i => i.esArte === false)

  return { 
    artes,
    artesanias
   }
})