import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {productosDb} from '../data/productosData'

export const useArtesaniasStore = defineStore('artesanias', () => {
 
  const artesanias = ref([])
  artesanias.value = productosDb.filter(i => i.esArte === false)

  return { 
    artesanias
   }
})