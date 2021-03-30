<script>
import PlaceCard from '@/components/place-card.vue'
import LoggedUser from '@/components/logged-user.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Places',
  components: {
    PlaceCard,
    LoggedUser,
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
  #view
    logged-user
    .places
      place-card(v-for="place in places" :place="place")
</template>
