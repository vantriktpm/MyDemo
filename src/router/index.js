import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ClassView from '../views/ClassView.vue'
import GalleryView from '../views/GalleryView.vue'
import TeacherView from '../views/TeacherView.vue'
import BlogView from '../views/BlogView.vue'
import SingleView from '../views/SingleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
