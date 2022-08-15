<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const text = ref<string>('')

    return {
      text
    }
  },
  emits: ['input']
})
</script>

<template>
  <div class="custom-input">
    <input
      placeholder="Search..."
      type="text"
      class="custom-input__input control"
      v-model="text"
      @input="$emit('input', $event.target.value)"
    />
    <button class="custom-input__cross-btn cross-btn" @click="text = ''">
      <span class="cross-btn__line cross-btn__line_1"></span>
      <span class="cross-btn__line cross-btn__line_2"></span>
    </button>
  </div>
</template>
