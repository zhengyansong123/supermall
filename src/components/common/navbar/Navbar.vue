<template>
  <div class="navbar">
    <div class="navbar-left">
      <slot name="left-slot"></slot>
    </div>
    <div class="navbar-center">
      <slot name="left-center"></slot>
    </div>
    <div class="navbar-right">
      <slot name="left-right"></slot>
    </div>
  </div>
</template>
<style scoped>
  .navbar{
    width: 100vw;
    height: 1.066667rem;
    line-height: 1.066667rem;
    box-shadow: 0 1px 1px rgba(100,100,100,0.1);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    text-align: center;
    display: flex;
  }
  .navbar-left,.navbar-right{
    width: .8rem;
   
  }
  .navbar-center{
    flex: 1;
  }
</style>