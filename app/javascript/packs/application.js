import Vue from 'vue';
import store from '../src/vuex';
import router from '../src/routes.js';
import Vuetify from 'vuetify';
import "@mdi/font/css/materialdesignicons.css";
import '../src/filters/strings.js';
import App from '../src/app.vue'
import JQuery from 'jquery';

Vue.use(Vuetify)

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

const options = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      dark: {}
    },
    icons: {
      iconfont: 'mdi'
    }
  }
}

const app = new Vue({
  router,
  store,
  vuetify: new Vuetify(options),
  render: h => h(App)
}).$mount('#app')
