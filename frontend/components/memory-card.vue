<script>
export default {
  name: 'MemoryCard',
  props: ['memory'],
  data() {
    return {}
  },
}
</script>

<template lang="pug">
.box
  h1 {{ memory.title }}
  p {{ memory.place.name }}
  p {{ memory.text }}
  p {{ memory.date }}
  p Favorited by {{ memory.favoritedBy.length }}
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
