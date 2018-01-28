import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes.js";
import { store } from "./store/store.js";

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: "history"
});

Vue.filter("euroCurrency", function(price){
	return Number(price).toLocaleString("nl-NL", { 
		style: "currency",
        currency: "EUR"
	});
});

Vue.directive("highlight", {
	bind(el, binding) {
		var delay = 0;
		
		if(binding.modifiers['delayed']) {
			delay = 3000;
		}

		setTimeout(() => {
			if (binding.arg == 'background') {
				el.style.backgroundColor = binding.value;
			} else {
				el.style.color = binding.value;
			}
		}, delay);		
	}
});

new Vue({
	el: "#app",
	router,
	store,
	render: h => h(App)
})
