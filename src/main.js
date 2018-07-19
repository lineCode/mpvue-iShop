import Vue from 'vue'
import App from './App'
import '../static/weui/weui.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/product/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#EA5A49',
      navigationBarTitleText: '领骏达',
      navigationBarTextStyle: 'light'
    },
    tabBar: {
      selectedColor: '#EA5149',
      list: [
        {
          pagePath: 'pages/index/main',
          text: '首页',
          iconPath: 'static/images/home.png',
          selectedIconPath: 'static/images/home-active.png'
        },
        {
          text: '车辆',
          pagePath: 'pages/car/main',
          iconPath: 'static/images/car.png',
          selectedIconPath: 'static/images/car-active.png'
        },
        {
          text: '商品',
          pagePath: 'pages/product/main',
          iconPath: 'static/images/product.png',
          selectedIconPath: 'static/images/product-active.png'
        },
        {
          text: '个人',
          pagePath: 'pages/me/main',
          iconPath: 'static/images/me.png',
          selectedIconPath: 'static/images/me-active.png'
        }
      ]
    }
  }
}
