import Cards from "./components/Cards/Cards.vue";
import Counter from "./components/Counter/Counter.vue";
import DynamicComponents from "./components/DynamicComponents/DynamicComponents.vue";
import Error404 from "./components/Errors/Error404.vue";
import Home from "./components/Home/Home.vue";
import Pug from "./components/Pug/Pug.vue";

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
		path: "/dynamiccomponents",
		name: "linkDynamicComponents",
		component: DynamicComponents
	},
	{
		path: "/counter",
		name: "linkCounter",
		component: Counter
	},
	{
		path: "/pug",
		name: "linkPug",
		component: Pug
	},
	{
		path: "*",
		component: Error404
	}
];
