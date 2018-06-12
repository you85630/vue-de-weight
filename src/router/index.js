import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const deWeight = () => import('components/common/de-weight')

export default new Router({
  routes: [{
    path: '/',
    name: 'deWeight',
    component: deWeight
  }]
})
