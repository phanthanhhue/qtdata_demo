import Vue from 'vue';
import Router from 'vue-router';

import TheAbout from '../components/pages/TheAbout';

Vue.use(Router);

export default new Router ({
  routes: [
    { path: '/about',name: 'TheAbout', component: TheAbout },
  ],
})