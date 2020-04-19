<template>
  <div class="general-card" :style="styles">
    <div>{{ intro }}</div>
    <div>{{  title }}</div>
    <div>{{  jobTitle }}</div>
    <div>{{  date }}</div>
    <div>{{  img }}</div>
    <div>{{  content }}</div>
  </div>
</template>

<script>
  export default {
    name: '',
    props: {
      title: {
        type: String,
        default: '',
        required: false,
      },
      jobTitle: {
        type: String,
        default: '',
        required: false,
      },
      date: {
        type: String,
        default: '',
        required: false,
      },
      styles: {
        type: Object,
        default() {},
        required: false,
      },
      img: {
        type: String,
        default: '',
        required: false,
      },
      intro: {
        type: String,
        default: '',
        required: false,
      },
      content: {
        typtype: String,
        default: '',
        required: false,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
