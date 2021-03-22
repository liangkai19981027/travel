<template>
  <div id="app">
<home></home>
<main-tabber></main-tabber>
  </div>
</template>

<script>
import Home from './views/home/Home'
import MainTabber from './components/content/mainTabbar/MainTabber'
export default {
  name: 'App',
  components: {
    Home,
    MainTabber
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
