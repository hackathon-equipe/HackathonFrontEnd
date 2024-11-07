import { createRouter, createWebHistory } from 'vue-router';

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
          path: '/produtos/:categoria',
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
        {
          path: '/carrinho',
          name: 'carrinho',
          component: () => import('../views/CarrinhoView.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue')
        },          
        {
        path: '/pagamento',
        name: 'pagamento',
        component: () => import('../views/pagamentoView.vue')
        },
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // Verifica se há uma posição salva (no caso de navegação com histórico)
    if (savedPosition) {
      return savedPosition; // Retorna para a posição salva
    }
    // Sempre volta para o topo da página
    return { top: 0 };
  },
})

export default router
