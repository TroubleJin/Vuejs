<template>
  <div>
    <h2>用户界面</h2>
    {{ userId }}
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId(){
      // console.log(this.$route)
      return this.$route.params.userId
      // return this.$route.query.userId
    }
  },

  // data(){
  //   return {
  //     userId: this.$route.params.userId
  //   }
  // }
}
</script>

<style scoped>

</style>