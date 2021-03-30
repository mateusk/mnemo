<script>
import UserCard from '@/components/user-card.vue'
import LoggedUser from '@/components/logged-user.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Users',
  components: {
    UserCard,
    LoggedUser,
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
  #view
    logged-user
    .users
      user-card(v-for="user in users" :user="user")
</template>
