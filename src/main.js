// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(VueRouter)

import VueRouter from 'vue-router'
import Home from '@/components/pages/Home'
import News from '@/components/pages/News'
import Issue from '@/components/pages/Issue'
import List from '@/components/pages/List'
import More from '@/components/pages/More'

const routes = [
  
  {
    path: '/',
    redirect: '/News',
  },
  {
    path: '/News',
    name: 'News',
    component: News
  },
  {
    path: '/Issue',
    name: 'Issue',
    component: Issue
  },
  {
    path: '/List',
    name: 'List',
    component: List
  },
  {
    path: '/More',
    name: 'More',
    component: More
  }
]

const router = new VueRouter({
  routes,
  'linkActiveClass': 'active'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Home/>',
  components: { Home }
})
