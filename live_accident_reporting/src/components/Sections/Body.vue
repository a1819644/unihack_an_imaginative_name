<template>
  <div>
    <div>
      <button
        id="show-modal"
        @click="showModal = true"
        class="group relative flex justify-center my-4 py-2 px-4 ml-10 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-400"
      >
        Report An Accident
      </button>

      <Map />

      <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <modal :show="showModal" @close="showModal = false"> </modal>
      </Teleport>
    </div>
  </div>
</template>

<script>
import Modal from "../Modal.vue";
import Map from "../Map/Map.vue";

export default {
  name: "BodySection",
  components: {
    Modal,
    Map,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style lang="css" scoped></style>
