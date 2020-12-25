<template>
  <div class="cart-card">
    <img
      class="cart-card__image"
      v-lazy="url + product.photo"
      :alt="product.name"
    />
    <div class="cart-card__container">
      <h3 class="cart-card__title">{{ product.name }}</h3>
      <span class="cart-card__price">{{ product.price }} &#8381;</span>
      <div class="cart-card__rating">
        <div class="cart-card__star-rating">
          <img
            src="~/assets/svg/star.svg"
            alt="Звезда рейтинга."
            class="cart-card__star"
          />
        </div>
        <span class="cart-card__point"> {{ product.rating }} </span>
      </div>
    </div>
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="link cart-card__remove"
      @click="removeItem(product.id)"
    >
      <path
        class="path"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6 10C6 9.44772 6.44772 9 7 9H25C25.5523 9 26 9.44772 26 10C26 10.5523 25.5523 11 25 11H7C6.44772 11 6 10.5523 6 10Z"
        fill="#959DAD"
      />
      <path
        class="path"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 7C13.7348 7 13.4804 7.10536 13.2929 7.29289C13.1054 7.48043 13 7.73478 13 8V9H19V8C19 7.73478 18.8946 7.48043 18.7071 7.29289C18.5196 7.10536 18.2652 7 18 7H14ZM21 9V8C21 7.20435 20.6839 6.44129 20.1213 5.87868C19.5587 5.31607 18.7956 5 18 5H14C13.2044 5 12.4413 5.31607 11.8787 5.87868C11.3161 6.44129 11 7.20435 11 8V9H9C8.44772 9 8 9.44772 8 10V24C8 24.7957 8.31607 25.5587 8.87868 26.1213C9.44129 26.6839 10.2043 27 11 27H21C21.7957 27 22.5587 26.6839 23.1213 26.1213C23.6839 25.5587 24 24.7957 24 24V10C24 9.44772 23.5523 9 23 9H21ZM10 11V24C10 24.2652 10.1054 24.5196 10.2929 24.7071C10.4804 24.8946 10.7348 25 11 25H21C21.2652 25 21.5196 24.8946 21.7071 24.7071C21.8946 24.5196 22 24.2652 22 24V11H10Z"
        fill="#959DAD"
      />
      <path
        class="path"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 14C14.5523 14 15 14.4477 15 15V21C15 21.5523 14.5523 22 14 22C13.4477 22 13 21.5523 13 21V15C13 14.4477 13.4477 14 14 14Z"
        fill="#959DAD"
      />
      <path
        class="path"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18 14C18.5523 14 19 14.4477 19 15V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V15C17 14.4477 17.4477 14 18 14Z"
        fill="#959DAD"
      />
    </svg>
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
  methods: {
    removeItem(id) {
      this.$store.commit('removeItem', id)
      const parsed = JSON.stringify(this.$store.getters.productsInCart);
      localStorage.setItem('products', parsed);
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  margin-bottom: 12px;
  padding: 15px 25px 15px 0;

  &:last-of-type {
    margin-bottom: 0;
  }

  &__image {
    object-fit: cover;
    height: 100%;
  }
  &__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    height: 100%;
  }

  &__title {
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: $grey;
    margin-bottom: 6px;
  }

  &__price {
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: $darkgrey;
    margin-bottom: 10px;
  }
  &__rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 24px;
  }
  &__star-rating {
    display: flex;
    align-items: center;
  }

  &__point {
    font-weight: bold;
    font-size: 12px;
    line-height: 13px;
    color: $yellow;
  }

  & svg:hover .path {
    fill: $darkgrey;
  }
}
</style>