<template>
    <div class="header">
        <router-link to="/news">News</router-link> | 
        <router-link to="/ask">Ask</router-link> | 
        <router-link to="/jobs">Jobs</router-link>
    </div>
</template>

<!-- scoped: 상속되지 않는 해당 컴포넌트에만 정의되는 스타일 지정 가능 (vue loader에서 제공하는 기능) -->
<style scoped>
.header {
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}
.header .router-link-exact-active {
    color: #35495e
}
.header a {
    color: white;
}
</style>
