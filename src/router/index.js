import Vue from 'vue';
import Router from 'vue-router';
import ArraySorting from "@/components/ArraySorting/ArraySorting";
import BuyCards from "@/components/BuyCards/BuyCards";
import CustomDirectives from "@/components/CustomDirectives/CustomDirective";
import Error404 from "@/components/Errors/Error404";
import Index from "@/components/Index/Index";
import NavButtons from "@/components/NavButtons/NavButtons";
import Pug from "@/components/Pug/Pug";
import Tabs from "@/components/Tabs/Tabs";
import Vuelidate from "@/components/Vuelidate/Vuelidate";
import VuexCounter from "@/components/VuexCounter/VuexCounter";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
	{
		path: "/",
		name: "linkIndex",
		component: Index
	},
	{
		path: "/nav-buttons",
		name: "linkNavbuttons",
		component: NavButtons
	},
	{
		path: "/vuex-counter",
		name: "linkVuexCounter",
		component: VuexCounter
	},
	{
		path: "/buy-cards",
		name: "linkBuyCards",
		component: BuyCards
	},
	{
		path: "/tabs",
		name: "linkTabs",
		component: Tabs
	},
	{
		path: "/pug",
		name: "linkPug",
		component: Pug
	},
	{
		path: "/custom-directives",
		name: "linkCustomDirectives",
		component: CustomDirectives
	},	
	{
		path: "/vuelidate",
		name: "linkVuelidate",
		component: Vuelidate
	},
	{
		path: "/array-sorting",
		name: "linkArraySorting",
		component: ArraySorting
	},
	{
		path: "*",
		component: Error404
	}
  ]
})
