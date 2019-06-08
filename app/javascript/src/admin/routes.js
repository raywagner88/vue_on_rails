import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Dashboard from './components/dashboard/index.vue';
import UserIndex from './components/users/index.vue';
import Error500 from '../components/errors/500.vue';
import Error404 from '../components/errors/404.vue';

const router = new VueRouter({
  mode: 'history',
  base: `admin`,
  routes: [
    { path: '/', component: Dashboard, name: 'root_path' },
    { path: '/users', component: UserIndex, name: 'users_path' },
    { path: '/500', component: Error500 },
    { path: '/404', component: Error404 },
    { path: '*', redirect: '/404' }
  ]
});

export default router;
