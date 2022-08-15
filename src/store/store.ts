import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { State } from '@vue/runtime-core'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    products: [],
    filteredProducts: [],
    basket: [],
    sales: new Set(),
    categories: new Set(),
    filters: {}
  },
  actions,
  mutations,
  getters
})

store.dispatch('init')

export function useStore() {
  return baseUseStore(key)
}
