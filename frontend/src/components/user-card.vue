<script>
export default {
  name: 'UserCard',
  props: ['user'],
  data() {
    return {}
  },
}
</script>

<template lang="pug">
.box
  h1 {{ user.username }}
  p E-mail: {{ user.email }}
  h2 Memories ({{ user.memories.length }})

  .memory(v-for="memory in user.memories")
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
