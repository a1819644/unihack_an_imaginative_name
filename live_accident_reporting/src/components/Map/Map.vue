<template>
  <div class="m-2 rounded-md overflow-hidden flex-grow">
    <GoogleMap
      api-key="AIzaSyDvJ6XbLxaIR0pN4yBaorBX5bPv_ogaFCE"
      style="width: 100%; height: 100%;"
      :center="reports[0].location"
      :zoom="15"
    >
      <Marker
        v-for="report in reports"
        :options="{
          position: report.location,
          collisionBehavior: 'REQUIRED',
        }"
        :icon="{
          url: '../../assets/spot.svg',
        }"
      />
    </GoogleMap>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import { reports } from "../../assets/data.js";

export default {
  components: { GoogleMap, Marker },
  data() {
    return {
      reports: reports,
    };
  },
};
</script>
