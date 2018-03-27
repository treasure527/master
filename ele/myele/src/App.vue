<template>
  <div id="app">
   <myheader class="myheader"></myheader>
   <div class="tab">
     <div class="tab-item">
       <router-link to="/goods">商品</router-link>
     </div>
     <div class="tab-item">
       <router-link :to="{name:'I-am-beauty',param:{username:'improve'}}">评价</router-link>
     </div>
     <div class="tab-item">
       <router-link to="/seller">商家</router-link>
     </div>
   </div>
   <router-view></router-view>
  </div>
</template>

<script>
import myheader from './components/header/myheader'
export default {
  components:  { myheader },
}
</script>

<style>
.myheader {
  height: .4rem;
  background: pink;
  font-size: .24rem;
  text-align: center;
  line-height: .4rem;
}

.tab {
  display: flex

}

.tab .tab-item {
  flex: 1;
  color:red;
  height: .4rem;
  text-align: center;
  line-height: .4rem;
  font-size: .24rem;
  background: #ccc;
}
</style>
