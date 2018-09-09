import Vue from 'vue';
import ArraySortingPage from "@/views/ArraySortingPage";
import BuyCardsPage from "@/views/BuyCardsPage";
import CustomDirectivesPage from "@/views/CustomDirectivesPage";
import Error404Page from "@/views/Error404Page";
import FormModulesPage from "@/views/FormModulesPage";
import IndexPage from "@/views/IndexPage";
import MovieDetailPage from "@/views/MovieDetailPage";
import MoviesPage from "@/views/MoviesPage";
import NavButtonsPage from "@/views/NavButtonsPage";
import PugPage from "@/views/PugPage";
import Router from 'vue-router';
import SlideUpDownPage from "@/views/SlideUpDownPage";
import TabsPage from "@/views/TabsPage";
import VuelidatePage from "@/views/VuelidatePage";
import VuexCounterPage from "@/views/VuexCounterPage";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
	{
		path: "/",
		name: "indexPage",
		component: IndexPage
	},
	{
		path: "/nav-buttons",
		name: "navButtonsPage",
		component: NavButtonsPage
	},
	{
		path: "/form-modules",
		name: "formModulesPage",
		component: FormModulesPage
	},
	{
		path: "/movies",
		name: "moviesPage",
		component: MoviesPage
	},
	{
		path: "/movie/:id/:slug",
		name: "movieDetailPage",
		component: MovieDetailPage
	},
	{
		path: "/vuex-counter",
		name: "vuexCounterPage",
		component: VuexCounterPage
	},
	{
		path: "/buy-cards",
		name: "buyCardsPage",
		component: BuyCardsPage
	},
	{
		path: "/tabs",
		name: "tabsPage",
		component: TabsPage
	},
	{
		path: "/pug",
		name: "pugPage",
		component: PugPage
	},
	{
		path: "/custom-directives",
		name: "customDirectivesPage",
		component: CustomDirectivesPage
	},	
	{
		path: "/vuelidate",
		name: "vuelidatePage",
		component: VuelidatePage
	},
	{
		path: "/array-sorting",
		name: "arraySortingPage",
		component: ArraySortingPage
	},
	{
		path: "/slide-up-down",
		name: "slideUpDownPage",
		component: SlideUpDownPage
	},
	{
		path: "*",
		component: Error404Page
	}
  ]
});
