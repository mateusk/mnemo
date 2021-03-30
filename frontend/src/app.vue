<script>
import NavBar from '@/components/nav-bar.vue'
import TopBar from '@/components/top-bar.vue'

export default {
  components: {
    NavBar,
    TopBar,
  },
}
</script>

<template lang="pug">
  #app
    top-bar
    router-view
    nav-bar
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 20px;
}
</style>
