import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../shared/views/HomeView.vue'
import AboutView from '@/shared/views/AboutView.vue'
import { pokemonRoute } from '../pokemons/router/index';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../counter/views/CounterView.vue')
    },
    {
      ...pokemonRoute,
      path: '/pokemons',
    },
    //La siguiente sintaxis dice que: Cualquier otra ruta que NO esta definida anteriormente
    //voy a redirigirlo a otra vista
    {
      path: '/:pathMatch(.*)*',
      redirect: () => ({ name: 'home' }),
      // redirect: () => {
      //   console.log('La ruta NO existe');
      //   return { name: 'home'}
      // },
    }

  ]
})

export default router
