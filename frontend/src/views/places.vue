<script>
import axios from 'axios'
import PlaceCard from '@/components/place-card.vue'

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
    const placesRequest = await axios.get('/api/places')
    this.places = placesRequest.data
  },
}
</script>

<template lang="pug">
  .places
    place-card(v-for="place in places" :place="place")
</template>
