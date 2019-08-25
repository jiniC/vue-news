import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
	baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API함수들을 정리
function fetchNewsList() {
	return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}
async function fetchList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`);
    } catch (error) {
        console.log(error);
    }
}
function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}
async function fetchItemInfo(itemid) {
    try {
        // return await axios.get(`${config.baseUrl}item/${itemid}.json`);
        const response = await axios.get(`${config.baseUrl}item/${itemid}.json`);
        return response;;
    } catch (error) {
        console.log(error);
    }
}
export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}