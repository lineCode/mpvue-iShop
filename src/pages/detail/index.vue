<template>
    <div>
        <div class="img_all">
          <img src="/static/images/default_bg.jpg" alt="" class="img_bg">
          <img :src="detail.seriesDefaultImageURL" alt="" class="img_logo" mode="aspectFit">
        </div>
        <div class="car_info">
          <div class="name">{{detail.brandName}}|{{detail.seriesName}}</div>
          <div class="model">{{detail.modelName}}</div>
          <div class="time">发布时间: {{createAt}} <span class="person">{{detail.supplierIdentityNo}}</span></div>
          <div class="color">
            <div class="out">
              <img :src="detail.bodyColorUrl" alt="" class="img_color">
              外: {{detail.bodyColorName}}
            </div>
            <div class="in">
              <img :src="detail.interiorColorUrl" alt="" class="img_color">
              内: {{detail.interiorColorName}}
            </div>
            <div class="price red">￥<span class="price-icon">{{detail.price}}</span>万</div>
          </div>
        </div>
        <table>
          <tr>
                <td>
                    <div class="td_container">
                        <figure class="table_icon">
                            <img src="/static/images/emission.png" />
                        </figure>
                        <div class="table_item">
                            <div class="unit">排量</div>
                            <div class="data">{{detail.engineLayout}}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="td_container">
                        <figure class="table_icon">
                            <img src="/static/images/energy.png" />
                        </figure>
                        <div class="table_item">
                            <div class="unit">能源</div>
                            <div class="data">{{detail.fuseSource}}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="td_container">
                        <figure class="table_icon">
                            <img src="/static/images/size.png" />
                        </figure>
                        <div class="table_item">
                            <div class="unit">长宽高(mm)</div>
                            <div class="data">{{detail.lengthWidthHeight}}</div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="td_container">
                        <figure class="table_icon">
                            <img src="/static/images/engine.png" />
                        </figure>
                        <div class="table_item">
                            <div class="unit">发动机</div>
                            <div class="data">{{detail.horsePower}}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="td_container">
                        <figure class="table_icon">
                            <img src="/static/images/tranmittion.png" />
                        </figure>
                        <div class="table_item">
                            <div class="unit">变速箱</div>
                            <div class="data">{{detail.gearBox}}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="td_container">
                        <figure class="table_icon">
                            <img src="/static/images/door.png" />
                        </figure>
                        <div class="table_item">
                            <div class="unit">车门</div>
                            <div class="data">{{detail.noOfDoors}}</div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="td_container">
                        <figure class="table_icon">
                            <img src="/static/images/seat.png" />
                        </figure>
                        <div class="table_item">
                            <div class="unit">座位</div>
                            <div class="data">{{detail.noOfSeat}}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="td_container">
                        <figure class="table_icon">
                            <img src="/static/images/shape.png" />
                        </figure>
                        <div class="table_item">
                            <div class="unit">车型</div>
                            <div class="data">{{detail.category}}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="td_container">
                        <figure class="table_icon">
                            <img src="/static/images/drive.png" />
                        </figure>
                        <div class="table_item">
                            <div class="unit">驱动</div>
                            <div class="data">{{detail.engineType}}</div>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="td_container">
                        <figure class="table_icon">
                            <img src="/static/images/fuel.png" />
                        </figure>
                        <div class="table_item">
                            <div class="unit">油箱容积</div>
                            <div class="data">{{detail.tankCapacity}}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="td_container">
                        <figure class="table_icon">
                            <img src="/static/images/tyre.png" />
                        </figure>
                        <div class="table_item">
                            <div class="unit">轮胎尺寸</div>
                            <div class="data">{{detail.hubSize}}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="td_container">
                        <figure class="table_icon">
                            <img src="/static/images/oil.png" />
                        </figure>
                        <div class="table_item">
                            <div class="unit">供油方式</div>
                            <div class="data">{{detail.oilSupply}}</div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
        <OutSwiper :items="detail.outsideSmallImgUrl">
          <h4 class="center title">外观</h4>
        </OutSwiper>
        <OutSwiper :items="detail.insideSmallImgUrl">
          <h4 class="center title">内饰</h4>
        </OutSwiper>
        <Media :url="detail.seriesShowVideoURL">
          <h4 class="center title">媒体</h4>
        </Media>
        <div class="description">
          <h4 class="center title">其他配置</h4>
          <text class="long_text">{{detail.vehicleFeatures}}
          </text>
        </div>
    </div>
</template>
<script>
import {post, formatDate} from '@/utils/utils'
import OutSwiper from '@/components/OutSwiper'
import Media from '@/components/Media'
export default {
  components: {
    OutSwiper,
    Media
  },
  data () {
    return {
      uid: '',
      detail: {}
    }
  },
  mounted () {
    this.uid = this.$root.$mp.query.uid
    this.getDetail()
  },
  computed: {
    createAt () {
      return formatDate(this.detail.createAt)
    }
  },
  methods: {
    async getDetail () {
      let detail = await post('/iCaniShop/shop/getVehicleDetailsByUid', {data: {vehicleId: this.uid, flag: 0}})
      this.detail = detail[0]
      console.log(this.detail)
    }
  }
}
</script>
<style lang="scss">
.img_all {
  position: relative;
  height: 300rpx;
  padding-top: 5rpx;
  box-sizing: border-box;
  .img_bg,.img_logo{
    position: absolute;
    width: 750rpx;
    height: 300rpx;
  }
}
.car_info{
  padding: 5px;
  box-sizing: border-box;
  div{
    margin: 5px;
  }
  .model,.time{
    color: #999999;
    font-size: 14px;
  }
  .time{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .color {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .img_color{
      width: 15px;
      height: 15px;
    }
  }
}
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 750rpx;
    // margin-bottom: 20px;
    table-layout: fixed;
}
td {
    border: 1rpx solid #dddddd;
    // min-width: 125px;
    padding: 5px;
    box-sizing: border-box;
    text-align: center;
}
tr:nth-child(even) {
    background-color: #f5f5f5;
}
tr{
  display: inline-flex;
  width: 100%;
  padding: 0 5rpx;
  box-sizing: border-box;
}
td{
  width: 33%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
}
.td_container{
    display: flex;
    flex-flow: row nowrap;
    word-break: break-word;
    justify-content: space-between;
}
.table_icon {
    width: 30px;
    height: auto;
    /*display: inline-block;*/
    margin:auto 0;
    img{
      width: 100%;
      height: 30px;
    }
}

.table_item {
    display: flex;
    flex-flow: column;
    margin: auto;
    /*display: inline-block;*/
}
.unit {
    color: #999;
    font-size: 12px;
    line-height: 18px;
}
.data {
    font-size: 12px;
    color: #333;
    line-height: 18px;
}
.description{
  width: 750rpx;
  .long_text{
    display: inline-block;
    padding: 0 5px;
    box-sizing: border-box;
  }
}
</style>


