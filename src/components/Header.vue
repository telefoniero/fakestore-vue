<script lang="ts">
import { computed, defineComponent, ref, Teleport } from 'vue'
import Logo from '@/components/Logo.vue'
import BasketModal from '@/components/BasketModal.vue'
import { useStore } from '@/store/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const added = computed<number>(() => store.getters.added)

    const basketIsOpened = ref<boolean>(false)

    return {
      added,
      basketIsOpened
    }
  },
  components: {
    Logo,
    BasketModal
  }
})
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <h1 class="visually-hidden">S—Shop</h1>
      <nav class="header__nav nav">
        <ul class="nav__list">
          <li class="nav__item">
            <Logo class="header__logo nav__link" />
          </li>
          <li class="nav__item _active">
            <a href="#" class="nav__link">Catalog</a>
          </li>
          <li class="nav__item _foregrounded">
            <a href="#" class="nav__link">Profile</a>
          </li>
          <li class="nav__item _foregrounded">
            <button
              class="nav__link"
              @click="basketIsOpened = true"
              :class="{ _active: basketIsOpened }"
            >
              Basket({{ added }})
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <Teleport to="body">
    <BasketModal
      @hide="basketIsOpened = false"
      :class="{ _active: basketIsOpened }"
    />
  </Teleport>
</template>
