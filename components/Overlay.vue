<template>
  <div class="overlay" @click="closeCart" v-if="isCartOpen"/>
</template>

<script>
export default {
  computed: {
    isCartOpen() {
      return this.$store.state.isCartOpen;
    },
  },
  methods: {
    closeCart() {
      this.$store.commit("toggleCart");
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffff;
  opacity: 0.8;
  z-index: 5;
}
</style>