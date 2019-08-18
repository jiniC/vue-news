<template>
    <!-- 질문 상세 정보 -->
    <div class="user-container">
        <div>
            <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
            <div>{{ userInfo.id }}</div>
            <!-- <router-link :to="`/user/${userInfo.id}`">
                {{ userInfo.id }}
            </router-link> -->
            <div class="time">
                {{ userInfo.created }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // 첫 번째 방법: UserProfile에서 state로 데이터에 접근
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}
.fa-user {
    font-size: 2.5rem;
}
.user-description {
    padding-left: 8px;
}
.time {
    font-size: 0.7rem;
}
</style>
