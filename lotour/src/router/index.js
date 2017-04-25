import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Catalog from '@/components/catalog/catalog'
import CatalogChild from '@/components/catalog/catalogChild'
import Search from '@/components/search/search'
import Cart from '@/components/cart/cart'
import User from '@/components/user/user'
import Detail from '@/components/detail/detail'

Vue.use(Router);

export default new Router({
  routes: [
    {
	  path: '/',
	  redirect:"/home"
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/catalog',
      component: Catalog,
      children:[ 
        {
          path:'/catalog/:id',
          component: CatalogChild
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
     {
      path: '/cart',
      component: Cart
    },
    {
      path: '/user',
      component: User
    },
     {
      path: '/detail/:id',
      component: Detail
    }
  ]
})
