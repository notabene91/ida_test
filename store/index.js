export const state = () => ({
  baseURL: "https://frontend-test.idaproject.com",
  categories: [],
  products: []
})

export const getters = {
  categories: (s) => s.categories,
  products: (s) => s.products,
  url: (s) => s.baseURL
}

export const mutations = {
  setCategories(state, data) {
    state.categories = data;
  },
  setProducts(state, data) {
    state.products = data
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    try {
      await Promise.all([
        dispatch("loadCategories"),
        dispatch("loadProducts", '1')
      ]);
    }
    catch (e) {
      console.log(e)
    }
  },

  async loadCategories({ state, commit }) {
    let response = await fetch(`${state.baseURL}/api/product-category`);
    let result = await response.json();
    commit("setCategories", result);
  },

  async loadProducts({ state, commit }, id) {
    let response = await fetch(`${state.baseURL}/api/product?category=${id}`)
    let result = await response.json()
    commit("setProducts", result)
  }
}