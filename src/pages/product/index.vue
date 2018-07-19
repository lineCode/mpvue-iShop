<template>
  <div class="page">
    <div class="page__bd">
      <div class="weui-tab">
        <div class="weui-navbar">
          <block v-for="(item,index) in tabs" :key="index">
            <div :id="index" :class="{'weui-bar__item_on':activeIndex == index}" class="weui-navbar__item" @click="tabClick">
              <div class="weui-navbar__title">{{item}}</div>
            </div>
          </block>
          <div class="weui-navbar__slider" :class="navbarSliderClass"></div>
        </div>
        <div class="weui-tab__panel">
          <div class="weui-tab__content" :hidden="activeIndex != 0">
            <Product :items="allList"></Product>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 1">
            <Product :items="modelList"></Product>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 2">
            <Product :items="accessoryList"></Product>            
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 3">
            <Product :items="otherList"></Product>                        
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {post, arrayChange} from '@/utils/utils'
import Product from '@/components/Product'
export default {
  data () {
    return {
      tabs: ['全部', '配件', '模型', '其他'],
      activeIndex: 0,
      fontSize: 30,
      allList: []
    }
  },
  components: {
    Product
  },
  computed: {
    navbarSliderClass () {
      this.activeIndex = Number(this.activeIndex)
      if (this.activeIndex === 0) {
        return 'weui-navbar__slider_0'
      }
      if (this.activeIndex === 1) {
        return 'weui-navbar__slider_1'
      }
      if (this.activeIndex === 2) {
        return 'weui-navbar__slider_2'
      }
      if (this.activeIndex === 3) {
        return 'weui-navbar__slider_3'
      }
    }
  },
  mounted () {
    this.getProductList(true)
  },
  methods: {
    tabClick (e) {
      this.activeIndex = e.currentTarget.id
    },
    async getProductList (init) {
      if (init) {
        let allList = await post('/iCanUser/product/find', {data: {data: {locale: 'zh_CN', category: ''}}})
        this.allList = arrayChange(allList.datas)
        let modelList = await post('/iCanUser/product/find', {data: {data: {locale: 'zh_CN', category: 'model'}}})
        this.modelList = arrayChange(modelList.datas)
        let accessoryList = await post('/iCanUser/product/find', {data: {data: {locale: 'zh_CN', category: 'accessory'}}})
        this.accessoryList = arrayChange(accessoryList.datas)
        let otherList = await post('/iCanUser/product/find', {data: {data: {locale: 'zh_CN', category: 'other'}}})
        this.otherList = arrayChange(otherList.datas)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
page,
.page,
.page__bd {
  height: 100%;
}
.page__bd {
  padding-bottom: 0;
}
.weui-navbar{
  position: fixed;
  background: #ffffff;
}
.weui-tab__content {
  text-align: center;
}
.weui-navbar__slider {
  width: 4em;
}
.weui-navbar__slider_0 {
  left: 10rpx;
  transform: translateX(10rpx);
}
.weui-navbar__slider_1 {
  left: 10rpx;
  transform: translateX(200rpx);
}
.weui-navbar__slider_2 {
  left: 10rpx;
  transform: translateX(390rpx);
}
.weui-navbar__slider_3 {
  left: 10rpx;
  transform: translateX(575rpx);
}

</style>
