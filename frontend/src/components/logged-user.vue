<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'LoggedUser',
  mounted() {
    if (this.loggedUser === null) this.setLoggedUser('Mateus')
  },
  methods: {
    ...mapActions(['setLoggedUser']),
  },
  computed: {
    ...mapState(['loggedUser']),
  },
}
</script>

<template lang="pug">
.userInfo
  h3(v-if="loggedUser") Hi {{ loggedUser.username }}
</template>

<style lang="scss" scoped>
.userInfo {
  color: #333;
}
</style>
