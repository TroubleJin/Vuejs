<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about" replace>About</router-link> |
<!--      <router-link :to="{path:'/user/',query:{userId:userId}}">User</router-link>-->
      <router-link :to="'/user/'+userId">User</router-link>
    </div>
    <button @click="userClick">用户</button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      userId: 1,
      name: 'Tboy'
    }
  },
  methods: {
    // userClick(){
    //   this.$router.push('/user/'+ this.userId)
    // },
    userClick(){
      this.$router.push({
        path: '/user',
        query: {
          userId: this.userId
        }
      })
    },
  }
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
