import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
Vue.use(Vuex);

import NavTopStore from './stores/nav_top_store';
import DashboardStore from './stores/dashboard_store';
import UserStore from './stores/user_store';
import ChatStore from './stores/chat_store';

const store = new Vuex.Store({
  modules: {
    NavTopStore,
    DashboardStore,
    UserStore,
    ChatStore
  }
});

export default store;
