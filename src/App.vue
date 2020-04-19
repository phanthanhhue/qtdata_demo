<template>
  <div id="app">
    <TheLayout />
  </div>
</template>

<script>
import TheLayout from './components/TheLayout.vue'

export default {
  name: 'App',
  components: {
    TheLayout
  }
}
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
</style>
