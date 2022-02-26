<template>
  <div class="flex flex-col h-full w-full">
    <Nav />
    <Body />
  </div>
</template>

<script>
import Nav from "../Sections/Nav.vue";
import Body from "../Sections/Body.vue";

export default {
  name: "Main",
  components: {
    Nav,
    Body,
  },
};
</script>

<style lang="css" scoped></style>
