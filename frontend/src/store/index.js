import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const mutations = {
  SET_LOGGED_USER: 'set logged user',
}

export default new Vuex.Store({
  state: {
    loggedUser: null,
  },
  mutations: {
    [mutations.SET_LOGGED_USER](state, payload) {
      state.loggedUser = payload
    },
  },
  actions: {
    async setLoggedUser({ commit }, username) {
      const user = await axios.get(`/api/users/?username=${username}`)

      // Returning only the first user found with the username query:
      commit(mutations.SET_LOGGED_USER, user.data[0])
    },
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
  // getters should only be used to compute on state variables
  // e.g.: sort an array stored in the state
  getters: {
    loggedUser: state => {
      return state.loggedUser
    },
  },
})
