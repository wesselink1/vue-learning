import Admin from './components/Admin/Admin.vue';
import Cards from './components/Cards/Cards.vue';
import Error404 from './components/Errors/Error404.vue';
import Home from './components/Home.vue';

export const routes = [
	{
		path: '/',
		name: 'linkHome',
		component: Home
	},
	{
		path: '/admin',
		name: 'linkAdmin',
		component: Admin
	},
	{
		path: '/cards',
		name: 'linkCards',
		component: Cards
	},
	{
		path: '*',
		component: Error404
	}
];
