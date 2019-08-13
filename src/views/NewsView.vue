<!-- vetur플러그인: scf -->
<template>
    <div>
        <div v-for="user in users">{{ user.title }}</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        var vm = this;
        axios.get('https://api.hnpwa.com/v0/news/1.json')
        .then(function(response) {
            console.log(response);
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
