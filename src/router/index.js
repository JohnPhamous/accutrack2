import Vue from 'vue'
import Router from 'vue-router'
import { store } from '../store/store'

import Home from '../components/Home'
import Success from '../components/Signin/Success'
import Error from '../components/Signin/Error'
import InstructorSignIn from '../components/InstructorSignIn'
import ViewClasses from '../components/class/ViewClasses'
import ClassView from '../components/class/Class'
import CreateClass from '../components/class/CreateClass'

Vue.use(Router)

let router = new Router({
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
    },
    {
      path: '/classes',
      name: 'View Classes',
      component: ViewClasses,
      meta: { requiresAuth: true }
    },
    {
      path: '/classes/view/:id',
      name: 'Class View',
      component: ClassView,
      meta: { requiresAuth: true }
    },
    {
      path: '/classes/create',
      name: 'Create Class',
      component: CreateClass,
      meta: { requiresAuth: true }
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.user.instructor) {
      alert(
        'Only instructors can access this page, redirecting you to the homepage'
      )
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
