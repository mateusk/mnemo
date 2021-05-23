<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TopBar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['user']),
    isRouteLogin() {
      return this.$route.path === '/login'
    },
    isRouteRegister() {
      return this.$route.path === '/register'
    },
  },
  methods: {
    ...mapActions(['logout', 'toggleSidenav']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<template lang="pug">
  header(id="topbar" v-if="user !== null")
    #user-login
      button(@click="toggleSidenav") User

  header(id="topbar" v-else)
    #logo
      NuxtLink(to="/") Mnemo
    #user-login
      p
        NuxtLink(v-if="isRouteRegister" to="/login" tag="button") Log in
        NuxtLink(v-if="isRouteLogin" to="/register" tag="button") Register
</template>

<style lang="scss" scoped>
#topbar {
  min-height: 50px;
  padding: 0 20px 0 20px;
  background: lightgrey;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start; /* align horizontal */
  align-items: center; /* align vertical */
}

#logo a {
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#user-login {
  font-size: 14px;
  font-weight: regular;
  color: white;
  margin-left: auto;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
}

#logout {
  padding-left: 10px;
  text-decoration: underline !important;
}
</style>
