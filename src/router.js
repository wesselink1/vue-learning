import Vue from 'vue';
import IndexPage from "@/views/IndexPage";
import Router from 'vue-router';

const ArraySortingPage = () => import(/* webpackChunkName: "array-sorting-page" */ "@/views/ArraySortingPage");
const BuyCardsPage = () => import(/* webpackChunkName: "buy-cards-page" */ "@/views/BuyCardsPage");
const CustomDirectivesPage = () => import(/* webpackChunkName: "custom-directive-page" */ "@/views/CustomDirectivesPage");
const Error404Page = () => import(/* webpackChunkName: "error-page" */ "@/views/Error404Page");
const Faq = () => import(/* webpackChunkName: "faq-page" */ "@/views/Faq");
const FormModulesPage = () => import(/* webpackChunkName: "form-modules-page" */ "@/views/FormModulesPage");
const ModalPage = () => import(/* webpackChunkName: "modal-page" */ "@/views/ModalPage");
const MovieDetailPage = () => import(/* webpackChunkName: "movie-page" */ "@/views/MovieDetailPage");
const MoviesPage = () => import(/* webpackChunkName: "movie-page" */ "@/views/MoviesPage");
const NavButtonsPage = () => import(/* webpackChunkName: "nav-button-page" */ "@/views/NavButtonsPage");
const PugPage = () => import(/* webpackChunkName: "pug-page" */ "@/views/PugPage");
const TabsPage = () => import(/* webpackChunkName: "tabs-page" */ "@/views/TabsPage");
const TvShowsPage = () => import(/* webpackChunkName: "tv-shows-page" */ "@/views/MovieDetailPage");
const VuelidatePage = () => import(/* webpackChunkName: "vuelidate-page" */ "@/views/VuelidatePage");
const VuexCounterPage = () => import(/* webpackChunkName: "vuex-counter-page" */ "@/views/VuexCounterPage");

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
