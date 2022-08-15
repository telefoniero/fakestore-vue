<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import IProduct from '@/interfaces/models/product'
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
    const isAdded = computed<boolean>(() => store.getters.isAdded(product.id))

    function addProduct() {
      store.dispatch('add', product.id)
    }

    const discountedPrice = computed<number>(() =>
      product.discount
        ? +(product.price * (1 - product.discount)).toFixed(2)
        : 0
    )

    const discount = computed<string>(() =>
      product.discount ? `-${product.discount * 100}%` : ''
    )

    return { discountedPrice, discount, isAdded, addProduct }
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
      <span class="product-price__discounted"
        >${{ discountedPrice ? discountedPrice : product.price }}</span
      >
      <span class="product-price__old" v-if="discountedPrice"
        >${{ product.price }}</span
      >
    </p>
    <button
      class="product-card__btn control"
      :class="{ _added: isAdded }"
      @click="addProduct"
    >
      <template v-if="!isAdded">
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
