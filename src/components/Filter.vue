<script lang="ts">
import { useStore } from '@/store/store'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      required: true,
      type: String
    },
    options: {
      required: true,
      type: Set
    },
    filterKey: {
      required: true,
      type: String
    }
  },
  computed: {
    selectOptions() {
      return Array.from(this.$props.options ?? [])
    }
  },
  setup({ filterKey }) {
    const store = useStore()
    function setFilter(value: string) {
      console.log(value)
      store.dispatch('setFilter', { filterKey, value })
    }

    return {
      setFilter
    }
  }
})
</script>

<template>
  <div class="filter">
    <label :for="label" class="filter__label">{{ label }}</label>
    <slot :label="label" :options="selectOptions" :onInput="setFilter" />
  </div>
</template>
