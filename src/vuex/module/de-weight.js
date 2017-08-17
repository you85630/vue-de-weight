// import * as types from './../types'
export default {
  state: {
    left: [
      {
        name: 'one',
        link: '1-1'
      }, {
        name: 'two',
        link: '1-2'
      }, {
        name: 'three',
        link: '1-3'
      }, {
        name: 'four',
        link: '1-4'
      }, {
        name: 'five',
        link: '1-5'
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
