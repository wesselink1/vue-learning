import Vue from 'vue';
import Router from 'vue-router';
import ArraySorting from "@/pages/ArraySorting/Index";
import BuyCards from "@/pages/BuyCards/Index";
import CustomDirectives from "@/pages/CustomDirectives/Index";
import Error404 from "@/pages/Errors/Error404";
import Index from "@/pages/Index/Index";
import NavButtons from "@/pages/NavButtons/Index";
import Pug from "@/pages/Pug/Index";
import SlideUpDown from "@/pages/SlideUpDown/Index";
import Tabs from "@/pages/Tabs/Index";
import Vuelidate from "@/pages/Vuelidate/Index";
import VuexCounter from "@/pages/VuexCounter/Index";

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
		path: "/slide-up-down",
		name: "linkSlideUpDown",
		component: SlideUpDown
	},
	{
		path: "*",
		component: Error404
	}
  ]
});
