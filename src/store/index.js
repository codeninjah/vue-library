import Vue from 'vue'
import Vuex from 'vuex'
import Books from '../assets/books.json'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    Books: Books.books
  },

  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
