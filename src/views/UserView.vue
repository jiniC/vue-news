<template>
    <!-- 태그안에는 정돈된 형태로 노출 -->
    <div>
        <p>name: {{ userInfo.id }}</p>
        <p>karma: {{ userInfo.karma }}</p>
        <p>created: {{ userInfo.created_time }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
    created() {
        const userName = this.$route.params.id;
        // dispatch 두번째인자에선 하나만 넘길 수 있음
        this.$store.dispatch('FETCH_USER', userName);
    },
}
</script>

<style>

</style>
