<template>
  <div class="w-full h-full">
    <GoogleMap
      api-key="AIzaSyDvJ6XbLxaIR0pN4yBaorBX5bPv_ogaFCE"
      style="width: 100%; height: 500px;"
      :center="center"
      :zoom="15"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.689247, lng: -74.044502 };

    return { center };
  },
});
</script>
