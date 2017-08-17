import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import deWeight from './module/de-weight'
export default new Vuex.Store({
  modules: {
    deWeight
  }
})
