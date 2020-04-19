<template>
  <div class="card-title" :style="styles">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardTitle',
  props: {
    fontSize: {
      type: Number,
      default: 18,
      required: false,
    },
    name: {
      type: String,
      default: 'Card Title',
      required: false,
    },
    intro: {
      type:String,
      default: 'This is the line upper Title',
      required: false,
    }
  },
  data() {
    return {
      styles: {

      }
    }
  }
}
</script>

<style>

</style>