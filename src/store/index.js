import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: []
    },
    mutations: {
        // SET_NEWS: function() {
        // } 축약해서 아래와같이 씀
        SET_NEWS(state, news) {
            // news = res.data
            state.news = news;
        }
    },
    // api를 호출하기만 함 (state에 바로 데이터를 넣을수는 없음)
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then((res) => {
                    // mutation에 데이터 넘김
                    context.commit('SET_NEWS', res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
})