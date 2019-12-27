<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path);
    },
    activeStyle(){
      return !this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
.tabbar .tabbar-item{
  height: 1.173333rem;
  font-size: .186667rem;
  flex: 1;
  text-align: center;
}
.tabbar-item img{
  width: 0.5rem;
  height: 0.5rem;
  vertical-align: middle;
}
.active{
  color: red;
}
</style>