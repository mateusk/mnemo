<script>
export default {
  name: 'TopBar',
  data() {
    return {}
  },
}
</script>

<template lang="pug">
  header(id="topbar")
    #logo
      router-link(to="/") Mnemo
</template>

<style lang="scss" scoped>
#topbar {
  flex-shrink: 0;
}

#logo a {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
</style>
