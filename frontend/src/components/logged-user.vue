<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'LoggedUser',
  mounted() {
    if (this.loggedUser === null) this.setLoggedUser('604dfb7f07149e0014e44289')
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
