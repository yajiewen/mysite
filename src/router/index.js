import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import TimuPage from '../views/TimuPage.vue'
import Honor from '../views/Honor.vue'
import Mynotebook from '../views/Mynotebook.vue'

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
  },
  {
    path:'/honor',
    name:'Honor',
    component: Honor
  },
  {
    path:'/notes',
    name:'Mynotebook',
    component: Mynotebook
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
