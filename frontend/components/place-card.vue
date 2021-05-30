<script>
export default {
  name: 'PlaceCard',
  props: ['place'],
  data() {
    return {}
  },
}
</script>

<template lang="pug">
.box
  h1 {{ place.name }}
  p Coordinates: {{ place.location.coordinates[0] }}, {{ place.location.coordinates[1] }}
  h2 Memories ({{ place.memories.length }})

  .memory(v-for="memory in place.memories")
    h3 {{ memory.title }}
    p(v-if="!memory.favoritedBy.length")
      | not favorited by anyone yet!
    p(v-else)
      | {{ memory.favoritedBy.map(user => user.username).join(', ') }}
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  border: 1px solid #333;
  background: rgb(203, 203, 203);
  border-radius: 0.3rem;
  color: #333;
}
</style>
