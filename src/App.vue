<template>
  <div id='app'>
    
    <addition></addition>
     <substraction></substraction>
  </div>
</template>

<script>
import Addition from './components/Addition.vue'
import Substraction from './components/Substraction.vue'
export default {

  data() {
     return {};
  },
  components: {
     "addition": Addition,
     "substraction": Substraction,
  }
};
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
