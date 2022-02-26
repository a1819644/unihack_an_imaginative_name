<template>
  <Nav />
  <Body />
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
