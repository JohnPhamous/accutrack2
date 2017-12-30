import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Success from '../components/Signin/Success'
import Error from '../components/Signin/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    }
  ],
  mode: 'history'
})
