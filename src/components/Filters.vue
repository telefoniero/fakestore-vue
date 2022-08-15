<script lang="ts">
import { defineComponent } from 'vue'
import Filter from '@/components/Filter.vue'
import { useStore } from '@/store/store'

export default defineComponent({
  components: { Filter },
  setup() {
    const store = useStore()
  }
})
</script>

<template>
  <div class="filters">
    <div class="container">
      <div class="filters__flex-cont">
        <Filter class="filters__filter" label="Search" />
        <Filter class="filters__filter" label="Product category" />
        <Filter class="filters__filter" label="Sale" />
        <button class="filters__btn control">Apply</button>
      </div>
    </div>
  </div>
</template>
