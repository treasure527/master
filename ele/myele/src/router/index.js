import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods'
import rating from '@/components/rating/rating'
import seller from '@/components/seller/seller'
import potato from '@/components/goods/potato/potato'
import tomato from '@/components/goods/tomato/tomato'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      component: goods,
      children:[
        {path:'/potato',component:potato},
        {path:'/tomato',component:tomato}
      ]
    },
    {
      path: '/rating',
      name:'I-am-beauty',
      component: rating
    },
    {
      path: '/seller',
      name:'I-am-very-beauty',
      component: seller
    },

  ]
})
