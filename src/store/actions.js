import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index';

export default {
	// FETCH_NEWS(context) {
	// 	fetchNewsList()
	// 		.then(res => {
	// 			// mutation에 데이터 넘김
	// 			context.commit('SET_NEWS', res.data);
	// 			return res;
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// },
	// FETCH_JOBS(context) {
	// 	fetchJobsList()
	// 		.then(res => {
	// 			context.commit('SET_JOBS', res.data);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// },
	// // FETCH_ASK(context) {
	// //     fetchAskList()
	// //         .then((res) => {
	// //             context.commit('SET_ASK', res.data);
	// //         })
	// //         .catch((err) => {
	// //             console.log(err);
	// //         })
	// // },
	// FETCH_ASK({ commit }) {
	// 	fetchAskList()
	// 		.then(({ data }) => {
	// 			commit('SET_ASK', data);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// },


	// promise 비동기:
	// FETCH_USER({ commit }, name) {
	// 	return fetchUserInfo(name)
	// 		.then(({ data }) => {
	// 			commit('SET_USER', data);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// },
	// async 비동기:
	async FETCH_USER({ commit }, name) {
		try {
			const response = await fetchUserInfo(name);
			commit('SET_USER', response.data);
			return response; // 결과값을 반환해줘야함 (promise가 return됨)
		} catch (error) {
			console.log(error);
		}
	},

	// FETCH_ITEM({ commit }, item) {
	// 	return fetchItemInfo(item)
	// 		.then(({ data }) => {
	// 			commit('SET_ITEM', data);
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// },
	async FETCH_ITEM({ commit }, item) {
		// api단에서 try, catch 처리
		const response = await fetchItemInfo(item);
		commit('SET_ITEM', response.data);
		return response;
	},

	// #2
	// FETCH_LIST({ commit }, pageName) {
	// 	// #3
	// 	return fetchList(pageName)
	// 		.then(res => {
	// 			// #4
	// 			commit('SET_LIST', res.data);
	// 			return res;
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// },
	async FETCH_LIST({commit}, pageName) {
		const response = await fetchList(pageName);
		commit('SET_LIST', response.data);
		return response;
	}
};