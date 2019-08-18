<template>
    <div>
        <section>
            <!-- 사용자 상세 정보 -->
            <user-profile :info="fetchedItem">
                <router-link slot="username" :to="`/user/${fetchedItem.user}`">
                    {{ fetchedItem.user }}
                </router-link>
                <template slot="time">{{ `Posted ${fetchedItem.time_ago}` }}</template>
            </user-profile>
        </section>
        <section>
            <h2>{{ fetchedItem.title }}</h2>
        </section>
        <section>
            <!-- 질문 댓글 -->
            <!-- https://vuejs.org/v2/api/#v-html -->
            <!-- https://vuejs.org/v2/guide/syntax.html#Raw-HTML -->
            <div v-html="fetchedItem.content">
                <!-- {{fetchedItem.content}} -->
            </div>
        </section>
        <!-- <p>title: {{ fetchedItem.title }}</p>
        <div>points: {{ fetchedItem.content }}</div> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile'

export default {
    components: {
        UserProfile,
    },
    computed: {
        ...mapGetters(['fetchedItem']),
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', itemId);
    }
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
