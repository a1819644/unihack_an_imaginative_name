<template>
  <BarChart :chartData="testData" :options="options" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: "Home",
  components: { BarChart },
  setup() {
    const testData = {
      labels: ["Bicycle", "Car", "Bus", "Pedestrian", "Motorcycle"],
      datasets: [
        {
          label: "Bicycle",
          data: [30, 40, 60, 70, 5],
          backgroundColor: "#77CEFF",
          stack: "Stack 0",
        },
        {
          label: "Car",
          data: [30, 90, 60, 20, 5],
          backgroundColor: "#0079AF",
          stack: "Stack 0",
        },
        {
          label: "Bus",
          data: [30, 10, 80, 50, 50],
          backgroundColor: "#756EFF",
          stack: "Stack 0",
        },
      ],
    };

    const options = {
      plugins: {
        title: {
          display: true,
          text: "Chart.js Bar Chart - Stacked",
        },
      },
      responsive: true,
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    };

    return { testData, options };
  },
});
</script>
