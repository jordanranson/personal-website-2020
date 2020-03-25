import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      level: 0
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue'),
    meta: {
      level: 1
    }
  },
  {
    path: '/projects/:projectSlug',
    name: 'project',
    component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue'),
    meta: {
      level: 2
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      level: 1
    }
  },
  {
    path: '/about/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      level: 1
    }
  },
  {
    path: '/about/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      level: 1
    }
  },
  {
    path: '/recipe/:recipeSlug',
    name: 'recipe',
    component: () => import(/* webpackChunkName: "recipe" */ '../views/Recipe.vue'),
    meta: {
      level: 1
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
