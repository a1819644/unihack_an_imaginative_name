<template>
  <div class="flex flex-col flex-grow mt-4 lg:flex-row">
    <div class="flex flex-col justify-stretch px-1">
      <button
        id="show-modal"
        @click="showModal = true"
        class="group relative flex justify-center my-2 py-2 px-4 border-b border-transparent text-sm font-medium text-red-600 border-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
      >
        Heat Map
      </button>
      <button
        id="show-modal"
        @click="showModal = true"
        class="group relative flex justify-center my-2 py-2 px-4 border-b border-transparent text-sm font-medium text-red-600 border-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
      >
        Insights
      </button>
      <button
        id="show-modal"
        @click="showModal = true"
        class="group relative flex justify-center my-2 py-2 px-4 border-b border-transparent text-sm font-medium text-red-600 border-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
      >
        Report An Accident
      </button>
      <button
        id="show-modal"
        @click="showModal = true"
        class="group relative flex justify-center my-2 py-2 px-4 border-b border-transparent text-sm font-medium text-red-600 border-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
      >
        Report An Accident
      </button>
    </div>

    <div class="flex flex-grow">
      <router-view> </router-view>
    </div>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal" @close="showModal = false"> </modal>
    </Teleport>
  </div>
</template>

<script>
import Modal from "../Modal.vue";
import PieChart from "../PieChart.vue";
import Map from "../Map/Map.vue";

export default {
  name: "BodySection",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="css" scoped></style>
