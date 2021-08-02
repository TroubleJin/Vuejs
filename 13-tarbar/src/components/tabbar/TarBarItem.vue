<template>
  <div class="tar-bar-item">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TarBarItem"
}
</script>

<style scoped>
.tar-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tar-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
