import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritosStore = defineStore('favoritos', () => {
  
  const favoritos = ref([])
  favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
  
  const guardarFavorito = (producto) => {
    const yaExiste = favoritos.value.find(i => i.idProducto === producto.idProducto)
    if(yaExiste){
      alert("Producto ya fue agragado a favoritos anteriormente")
      return
    }else{
      favoritos.value.push(producto)
      localStorage.setItem('favoritos',JSON.stringify(favoritos.value))
      alert("Producto agregado a favoritos")
    }
  }

  const eliminarFavorito = (idProducto) => {
    favoritos.value = favoritos.value.filter(i => i.idProducto !== idProducto)
    localStorage.setItem('favoritos',JSON.stringify(favoritos.value))
    alert("Producto eliminado")
    location.reload()
  }

  return { 
    favoritos,
    guardarFavorito,
    eliminarFavorito
   }
})
