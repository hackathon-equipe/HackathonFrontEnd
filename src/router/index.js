import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/produto/:id',
          name: 'produto',
          component: () => import('../views/ProdutoView.vue'),
          params: true
        },
        {
          path: '/produtos',
          name: 'produtos',
          component: () => import('../views/ProdutosView.vue'),
          params: true
        },
        {
          path: '/orcamentos',
          name: 'orcamentos',
          component: () => import('../views/OrcamentosView.vue')
        },
        {
          path: '/sobre',
          name: 'sobre',
          component: () => import('../views/SobreView.vue')
        },
        {
          path: '/perfil',
          name: 'perfil',
          component: () => import('../views/perfilView.vue')
        },
      ]
    }
  ]
})

export default router
