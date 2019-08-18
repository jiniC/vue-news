<template>
    <div>
        <p>title: {{ itemInfo.title }}</p>
        <p>points: {{ itemInfo.points }}</p>
        <p>time: {{ itemInfo.time_ago }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        itemInfo() {
            return this.$store.state.item;
        }
    },
    created() {
        const itemId = this.$route.params.id;
        console.log(itemId);
        this.$store.dispatch('FETCH_ITEM', itemId);
    }
}
</script>

<style>

</style>
