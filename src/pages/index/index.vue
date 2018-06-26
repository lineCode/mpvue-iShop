<template>
    <div>
        <TopSwiper :tops="tops"></TopSwiper>
        <BrandList :list="brandList"></BrandList>
        <div class="section">
          <div class="section__title">按车身</div>
          <picker @change="pickChange" :value="index" :range="array">
            <div class="picker">
              当前选择：{{array[index]}}
            </div>
          </picker>
        </div>
    </div>
</template>
<script>
import {post} from '@/utils/utils'
import TopSwiper from '@/components/TopSwiper'
import BrandList from '@/components/BrandList'
export default {
  components: {
    TopSwiper,
    BrandList
  },
  data () {
    return {
      tops: [],
      brandList: [],
      array: ['轿车', 'SUV', 'MVP', '跑车'],
      index: 0
    }
  },
  mounted () {
    this.getSwiptList()
    this.getBrandList()
  },
  methods: {
    async getSwiptList () {
      let swiptlist = await post('/iCaniShop/shop/getRecommended')
      this.tops = swiptlist
    },
    async getBrandList () {
      let brandList = await post('/iCaniShop/shop/getVehicleTopBrand')
      this.brandList = brandList.topBrandPage
    },
    pickChange (e) {
      this.index = e.mp.detail.value
    }
  }
}
</script>
<style>

</style>

