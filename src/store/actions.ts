import { State } from '@vue/runtime-core'
import { ActionTree } from 'vuex'
import { getAll } from '@/api/products'

const actions = <ActionTree<State, any>>{
  async init({ commit }) {
    const products = await getAll()
    commit('INIT', products)
  },
  add({ commit }, id) {
    commit('ADD_PRODUCT', id)
  },
  remove({ commit }, id) {
    commit('REMOVE_PRODUCT', id)
  },
  removeAll({ commit }) {
    commit('REMOVE_ALL_PRODUCTS')
  },
  setFilter({ commit }, filterData) {
    commit('SET_FILTER', filterData)
  },
  filterProducts({ commit }) {
    commit('SET_FILTERED_PRODUCTS')
  }
}

export default actions
