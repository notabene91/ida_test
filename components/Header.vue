<template>
  <div class="header">
    <nuxt-link :to="'/category/1'">
      <h1 class="link header__logo">TestList</h1>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    min-height: 66px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 8px 8px;
    padding: 0 88px;
    &__logo {
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 28px;
      color: $grey;
      margin: 0;
    }
  }
</style>