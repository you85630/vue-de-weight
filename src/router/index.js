import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const deWeight = resolve => require(['components/common/de-weight'], resolve)

export default new Router({
  routes: [{
    path: '/',
    name: 'deWeight',
    component: deWeight
  }]
})
