<template>
  <!-- 轮播图 -->
    <swiper class="home-swiper">
      <swiper-item v-for="item in banner" :key="item.value">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </swiper-item>
    </swiper>
</template>
<script>
// 导入轮播图
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
   components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner: {
      trpe: Array,
      default() {
        return []
      }
    }
  }
}
</script>