<template>
  <div class="w-96">
    <PieChart />
    <BarChart />
  </div>
</template>

<script>
import PieChart from "../PieChart.vue";
import BarChart from "../BarChart.vue";

export default {
  name: "Insights",
  components: {
    PieChart,
    BarChart,
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
