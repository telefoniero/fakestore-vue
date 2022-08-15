import IProduct from '@/interfaces/models/product'
import { State } from '@vue/runtime-core'
import { GetterTree } from 'vuex'

const getters = <GetterTree<State, any>>{
  added(state) {
    return state.basket.length
  },
  isAdded: state => (id: number) => {
    return state.basket.find((product: IProduct) => product.id == id)
  },
  // added for optimizing
  basketData(state) {
    let discount: number = 0,
      total: number = 0
    // because of irrational typing of reduce
    for (const product of state.basket) {
      total += product.price
      discount += product.discount
        ? +(product.price * product.discount).toFixed(2)
        : 0
    }

    let subtotal = +(total - discount).toFixed(2)
    return {
      total,
      discount,
      subtotal
    }
  },
  filteredProducts:
    state => (query: string, category: string, sale: string) => {
      let filtered: IProduct[] = []

      if (query)
        filtered = state.products.filter(product =>
          product.title.includes(query)
        )

      if (category)
        filtered = state.products.filter(
          product => product.category === category
        )

      if (sale)
        filtered = state.products.filter(product => product.sale === sale)

      return filtered
    }
}

export default getters
