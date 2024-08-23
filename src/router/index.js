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
          path: '/produtos/:id',
          name: 'produtos',
          component: () => import('../views/ProdutosView.vue')
        },
        {
          path: '/orcamentos/:id',
          name: 'orcamentos',
          component: () => import('../views/OrcamentosView.vue')
        },
        {
          path: '/sobre',
          name: 'sobre',
          component: () => import('../views/SobreView.vue')
        }
      ]
    }
  ]
})

export default router
