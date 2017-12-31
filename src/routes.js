import Home from './components/Home.vue';
import Admin from './components/Admin.vue';
import Error404 from './components/Error404.vue';

export const routes = [
	{ 
		path: '/',
		component: Home
	},
	{ 
		path: '/admin',
		component: Admin
	},
	{ 
		path: '*', 
		component: Error404 
	}
];