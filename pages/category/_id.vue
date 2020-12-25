<template>
  <div class="container">
    <div class="filter">
      <span class="filter__sort">Сортировать по: </span>
      <select @change="changeFilter" v-model="filter" class="filter__select">
        <option value="price" class="option">цене</option>
        <option value="rating" class="option">популярности</option>
      </select>
    </div>
    <div class="list">
      <product-card v-for="item in products" :key="item.id" :product="item" />
    </div>
  </div>
</template>

<script>
import ProductCard from "~/components/ProductCard";

export default {
  components: {
    ProductCard,
  },

  data() {
    return {
      filter: "price",
    };
  },

  async fetch() {
    await this.$store.dispatch("loadProducts", this.$route.params.id);
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    changeFilter() {
      if (this.filter === 'price') {
        this.$store.commit('sortByPrice')
      }
      if (this.filter === 'rating') {
        this.$store.commit('sortByRating')
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
.list {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
  grid-gap: 16px;
  padding-left: 50px;
}
.filter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 34px;

  &__select {
    position: relative;
    border: none;
    color: $grey;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url("../../assets/img/arrow.png") no-repeat;
    background-position: right top 56%, 0 0;
    margin-left: 4px;
    padding-right: 8px;
    &:focus {
      outline: none;
    }
  }
}
</style>