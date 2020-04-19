<template>
  <div class="home-page">
    <CardContainer>
      <CardHolder>
        <div class="home-page-header">
          <h1 class="header-title">QT-Group</h1>
          <p class="header-descripton">
            THE GLOBAL QT-GROUP NOW HAS 1 COMPANY WITH MANY OFFICES IN VIETNAM , 2 COMPANIES IN CANADA AND 1 COMPANY IN THE USA.
            THE GROUP'S PRINCIPAL ACTIVITIES ARE IN ARTIFICIAL INTELLIGENCE AND FINANCIAL INVESTMENT - APPLIED IN MANY FIELDS,
            IN PARTICULARLY HOSPITALITY MANAGEMENT AND FINANCE FOR THE PAST THREE YEARS. CURRENTLY, THE GROUP IS IN THE PREPARATION
            STAGE TO OPEN MORE COMPANIES IN NORTH AMERICA BECAUSE OF DIFFERENT LAWS IN EACH STATE, ESPECIALLY THE INTERESTS OF
            CORPORATE INVESTMENT. OUR GROUP IS ALSO EXPANDING AND ESTABLISHING COMPANIES IN MANY REGIONS OF THE WORLD: NORTHERN EUROPE,
            JAPAN, THE UNITED KINGDOM, AUSTRALIA, GERMANY AND SINGAPORE. EACH COMPANY OF QT-GROUP OUTSIDE VIETNAM IS CALLING THEIR
            REGIONAL CAPITAL AND OUTSOURCING ON QT-VIETNAM TO DEVELOP AND REFINE ITS CORE PRODUCTS TO SUIT EACH REGION. IN THE PAST
            THREE YEARS THE COMPANIES IN CANADA HAVE DONE SO. WITH STRONG WORLD-LEADING EXPERIENCE FROM OUR FOUNDERS ON ARTIFICIAL
            INTELLIGENT APPLICATIONS, FINANCIAL MANAGING OF 150 MILLION USD INVESTMENT IN VIETNAM (2009-2014) AND JOINING 40 BILLION
            USD INVESTMENT MANAGEMENT GROUP IN CANADA (2017-2018), EACH COMPANY OUTSIDE VIETNAM THIS YEAR IS EXPECTED TO CALL FOR
            INVESTMENT OF 100 MILLION USD.
          </p>
        </div>
      </CardHolder>
      <CardHolder>
        <CardTitle />
        <div class="latest-works">
          <div class="latest-works-left">
            <GeneralCard :title="nectarTitle" :date="nectarDate" :hwSize="nectarSize" :img="nectarImg" />
          </div>
          <div class="latest-works-right">
            <div class="right-above">
              <GeneralCard :title="nectarTitle" :date="nectarDate" :hwSize="nectarSize" :img="nectarImg" />
            </div>
            <div class="right-below">
              <div class="right">
              <GeneralCard :title="nectarTitle" :date="nectarDate" :hwSize="nectarSize" :img="nectarImg" />
              </div>
              <div class="left">
                <GeneralCard :title="nectarTitle" :date="nectarDate" :hwSize="nectarSize" :img="nectarImg" />
              </div>
            </div>
          </div>
        </div>
      </CardHolder>
      <CardHolder>
        <div>
          <h2>Our Leadership</h2>
          <p>WHEN EACH TALENTED INDIVIDUAL GATHERS TOGETHER, IT MAKES A GREAT SUCCESS.</p>
        </div>
        <div>
          <GeneralCard :title="'Henry Duong'" :jobTitle="'FOUNDER'" />
          <p>
            15+ years of success in management, data analytics and investment. Being (certified) member of
            several famous global professional communities: CFA, CAIA, PRMIA, GARP, SOA, and CAS. Being a
            well-known scholar researcher on wide range research areas: mathematics, computer science, finance,
            risk management, insurance and economics. Postdoctoral researcher at Japan Advanced Institute of
            Science and Technology on Machine Learning, PhD in Mathematics, MS in Computer Science, MA in
            Analysis, BA in Mathematics & Computer Science.
          </p>
        </div>
        <div>
          <GeneralCard :title="'Adelina Ho'" :jobTitle="'CO-FOUNDER'" />
          <p>
            Adelina Ho has 13+ year work as Head of Programming Curriculum Committee and Lecturer. Not only
            possessing expertise in optimization research with prestigious publications and reviewing
            activities on high-ranked journals, she also has many years experience in developing statistical
            models, interpreting and analyzing data for driving business solutions. Currently, she focuses
            on developing QT-Data Inc. She graduated with her Master of Science in Optimization and Bachelor
            of Science in Mathematics & Computer Science.
          </p>
        </div>
      </CardHolder>
        <h5>What They’re Saying</h5>
        <p>
          It was really fun getting to know the team during the project. They were all helpful in answering
          my questions and made me feel at ease. The design ended up being better than I could have envisioned!
        </p>
      <CardHolder>
      </CardHolder>
    </CardContainer>
  </div>
</template>

<script>
  import CardContainer from '../generals/CardContainer';
  import CardTitle from '../elements/CardTitle';
  import CardHolder from '../generals/CardHolder';
  import GeneralCard from '../generals/GeneralCard';

  export default {
    name: 'TheHome',
    props: {

    },
    components: {
      CardContainer,
      CardTitle,
      CardHolder,
      GeneralCard,
    },
    data() {
      return {
        nectarTitle: 'Nectar Advertisement',
        nectarDate: 'October 8, 2016',
        nectarSize: [524, 524],
        nectarImg: 'https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2016/10/template_001-1000x877.jpg'
      }
    },
    methods: {
      onDelete() {
        console.log('delelte')
      }
    },
  };
</script>

<style>

</style>