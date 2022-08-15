<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      required: true,
      type: String
    }
  }
})
</script>

<template>
  <div class="filter">
    <label :for="label" class="filter__label">{{ label }}</label>
    <select class="filter__select control" :name="label" :id="label"></select>
  </div>
</template>
