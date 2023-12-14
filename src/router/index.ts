import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView
    },

    {
      path: '/productovista',
      name: 'productovista',
      component: () => import('../views/ProductovistaView.vue')
    },

    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    },

    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductoView.vue'),
      children: [
        { path: '', component: () => import('../components/producto/ProductoList.vue') },
        { path: 'crear', component: () => import('../components/producto/ProductoCreate.vue') },
        { path: 'editar/:id', component: () => import('../components/producto/ProductoEdit.vue') }
      ]
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: () => import('../views/CategoriaView.vue'),
      children: [
        { path: '', component: () => import('../components/categoria/CategoriaList.vue') },
        { path: 'crear', component: () => import('../components/categoria/CategoriaCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/categoria/CategoriaEdit.vue')
        }
      ]
    },
    {
      path: '/unidades',
      name: 'unidades',
      component: () => import('../views/UnidadView.vue'),
      children: [
        { path: '', component: () => import('../components/unidad/UnidadList.vue') },
        { path: 'crear', component: () => import('../components/unidad/UnidadCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/unidad/UnidadEdit.vue')
        }
      ]
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: () => import('../views/ClienteView.vue'),
      children: [
        { path: '', component: () => import('../components/cliente/ClienteList.vue') },
        { path: 'crear', component: () => import('../components/cliente/ClienteCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/cliente/ClienteEdit.vue')
        }
      ]
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/UsuarioView.vue'),
      children: [
        { path: '', component: () => import('../components/usuario/UsuarioList.vue') },
        { path: 'crear', component: () => import('../components/usuario/UsuarioCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/usuario/UsuarioEdit.vue')
        }
      ]
    },
    {
      path: '/ventas',
      name: 'ventas',
      component: () => import('../views/VentaView.vue'),
      children: [
        { path: '', component: () => import('../components/venta/VentaList.vue') },
        { path: 'crear', component: () => import('../components/venta/VentaCreate.vue') },
        {
          path: 'editar/:id',
          component: () => import('../components/venta/VentaEdit.vue')
        }
      ]
    },
  ]
})

export default router
