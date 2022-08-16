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
    }
  },
  computed: {
    selectOptions() {
      return Array.from(this.$props.options ?? [])
    }
  },
})
</script>

<template>
  <div class="filter">
    <label :for="label" class="filter__label">{{ label }}</label>
    <slot :label="label" :options="selectOptions"  />
  </div>
</template>
