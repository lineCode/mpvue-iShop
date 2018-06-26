// 工具函数库

import config from './config'

export function get (url, { data = {}, header = {} } = {}) {
  return request(url, 'GET', data, header)
}

export function post (url, { data = {}, header = {} } = {}) {
  return request(url, 'POST', data, header)
}

function request (url, method, data, header) {
  return new Promise((resolve, reject) => {
    wx.request({
      data,
      method,
      header,
      url: config.host + url,
      success: function (res) {
        if (res.statusCode === 200) {
          resolve(res.data)
        } else {
          showModal('失败', '服务器异常')
          reject(res.data)
        }
      }
    })
  })
}

export function showModal (title, content) {
  wx.showModal({
    title,
    content,
    showCancel: false
  })
}

export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}
