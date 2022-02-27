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
    const headOn = reports.filter((item)=> {return item.type == "head-on"});
    const sideOn = reports.filter((item)=> {return item.type == "side-on"});
    const rearEnd = reports.filter((item)=> {return item.type == "rear-end"});
    const other = reports.filter((item)=> {return item.type == "other"});
    const testData = {
      labels: ["Head on", "Side on", "Rear end", "Others"],
      datasets: [
        {
          data: [headOn.length, sideOn.length, rearEnd.length, other.length],
          backgroundColor: [
            "#50b4d8",
            "#9eddef",
            "#f7e5b7",
            "#d7e2ea",
            "#96b3c2",
          ],
        },
      ],
    };

    return { testData };
  },
});
</script>
