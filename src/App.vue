<template>
  <div id="app">
    <!-- url이 news면 <NewsView></NewsView>, ask면 ~, jobs면 ~ -->
    <!-- 템플릿명 작성시에는 카멜케이스말고 케밥케이스로 작성하기 권장 -->
    <tool-bar></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/Toolbar';

export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #35495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
/* https://router.vuejs.org/guide/advanced/transitions.html#per-route-transition */
/* https://vuejs.org/v2/guide/transitions.html */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
