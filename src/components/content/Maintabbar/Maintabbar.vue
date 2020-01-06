<template>
  <Tabbar>
      <Tabbaritem path="/home" activeColor="#35ff89">
        <img slot="item-icon" src="~assets/images/tabbar/home-o.png" />
        <img slot="item-icon-active" src="~assets/images/tabbar/home.png" />
        <div slot="item-text">首页</div>
      </Tabbaritem>
      <Tabbaritem path="/category">
        <img slot="item-icon" src="~assets/images/tabbar/category-o.png" />
        <img slot="item-icon-active" src="~assets/images/tabbar/category.png" />
        <div slot="item-text">分类</div>
      </Tabbaritem>
      <Tabbaritem path="/cart"  activeColor="orange">
        <img slot="item-icon" src="~assets/images/tabbar/cart-o.png" />
        <img slot="item-icon-active" src="~assets/images/tabbar/cart.png" />
        <div slot="item-text">购物车</div>
      </Tabbaritem>
      <Tabbaritem path="/profile">
        <img slot="item-icon" src="~assets/images/tabbar/my-o.png" />
        <img slot="item-icon-active" src="~assets/images/tabbar/my.png" />
        <div slot="item-text">我的</div>
      </Tabbaritem>
    </Tabbar>
</template>
<script>
import Tabbar from "@/components/common/tabbar/Tabbar";
import Tabbaritem from "@/components/common/tabbar-item/Tabbar-item";
export default {
  name: 'Maintabbar',
  components: {
    Tabbar,
    Tabbaritem
  }
}
</script>