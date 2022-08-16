<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { useStore } from '@/store/store'
import IProduct from '@/interfaces/models/product'

export default defineComponent({
  components: {
    ProductCard
  },
  setup() {
    const store = useStore()
    const filteredProducts = computed<IProduct[]>(
      () => store.state.filteredProducts
    )

    const sale = computed<string>(() => store.state.filters.sale)

    return {
      sale,
      filteredProducts
    }
  }
})
</script>

<template>
  <div class="products">
    <div class="container">
      <template v-if="filteredProducts.length">
        <h2 class="products__title" v-if="sale">
          {{ sale }}:<br />{{ filteredProducts.length }}
        </h2>
        <ul class="products__list products-list">
          <li
            class="products-list__item"
            v-for="product in filteredProducts"
            :key="product.id"
          >
            <ProductCard class="products__product" :product="product" />
          </li>
        </ul>
      </template>
      <h2 class="products__title">Change your filters!</h2>
    </div>
  </div>
</template>
