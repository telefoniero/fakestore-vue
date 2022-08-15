<template>
  <Header />
  <main>
    <Filters />
    <Products />
  </main>
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Filters from './components/Filters.vue'
import Products from './components/Products.vue'
import BasketModal from './components/BasketModal.vue'

@Options({
  components: {
    Header,
    Footer,
    Filters,
    Products,
    BasketModal
  }
})
export default class App extends Vue {}
</script>
