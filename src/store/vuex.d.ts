import IProduct from '@/interfaces/models/product'
import { Store } from 'vuex'


declare module '@vue/runtime-core' {
  interface State {
    products: IProduct[]
    basket: IProduct[]
    categories: Set<string>
    sales: Set<string>
    filteredProducts: IProduct[]
    filters: IStringObject
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
