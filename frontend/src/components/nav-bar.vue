<script>
export default {
  name: 'NavBar',
  data() {
    return {}
  },
}
</script>

<template lang="pug">
  #nav
    ul
      li
        router-link(to="/users") Users
      li
        router-link(to="/memories") Memories
      li
        router-link(to="/places") Places
</template>

<style lang="scss" scoped>
#logo a {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  height: 75px;
  width: 100%;

  ul {
    display: flex;
    list-style-type: none;
    font-size: 14px;
  }

  li {
    padding-left: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
    }

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
