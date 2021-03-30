<script>
import MemoryCard from '@/components/memory-card.vue'
import LoggedUser from '@/components/logged-user.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Memories',
  components: {
    MemoryCard,
    LoggedUser,
  },
  data() {
    return {
      memories: [],
    }
  },
  async created() {
    this.memories = await this.fetchMemories()
  },
  methods: {
    ...mapActions(['fetchMemories']),
  },
}
</script>

<template lang="pug">
  #view
    logged-user
    .memories
      memory-card(v-for="memory in memories" :memory="memory")
</template>
