<template>
  <div class="m-2 rounded-md overflow-hidden flex-grow">
    <GMapMap :center="reports[0].location" :zoom="10" map-type-id="terrain">
      <GMapCluster
        :zoomOnClick="true"
        :styles="[
          {
            url: '/spot.png',
            height: 50,
            width: 50,
            textColor: '#800000',
            textSize: 22,
          },
        ]"
      >
        <GMapMarker
          v-for="report in reports"
          :options="{
            position: report.location,
            collisionBehavior: 'REQUIRED',
          }"
          :icon="{
            url: '/spot.png',
            scaledSize: {
              width: 15,
              height: 15,
            },
          }"
          @click="showDetails"
        />
      </GMapCluster>
    </GMapMap>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import * as mockData from "../../assets/data.js";

export default {
  computed: {
    ...mapGetters(["reports"]),
  },
  methods: {
    showDetails() {
      console.log("details");
    },
    updateReports() {
      this.$store.commit("setReports", mockData.reports);
    },
  },
  mounted() {
    this.updateReports();
  },
};
</script>
