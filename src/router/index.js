import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import TimuPage from '../views/TimuPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/projects',
    name:'Projects',
    component: Projects
  },{
    path:'/timusys',
    name:'TimuPage',
    component: TimuPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
