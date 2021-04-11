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
        router-link(to="/map") Map
      li
        router-link(to="/feed") Feed
      li
        router-link(to="/memories") Mnemos
      li
        router-link(to="/favorites") Favorites
      li
        router-link(to="/settings") Settings
</template>

<style lang="scss" scoped>
#logo a {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav {
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 65px;
  width: 100%;
  background-color: lightgrey;

  ul {
    padding: 0px;
    margin: 0;
    list-style: none;
    display: inline-flex;
    width: 100%;
    height: 100%;
  }

  li {
    width: 20%;
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
