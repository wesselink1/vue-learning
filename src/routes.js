import Home from './components/Home.vue';
import Admin from './components/Admin.vue';
import Cards from './components/cards/Cards.vue';
import Error404 from './components/Error404.vue';

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
