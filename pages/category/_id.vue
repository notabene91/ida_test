<template>
  <div class="list">
    <product-card v-for="item in products" :key="item.id" :product="item" />
  </div>
</template>

<script>
import ProductCard from "~/components/ProductCard";

export default {
  components: {
    ProductCard,
  },

  async fetch() {
    await this.$store.dispatch("loadProducts", this.$route.params.id);
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>

<style lang="scss" scoped>
  .list {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
    grid-gap: 16px;
    padding-left: 50px;
  }
</style>