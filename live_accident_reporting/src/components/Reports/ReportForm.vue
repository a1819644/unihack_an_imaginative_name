<template>
  <div class="min-h-full flex items-center justify-center">
    <div class="max-w-md w-full space-y-8">
      <form @submit.prevent="handleSubmit">
        <div class="">
          <div class="mb-5 flex items-end">
            <div class="relative">
              <label for="location" required
                >Location (latitude/longitude):
              </label>
              <input
                v-model="data.location"
                id="location"
                class="relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="eg: -34.9186493/138.6055145"
              />
              <p v-if="locationError" class="text-red-400">
                this field is required
              </p>
            </div>
            <div>
              <button
                type="button"
                class="btn-primary"
                @click.prevent="getLocation"
              >
                {{ locating ? "please wait ..." : "use my location" }}
              </button>
            </div>
          </div>
          <div class="mb-5">
            <label for="type">Type of accident:</label>
            <select
              name="type"
              id="type"
              class="relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              v-model="data.selectedType"
            >
              <option value="head-on">Head On</option>
              <option value="side-on">Side On</option>
              <option value="rear-end">Rear End</option>
              <option value="other">Others</option>
            </select>
          </div>

          <div class="mb-5">
            <label for="type">Vehicles involved:</label>
            <select
              name="type"
              id="type"
              class="relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              v-model="data.selectedVehicle"
            >
              <option value="pedestrian">Pedestrian</option>
              <option value="bicycle">Bicycle</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="car">Car</option>
              <option value="bus">Bus</option>
              <option value="other">Other</option>
            </select>
            <div class="w-full my-2"></div>
            <select
              name="type"
              id="type"
              class="relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              v-model="data.selectedVehicle2"
            >
              <option value="pedestrian">Pedestrian</option>
              <option value="bicycle">Bicycle</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="car">Car</option>
              <option value="bus">Bus</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="mb-5">
            <label for="type">Weather:</label>
            <select
              name="type"
              id="type"
              class="relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              v-model="data.weather"
            >
              <option value="sunny">Sunny</option>
              <option value="rainy">Rainy</option>
              <option value="windy">Windy</option>
              <option value="snow">Snow</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="mb-5">
            <label for="type">Comments:</label>
            <textarea
              v-model="data.comments"
              class="relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            ></textarea>
          </div>

          <div class="flex flex-col my-5">
            <label for="img">Select image:</label>
            <input type="file" id="img" name="img" accept="image/*" multiple />
          </div>
        </div>
        <div>
          <button type="submit" class="btn-primary mt-4 mb-2">
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
</template>

<script>
export default {
  name: "ReportForm",
  data() {
    return {
      locating: false,
      locationError: false,
      data: {
        location: null,
        selectedType: "head-on",
        selectedVehicle: "pedestrian",
        comments: "",
        selectedVehicle2: "pedestrian",
        weather: "sunny",
      },
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      if (!this.data.location) {
        this.locationError = true;
        return;
      }
      this.locationError = false;

      let temp = this.data.location.split("/");

      let payload = {
        location: { lat: parseFloat(temp[0]), lng: parseFloat(temp[1]) },
        type: this.data.selectedType,
        vehicles: [this.data.selectedVehicle, this.data.selectedVehicle2],
        weather: this.data.weather,
        comments: this.data.comments,
        isPotentialDanger: false
      };

      this.$store.commit("addReport", payload);
      this.$emit("close");
    },
    useLocation({ coords }) {
      this.data.location = `${coords.latitude}/${coords.longitude}`;

      this.locating = false;
    },
    useLocationError(error) {
      console.log(error);
      this.locating = false;
    },
    getLocation() {
      this.locating = true;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.useLocation,
          this.useLocationError
        );
      } else {
        console.log("Location feature is not supported by browser");
      }
    },
  },
};
</script>

<style lang="css" scoped></style>
