<script>
import UserCard from '@/components/user-card.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Profile',
  components: { UserCard },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    ...mapActions(['fetchUser']),
  },
}
</script>

<template lang="pug">
  .about
    UserCard(:user="user" v-if="user")
</template>
