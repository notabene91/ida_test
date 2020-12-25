<template>
  <div class="thanks">
    <img src="~/assets/img/ok.png" alt="" class="thanks__image" />
    <p class="thanks__title">Заявка успешно отправлена</p>
    <p class="thanks__subtitle">Вскоре наш менеджер свяжется с Вами</p>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.thanks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  &__image {
    margin-bottom: 24px;
    width: 80px;
    height: 80px;
  }
  &__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    color: #000;
    margin-bottom: 2px;
  }

  &__subtitle {
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
    color: $grey;
  }
}
</style>