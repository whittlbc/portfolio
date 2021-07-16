import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: App },
  { path: '/', redirect: '/home' },

]
//not doing pushstate because i dont have a server to redirect to root.
const router = new VueRouter({
    routes, // short for routes: routes
    linkActiveClass:'active'
})

export default router;