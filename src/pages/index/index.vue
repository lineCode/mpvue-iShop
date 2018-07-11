<template>
    <div>
        <TopSwiper :tops="tops"></TopSwiper>
        <BrandList :list="brandList"></BrandList>
        <!-- <div class="section">
          <div class="section__title">按车身</div>
          <picker @change="pickChange" :value="index" :range="array">
            <div class="picker">
              当前选择：{{array[index]}}
            </div>
          </picker>
        </div> -->
        <Card :items="popularList">
          <h5>编辑之选</h5>
        </Card>
        <Card :items="hotList">
          <h5>热门车辆</h5>
        </Card>
        <Card :items="soldList">
          <h5>最近成交</h5>
        </Card>
    </div>
</template>
<script>
import {post} from '@/utils/utils'
import TopSwiper from '@/components/TopSwiper'
import BrandList from '@/components/BrandList'
import Card from '@/components/Card'
export default {
  components: {
    TopSwiper,
    BrandList,
    Card
  },
  data () {
    return {
      tops: [],
      brandList: [],
      array: ['轿车', 'SUV', 'MVP', '跑车'],
      index: 0,
      soldList: [],
      popularList: []
    }
  },
  mounted () {
    this.getSwiptList()
    this.getBrandList()
    this.getPopularVehicle()
    this.getPopularCar()
    this.getSoldVehicle()
  },
  methods: {
    async getSwiptList () {
      let swiptlist = await post('/iCaniShop/shop/getRecommended')
      this.tops = swiptlist
    },
    async getPopularCar () {
      let hotList = await post('/iCaniShop/shop/getPopularVehicle', {data: {state: 5}})
      this.hotList = hotList.popularVehicle[0].vehicleStockSingleViewList
    },
    async getBrandList () {
      let brandList = await post('/iCaniShop/shop/getVehicleTopBrand')
      this.brandList = brandList.topBrandPage
    },
    async getPopularVehicle () {
      let popularList = await post('/iCaniShop/shop/getPopularVehicle')
      this.popularList = popularList.popularVehicle
    },
    async getSoldVehicle () {
      let soldList = await post('/iCaniShop/shop/displaySoldVehicle')
      soldList = soldList.popularVehicle[0].vehicleStockSingleViewList
      for (let i of soldList) {
        i.isSold = true
      }
      this.soldList = soldList
    },
    pickChange (e) {
      this.index = e.mp.detail.value
    }
  }
}
</script>
<style lang="scss">

</style>

