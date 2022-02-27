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
            fontWeight: 900,
          },
        ]"
      >
        <GMapMarker
          v-for="(report, index) in reports"
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
          @click="showDetails(index)"
          ><GMapInfoWindow
            :opened="(openedMarker === index)"
            @closeclick="openedMarker = null"
          >
            <div class="w-40">
              <p class="text-base text-gray-800 text-left">
                Type: {{ report.type }}
              </p>
              <p class="text-base text-gray-800 text-left">
                Vehicles: {{ (report.vehicles[0], report.vehicles[1]) }}
              </p>
            </div>
          </GMapInfoWindow>
        </GMapMarker>
      </GMapCluster>
    </GMapMap>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import * as mockData from "../../assets/data.js";

export default {
  data() {
    return {
      openedMarker: null,
    };
  },
  computed: {
    ...mapGetters(["reports"]),
  },
  methods: {
    showDetails(index) {
      this.openedMarker = index;
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
