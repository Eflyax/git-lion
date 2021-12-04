import {createRouter, createWebHistory} from 'vue-router';
import Graph from '../components/Graph.vue';
import Home from '../components/Home.vue';

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
},{
		path: '/graph/:slug',
		name: 'Graph',
		component: Graph
}];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
