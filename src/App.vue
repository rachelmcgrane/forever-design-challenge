<template>

  <div class="app">
    <layout-header></layout-header>
    <div class="l-content">
      <gallery></gallery>
    </div>
  </div>

</template>

<script>
import LayoutHeader from './components/layout-header.vue';
import Gallery from './components/gallery.vue'

export default {
  components: { LayoutHeader, Gallery },
  name: 'app',
}
</script>
