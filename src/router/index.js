import Vue from 'vue';
import ArraySorting from "@/components/ArraySorting/Index";
import BuyCards from "@/components/BuyCards/Index";
import CustomDirectives from "@/components/CustomDirectives/Index";
import Error404 from "@/components/Errors/Error404";
import Index from "@/components/Index/Index";
import MovieDetail from "@/components/Movies/Detail";
import Movies from "@/components/Movies/Index";
import NavButtons from "@/components/NavButtons/Index";
import Pug from "@/components/Pug/Index";
import Router from 'vue-router';
import SlideUpDown from "@/components/SlideUpDown/Index";
import Tabs from "@/components/Tabs/Index";
import Vuelidate from "@/components/Vuelidate/Index";
import VuexCounter from "@/components/VuexCounter/Index";

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
	{
		path: "/",
		name: "homepage",
		component: Index
	},
	{
		path: "/nav-buttons",
		name: "navButtons",
		component: NavButtons
	},
	{
		path: "/movies",
		name: "moviesOverview",
		component: Movies
	},
	{
		path: "/movie/:id/:slug",
		name: "movieDetail",
		component: MovieDetail
	},
	{
		path: "/vuex-counter",
		name: "vuexCounter",
		component: VuexCounter
	},
	{
		path: "/buy-cards",
		name: "buyCards",
		component: BuyCards
	},
	{
		path: "/tabs",
		name: "tabs",
		component: Tabs
	},
	{
		path: "/pug",
		name: "pug",
		component: Pug
	},
	{
		path: "/custom-directives",
		name: "customDirectives",
		component: CustomDirectives
	},	
	{
		path: "/vuelidate",
		name: "vuelidate",
		component: Vuelidate
	},
	{
		path: "/array-sorting",
		name: "arraySorting",
		component: ArraySorting
	},
	{
		path: "/slide-up-down",
		name: "slideUpDown",
		component: SlideUpDown
	},
	{
		path: "*",
		component: Error404
	}
  ]
});
