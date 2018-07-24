<template>
  <div class="page">
    <OutSwiper :items="productDetail.productImgUrl"></OutSwiper>
  </div>
</template>
<script>
import {post} from '@/utils/utils'
import OutSwiper from '@/components/OutSwiper'
export default {
  components: {
    OutSwiper
  },
  data () {
    return {
      uid: '',
      productDetail: {}
    }
  },
  mounted () {
    this.uid = this.$root.$mp.query.uid
    this.getProductDetail()
  },
  methods: {
    async getProductDetail () {
      let data = await post('/iCanUser/product/findProductDetailsByUid', {data: {data: {uid: this.uid}}})
      this.productDetail = data.datas[0]
    }
  }
}
</script>
<style lang="scss">

</style>

