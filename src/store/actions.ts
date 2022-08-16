import { State } from '@vue/runtime-core'
import { ActionTree } from 'vuex'
import { getAll } from '@/api/products'
import ProductsStorage from './storage'

const actions = <ActionTree<State, any>>{
  async init({ commit }) {
    const products = await getAll()
    commit('INIT', products)
    commit('GET_BASKET')
  },
  add({ commit, state }, id) {
    commit('ADD_PRODUCT', id)
    const product = state.products.find(product => product.id == id)
    if (product) ProductsStorage.addItem(product)
  },
  remove({ commit }, id) {
    commit('REMOVE_PRODUCT', id)
    ProductsStorage.removeItem(id)
  },
  removeAll({ commit }) {
    commit('REMOVE_ALL_PRODUCTS')
    ProductsStorage.removeItems()
  },
  setFilters({ commit }, filtersData) {
    commit('SET_FILTERS', filtersData)
  },
  filterProducts({ commit }) {
    commit('SET_FILTERED_PRODUCTS')
  }
}

export default actions
