<template>
  <HeaderTop />
  <ListItems />
</template>

<script>
import HeaderTop from './components/HeaderTop.vue';
import ListItems from './components/ListItems.vue';


export default {
  name: 'App',
  components: {
    HeaderTop,
    ListItems
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
