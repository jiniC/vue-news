<template>
    <div>
        <user-profile v-bind:info="userInfo"></user-profile>
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile';

export default {
    components: {
        UserProfile,
    },
    // 두 번째 방법: UserView에서 props로 데이터 내려줌
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
