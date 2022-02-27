<template>
  <BarChart :chartData="testData" :options="options" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BarChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { reports } from "../assets/data";

Chart.register(...registerables);

export default defineComponent({
  name: "Home",
  components: { BarChart },
  setup() {
    const bicycle = [
      reports.filter((item)=>{return item.vehicles.filter(x => x=="bicycle").length == 2}).length,
      reports.filter((item)=>{return item.vehicles.includes("car") && item.vehicles.includes("bicycle")}).length,
      reports.filter((item)=>{return item.vehicles.includes("bus") && item.vehicles.includes("bicycle")}).length,
      reports.filter((item)=>{return item.vehicles.includes("motorcycle") && item.vehicles.includes("bicycle")}).length,
      reports.filter((item)=>{return item.vehicles.includes("pedestrian") && item.vehicles.includes("bicycle")}).length
    ];
    const car = [
      reports.filter((item)=>{return item.vehicles.includes("bicycle") && item.vehicles.includes("car")}).length,
      reports.filter((item)=>{return item.vehicles.filter(x => x=="car").length == 2}).length,
      reports.filter((item)=>{return item.vehicles.includes("bus") && item.vehicles.includes("car")}).length,
      reports.filter((item)=>{return item.vehicles.includes("motorcycle") && item.vehicles.includes("car")}).length,
      reports.filter((item)=>{return item.vehicles.includes("pedestrian") && item.vehicles.includes("car")}).length
    ];
    const bus = [
      reports.filter((item)=>{return item.vehicles.includes("bicycle") && item.vehicles.includes("bus")}).length,
      reports.filter((item)=>{return item.vehicles.includes("car") && item.vehicles.includes("bus")}).length,
      reports.filter((item)=>{return item.vehicles.filter(x => x=="bus").length == 2}).length,
      reports.filter((item)=>{return item.vehicles.includes("motorcycle") && item.vehicles.includes("bus")}).length,
      reports.filter((item)=>{return item.vehicles.includes("pedestrian") && item.vehicles.includes("bus")}).length
    ];
    const motorcycle = [
      reports.filter((item)=>{return item.vehicles.includes("bicycle") && item.vehicles.includes("motorcycle")}).length,
      reports.filter((item)=>{return item.vehicles.includes("car") && item.vehicles.includes("motorcycle")}).length,
      reports.filter((item)=>{return item.vehicles.includes("bus") && item.vehicles.includes("motorcycle")}).length,
      reports.filter((item)=>{return item.vehicles.filter(x => x=="motorcycle").length == 2}).length,
      reports.filter((item)=>{return item.vehicles.includes("pedestrian") && item.vehicles.includes("motorcycle")}).length
    ];
    const pedestrian = [
      reports.filter((item)=>{return item.vehicles.includes("bicycle") && item.vehicles.includes("pedestrian")}).length,
      reports.filter((item)=>{return item.vehicles.includes("car") && item.vehicles.includes("pedestrian")}).length,
      reports.filter((item)=>{return item.vehicles.includes("bus") && item.vehicles.includes("pedestrian")}).length,
      reports.filter((item)=>{return item.vehicles.filter(x => x=="pedestrian").length == 2}).length,
      reports.filter((item)=>{return item.vehicles.includes("pedestrian") && item.vehicles.includes("motorcycle")}).length
    ];
    const testData = {
      labels: ["Bicycle", "Car", "Bus", "Pedestrian", "Motorcycle"],
      datasets: [
        {
          label: "Bicycle",
          data: bicycle,
          backgroundColor: "#445a67",
          stack: "Stack 0",
        },
        {
          label: "Car",
          data: car,
          backgroundColor: "#57838d",
          stack: "Stack 0",
        },
        {
          label: "Bus",
          data: bus,
          backgroundColor: "#b4c9c7",
          stack: "Stack 0",
        },
        {
          label: "Motorcycle",
          data: motorcycle,
          backgroundColor: "#f3bfb3",
          stack: "Stack 0",
        },
        {
          label: "Pedestrian",
          data: pedestrian,
          backgroundColor: "#ccadb2",
          stack: "Stack 0",
        },
      ],
    };

    const options = {
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
