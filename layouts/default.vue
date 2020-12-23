<template>
  <div class="page">
    <Header />
    <div class="main">
      <Categories />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue"
import Categories from "~/components/Categories.vue"
export default {
  components: {
    Header,
    Categories
  },
}
</script>

<style>
html {
  font-family: 'PT Sans';
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
  display: flex;
  padding: 32px 88px;
}

.link {
  cursor: url("../assets/svg/cursor.svg"), pointer;
}
</style>
