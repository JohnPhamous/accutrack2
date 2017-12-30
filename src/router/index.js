import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home'
import Success from '../components/Signin/Success'
import Error from '../components/Signin/Error'
import InstructorSignIn from '../components/InstructorSignIn'

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
    },
    {
      path: '/instructor',
      name: 'Instructor Sign In',
      component: InstructorSignIn
    }
  ],
  mode: 'history'
})
