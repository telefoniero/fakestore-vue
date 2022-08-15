<script lang="ts">
import { computed, defineComponent } from 'vue'
import Filter from '@/components/Filter.vue'
import { useStore } from '@/store/store'
import CustomInput from './CustomInput.vue'
import CustomSelect from '@/components/CustomSelect.vue'

export default defineComponent({
  components: { Filter, CustomInput, CustomSelect },
  setup() {
    const store = useStore()

    const categories = computed<Set<string>>(() => store.state.categories)
    const sales = computed<Set<string>>(() => store.state.sales)

    function filterProducts(event: Event) {
      store.dispatch('filterProducts')
    }

    return {
      categories,
      sales,
      filterProducts
    }
  }
})
</script>

<template>
  <div class="filters">
    <div class="container">
      <div class="filters__flex-cont">
        <Filter
          class="filter__filter"
          label="Search"
          filterKey="query"
          v-slot="{onInput}"
        >
          <CustomInput class="filter__control" :onInput="onInput" />
        </Filter>
        <Filter
          class="filters__filter"
          label="Product category"
          :options="categories"
          filterKey="category"
          v-slot="{ label, options, onInput }"
        >
          <CustomSelect
            class="filter__control control"
            :label="label"
            :options="options"
            :onInput="onInput"
          />
        </Filter>
        <Filter
          class="filters__filter"
          label="Sale"
          :options="sales"
          filterKey="sale"
          v-slot="{ label, options, onInput }"
        >
          <CustomSelect
            class="filter__control control"
            :label="label"
            :options="options"
            :onInput="onInput"
          />
        </Filter>
        <button class="filters__btn control" @click="filterProducts">
          Apply
        </button>
      </div>
    </div>
  </div>
</template>
