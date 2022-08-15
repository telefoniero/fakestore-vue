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
    const category = ref<string>('Bestsellers')

    const store = useStore()
    const filteredProducts = computed<IProduct[]>(
      () => store.state.filteredProducts
    )

    return {
      category,
      filteredProducts
    }
  }
})
</script>

<template>
  <div class="products">
    <div class="container">
      <h2 class="products__title">{{ category }}</h2>
      <ul class="products__list products-list">
        <li
          class="products-list__item"
          v-for="product in filteredProducts"
          :key="product.id"
        >
          <ProductCard class="products__product" :product="product" />
        </li>
      </ul>
    </div>
  </div>
</template>
