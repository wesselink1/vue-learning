import Vue from 'vue';
import ArraySortingPage from "@/views/ArraySortingPage";
import BuyCardsPage from "@/views/BuyCardsPage";
import CustomDirectivesPage from "@/views/CustomDirectivesPage";
import Error404Page from "@/views/Error404Page";
import FormModulesPage from "@/views/FormModulesPage";
import IndexPage from "@/views/IndexPage";
import ModalPage from "@/views/ModalPage";
import MovieDetailPage from "@/views/MovieDetailPage";
import MoviesPage from "@/views/MoviesPage";
import NavButtonsPage from "@/views/NavButtonsPage";
import PugPage from "@/views/PugPage";
import Router from 'vue-router';
import Faq from "@/views/Faq";
import TabsPage from "@/views/TabsPage";
import TvShowsPage from "@/views/TvShowsPage";
import VuelidatePage from "@/views/VuelidatePage";
import VuelidateEnhancedPage from "@/views/VuelidateEnhancedPage";
import VuexCounterPage from "@/views/VuexCounterPage";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
	{
		path: "/",
		name: "IndexPage",
		component: IndexPage
	},
	{
		path: "/nav-buttons",
		name: "NavButtonsPage",
		component: NavButtonsPage
	},
	{
		path: "/form-modules",
		name: "FormModulesPage",
		component: FormModulesPage
	},
	{
		path: "/modal",
		name: "ModalPage",
		component: ModalPage
	},
	{
		path: "/movies",
		name: "MoviesPage",
		component: MoviesPage
	},
	{
		path: "/movie/:id/:slug",
		name: "MovieDetailPage",
		component: MovieDetailPage
	},
	{
		path: "/vuex-counter",
		name: "VuexCounterPage",
		component: VuexCounterPage
	},
	{
		path: "/buy-cards",
		name: "BuyCardsPage",
		component: BuyCardsPage
	},
	{
		path: "/tabs",
		name: "TabsPage",
		component: TabsPage
	},
	{
		path: "/pug",
		name: "PugPage",
		component: PugPage
	},
	{
		path: "/custom-directives",
		name: "CustomDirectivesPage",
		component: CustomDirectivesPage
	},	
	{
		path: "/tv-shows",
		name: "TvShowsPage",
		component: TvShowsPage
	},
	{
		path: "/vuelidate",
		name: "VuelidatePage",
		component: VuelidatePage
	},
	{
		path: "/vuelidate-enhanced",
		name: "VuelidateEnhancedPage",
		component: VuelidateEnhancedPage
	},
	{
		path: "/array-sorting",
		name: "ArraySortingPage",
		component: ArraySortingPage
	},
	{
		path: "/faq",
		name: "Faq",
		component: Faq
	},
	{
		path: "*",
		component: Error404Page
	}
  ]
});
