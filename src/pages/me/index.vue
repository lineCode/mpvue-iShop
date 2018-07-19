<template>
    <div class="page">
        <div class="page__bd">
            <div class="weui-flex" :class="computedClassBd">
                <img :src="avatarUrl" alt="" class="avatar" :class="computedClassAvatar">
                <div v-if="userInfo" class="white">{{userInfo.nickName}}</div>
            </div>
            <div class="button-sp-area" v-if="!userInfo">
                <button open-type="getUserInfo" @getuserinfo="getUserInfo" class="weui-btn" type="primary">用户登录</button>
                <!-- <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="weui-btn" type="primary">获取手机号</button> -->
            </div>
            <div class="weui-cells weui-cells_after-title" v-if="userInfo">
              <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__hd">
                  <image src="/static/images/menu_icon_orders.png" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"/>
                </div>
                <div class="weui-cell__bd">我的订单</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
              </navigator>
              <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__hd">
                  <image src="/static/images/menu_icon_cart.png" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"/>
                </div>
                <div class="weui-cell__bd">我的购物车</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
              </navigator>
              <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__hd">
                  <image src="/static/images/menu_icon_collection.png" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"/>
                </div>
                <div class="weui-cell__bd">我的收藏</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
              </navigator>
              <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__hd">
                  <image src="/static/images/menu_icon_compare.png" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"/>
                </div>
                <div class="weui-cell__bd">我的对比</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
              </navigator>
              <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__hd">
                  <image src="/static/images/menu_icon_quit.png" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"/>
                </div>
                <div class="weui-cell__bd">关于领骏达</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
              </navigator>
              <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
                <div class="weui-cell__hd">
                  <image src="/static/images/menu_icon_setting.png" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"/>
                </div>
                <div class="weui-cell__bd">设置</div>
                <div class="weui-cell__ft weui-cell__ft_in-access"></div>
              </navigator>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      avatarUrl: wx.getStorageSync('userInfo').avatarUrl || '/static/images/me.png',
      userInfo: {}
    }
  },
  computed: {
    computedClassAvatar () {
      return this.userInfo ? 'pad_up' : ''
    },
    computedClassBd () {
      return this.userInfo ? 'red_bd' : ''
    }
  },
  mounted () {
    this.userInfo = wx.getStorageSync('userInfo')
  },
  methods: {
    getUserInfo (e) {
      let userInfo = e.mp.detail.userInfo
      if (userInfo) {
        wx.setStorageSync('userInfo', userInfo)
        this.userInfo = userInfo
        this.avatarUrl = userInfo.avatarUrl
      }
    },
    getPhoneNumber (e) {
      console.log(e)
    }
  }
}
</script>
<style lang="scss">
.weui-flex {
  flex-direction: column;
  transition: background 2s;
  .avatar{
    margin: auto;
    margin-top: 300rpx;
    margin-bottom: 30rpx;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    transition: margin-top 2s;
  }
  .pad_up {
    margin-top: 100rpx;
  }
  .white {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }
}
.red_bd {
  background: #ea5a49;
}
</style>

