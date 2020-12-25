<template>
  <div>
    <div class="cart" v-if="isCartOpen">
      <h2 class="cart__title">Корзина</h2>
      <img
        src="~/assets/svg/close.svg"
        alt="Закрыть."
        class="link cart__close"
        @click="closeCart"
      />
      <p
        v-if="products.length === 0 && isThanksShown === false"
        class="cart__empty"
      >
        Пока что вы ничего не добавили в корзину.
      </p>
      <cart-button
        v-if="products.length === 0 && isThanksShown === false"
        @click.native="closeCart"
        >Перейти к выбору</cart-button
      >
      <cart-card v-for="item in products" :key="item.id" :product="item" />
      <form-auth v-if="products.length > 0" />
      <thanks v-if="isThanksShown" />
    </div>
  </div>
</template>

<script>
import CartButton from "~/components/CartButton.vue";
import CartCard from "~/components/CartCard.vue";
import FormAuth from "~/components/FormAuth.vue";
import Thanks from "~/components/Thanks.vue";
export default {
  components: {
    CartButton,
    CartCard,
    FormAuth,
    Thanks,
  },
  computed: {
    isCartOpen() {
      return this.$store.state.isCartOpen;
    },
    products() {
      return this.$store.getters.productsInCart;
    },
    isThanksShown() {
      return this.$store.state.thanksShown;
    },
  },
  methods: {
    closeCart() {
      this.$store.commit("toggleCart");
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 32%;
  height: 100%;
  z-index: 100;
  box-shadow: -4px 0px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px 0px 0px 8px;
  background-color: #fff;
  padding: 52px 48px;
  animation: show 0.3s linear forwards;
  overflow: auto;

  &__title {
    font-weight: bold;
    font-size: 32px;
    line-height: 41px;
    display: flex;
    align-items: flex-end;
    color: #000;
    margin-bottom: 24px;
  }
  &__close {
    position: absolute;
    top: 64px;
    right: 52px;
  }
  &__empty {
    font-weight: normal;
    font-size: 22px;
    line-height: 28px;
    color: #000;
  }
}

@keyframes show {
  from {
    transform: translateX(52%);
  }
  to {
    transform: translateX(0);
  }
}
</style>