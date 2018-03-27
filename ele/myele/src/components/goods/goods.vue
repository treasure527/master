<template>
 <div>
   <div class="goods-item">
      <div class="goods-nav-item">
        <router-link to="/potato">土豆</router-link>
      </div>
      <div class="goods-nav-item">
        <router-link to="/tomato">西红柿</router-link>
      </div>
   </div>
    <router-view></router-view>
 </div>
</template>

<script>
export default {
}
</script>

<style>
.mygoods {
    height: .4rem;
    color: blue;
    text-align: center;
    line-height: .4rem;
    font-size: .2rem;
}

.goods-item {
  display: flex;
}

.goods-item .goods-nav-item {
  flex: 1;
  height: .3rem;
  text-align: center;
  line-height: .3rem;
  font-size: .24rem;
  background:skyblue;
}

</style>