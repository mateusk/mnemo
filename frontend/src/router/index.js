import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

export default function init(store) {
  return new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/map',
        name: 'Map',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "map" */ '../views/map.vue'),
      },
      {
        path: '/feed',
        name: 'Feed',
        component: () => import(/* webpackChunkName: "feed" */ '../views/feed.vue'),
      },
      {
        path: '/memories',
        name: 'Memories',
        component: () => import(/* webpackChunkName: "memories" */ '../views/memories.vue'),
      },
    ],
  })
}
