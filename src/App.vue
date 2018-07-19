<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
.center {
  text-align: center;
}
.title{
  padding: 5px;
  box-sizing: border-box;
}
.small {
  font-size: 12px;
}
.red {
  color: #EA5A49;
}
.white{
  color: #ffffff;
}
.bg_hui {
  background: #eeeeee;
}
.price-icon{
  font-size: 22px;
  font-weight: bold;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
