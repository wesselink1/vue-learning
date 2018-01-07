import Cards from "./components/Cards/Cards.vue";
import Counter from "./components/Counter/Counter.vue";
import Error404 from "./components/Errors/Error404.vue";
import Home from "./components/Home/Home.vue";

export const routes = [
	{
		path: "/",
		name: "linkHome",
		component: Home
	},
	{
		path: "/cards",
		name: "linkCards",
		component: Cards
	},
	{
		path: "/counter",
		name: "linkCounter",
		component: Counter
	},
	{
		path: "*",
		component: Error404
	}
];
