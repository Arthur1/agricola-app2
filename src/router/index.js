import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import EastIndiaCompany from '@/views/EastIndiaCompany.vue'
import FieldMessenger from '@/views/FieldMessenger.vue'
import Contortionist from '@/views/Contortionist.vue'
import HomoLudens from '@/views/HomoLudens.vue'
import Veterinarian from '@/views/Veterinarian.vue'
import RandomNumber from '@/views/RandomNumber.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/east_india_company',
    name: 'EastIndiaCompany',
    component: EastIndiaCompany,
    meta: {
      title: '東インド会社'
    }
  },
  {
    path: '/field_messenger',
    name: 'FieldMessenger',
    component: FieldMessenger,
    meta: {
      title: '畑の使者'
    }
  },
  {
    path: '/contortionist',
    name: 'Contortionist',
    component: Contortionist,
    meta: {
      title: 'ヘビ女'
    }
  },
  {
    path: '/homo_ludens',
    name: 'HomoLudens',
    component: HomoLudens,
    meta: {
      title: 'ホモ・ルーデンス'
    }
  },
  {
    path: '/veterinarian',
    name: 'Veterinarian',
    component: Veterinarian,
    meta: {
      title: '獣医'
    }
  },
  {
    path: '/random_number',
    name: 'RandomNumber',
    component: RandomNumber,
    meta: {
      title: '乱数生成'
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Not Found'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' | Randomizer for Agricola'
  next()
})

export default router
