<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/Logo.vue'

export default defineComponent({
  setup() {},
  components: {
    Logo
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
          <li class="nav__item">
            <a href="#" class="nav__link">Profile</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">Basket(2)</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
