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
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/classes',
      name: 'classes',
      component: ClassView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/team',
      name: 'team',
      component: TeacherView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/single',
      name: 'single',
      component: SingleView
    }
  ]
})

export default router
