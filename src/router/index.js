import Vue from 'vue'
import VueRouter from 'vue-router'
import Project from '../../.elek.io/project.json'

Vue.use(VueRouter)

const routes = Project.pages.map((page) => {
  return {
    path: page.path,
    name: page.name,
    props: {
      blocks: page.content
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(`../../${page.layout.path}`)
  }
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
