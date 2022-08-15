<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  props: {
    options: {
      type: Array
    },
    label: {
      required: true,
      type: String
    }
  },
  emits: ['input'],
  setup(props, { emit }) {
    const chosen = ref<string>('')
    const opened = ref<boolean>(false)
    const button = ref(null)

    function setChosen(event: Event, option: string) {
      chosen.value = option
      emit('input', option)
    }

    function clickHandler(evt: Event) {
      if (evt.target !== button.value) {
        opened.value = false
      }
    }

    onMounted(() => {
      window.addEventListener('click', clickHandler)
    })

    onUnmounted(() => window.removeEventListener('click', clickHandler))

    return {
      chosen,
      opened,
      button,
      setChosen
    }
  }
})
</script>

<template>
  <div class="custom-select">
    <button ref="button" class="custom-select__btn" @click="opened = true">
      {{ chosen }}
    </button>
    <ul class="custom-select__options" v-show="opened">
      <li
        class="custom-select__option"
        v-for="(option, index) of options"
        :key="index"
        @click="setChosen($event, option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>
