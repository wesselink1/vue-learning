import Home from './components/Home.vue';
import Admin from './components/Admin.vue';
import error404 from './components/error404.vue';

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
		component: error404 
	}
];