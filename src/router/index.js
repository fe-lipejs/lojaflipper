import { createWebHistory, createRouter } from "vue-router";
import home from "@/components/Views/home.vue";
import Login from "@/components/Views/Login";
import Categoria from "@/components/Categoria.vue"
import Carrinho from "@/components/Views/Carrinho/Carrinho.vue"
import Produto from "@/components/Views/Produto/Produto.vue"
import Informacoes from "@/components/Views/Informacoes/Informacoes.vue"
import Frete from "@/components/Views/Frete/Frete.vue"
import Pagamento from "@/components/Views/Pagamento/Pagamento.vue"
import felipePage from "@/components/Views/felipePage/felipePage.vue"
import felipePageContato from "@/components/Views/felipePage/felipePageContato.vue"
import confirmarPage from "@/components/Views/felipePage/confirmarPage"
//ADMIN
import CadastroProdutos from "@/components/Views/Admin/CadastroProdutos/CadastroProdutos.vue"
const routes = [
  /* ADMIN */
  {
    path: "/cadastro-produtos",
    name: "CadastroProdutos",
    component: CadastroProdutos,
  },
  //FELIPE CONTATO
  {
    path: "/felipe/contato",
    name: "felipePageContato",
    component: felipePageContato,
  },
  //FELIPE
  {
    path: "/felipe",
    name: "felipePage",
    component: felipePage,
  },
  //CONFIRMATION PAGE
  {
    path: "/felipe/confirmar",
    name: "confirmarPage",
    component: confirmarPage,
  },
  //USER
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/categoria",
    name: "Categoria",
    component: Categoria
  },
  {
    path: "/carrinho",
    name: "Carrinho",
    component: Carrinho
  },
  {
    path: "/produto/:id_produto",
    name: "Produto",
    component: Produto
  },
  {
    path: "/informacoes",
    name: "informacoes",
    component: Informacoes
  },
  {
    path: "/pagamento",
    name: "pagamento",
    component: Pagamento
  },
  {
    path: "/Frete",
    name: "Frete",
    component: Frete
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;