<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TopBar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['user']),
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
  header(id="topbar")
    #logo
      router-link(to="/") Mnemo
    #user-login(v-if="user")
      p Hello,
        router-link(to="/profile") {{ user.username }} &nbsp;
        a(@click="doLogout" href="#" id="logout") Logout
</template>

<style lang="scss" scoped>
#topbar {
  flex-shrink: 0;
  height: 50px;
  padding: 0px 20px 0px 20px;
  background: linear-gradient(90deg, rgb(2, 98, 122) 0%, rgba(0, 212, 255, 1) 100%);
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
