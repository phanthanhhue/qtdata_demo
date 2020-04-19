<template>
  <div id="thePageHolder" class="the-page-holder">
    <TheHome v-if="isHome"/>
    <TheCoronaVirusUpdate v-else-if="isCoronaUpdate"/>
    <TheAbout v-else-if="isAbout" />
    <TheFooter />
  </div>
</template>

<script>
  import TheHome from '../pages/TheHome';
  import TheCoronaVirusUpdate from '../pages/TheCoronavirusUpdate';
  import TheAbout from '../pages/TheAbout';
  import TheFooter from './TheFooter';

  export default {
    name: 'ThePageHolder',
    props: {

    },
    components: {
      TheHome,
      TheCoronaVirusUpdate,
      TheAbout,
      TheFooter,
    },
    data() {
      return {
        isHome: false,
        isCoronaUpdate: false,
        isAbout: true
      };
    },
  };
</script>

<style lang="scss" scoped>
  .the-main-content {
    width: 100%;
    height: auto;
  }
</style>