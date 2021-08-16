<template>
  <div class="tar-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="isActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TarBarItem",
  props: {
    link: String,
    required: true,
    activeColor: {
      default() {
        return 'red';
      }
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.link) !== -1
    },
    isActiveColor(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.link)
      console.log('itemClick')
    }
  }
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
