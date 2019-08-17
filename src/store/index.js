import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: [],
    },
    // getters: computed와 동일한데 다만 store에있는 것
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }
    },
    mutations,
    actions
})