<template>
  <aside class="categories">
    <h2 class="categories__title"></h2>
    <ul class="categories__list">
      <li
        v-for="cat in categories"
        :key="cat.id"
        @click.prevent="routerSwitch(cat.id)"
        class="categories__item"
      >
        <nuxt-link
          class="link categories__link"
          active-class="categories__link_active"
          :class="{'categories__link_active' : cat.isActive}"
          :to="`/category/${cat.id}`"
        >{{ cat.name }}
        </nuxt-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
  },
  created() {
    if (this.$route.fullPath === '/') {
      this.$store.commit('setActivity')
    }
  },
  methods: {
    routerSwitch(item) {
      this.$store.commit('setInactive')
      if (this.$route.path !== item) {
        this.$router.push(item);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.categories {
  width: 17%;
  &__list {
    position: fixed;
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;
  }
  &__item {
    margin-bottom: 16px;
  }
  &__item:last-of-type {
    margin-bottom: 0;
  }
  &__link {
    color: $lightgrey;
    &:hover {
      color: $grey;
    }
    &_active {
      color: $darkgrey;
      text-decoration: underline;
    }
  }
}
</style>