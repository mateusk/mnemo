<script>
import Mapbox from 'mapbox-gl'
import { MglMap } from 'vue-mapbox'

export default {
  name: 'Map',
  components: {
    MglMap,
  },
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_KEY,
      mapStyle: 'mapbox://styles/mapbox/streets-v11',
      center: [13.4, 52.5],
      zoom: 12,
    }
  },
  created() {
    this.mapbox = Mapbox
  },
  methods: {},
}
</script>

<template lang="pug">
  MglMap(container="map-container", :accessToken="accessToken", :mapStyle="mapStyle", :center.sync="center", :zoom="zoom")
</template>

<style lang="scss">
#map-container {
  width: 100%;
  z-index: 1;
}

@import '~mapbox-gl/dist/mapbox-gl.css';
</style>
