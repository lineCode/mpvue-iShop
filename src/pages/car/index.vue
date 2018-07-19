<template>
    <div>
        <h4 class="title fixed">热门品牌</h4>
        <BrandList :list="brandList" :fixed="true"></BrandList>
        <div class="brand_page">
          <div class="brand" :key="index" v-for="(brand, index) in vehicleBrand">
            <h4 class="title bg_hui">{{brand.key}}</h4>
            <div class="content" :key="i" v-for="(item, i) in brand.value">
              <img :src="item.brandLogoImageURL" class="logo_image" v-if="item.brandLogoImageURL">
              <span class="name">{{item.brandName}}</span>
              <span class="num">({{item.count}})</span>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import BrandList from '@/components/BrandList'
import {post} from '@/utils/utils'
export default {
  data () {
    return {
      brandList: [],
      vehicleBrand: []
    }
  },
  components: {
    BrandList
  },
  mounted () {
    this.getBrandList()
    this.getVehicleBrandList()
  },
  methods: {
    async getBrandList () {
      let brandList = await post('/iCaniShop/shop/getVehicleTopBrand')
      this.brandList = brandList.topBrandPage
    },
    async getVehicleBrandList () {
      let data = await post('/iCaniShop/shop/getVehicleBrandCodeOnSales')
      this.vehicleBrand = data.brandPage
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  width: 750rpx;
}
.fixed {
  position: fixed;
  top: 0;
  background: #ffffff;
}
.brand_page{
  margin-top: 114.8px;
  box-sizing: border-box;
  .brand{
    .content{
      border-bottom: 1px solid #eeeeee;
      display: flex;
      align-items: center;
      font-size: 14px;
      padding: 10px;
      box-sizing: border-box;
      .logo_image {
        width: 30px;
        height: 30px;
        margin: 0 10px;
        box-sizing: border-box;
      }
      .name {
        margin: 10px;
        box-sizing: border-box;
      }
      .num {
        color: #4A90E2;
      }
    }
  }
}
</style>

