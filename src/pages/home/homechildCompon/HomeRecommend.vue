<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.value" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
  .recommend{
    width: 100%;
    display: flex;
    font-size: .4rem;
    padding: .266667rem 0 .533333rem;
    border-bottom: .213333rem solid #EEEEEE;
  }
  .recommend .recommend-item{
    flex: 1;
    text-align: center;
  }
  .recommend-item img{
    width: 1.733333rem;
    height: 1.733333rem;
    margin-bottom: .266667rem;
  }
</style>