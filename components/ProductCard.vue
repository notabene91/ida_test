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
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      class="link card__cart"
      :class="{ card__cart_added: isAdded }"
      @click="addToCart(product.id)"
    >
      <path
        class="path"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.92 1.74C4.03331 1.58892 4.21115 1.5 4.4 1.5H11.6C11.7889 1.5 11.9667 1.58892 12.08 1.74L13.88 4.14C13.9579 4.24386 14 4.37018 14 4.5V12.9C14 13.3774 13.8104 13.8352 13.4728 14.1728C13.1352 14.5104 12.6774 14.7 12.2 14.7H3.8C3.32261 14.7 2.86477 14.5104 2.52721 14.1728C2.18964 13.8352 2 13.3774 2 12.9V4.5C2 4.37018 2.04211 4.24386 2.12 4.14L3.92 1.74ZM4.7 2.7L3.2 4.7V12.9C3.2 13.0591 3.26321 13.2117 3.37574 13.3243C3.48826 13.4368 3.64087 13.5 3.8 13.5H12.2C12.3591 13.5 12.5117 13.4368 12.6243 13.3243C12.7368 13.2117 12.8 13.0591 12.8 12.9V4.7L11.3 2.7H4.7Z"
        fill="#959DAD"
      />
      <path
        class="path"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 4.5C2 4.16863 2.26863 3.9 2.6 3.9H13.4C13.7314 3.9 14 4.16863 14 4.5C14 4.83137 13.7314 5.1 13.4 5.1H2.6C2.26863 5.1 2 4.83137 2 4.5Z"
        fill="#959DAD"
      />
      <path
        class="path"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.6 6.3C5.93137 6.3 6.2 6.56863 6.2 6.9C6.2 7.37739 6.38964 7.83523 6.72721 8.17279C7.06477 8.51036 7.52261 8.7 8 8.7C8.47739 8.7 8.93523 8.51036 9.27279 8.17279C9.61036 7.83523 9.8 7.37739 9.8 6.9C9.8 6.56863 10.0686 6.3 10.4 6.3C10.7314 6.3 11 6.56863 11 6.9C11 7.69565 10.6839 8.45871 10.1213 9.02132C9.55871 9.58393 8.79565 9.9 8 9.9C7.20435 9.9 6.44129 9.58393 5.87868 9.02132C5.31607 8.45871 5 7.69565 5 6.9C5 6.56863 5.26863 6.3 5.6 6.3Z"
        fill="#959DAD"
      />
    </svg>
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
    isAdded: {
      get() {
        return this.$store.state.productsInCart.find(
          (p) => p.id === this.product.id
        );
      },
      set() {},
    },
  },
  methods: {
    addToCart(id) {
      this.isAdded = !this.isAdded;
      this.$store.commit("addToCart", id);
      const parsed = JSON.stringify(this.$store.getters.productsInCart);
      localStorage.setItem("products", parsed);
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
    margin-right: 4px;
  }

  &__point {
    font-weight: bold;
    font-size: 12px;
    line-height: 13px;
    color: $yellow;
  }

  &__star {
    width: 100%;
    height: 100%;
    z-index: 10;
    position: absolute;
    top: 0;
    left: -5.5px;

    &_filled {
      object-fit: cover;
      object-position: center bottom;
      height: 10px;
    }
  }
  &__cart {
    position: absolute;
    top: 18px;
    right: 18px;

    &:hover .path {
      fill: $darkgrey;
    }

    &_added .path{
      fill: $yellow;
    }

    &_added:hover .path {
      fill: $yellow;
    }
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
    color: $grey;
    min-height: 35px;
  }

  &__price {
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: $darkgrey;
  }
}
</style>