<!-- vetur플러그인: scf -->
<template>
    <div>
        <div v-for="user in users">{{ user.title }}</div>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
    data() {
        return {
            users: []
        }
    },
    // lifecycle hook
    // created: 컴포넌트가 생성되자마자 실행되는 함수
    // 데이터요청은 보통 created, beforeMount 두 함수에서
    created() {
        var vm = this;
        fetchNewsList()
        .then(function(response) {
            // console.log(response);
            // this.users = response.data;  // calback 함수이기때문에 this가 바뀜
            vm.users = response.data;
        })
        .catch(function(error) {
          console.log(error);  
        })
    }
}
</script>

<style>

</style>
