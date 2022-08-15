<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import IProduct from '@/models/product'

export default defineComponent({
  props: {
    product: {
      required: true,
      type: Object as PropType<IProduct>
    }
  },
  setup({ product }) {
    if (product.discount) {
      const discountedPrice = computed<number>(
        () => +(product.price * (1 - product.discount)).toFixed(2)
      )

      const discount = computed<string>(() => `-${product.discount * 100}%`)

      return { discountedPrice, discount }
    }
  }
})
</script>

<template>
  <div class="product-card">
    <div v-if="discount" class="product-card__discount">
      Sale {{ discount }}
    </div>
    <div class="product-card__img-cont">
      <img :src="product.url" alt="" />
    </div>
    <h3 class="product-card__title">{{ product.title }}</h3>
    <p class="product-card__price product-price">
      <span class="product-price__discounted">${{ product.price }}</span>
      <span class="product-price__old" v-if="discountedPrice"
        >${{ discountedPrice }}</span
      >
    </p>
    <button class="product-card__btn control">
      <template v-if="true">
        Add to basket
        <img src="../assets/img/plus.svg" alt="" />
      </template>
      <template v-else>
        Added
        <img src="../assets/img/added.svg" alt="" />
      </template>
    </button>
  </div>
</template>
