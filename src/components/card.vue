<template>
  <div class="edited">
    <!-- <h5>编辑之选</h5> -->
    <slot></slot>
    <hr />
    <div class="car_list">
      <div class="car" v-for="(vehicle,index) in items" :key="index" @click="goDetail(vehicle)">
        <div class="img_all">
          <img src="/static/images/default_bg.jpg" alt="" class="img_bg">
          <img :src="vehicle.seriesDefaultImageURL" alt="" class="img" id="img" mode="aspectFit">
          <div v-if="vehicle.isSold">
            <div v-if="vehicle.flag !== '3'">
              <div class="hot"></div>
              <span class="hot-text">已预定</span>
            </div>
            <div  v-if="vehicle.flag === '3'">
              <div class="hot solded"></div>
              <span class="hot-text">已售</span> 
            </div>
          </div>
        </div>
        <div class="title" v-if="vehicle.vehicleStockSingleViewList">
          <div class="title">{{vehicle.title}}</div>
        </div>
        <div class="args" v-else>
          <div class="name">{{vehicle.brandName || ''}}|{{vehicle.seriesName || ''}}</div>
          <div class="info">{{vehicle.modelName || ''}}</div>
          <div class="param">
            <div class="price red">￥<span class="price-icon">{{vehicle.price}}</span>万</div>
            <div class="color">
              <div class="out">
                <img :src="vehicle.bodyColorUrl" alt="" class="img_color" mode="aspectFit">
                外: {{vehicle.bodyColorName}}
              </div>
              <div class="in">
                <img :src="vehicle.interiorColorUrl" alt="" class="img_color" mode="aspectFit">
                内: {{vehicle.interiorColorName}}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div> 
  </div>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    goDetail (item) {
      wx.navigateTo({
        url: '/pages/detail/main?uid=' + item.uid
      })
    }
  }
}
</script>

<style lang="scss">
.edited{
  padding: 5px 5px;
  box-sizing: border-box;
  h5{
    font-size: 16px;
    padding: 5px 0;
    box-sizing: border-box;
  }
  hr {
    border: 1px solid #EA5149;
  }
  .car_list{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .car {
      width: 48%;
      max-width: 48%;
      min-width: 48%;
      border: 1px solid #eeeeee;
      margin: 5px 0;
      border-radius: 5px;
      box-shadow: 5px 5px 2px #888888;
      box-sizing: border-box;
      .img_all {
        position: relative;
        width: 100%;
        height: 200rpx;
        .img_bg{
          width: 100%;
          height: 200rpx;
          position: absolute;
          z-index: 0;
        }
        .img{
          width:100%;
          height: 200rpx;
          position: absolute;
          z-index: 10;
        }
        .hot{
          width: 0;
          height: 0;
          border-top: 50px solid #417505; 
          border-right: 50px solid transparent;
          position: absolute;
          top: 0;
          left: 0;
          
        }
        .hot-text{
          display: block;
          width: 30px;
          height: 30px;
          text-align: center;
          font-size: 10px;
          position: absolute;
          top: 6px;
          left: 6px;
          transform: rotate(-45deg);
          color: #fff;
        }
        .solded{
          border-top: 50px solid #4d1212cc; 
        }
      }
      .title{
        color: #EA5149;
        box-sizing: border-box;
        padding: 10px;
      }
      .args{
        .name{
          font-size: 16px;
          min-height: 20px;
          padding: 5px 5rpx;
          box-sizing: border-box;
        }
        .info {
          font-size: 12px;
          color: #999999;
          min-height: 40px;
          box-sizing: border-box;
        }
        .param{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 5rpx 0 5px 0;
          box-sizing: border-box;
          .price{
            font-size: 16px;
            width: 50%;
          }
          .color{
            width: 50%;
            display: flex;
            flex-direction: column;
            .out,.in {
              display: flex;
              font-size: 12px;
              align-items: center;
            }
            .img_color{
              width: 20px;
              height: 10px;
            }
          }
        }
      }
    }
  }
}

</style>
