import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    milk: 'milk',
    veganmilk: 'soya milk',
    sweetnerOption: ['white sugar','date syrup', 'coconut sugar']
  },
  mutations: {
    
  },
  actions: {

  }, 
  getters: {
    milk: state => state.milk,
    veganmilk: state => state.veganmilk,
    sweetnerOption: state => state.sweetnerOption
  }
})
