<template>
  <form @submit.prevent="buy" class="form">
    <h3 class="form__title">Оформить заказ</h3>
    <label class="form__item">
      <input class="form__control" placeholder="Ваше имя" required/>
    </label>
    <label class="form__item">
      <the-mask class="form__control" placeholder="Телефон" :mask="[mask]" required/>
    </label>
    <label class="form__item">
      <input class="form__control" placeholder="Адрес" required/>
    </label>
    <cart-button>Отправить</cart-button>
  </form>
</template>

<script>
import CartButton from "~/components/CartButton.vue";

export default {
  components: {
    CartButton,
  },
  computed: {
    mask() {
      return "+7 (###) ###-##-##";
    },
  },
  methods: {
    buy() {
      this.$store.commit('toggleThanks')
      setTimeout(() => this.$store.commit('toggleCart'), 1500)
      this.$store.commit('clearCart')
      setTimeout(() => this.$store.commit('toggleThanks'), 1500)
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  &__title {
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    color: $grey;
    margin-bottom: 16px;
  }
  &__control {
    width: 100%;
    background: #f8f8f8;
    border-radius: 8px;
    margin-bottom: 16px;
    height: 50px;
    font-size: 16px;
    line-height: 21px;
    font-weight: normal;
    padding: 0 14px;
    border: none;
  }
  &__control::placeholder {
    font-weight: normal;
    color: $lightgrey;
  }
}
</style>