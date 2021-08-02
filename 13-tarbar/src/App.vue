<template>
  <div id="app">
    <TabBar>
      <TarBarItem>
        <img slot="item-icon" alt="" src="./assets/img/tabbar/home.svg">
        <div slot="item-text">首页</div>
      </TarBarItem>
      <TarBarItem>
        <img slot="item-icon" alt="" src="./assets/img/tabbar/category.svg">
        <div slot="item-text">分类</div>
      </TarBarItem>
      <TarBarItem>
        <img slot="item-icon" alt="" src="./assets/img/tabbar/shopcart.svg">
        <div slot="item-text">购物车</div>
      </TarBarItem>
      <TarBarItem>
        <img slot="item-icon" alt="" src="./assets/img/tabbar/profile.svg">
        <div slot="item-text">我的</div>
      </TarBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TarBarItem from "./components/tabbar/TarBarItem";
export default {
  name: 'App',
  components: {
    TabBar,
    TarBarItem
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
