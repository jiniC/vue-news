<template>
    <!-- 질문 상세 정보 -->
    <div class="user-container">
        <div>
            <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
            <!-- <div>username: {{ info.id }}</div> -->
            <!-- 페이지마다 접근하는 속성이 달라서 문제가 생김(ItemView는 info.user, UserView는 info.id 였음) => slot 이용해서 해결 -->
            <slot name="username">
                <!-- 상위 컴포넌트(UserView, ItemView)에서 정의할 영역 -->
            </slot>
            <div class="time">
                <!-- time: {{ info.created }} -->
                <slot name="time">
                    <!-- 상위 컴포넌트(UserView, ItemView)에서 정의할 영역 -->
                </slot>
                <slot name="karma">
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: Object
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
