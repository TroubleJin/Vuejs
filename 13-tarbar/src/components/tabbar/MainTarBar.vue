<template>
  <TabBar>
    <TarBarItem link="/home" activeColor="deeppink">
      <img slot="item-icon" alt="" src="@/assets/img/tabbar/home.svg">
      <img slot="item-icon-active" alt="" src="@/assets/img/tabbar/home_active.svg">
      <div slot="item-text">首页</div>
    </TarBarItem>
    <TarBarItem link="/category">
      <img slot="item-icon" alt="" src="@/assets/img/tabbar/category.svg">
      <img slot="item-icon-active" alt="" src="@/assets/img/tabbar/category_active.svg">
      <div slot="item-text">分类</div>
    </TarBarItem>
    <TarBarItem link="/cart">
      <img slot="item-icon" alt="" src="../../assets/img/tabbar/shopcart.svg">
      <img slot="item-icon-active" alt="" src="../../assets/img/tabbar/shopcart_active.svg">
      <div slot="item-text">购物车</div>
    </TarBarItem>
    <TarBarItem link="/profile">
      <img slot="item-icon" alt="" src="../../assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" alt="" src="../../assets/img/tabbar/profile_active.svg">
      <div slot="item-text">我的</div>
    </TarBarItem>
  </TabBar>
</template>

<script>
import TabBar from "./TabBar";
import TarBarItem from "./TarBarItem";
export default {
  name: "MainTarBar",
  components: {
    TabBar,
    TarBarItem
  }
}
</script>

<style scoped>
</style>
