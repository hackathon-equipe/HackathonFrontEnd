import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/cliente',
      component: () => import('../layouts/ClienteLayout.vue'),
      children: [
        {
          path: '/cliente/home',
          name: 'home',
          component: () => import('../views/cliente/HomeView.vue')
        },
        {
          path: '/cliente/produto/:id',
          name: 'produto',
          component: () => import('../views/cliente/ProdutoView.vue'),
          params: true
        },
        {
          path: '/cliente/produtos',
          name: 'produtos',
          component: () => import('../views/cliente/ProdutosView.vue'),
          params: true
        },
        {
          path: '//clienteorcamentos',
          name: 'orcamentos',
          component: () => import('../views/cliente/OrcamentosView.vue')
        },
        {
          path: '/cliente/sobre',
          name: 'sobre',
          component: () => import('../views/cliente/SobreView.vue')
        },
        {
          path: '/cliente/perfil',
          name: 'perfil',
          component: () => import('../views/cliente/perfilView.vue')
        },
        {
          path: '/carrinho',
          name: 'carrinho',
          component: () => import('../views/cliente/CarrinhoView.vue')
        },
      ]
    },
    {
      path: '/admin',
      component: () => import('../layouts/AdminLayout.vue'),
      children: [
        {
          path: '/admin/home',
          name: 'home',
          component: () => import('../views/admin/HomeView.vue')
        },
        {
          path: '/admin/produto/:id',
          name: 'produto',
          component: () => import('../views/admin/ProdutoView.vue'),
          params: true
        },
        {
          path: '/admin/produtos',
          name: 'produtos',
          component: () => import('../views/admin/ProdutosView.vue'),
          params: true
        },
        {
          path: '//adminorcamentos',
          name: 'orcamentos',
          component: () => import('../views/admin/OrcamentosView.vue')
        },
        {
          path: '/admin/sobre',
          name: 'sobre',
          component: () => import('../views/admin/SobreView.vue')
        },
        {
          path: '/admin/perfil',
          name: 'perfil',
          component: () => import('../views/admin/perfilView.vue')
        },
        {
          path: '/carrinho',
          name: 'carrinho',
          component: () => import('../views/admin/CarrinhoView.vue')
        },
      ]
    }
  ]
})

export default router
