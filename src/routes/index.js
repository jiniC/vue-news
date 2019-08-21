import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js';
import bus from '../utils/bus';
import { store } from '../store/index';

Vue.use(VueRouter);

export const router = new VueRouter({
	// url에서 #삭제
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/news',
		},
		{
			// path: url 주소
			path: '/news',
			// component: url 주소로 갔을 때 표시될 컴포넌트
			name: 'news',
			component: NewsView,
			// component: createListView('NewsView')
			beforeEnter: (to, from, next) => {
				bus.$emit('start:spinner');
				// #1 -> store > action
				console.log(to);
				store.dispatch('FETCH_LIST', to.name)
					.then(() => {
						// #5
						console.log('fetched');
						// bus.$emit('end:spinner'); => 인스턴스의 mounted 속성으로 옮김
						next();
					})
					.catch(err => {
						console.log(err);
					});
				// console.log('to: ', to); // 이동할 위치의 라우팅 정보
				// console.log('from: ', from); // 현재 위치의 라우팅 정보
				// console.log('next: ', next);
				
				// 예시: 이동할 위치의 라우팅정보에 인증값이있으면 페이지이동을하고, 없으면 /login 경로로 보냄
				// if(to.auth) {
				// 	next();
				// } else {
				// 	router.replace('/login');
				// }
			},
		},
		{
			path: '/ask',
			name: 'ask',
			component: AskView,
			// component: createListView('AskView')
			beforeEnter: (to, from, next) => {
				bus.$emit('start:spinner');
				// #1 -> store > action
				console.log(to);
				store.dispatch('FETCH_LIST', to.name)
					.then(() => {
						// #5
						next();
					})
					.catch(err => {
						console.log(err);
					});
			},
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: JobsView,
			// component: createListView('JobsView')
			beforeEnter: (to, from, next) => {
				bus.$emit('start:spinner');
				// #1 -> store > action
				console.log(to);
				store.dispatch('FETCH_LIST', to.name)
					.then(() => {
						// #5
						next();
					})
					.catch(err => {
						console.log(err);
					});
			},
		},
		{
			path: '/user/:id',
			component: UserView,
		},
		{
			path: '/item/:id',
			component: ItemView,
		},
	],
});