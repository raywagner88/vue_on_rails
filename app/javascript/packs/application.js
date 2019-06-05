import Vue from 'vue';
import store from '../src/vuex';
import router from '../src/routes.js';
import '../src/filters/strings.js';
import '../src/plugins/vuetify';
import JQuery from 'jquery';

import NavTop from '../src/components/shared/_nav_top';
Vue.component('nav-top', NavTop);

let $ = JQuery;

$.ajaxSetup({
  beforeSend: function(xhr) {
    xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
  },
  complete: function(xhr, status) {
    if(xhr.status === 200 || xhr.status === 422) {
      return true;
    }
    if(xhr.status === 404) {
      return window.location.href = '/404';
    }

    return window.location.href = '/500';
  }
})
$.ajaxPrefilter(function( options ) {
  options.url = `/api/${options.url}`;
});

const app = new Vue({
  router,
  store
}).$mount('#app')
