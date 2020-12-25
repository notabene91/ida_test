export const state = () => ({
  baseURL: "https://frontend-test.idaproject.com",
  categories: [],
  products: [],
  productsInCart: [],
  isCartOpen: false,
  thanksShown: false
})

export const getters = {
  categories: (s) => s.categories,
  products: (s) => s.products,
  productsInCart: (s) => s.productsInCart,
  url: (s) => s.baseURL
}

export const mutations = {
  setCategories(state, data) {
    state.categories = data;
  },
  setProducts(state, data) {
    state.products = data
  },
  setActivity(state) {
    state.categories[0].isActive = true
  },
  setInactive(state) {
    state.categories[0].isActive = false
  },
  toggleCart(state) {
    state.isCartOpen = !state.isCartOpen
  },
  addToCart(state, id) {
    let item = state.products.find(el => {
      return el.id === id
    })
    if (!state.productsInCart.find(el => {
      return el.id === item.id
    })) {
      state.productsInCart.push(item)
    }
  },
  removeItem(state, id) {
    let index = state.productsInCart.findIndex(el => {
      return el.id === id
    })
    state.productsInCart.splice(index, 1)
  },
  toggleThanks(state) {
    state.thanksShown = !state.thanksShown;
  },
  clearCart(state) {
    state.productsInCart = []
  },
  sortByPrice(state) {
    state.products.sort((prev, next) => Number(prev.price) - Number(next.price))
  },
  sortByRating(state) {
    state.products.sort((prev, next) => Number(next.rating) - Number(prev.rating))
  },
  getItemsFromLocalStorage(state, data) {
    state.productsInCart = data
  }
}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    
    try {
      await Promise.all([
        dispatch("loadCategories"),
        dispatch("loadProducts", 1),
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
    commit('sortByPrice')
  }
}