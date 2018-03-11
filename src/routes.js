import Cards from "./components/Cards/Cards.vue";
import Counter from "./components/Counter/Counter.vue";
import CustomDirectives from "./components/CustomDirectives/CustomDirective.vue";
import DynamicComponents from "./components/DynamicComponents/DynamicComponents.vue";
import Error404 from "./components/Errors/Error404.vue";
import NavButtons from "./components/NavButtons/NavButtons.vue";
import Overview from "./components/Overview/Overview.vue";
import Pug from "./components/Pug/Pug.vue";
import Vuelidate from "./components/Vuelidate/Vuelidate.vue";

export const routes = [
	{
		path: "/vue-learning",
		name: "linkOverview",
		component: Overview
	},
	{
		path: "/vue-learning/cards",
		name: "linkCards",
		component: Cards
	},
	{
		path: "/vue-learning/counter",
		name: "linkCounter",
		component: Counter
	},
	{
		path: "/vue-learning/customdirectives",
		name: "linkCustomDirectives",
		component: CustomDirectives
	},
	{
		path: "/vue-learning/dynamiccomponents",
		name: "linkDynamicComponents",
		component: DynamicComponents
	},
	{
		path: "/vue-learning/navbuttons",
		name: "linkNavbuttons",
		component: NavButtons
	},
	{
		path: "/vue-learning/pug",
		name: "linkPug",
		component: Pug
	},
	{
		path: "/vue-learning/vuelidate",
		name: "linkVuelidate",
		component: Vuelidate
	},
	{
		path: "*",
		component: Error404
	}
];
