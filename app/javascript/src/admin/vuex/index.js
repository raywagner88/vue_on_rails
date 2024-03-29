import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import NavTopStore from './stores/nav_top_store';
import DashboardStore from './stores/dashboard_store';
import UserStore from './stores/user_store';

const store = new Vuex.Store({
  modules: {
    NavTopStore,
    DashboardStore,
    UserStore,
  }
});

export default store;
