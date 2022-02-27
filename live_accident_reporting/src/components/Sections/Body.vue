<template>
  <div class="flex flex-col flex-grow mt-6 lg:flex-row">
    <div class="flex flex-col justify-stretch px-1">
      <router-link
        :to="{ name: 'map' }"
        class="flex py-2 px-4 border-b border-t text-base font-medium text-red-600 border-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400 hover:text-gray-200"
      >
        Hotspots (Map)
      </router-link>

      <router-link
        :to="{ name: 'insights' }"
        class="flex py-2 px-4 border-b text-base font-medium text-red-600 border-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400 hover:text-gray-200"
      >
        Insights
      </router-link>

      <button
        id="show-modal"
        @click="showModal = true"
        class="flex py-2 px-4 border-b text-base font-medium text-red-600 border-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400 hover:text-gray-200"
      >
        Report An Accident
      </button>
    </div>

    <div class="flex flex-grow">
      <router-view> </router-view>
    </div>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal">
        <template v-slot:header>
          <h2 class="font-medium text-xl">Report an accident</h2>
        </template>
        <template v-slot:body>
          <ReportForm @close="showModal = false" />
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script>
import Modal from "../Modals/Modal.vue";
import ReportForm from "../Reports/ReportForm.vue";

export default {
  name: "BodySection",
  components: {
    Modal,
    ReportForm,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="css" scoped></style>
