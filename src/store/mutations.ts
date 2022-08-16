import IProduct from '@/interfaces/models/product'
import { State } from '@vue/runtime-core'
import { MutationTree } from 'vuex'
import ProductsStorage from './storage'

const mutations = <MutationTree<State>>{
  INIT(state, products) {
    const categories: Set<string> = new Set(
      products.map((product: IProduct) => product.category)
    )
    const sales: Set<string> = new Set(
      products.map((product: IProduct) => product.sale)
    )

    state.products = products
    state.filteredProducts = products
    state.categories = categories
    state.sales = sales
  },
  GET_BASKET(state) {
    state.basket = ProductsStorage.getItems()
  },
  ADD_PRODUCT(state, id) {
    const product: IProduct | undefined = state.products.find(
      product => product.id == id
    )
    if (product) {
      state.basket = [...state.basket, product]
    }
  },
  REMOVE_PRODUCT(state, id) {
    state.basket = state.basket.filter(product => product.id !== id)
  },
  REMOVE_ALL_PRODUCTS(state) {
    state.basket = []
  },
  SET_FILTERS(state, filtersData) {
    state.filters = filtersData
  },
  SET_FILTERED_PRODUCTS(state) {
    const filters = state.filters

    let filtered: IProduct[] = state.products

    for (const key in filters) {
      if (Object.prototype.hasOwnProperty.call(filters, key)) {
        const value = filters[key]
        if (value) {
          if (key == 'query') {
            filtered = filtered.filter(product =>
              value ? product.title.includes(value) : true
            )
          } else {
            filtered = filtered.filter(product => product[key] === value)
          }
        }
      }
    }

    state.filteredProducts = filtered
  }
}

export default mutations
