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
	return "\u20AC " + Number(price).toLocaleString("nl-NL", { 
		minimumFractionDigits: 2
	});
});

new Vue({
	el: "#app",
	router,
	store,
	render: h => h(App)
})
