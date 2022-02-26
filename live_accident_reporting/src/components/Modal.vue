<script>
export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      data: {
        location: null,
        selectedType: "car",
      },
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.show = false;
    },
  },
};
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container w-96">
          <div class="modal-header">
            <slot name="header">Accident Reporting</slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div
                class="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8"
              >
                <div class="max-w-md w-full space-y-8">
                  <form onsubmit="handleSubmit">
                    <div class="rounded-md shadow-sm">
                      <div class="mb-5">
                        <label for="location" required
                          >Location/Address:
                        </label>
                        <input
                          v-model="data.location"
                          id="location"
                          required
                          class="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Location/Address"
                        />
                      </div>
                      <div class="mb-5">
                        <label for="type">Type of accident:</label>
                        <select
                          name="type"
                          id="type"
                          class="appearance-none rounded-none relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          v-model="data.selectedType"
                        >
                          <option value="car">Car Accident</option>
                          <option value="harassment">Harassment</option>
                          <option value="injuries">Injuries</option>
                          <option value="other">Others</option>
                        </select>
                      </div>
                      <div class="mb-5">
                        <label for="img">Select image:</label>
                        <input
                          type="file"
                          id="img"
                          name="img"
                          accept="image/*"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Submit
                      </button>

                      <button
                        type="submit"
                        @click="$emit('close')"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
