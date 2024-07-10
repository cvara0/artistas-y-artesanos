import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/obras/:id_tipo_obra',
      name: 'obras',
      component: () => import('../views/ObrasView.vue')
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('../views/FavoritosView.vue')
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/UsuariosView.vue')
    },
    {
      path: '/novedades',
      name: 'novedades',
      component: () => import('../views/ArtesView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ArtesView.vue')
    }
  ]
})

export default router
