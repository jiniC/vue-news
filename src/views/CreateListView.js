import ListView from './ListView.vue'
import bus from '../utils/bus'

// HOC: createListView (NewsView, JobsView, AskView)
export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션 & 로직들이 들어갈 자리
        name: `HOC component:${name}`,
        created() {
            bus.$emit('start:spinner');
            setTimeout(() => {
                this.$store.dispatch('FETCH_LIST', this.$route.name)
                    .then(() => {
                        console.log('fetched');
                        bus.$emit('end:spinner');
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }, 1000);
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}