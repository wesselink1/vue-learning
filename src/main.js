import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Admin from './components/Admin.vue'
import error404 from './components/error404.vue'
import App from './App.vue'

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: Home },
	{ path: '/admin', component: Admin },
	{ path: '*', component: error404 }
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
