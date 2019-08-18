<!-- vetur플러그인: scf -->
<template>
    <ul class="news-list">
        <li v-for="item in this.$store.state.news" class="post">
            <!-- 포인트 영역 -->
            <div class="points">
                {{ item.points }}
            </div>
            <!-- 기타 정보 영역 -->
            <div>
                <p class="news-title">
                    <a v-bind:href="item.url">
                        {{ item.title }}
                    </a>
                </p>
                <small class="link-text">
                    {{ item.time_ago }} by
                    <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                </small>
            </div>
        </li>
    </ul>
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

<style scoped>
.news-list {
    margin: 0;
    padding: 0;
}
.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.news-title {
    margin: 0;
}
.link-text {
    color: #828282;
}
</style>
