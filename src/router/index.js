import Vue from 'vue';
import Router from 'vue-router';
import Cards from "@/components/Cards/Cards";
import Counter from "@/components/Counter/Counter";
import CustomDirectives from "@/components/CustomDirectives/CustomDirective";
import DynamicComponents from "@/components/DynamicComponents/DynamicComponents";
import Error404 from "@/components/Errors/Error404";
import NavButtons from "@/components/NavButtons/NavButtons";
import Overview from "@/components/Overview/Overview";
import Pug from "@/components/Pug/Pug";
import Vuelidate from "@/components/Vuelidate/Vuelidate";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
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
  ]
})
