import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useUsuariosStore = defineStore('usuarios', () => {
 
  const url ='http://127.0.0.1:5000'

  const usuario= ref({})
  

  const registrarUsuario = async (usuario) => {
        try {
            const data = await axios.post(`${url}/registrar-usuario`,usuario)
            usuario.value = data.data
            if(usuario.value.cod === 0){
                alert(usuario.value.mensaje)
                location.reload()
            }  
            if(usuario.value.cod === 1)
                alert(usuario.value.mensaje)
            if(usuario.value.cod === 2)
                alert(usuario.value.mensaje)
            if(usuario.value.cod === 3)
                alert(usuario.value.mensaje)
            
        } catch (error) {
            console.error("Error al registrar usuario:", error)
            alert('Error al registrar usuario')
        }
    }

    const iniciarSesion = async (usuario) => {
        try {
            const data = await axios.post(`${url}/iniciar-sesion-usuario`,usuario)
           
            if(data.data.cod === 0){
                localStorage.setItem('usuario_actual', JSON.stringify(data.data.usuario_actual))
                location.reload()
            }
            if(data.data.cod === 1)
                alert(data.data.mensaje)
            if(data.data.cod === 2)
                alert(data.data.mensaje)
        } catch (error) {
            console.error("Error al iniciar sesion:", error)
            alert('Error al iniciar sesion')
        }
    }

    const cerrarSesion = async () => {
        try {
            localStorage.clear()
            location.reload()
            const data = await axios.get(`${url}/cerrar-sesion-usuario`)
        } catch (error) {
            console.error("Error al cerrar sesion:", error)
            alert('Error al cerrar sesion desde vue')
        }
    }

    const usuarioActual = async () => {
        try {
            const data = await axios.get(`${url}/usuario-actual`)
            console.log(data.data)
            
        } catch (error) {
            console.error("Error al cerrar sesion:", error)
            alert('Error al cerrar sesion desde vue')
        }
    }

  return {
    usuario,
    registrarUsuario,
    iniciarSesion,
    cerrarSesion,
    usuarioActual
  }
})