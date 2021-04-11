<script>
import UserCard from '@/components/user-card.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'profile',
  components: { UserCard },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['fetchUser']),
  },
  computed: {
    ...mapGetters(['user']),
  },
}
</script>

<template lang="pug">
  .about
    UserCard(:user="user" v-if="user")
</template>
