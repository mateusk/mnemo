<script>
import axios from 'axios'
import MemoryCard from '@/components/memory-card.vue'

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
    const memoriesRequest = await axios.get('/api/memories')
    this.memories = memoriesRequest.data
  },
}
</script>

<template lang="pug">
  .memories
    memory-card(v-for="memory in memories" :memory="memory")
</template>
