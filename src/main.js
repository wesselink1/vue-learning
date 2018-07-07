// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import Vuelidate from "vuelidate";
import router from './router'
import { store } from "./store/store.js";

Vue.use(Vuelidate);
Vue.config.productionTip = false

Vue.filter("euroCurrency", function(price){
	return Number(price).toLocaleString("nl-NL", {
		style: "currency",
        currency: "EUR"
	});
});

Vue.filter("slugify", function(title){
	return title.toString().toLowerCase()
	    .replace(/\s+/g, '-')           // Replace spaces with -
	    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
	    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
	    .replace(/^-+/, '')             // Trim - from start of text
	    .replace(/-+$/, '');            // Trim - from end of text
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
