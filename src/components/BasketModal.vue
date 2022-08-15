<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store/store'
import IProduct from '@/interfaces/models/product'
import BasketCard from '@/components/BasketCard.vue'

export default defineComponent({
  emits: ['hide'],
  components: { BasketCard },
  setup(props, { emit }) {
    const store = useStore()
    const basketData = computed<object>(() => store.getters.basketData)
    const basketProducts = computed<IProduct[]>(() => store.state.basket)

    const basket = ref(null)

    function hide(evt: Event) {
      if (evt.target == basket.value) {
        emit('hide')
      }
    }

    function cleanBasket(evt: Event) {
      store.dispatch('removeAll')
    }

    return {
      basket,
      hide,
      cleanBasket,
      basketData,
      basketProducts
    }
  }
})
</script>

<template>
  <div ref="basket" class="basket" @click="hide">
    <div class="basket__frame">
      <div class="basket__content">
        <div v-show="basketProducts.length">
          <div class="basket__container">
            <h2 class="basket__title">Total</h2>
            <ul class="basket__options basket-options">
              <li class="basket-options__item basket-option">
                <h3 class="basket-option__name">Subtotal:</h3>
                <span class="basket-option__value"
                  >${{ basketData.subtotal }}</span
                >
              </li>
              <li class="basket-options__item basket-option">
                <h3 class="basket-option__name">Sale:</h3>
                <span class="basket-option__value"
                  >${{ basketData.discount }}</span
                >
              </li>
              <li class="basket-options__item basket-option">
                <h3 class="basket-option__name">Content:</h3>
                <button
                  class="basket-option__value basket-option__value_remove"
                  @click="cleanBasket"
                >
                  Remove all
                </button>
              </li>
            </ul>
          </div>
          <div class="basket__total basket-total">
            <div class="basket__container">
              <h3 class="basket-total__title">Order Total:</h3>
              <span class="basket-total__value">${{ basketData.total }}</span>
            </div>
          </div>
          <div class="basket__container">
            <ul class="basket__products basket-products">
              <li
                class="basket-products__item"
                v-for="product in basketProducts"
                :key="product.id"
              >
                <BasketCard :product="product" class="basket-products__card" />
              </li>
            </ul>
          </div>
          <button class="basket__btn">
            <span>Checkout</span>
            <img src="../assets/img/arrow-right.svg" alt="" />
          </button>
        </div>
        <div class="basket__container">
          <p v-show="!basketProducts.length" class="basket__note">
            Your basket is empty!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
