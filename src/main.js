// main.js는 기본적으로 애플리케이션의 설정들 (플러그인, 라이브러리들)의 구조를 파악할 수 있는 청사진이라 볼 수 있음
import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router' 
// router는 router폴더안에다가 정리하기
import { router } from './routes/index'
import { store } from './store/index';

Vue.config.productionTip = false

// router
// Vue.use(VueRouter);
// const router = new VueRouter({
//   routes: [

//   ]
// })

// store
// routes, api 폴더처럼 store폴더만들어줌
// new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions,
// })


new Vue({
  render: h => h(App),
  // router: router, => router로 축약 가능
  router,
  store,
}).$mount('#app')
