import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/myhome/home'
import Course from '../pages/mycourse/course'
import Eat from '../pages/myeat/eat'
import Collect from '../pages/mycollect/collect'
import Mine from '../pages/mymine/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component:Home
    },
    {
      path: '/course',
      component:Course
    },
    {
      path: '/eat',
      component:Eat
    },
    {
      path: '/collect',
      component:Collect
    },
    {
      path: '/mine',
      component:Mine
    }
  ]
})
