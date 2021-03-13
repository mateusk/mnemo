<template lang="pug">
  #app
    h1 Mnemo
    #nav
      router-link(to="/") Home
      router-link(to="/users") Users
      router-link(to="/memories") Memories
      router-link(to="/places") Places
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

#nav {
  padding-bottom: 50px;
  a {
    padding-right: 30px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
