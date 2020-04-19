<template>
  <div class="card-title">
    <slot :style="styles" :name="name" :/>
  </div>
</template>

<script>
export default {
  name: 'CardTitle',
  props: {
    styles: {
      type: Object,
      default() {},
      required: false,
    },
    name: {
      type: String,
      default: '',
      required: false,
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>