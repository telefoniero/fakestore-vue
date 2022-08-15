<script lang="ts">
import IProduct from '@/interfaces/models/product'
import { computed, defineComponent, PropType } from 'vue'
import { useStore } from '@/store/store'

export default defineComponent({
  props: {
    product: {
      required: true,
      type: Object as PropType<IProduct>
    }
  },
  setup({ product }) {
    const store = useStore()
    function remove(event: Event) {
      store.dispatch('remove', product.id)
    }

    const price = computed<number>(() =>
      product.discount
        ? +(product.price * (1 - product.discount)).toFixed(2)
        : product.price
    )
    return {
      remove,
      price
    }
  }
})
</script>

<template>
  <div class="basket-card">
    <div class="basket-card__img-cont">
      <img :src="product.url" alt="" />
    </div>
    <div class="basket-card__flex-cont">
      <h3 class="basket-card__title">{{ product.title }}</h3>
      <p class="basket-card__price">${{ price }}</p>
      <button class="basket-card__remove-btn" @click="remove">Remove</button>
    </div>
  </div>
</template>
