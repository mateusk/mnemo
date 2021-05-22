<script>
import NavBar from '@/components/nav-bar.vue'
import TopBar from '@/components/top-bar.vue'
import SideNav from '@/components/side-nav.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    NavBar,
    SideNav,
    TopBar,
  },
  methods: {
    ...mapActions(['logout']),
    async doLogout() {
      await this.logout()
      this.$router.push('/login')
    },
  },
}
</script>

<template lang="pug">
  #app
    top-bar
    side-nav
    #view
      router-view
    nav-bar
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#view {
  width: 100%;
  overflow: auto;
  padding: 20px;
  box-sizing: border-box;
  height: auto;
}

#view::-webkit-scrollbar {
  display: none;
}
</style>
