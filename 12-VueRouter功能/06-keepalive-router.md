#   1.keepalive-router
keep-alive
<keep-alive>包裹动态组件的时候，会缓存不活动的组件实例，而不是摧毁他们。其是一个抽象的组件，自身不会渲染一个DOM元素，也不会出现在父组件链中。
说白了被<keep-alive>包裹的组件其会被缓存
废话不多说直接上例子.

```angular2html
<keep-alive>
  <router-view/>
</keep-alive>

  activated() {
    console.log('activated')
    this.$router.push(this.path)
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(this.$route.path);
    this.path = this.$route.path
    next()
  }
```