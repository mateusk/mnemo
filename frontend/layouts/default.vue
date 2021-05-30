<template lang="pug">
  #app
    top-bar
    side-nav
    Nuxt
    nav-bar
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

#view {
  width: 100%;
  overflow: auto;
  flex-grow: 1;
}

#view::-webkit-scrollbar {
  display: none;
}
</style>
