<script>
import MemoryCard from '@/components/memory-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Memories',
  components: {
    MemoryCard,
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
  div
    .memories
      memory-card(v-for="memory in memories" :memory="memory")
</template>
