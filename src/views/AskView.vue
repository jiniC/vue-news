<template>
    <div>
         <p v-for="item in fetchedAsk">
             <!-- 라우터에 적어둔 경로(path: '/item/:id')대로 똑같이해주어야함 item?id=20724592 X -->
             <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
             </router-link>
            <small>  {{ item.time_ago }} by {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
    computed: {
        // 3번째방법
        ...mapGetters([
            'fetchedAsk',
        ]),
        // ...mapGetters({
        //     fetchedAsk: 'fetchedAsk'
        // }),

        // 2번째방법
        // ...mapState({
        //     fetchedAsk: state => state.ask
        // }),

        // 1번째방법
        // fetchedAsk() {
        //     return this.$store.state;
        // }
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>
