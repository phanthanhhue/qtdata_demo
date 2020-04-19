<template>
  <div class="the-about">
    <CardContainer>
      <CardHolder>
        <GeneralCard :img="topImg" :title="topTitle"/>
      </CardHolder>
      <CardHolder>
        <div>
          <GeneralCard :img="visionImg" />
        </div>
        <div>
          <GeneralCard :intro="'Connecting brands and ideas'" :styles="[]" :title="'Vision'" :content="visionContent" />
        </div>
      </CardHolder>
      <CardHolder>
        <div>
          <GeneralCard :img="visionImg" />
        </div>
        <div>
          <GeneralCard :title="'Mission'" />
        </div>
      </CardHolder>
      <CardHolder>
        <GeneralCard :title="'Core Values'" :intro="'We’re Quite Multi-Disciplined'" />
        <div>
          <!-- This is the slider -->
        </div>
      </CardHolder>
    </CardContainer>
  </div>
</template>

<script>
  import CardContainer from '../generals/CardContainer';
  import CardHolder from '../generals/CardHolder';
  import GeneralCard from '../generals/GeneralCard';

  export default {
    name: 'TheAbout',
    props: {

    },
    components: {
      CardContainer,
      CardHolder,
      GeneralCard,
    },
    data() {
      return {
        topImg: 'https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/about_header_001.jpg?time=1586443498',
        topTitle: 'We Make Amazing Things Every Day.',
        visionImg :'https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/qtq80-nsbUtH.jpeg?time=1586443498',
        visionContent: '“To be a respected solutions company focused on combining state-of-the-art of Machine Learning, AI algorithms and delivering world-class quality big data solutions.”',
        styles: {
          height: 100 + 'px',
        },
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>