<script>
import UserCard from '@/components/user-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Users',
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers']),
  },
}
</script>

<template lang="pug">
  div
    .users
      user-card(v-for="user in users" :user="user")
</template>
