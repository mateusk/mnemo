<script>
import PlaceCard from '@/components/place-card.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Places',
  components: {
    PlaceCard,
  },
  data() {
    return {
      places: [],
    }
  },
  async created() {
    this.places = await this.fetchPlaces()
  },
  methods: {
    ...mapActions(['fetchPlaces']),
  },
}
</script>

<template lang="pug">
  div
    .places
      place-card(v-for="place in places" :place="place")
</template>
