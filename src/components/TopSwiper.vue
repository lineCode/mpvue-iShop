<template>
	<div class="swiper">
		<swiper
      @change="currentChange"
      indicator-dots= 'true'
		  indicator-color="#EA5149"
		  :autoplay='true'
		  :interval="6000"
		  :duration='1000'
		  :circular="true"
		>
			<div :key="imgindex" v-for="(top,imgindex) in imgs" class="swiptlist">
				<swiper-item>
              <div class="img_all">
                <img src="/static/images/default_bg.jpg" alt="" class="img_bg">
                <img :src="top.seriesDefaultImageURL" 
                class="slide-image" 
                mode="aspectFit" 
                @click="goDetail(top.uid)"
                >
              <div class="hot"></div><span class="hot-text">热卖</span>
              </div>
				</swiper-item>
			</div>
		</swiper>
    <div class="param">
      <div class="left">{{params}}</div>
      <div class="right red">￥<span class="price-icon">{{price}}</span>万</div>
    </div>
  </div>
  
</template>
<script>
export default {
  props: ['tops'],
  data () {
    return {
      current: 0
    }
  },
  computed: {
    imgs () {
      for (let i of this.tops) {
        if (!i.seriesDefaultImageURL) {
          i.seriesDefaultImageURL = '../../static/images/default.jpg'
        }
      }
      return this.tops
    },
    params () {
      if (this.tops.length) {
        return this.tops[this.current].brandName + ' ' + this.tops[this.current].seriesName + ' ' + this.tops[this.current].modelName
      }
    },
    price () {
      if (this.tops.length) {
        return this.tops[this.current].price
      }
    }
  },
  methods: {
    bookDetail (id) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + id
      })
    },
    currentChange (e) {
      this.current = e.mp.detail.current
      this.params = this.tops[this.current].brandName + ' ' + this.tops[this.current].seriesName + ' ' + this.tops[this.current].modelName
      this.price = this.tops[this.current].price
    },
    goDetail (uid) {
      wx.navigateTo({
        url: '/pages/detail/main?uid=' + uid
      })
    }
  }
}
</script>
<style lang="scss">
.swiper{
	margin: 5px 0;
  .img_all {
    position: relative;
    height: 150px;
  }
  .img_bg{
    position: absolute;
    width: 750rpx;
    height: 150px;
  }
	.slide-image{
    width: 750rpx;
    height: 150px;
    position: absolute;
	}
  .hot{
    width: 0;
    height: 0;
    border-top: 70px solid red; 
    border-right: 70px solid transparent;
    position: absolute;
    top: 0;
    left: 0;
    
  }
  .hot-text{
      display: block;
      width: 50px;
      height: 50px;
      text-align: center;
      font-size: 18px;
      position: absolute;
      top: 6px;
      left: 11px;
      transform: rotate(-45deg);
      color: #fff;
    }
  .param {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 5px;
    font-size: 14px;
    .right{
      align-self: flex-start;
    }
  }
}
</style>
