<template>
  <div class="page">
    <Header />
    <CartModal />
    <Overlay />
    <div class="main">
      <Categories />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Categories from "~/components/Categories.vue";
import CartModal from "~/components/CartModal.vue";
import Overlay from "~/components/Overlay.vue";
export default {
  components: {
    Header,
    Categories,
    CartModal,
    Overlay,
  },
  mounted() {
    if (localStorage.getItem("products")) {
      this.$store.commit(
        "getItemsFromLocalStorage",
        JSON.parse(localStorage.getItem("products"))
      );
    }
  },
};
</script>

<style >
html {
  font-family: "PT Sans";
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
}
.main {
  position: relative;
  display: flex;
  padding: 100px 88px;
}

.link,
.button {
  cursor: url("../assets/svg/cursor.svg"), pointer;
}
</style>
