import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Take from '@/components/home/take/Take'
import List from '@/components/home/list/List'
import Shopcart from '@/components/home/shopcart/Shopcart'
import Mine from '@/components/home/mine/Mine'
import Miney from '@/components/home/mine/Miney'
import Seller from '@/components/seller/Seller'
import Login from '@/components/home/login/Login'
import Res from '@/components/home/res/Res'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/take',
          name:Take,
          component: Take
        },
        {
          path: '/list',
          component: List
        },
        {
          path: '/shopcart',
          component: Shopcart
        },
        {
          path: '/mine',
          component: Mine
        },
        {
          path: '/miney',
          component: Miney
        },
      ]
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/res',
      component:Res
    },
    {
      path:'/seller',
      name:'Seller',
      component:Seller
    },
    // {
    //   path: '*',
    //   redirect: '/take'
    // },
  ]
})
