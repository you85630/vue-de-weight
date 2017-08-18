// import * as types from './../types'
export default {
  state: {
    left: [
      {
        name: 'one'
      }, {
        name: 'two'
      }, {
        name: 'three'
      }, {
        name: 'four'
      }, {
        name: 'five'
      }
    ],
    right: []
  },
  getters: {
    left: state => state.left,
    right: state => state.right
  },
  mutations: {
    addli (state, key) {
      state.right.push({
        name: key.name,
        link: key.link
      })
      var rightTab = []
      var set = new Set()
      state.right.forEach((tab) => {
        if (!set.has(tab.name)) {
          rightTab.push(tab)
          set.add(tab.name)
        }
      })
      state.right = rightTab
    }
  },
  actions: {
    addli: ({commit}, key) => commit('addli', key)
  }
}
