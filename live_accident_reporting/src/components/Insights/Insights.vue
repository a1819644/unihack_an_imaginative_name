<template>
<div class="block w-full h-full">
  <div class="w-full inline-block flex pr-20">
    <div class="w-1/2">
    <label class="font-bold">Type of Accident</label>
      <PieChart />
    </div>
    <div class="w-1/2">
    <label class="font-bold">Vehicles analysis</label>
      <BarChart />
    </div>
  </div>
  <div class="w-full inline-block flex pr-20">
    <div class="w-1/2">
    <label class="font-bold">Weather Type</label>
      <PieChart2 />
    </div>
    <div class="w-1/2">
    <label class="font-bold">Danger Zones</label>
      <PieChart3 />
    </div>
  </div>
  </div>
</template>

<script>
import PieChart from "../PieChart.vue";
import PieChart2 from "../PieChart2.vue";
import PieChart3 from "../PieChart3.vue";
import BarChart from "../BarChart.vue";

export default {
  name: "Insights",
  components: {
    PieChart,
    BarChart,
    PieChart2,
    PieChart3
  },
  data() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        },
        {
          position: {
            lat: 51.198429,
            lng: 6.69529,
          },
        },
        {
          position: {
            lat: 51.165218,
            lng: 7.067116,
          },
        },
        {
          position: {
            lat: 51.09256,
            lng: 6.84074,
          },
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped></style>
