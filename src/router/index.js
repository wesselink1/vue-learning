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
import Lodash from "@/components/Lodash/Lodash";
import Vuelidate from "@/components/Vuelidate/Vuelidate";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
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
		path: "/lodash",
		name: "linkLodash",
		component: Lodash
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
  ]
})
