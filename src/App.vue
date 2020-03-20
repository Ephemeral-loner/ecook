<template>
  <div id="app">
    	<tabbar></tabbar>
    	<!--<mt-button type="default">default</mt-button>-->
    <router-view/>
  </div>
</template>

<script>
import Tabbar from './components/tabbar/tabbar';
//import Vue from 'vue'
//import { Button } from 'mint-ui';//引入button测试
//Vue.component(Button.name, Button);

export default {
  name: 'App',
  components:{Tabbar},
  beforeCreate(){
  	this.$router.push("/home")
  }
}
</script>

<style>
	@import 'assets/fonts/iconfont.css';
	*{padding: 0;margin: 0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
