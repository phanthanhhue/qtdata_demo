<template>
  <div class="card-container">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'CardContainer',
    props: {
      hwSize: {
        type: Array,
        default() {[1024, 768]},
        required: false
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>