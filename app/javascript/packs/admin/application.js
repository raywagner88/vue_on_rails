import Vue from 'vue';
import store from '../../src/admin/vuex';
import router from '../../src/admin/routes.js';
import Vuetify from 'vuetify';
import helpers from '../../src/admin/helpers';
import EventBus from '../../src/admin/event_bus';
import App from '../../src/admin/app.vue';
import JQuery from 'jquery';

Vue.use(Vuetify)

let $ = JQuery;

window.EventBus = EventBus;

import NavTop from '../../src/admin/components/shared/_nav_top';
Vue.component('nav-top', NavTop);

import SubmitTag from '../../src/admin/components/shared/_submit_tag';
Vue.component('submit-tag', SubmitTag);

$.ajaxSetup({
  beforeSend: function(xhr) {
    xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
  },
  complete: function(xhr, status) {
    if(xhr.status === 500) {
      return window.location.href = '/500';
    }
    if(xhr.status === 401) {
      return window.location.href = '/users/sign_in';
    }
    if(xhr.status === 404) {
      return window.location.href = '/404';
    }

    return true;
  }
})
$.ajaxPrefilter(function( options ) {
  options.url = `/api/admin/${options.url}`;
});

const app = new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount('#app')
