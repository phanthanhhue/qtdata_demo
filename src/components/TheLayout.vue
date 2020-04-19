<template>
  <div id="theLayout" class="the-layout">
    <TheSideBar />
    <ThePageHolder v-if="isPageHolder"/>
    <TheContact v-else-if="isContact"/>
  </div>
</template>

<script>
  import TheSideBar from './pages/TheSideBar.vue';
  import ThePageHolder from './generals/ThePageHolder';

  export default {
    name: 'TheLayoutComponent',
    props: {

    },
    components: {
      TheSideBar,
      ThePageHolder,
    },
    data() {
      return {
        isPageHolder: true,
        isContact: false,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .the-layout {
    width: 100%;
    height: auto;
  }

</style>