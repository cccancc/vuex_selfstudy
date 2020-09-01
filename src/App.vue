<template>
  <div id='app'>
    
    <addition></addition>
     <substraction></substraction>
     <p>-----------------------</p>
     <core></core>
  </div>
</template>

<script>
import Addition from './components/Addition.vue'
import Substraction from './components/Substraction.vue'
import Core from './components/Core.vue'

export default {

  data() {
     return {};
  },
  components: {
     "addition": Addition,
     "substraction": Substraction,
     "core": Core,

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
