import Vue from 'vue';
import Router from 'vue-router';
import DnD from '@/components/DnD';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DnD',
      component: DnD,
    },
  ],
});
