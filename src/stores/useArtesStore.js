import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {productosDb} from '../data/productosData'

export const useArtesStore = defineStore('artes', () => {
  const artes = ref([])
  artes.value = productosDb.filter(i => i.esArte === true)

  return { 
    artes
   }
})