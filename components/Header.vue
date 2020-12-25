<template>
  <div class="header" @click="bla">
    <nuxt-link :to="'/'">
      <h1 class="link header__logo" @click="goToStart">TestList</h1>
    </nuxt-link>
    <div class="header__cart-section">
      <img
        src="~/assets/svg/cart-big.svg"
        alt="Значок вызова корзины."
        class="link header__cart"
        @click="openCart"
      />
      <div v-if="counter !== 0" class="header__counter">{{ counter }}</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.productsInCart.length;
    },
  },
  methods: {
    goToStart() {
      this.$store.commit("setActivity");
    },
    openCart() {
      this.$store.commit("toggleCart");
    },
    bla() {
      this.$store.commit("sortByPrice");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #fff;
  min-height: 66px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;
  padding: 0 88px;
  z-index: 99;
  &__logo {
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 28px;
    color: $grey;
    margin: 0;
  }
  &__cart-section {
    position: relative;
    margin-right: 16px;
  }
  &__counter {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    width: 12px;
    height: 12px;
    background-color: $lightgrey;
    border-radius: 50%;
    font-weight: bold;
    font-size: 8px;
    line-height: 10px;
    color: #fff;
    animation: zoom 0.6s linear;
  }
}

@keyframes zoom {
  from {
    transform: scale(0);
  }
  25% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  75% {
    transform: scale(1);
  }
}
</style>