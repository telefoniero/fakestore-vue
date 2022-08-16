<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
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
    const filters = reactive({})

    function filterProducts(event: Event) {
      store.dispatch('setFilters', filters)
      store.dispatch('filterProducts')
    }

    return {
      categories,
      sales,
      filterProducts,
      filters
    }
  }
})
</script>

<template>
  <div class="filters">
    <div class="container">
      <div class="filters__flex-cont">
        <Filter class="filter__filter" label="Search" filterKey="query">
          <CustomInput
            class="filter__control"
            @input="filters.query = $event"
          />
        </Filter>
        <Filter
          class="filters__filter"
          label="Product category"
          :options="categories"
          filterKey="category"
          v-slot="{ label, options }"
        >
          <CustomSelect
            class="filter__control control"
            :label="label"
            :options="options"
            @input="filters.category = $event"
          />
        </Filter>
        <Filter
          class="filters__filter"
          label="Sale"
          :options="sales"
          filterKey="sale"
          v-slot="{ label, options }"
        >
          <CustomSelect
            class="filter__control control"
            :label="label"
            :options="options"
            @input="filters.sale = $event"
          />
        </Filter>
        <button class="filters__btn control" @click="filterProducts">
          Apply
        </button>
      </div>
    </div>
  </div>
</template>
