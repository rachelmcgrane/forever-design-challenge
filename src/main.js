import Vue from 'vue';
import App from './App.vue';

import './assets/stylesheets/app.scss';

var vm = new Vue({
  el: '.app',
  render: h => h(App)
});
