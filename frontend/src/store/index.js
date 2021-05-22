import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.withCredentials = true

Vue.use(Vuex)

const mutations = {
  SET_USER: 'set user',
  TOGGLE_SIDENAV: 'toggle sidenav',
}

const store = new Vuex.Store({
  state: {
    user: null,
    sidenav: false,
  },
  mutations: {
    [mutations.SET_USER](state, user) {
      state.user = user
    },
    [mutations.TOGGLE_SIDENAV](state) {
      state.sidenav = !state.sidenav
    },
  },
  actions: {
    async fetchSession({ commit }) {
      const user = await axios.get('/api/account/session')
      commit(mutations.SET_USER, user.data || null)
    },
    async login({ commit }, credentials) {
      const user = await axios.post('/api/account/session', credentials)
      commit(mutations.SET_USER, user.data)
    },
    async register(store, user) {
      return axios.post('/api/account', user)
    },
    async logout({ commit }) {
      await axios.delete('/api/account/session')
      commit(mutations.SET_USER, null)
    },
    async fetchUser(store, id) {
      const userRequest = await axios.get(`/api/users/${id}`)
      return userRequest.data
    },
    async fetchPlaces() {
      const placesRequest = await axios.get('/api/places')
      return placesRequest.data
    },
    async fetchMemories() {
      const memoriesRequest = await axios.get('/api/memories')
      return memoriesRequest.data
    },
    toggleSidenav({ commit }) {
      commit(mutations.TOGGLE_SIDENAV)
    },
  },
  modules: {},
  getters: {
    user: state => {
      return state.user
    },
    sidenav: state => {
      return state.sidenav
    },
  },
})

export default async function init() {
  await store.dispatch('fetchSession')
  return store
}
