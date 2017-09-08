import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/all'
import goods from '../components/goods.vue'
import reatings from '../components/reatings.vue'
import seller from '../components/seller.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:'/goods',
    },
    {
      path: '/index',
      component: index,
      children:[
        {
          path: '/goods',
          component: goods,
        },
        {
          path: '/reatings',
          component: reatings,
        },
        {
          path: '/seller',
          component: seller,
        },
      ]
    }

  ]
}
)

