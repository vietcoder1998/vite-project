import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Gallery from './views/Gallery.vue'
import SlidePage from './views/SlidePage.vue'
import Admin from './views/Admin.vue'
import FormContact from './views/FormContact.vue'
import BeaeCollection from './views/BeaeCollection.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/form-contact',
    name: 'FormContact',
    component: FormContact
  },
  {
    path: '/slider',
    name: 'SlidePage',
    component: SlidePage
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/beae-collection',
    name: 'beae-collection',
    component: BeaeCollection
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
