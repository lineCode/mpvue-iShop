<template>
  <div>
    <div class="weui-flex" v-for="(item, index) in items" :key="index">
      <div class="weui-flex__item" v-for="(product, i) in item" :key="i">
        <div class="placeholder">
          <img :src="product.productDefaultImgUrl" alt="" class="logo_img" mode="scaleToFill">
          <div class="product_name">{{product.productName}}</div>
          <div class="product_price red">￥<span class="price-icon">{{product.stringTypePrice}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['items']
}
</script>
<style lang="scss" scoped>
.placeholder {
  margin: 5px;
  padding: 0 5px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  box-shadow: 5px 5px 2px #eeeeee;
  .logo_img{
    width: 100%;
    height: 120px;
  }
  .product_name {
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 22px;
    line-height: 22px;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
}
</style>

