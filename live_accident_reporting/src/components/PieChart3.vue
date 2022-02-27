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
    const headOn = reports.filter((item)=> {return item.isPotentialDanger});
    const sideOn = reports.filter((item)=> {return !item.isPotentialDanger});
    const testData = {
      labels: ["Potential Danger", "Dangerous"],
      datasets: [
        {
          data: [headOn.length, sideOn.length],
          backgroundColor: [
              "#0f4c81",
              "#5c9090"
          ],
        },
      ],
    };

    return { testData };
  },
});
</script>
