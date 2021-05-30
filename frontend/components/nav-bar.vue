<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['user']),
  },
}
</script>

<template lang="pug">
  #nav(v-if="user !== null")
    ul
      li
        NuxtLink(to="/map") Map
      li
        NuxtLink(to="/feed") Feed
      li
        NuxtLink(to="/memories") My Memories
      li
        NuxtLink(to="/favorites") Favorites
</template>

<style lang="scss" scoped>
#nav {
  display: flex;
  align-items: center;
  min-height: 65px;
  width: 100%;
  background-color: lightgrey;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: inline-flex;
    width: 100%;
    height: 100%;
  }

  li {
    width: 25%;
    text-align: center;
    height: 100%;

    a {
      font-weight: bold;
      font-size: 14px;
      color: dimgrey;
      text-decoration: none;
      display: block;
      width: 100%;
      padding-top: 40px;

      &.router-link-exact-active {
        color: darkcyan;
      }
    }
  }
}
</style>
