const Mutations = {
  SET_USER: 'set user',
  TOGGLE_SIDENAV: 'toggle sidenav',
}

export const state = () => ({
  user: null,
  sidenav: false,
})

export const mutations = {
  [Mutations.SET_USER](state, user) {
    state.user = user
  },
  [Mutations.TOGGLE_SIDENAV](state) {
    state.sidenav = !state.sidenav
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const user = await this.$axios.get('/api/account/session')
    commit(Mutations.SET_USER, user.data || null)
  },
  async fetchSession({ commit }) {
    const user = await this.$axios.get('/api/account/session')
    commit(Mutations.SET_USER, user.data || null)
  },
  async login({ commit }, credentials) {
    const user = await this.$axios.post('/api/account/session', credentials)
    commit(Mutations.SET_USER, user.data)
  },
  async register(store, user) {
    const registerRequest = await this.$axios.post('/api/account', user)
    return registerRequest
  },
  async logout({ commit }) {
    await this.$axios.delete('/api/account/session')
    commit(Mutations.SET_USER, null)
  },
  async fetchUser(store, id) {
    const userRequest = await this.$axios.get(`/api/users/${id}`)
    return userRequest.data
  },
  async fetchPlaces() {
    const placesRequest = await this.$axios.get('/api/places')
    return placesRequest.data
  },
  async fetchMemories() {
    const memoriesRequest = await this.$axios.get('/api/memories')
    return memoriesRequest.data
  },
  toggleSidenav({ commit }) {
    commit(Mutations.TOGGLE_SIDENAV)
  },
}

export const getters = {
  user: (state) => {
    return state.user
  },
  sidenav: (state) => {
    return state.sidenav
  },
}
