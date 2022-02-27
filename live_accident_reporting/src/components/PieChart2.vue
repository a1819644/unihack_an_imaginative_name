<template>
  <PieChart :chartData="testData" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PieChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { reports } from "../assets/data";

Chart.register(...registerables);

export default defineComponent({
  name: "Home",
  components: { PieChart },
  setup() {
    const headOn = reports.filter((item)=> {return item.weather == "sunny"});
    const sideOn = reports.filter((item)=> {return item.weather == "rainy"});
    const rearEnd = reports.filter((item)=> {return item.weather == "windy"});
    const other = reports.filter((item)=> {return item.weather == "snow"});
    const testData = {
      labels: ["Sunny", "Rainy", "Windy", "Snow"],
      datasets: [
        {
          data: [headOn.length, sideOn.length, rearEnd.length, other.length],
          backgroundColor: [
            "#69a6d1",
            "#94dfff",
            "#c9ebef",
            "#ffd4b1",
            "#fcsdb0",
          ],
        },
      ],
    };

    return { testData };
  },
});
</script>
