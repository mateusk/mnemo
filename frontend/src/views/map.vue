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
      accessToken: 'pk.eyJ1IjoibWtuZWxzZW4iLCJhIjoiY2tteGt0cnl0MHB2ejJ2bTlzb3pjNmg2diJ9.xu0EfOsaCwAXyo9FldXVlg',
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
  position: fixed;
  top: 50px;
  width: 100%;
  height: 75%;
}
@import '~mapbox-gl/dist/mapbox-gl.css';
</style>
