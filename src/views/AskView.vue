<template>
    <div>
        <div v-for="item in fetchedAsk">{{ item.title }}</div>
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
