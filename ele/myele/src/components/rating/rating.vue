<template>
  <div class="myrating">{{ $route.params.username}}</div>
</template>

<script>
export default {
    name:'hello'
}
</script>

<style>
.myrating {
    height: .4rem;
    color: blue;
    text-align: center;
    line-height: .4rem;
    font-size: .2rem;
}
</style>