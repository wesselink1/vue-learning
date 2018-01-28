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
	bind(el, binding, vnode) {
		el.style.backgroundColor = binding.value;
	}
});

new Vue({
	el: "#app",
	router,
	store,
	render: h => h(App)
})
