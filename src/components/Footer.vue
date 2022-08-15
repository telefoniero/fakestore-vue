<script lang="ts">
import { defineComponent } from 'vue'
import Logo from './Logo.vue'

export default defineComponent({
  components: { Logo },
  setup() {}
})
</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <ul class="footer__nav footer-nav">
        <li class="footer-nav__item">
          <Logo class="footer-nav__link" />
        </li>
        <li class="footer-nav__item">
          <a href="#" class="footer-nav__link">Copyright</a>
        </li>
        <li class="footer-nav__item">
          <a href="#" class="footer-nav__link">Contacts</a>
        </li>
      </ul>
    </div>
  </footer>
</template>
