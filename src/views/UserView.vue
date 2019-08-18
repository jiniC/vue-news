<template>
    <div>
        <user-profile v-bind:info="userInfo">
            <div slot="username">{{ userInfo.id }}</div>
            <span slot="time">{{ `Joined ${userInfo.created}` }}, </span>
            <span slot="karma">{{ userInfo.karma }}</span>
        </user-profile>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile';

export default {
    components: {
        UserProfile,
    },
    // 두 번째 방법: UserView에서 props로 데이터 내려줌
    // 첫 번째 방법이 vuex에서 쓰이는 데이터 흐름(데이터가 쓰이는 vue파일에서 store에 접근해 데이터를 받아옴)이긴하지만 사용하고자하는 목적에 따라 두 방법 다 알아두기
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    },
}
</script>

<style>

</style>
