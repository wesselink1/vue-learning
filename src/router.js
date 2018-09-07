import Vue from 'vue';
import ArraySorting from "@/views/ArraySorting";
import BuyCards from "@/views/BuyCards";
import CustomDirectives from "@/views/CustomDirectives";
import Error404 from "@/views/Error404";
import FormModules from "@/views/FormModules";
import Index from "@/views/Index";
import MovieDetail from "@/views/MovieDetail";
import Movies from "@/views/Movies";
import NavButtons from "@/views/NavButtons";
import Pug from "@/views/Pug";
import Router from 'vue-router';
import SlideUpDown from "@/views/SlideUpDown";
import Tabs from "@/views/Tabs";
import Vuelidate from "@/views/Vuelidate";
import VuexCounter from "@/views/VuexCounter";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
		path: "/form-modules",
		name: "formModules",
		component: FormModules
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
