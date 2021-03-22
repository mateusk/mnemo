<script>
import LoggedUser from '@/components/logged-user.vue'

export default {
  name: 'Home',
  components: {
    LoggedUser,
  },
  data() {
    return {}
  },
}
</script>

<template lang="pug">
  logged-user
</template>
