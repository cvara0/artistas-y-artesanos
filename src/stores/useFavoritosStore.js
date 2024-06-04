import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritosStore = defineStore('favoritos', () => {
  const favoritos = ref([])
  
  return { favoritos }
})
