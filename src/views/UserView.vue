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

        // 동적라우팅을 이용한 ItemView페이지 만들기 실습 과정
        // 1. ItemView 생성
        // 2. 라우터에 ItemView로 갈 수 있는 라우터 정보 등록
        // 3. 해당 페이지 컴포넌트로 이동했을 때 받아온 params(id)를 이용해서 페이지에 데이터 표시
    },
}
</script>

<style>

</style>
