import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import paths from './paths';

Vue.use(Router);

export default new Router({
  base: '/',
  mode: 'history',
  linkActiveClass: 'active',
  routes: paths,
});
