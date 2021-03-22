import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async fetchUsers() {
      const usersRequest = await axios.get('/api/users')
      return usersRequest.data
    },
    async fetchPlaces() {
      const placesRequest = await axios.get('/api/places')
      return placesRequest.data
    },
    async fetchMemories() {
      const memoriesRequest = await axios.get('/api/memories')
      return memoriesRequest.data
    },
  },
  modules: {},
})
