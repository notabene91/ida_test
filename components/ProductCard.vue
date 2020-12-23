<template>
  <div class="card">
    <div class="card__rating">
      <div class="card__star-rating">
        <img
          src="~/assets/svg/star.svg"
          alt="Звезда рейтинга."
          class="card__star"
        />
      </div>
      <span class="card__point"> {{ product.rating }} </span>
    </div>
    <img src="~/assets/svg/cart.svg" alt="Значок корзины." class="link card__cart" />
    <img class="card__image" v-lazy="url + product.photo" :alt="product.name" />
    <h3 class="card__title">{{ product.name }}</h3>
    <span class="card__price">{{ product.price }} &#8381;</span>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  computed: {
    url() {
      return this.$store.getters.url;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 18px;
  position: relative;

  &__rating {
    position: absolute;
    top: 18px;
    left: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__star-rating {
    width: 20px;
    height: 20px;
  }

  &__point {
    font-weight: bold;
    margin-left: 4px;
    font-size: 12px;
    line-height: 13px;
    color: $yellow;
  }

  &__star {
    width: 100%;
    height: 100%;
    z-index: 10;

    &_filled {
      width: 100%;
      height: 50%;
      object-fit: cover;
      object-position: bottom center;
      overflow: hidden;
    }
  }
  
  &__cart {
    position: absolute;
    top: 18px;
    right: 18px;
  }

  &__image {
    object-fit: contain;
    width: 100%;
    margin-bottom: 16px;
  }

  &__title,
  &__price {
    align-self: flex-start;
  }

  &__title {
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 6px;
  }

  &__price {
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
  }
}
</style>