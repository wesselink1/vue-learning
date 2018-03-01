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
		path: "/",
		name: "linkOverview",
		component: Overview
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
		path: "/customdirectives",
		name: "linkCustomDirectives",
		component: CustomDirectives
	},
	{
		path: "/dynamiccomponents",
		name: "linkDynamicComponents",
		component: DynamicComponents
	},
	{
		path: "/navbuttons",
		name: "linkNavbuttons",
		component: NavButtons
	},
	{
		path: "/pug",
		name: "linkPug",
		component: Pug
	},
	{
		path: "/vuelidate",
		name: "linkVuelidate",
		component: Vuelidate
	},
	{
		path: "*",
		component: Error404
	}
];
