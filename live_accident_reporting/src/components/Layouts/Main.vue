<template>
  <div class="flex flex-col h-full w-full">
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "../Sections/Nav.vue";

export default {
  name: "Main",
  components: {
    Nav,
  },
};
</script>

<style lang="css" scoped></style>
