import Vue from 'vue'
import Router from 'vue-router'
import Contact from '@/views/Contact'
import Home from '@/views/Home'
import Status from '@/views/Status'
import Work from '@/views/Work'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    }
  ]
})
