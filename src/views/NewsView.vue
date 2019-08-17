<!-- vetur플러그인: scf -->
<template>
    <div>
        <p v-for="item in this.$store.state.news">
            <a v-bind:href="item.url">{{ item.title }}</a>
            <small>  {{ item.time_ago }} by {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
export default {
    // lifecycle hook
    // created: 컴포넌트가 생성되자마자 실행되는 함수
    // 데이터요청은 보통 created, beforeMount 두 함수에서
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>
