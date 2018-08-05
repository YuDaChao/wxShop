import { HOST, RESP_CODE_OK } from "../config/config"

/**
 * url 请求url
 * data 请求参数
 * method 请求方式
 */
export default (url, data, method = "GET", options = {}) => {
  url = HOST + url
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method,
      header: {
        "content-type": "application/json", // 默认值
        ...options
      },
      success: function(resp) {
        if (resp && resp.data.code === RESP_CODE_OK) {
          resolve(resp.data.data)
        } else {
          reject(resp.data)
        }
      },
      fail: function(error) {
        reject(error)
      }
    })
  })
}
