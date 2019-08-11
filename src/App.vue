<template>
  <div id="app">
    <!-- url이 news면 <NewsView></NewsView>, ask면 ~, jobs면 ~ -->
    <!-- 템플릿명 작성시에는 카멜케이스말고 케밥케이스로 작성하기 권장 -->
    <tool-bar></tool-bar> 
    <router-view></router-view>
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
</style>
