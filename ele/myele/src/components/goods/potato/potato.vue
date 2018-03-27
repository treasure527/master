<template>
 <div>
    <div class="mypotato">我是土豆</div>
    <router-view></router-view>
 </div>
</template>

<script>
export default {
}
</script>

<style>
.mypotato {
    height: .4rem;
    color: blue;
    text-align: center;
    line-height: .4rem;
    font-size: .2rem;
}
</style>