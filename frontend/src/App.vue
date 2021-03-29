<script>
import NavBar from '@/components/nav-bar.vue'

export default {
  components: {
    NavBar,
  },
}
</script>

<template lang="pug">
  #app
    nav-bar
    router-view
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  padding: 50px;
  color: #2c3e50;
}
</style>
