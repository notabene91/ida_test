<template>
  <button class="button"> 
    <slot></slot>
  </button>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  min-height: 50px;
  background: $darkgrey;
  color: #fff;
  border-radius: 8px;
  font-size: 16px;
  line-height: 21px;
  margin-top: 24px;
  transition: 0.1s linear; 
  &:hover {
    background: $grey;
  }
}
</style>