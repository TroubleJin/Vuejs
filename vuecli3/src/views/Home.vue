<template>
  <div class="home">
    <h2>Home页</h2>
    <router-link to="/home/news">新闻</router-link> |
    <router-link to="/home/messages">消息</router-link> |
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
