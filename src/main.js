import Vue from 'vue';
import App from "./App";
// import Vuelidate from "vuelidate";
import router from './router'
import { store } from "./store/store.js";

// Vue.use(Vuelidate);
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

Vue.filter("inlineList", function(listItems){
	return listItems.join(", ");		
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
