<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SideNav',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['user', 'sidenav']),
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
  nav(id="sidenav" v-if="sidenav")
    .sidenavItem.firstSidenavItem
      button(@click="toggleSidenav") X
    .sidenavItem
      NuxtLink(to="/profile") My profile &nbsp;
    .sidenavItem
      NuxtLink(to="/") Log out &nbsp;
</template>

<style lang="scss" scoped>
#sidenav {
  position: absolute;
  top: 0;
  right: 0;
  background: white;
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
}

.sidenavItem {
  height: 40px;
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: black;
    font-size: 30px;
  }
}

.firstSidenavItem {
  margin-left: auto;
  margin-top: 20px;
  padding-right: 20px;
}
</style>
