<template>
  <div id="home">
    <!-- navbar -->
    <Navbar class="home-nav">
      <div slot="left-center">购物街</div>
    </Navbar>
    <!-- 轮播图 -->
    <HomeSwiper :banner="banner"></HomeSwiper>
    <!-- 推进信息 -->
    <HomeRecommend :recommend="recommend"></HomeRecommend>
  </div>
 
</template>
<script>
import Navbar from "components/common/navbar/Navbar.vue";
// 引入轮播图
import HomeSwiper from "./homechildCompon/HomeSwiper";
// 引入轮播图
import HomeRecommend from "./homechildCompon/HomeRecommend";
// 引入home.js中的网络请求
import { getHomeMultidata } from "network/home.js";

export default {
  components: {
    Navbar,
    HomeSwiper,
    HomeRecommend
  },
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res)
      this.banner =res.data.banner.list;
      this.recommend =res.data.recommend.list;
    })
  }
}
</script>
<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #FFFFFF;
  }
  .home-swiper{
    margin-top: 1.066667rem;
  }
</style>