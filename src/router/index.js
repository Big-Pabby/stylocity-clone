import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Register from '../views/Register.vue'
import Shop from '../views/Shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/shop-items',
    name: 'Shop',
    component: Shop
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
