<template>
  <div id="tar-bar">
    <div class="tar-bar-item">首页</div>
    <div class="tar-bar-item">分类</div>
    <div class="tar-bar-item">购物车</div>
    <div class="tar-bar-item">我的</div>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tar-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -3px -1px rgba(100, 100, 100, .2);
}

.tar-bar-item {
  flex: 1;
  text-align: center;
  line-height: 49px;
  height: 49px;
}
</style>
