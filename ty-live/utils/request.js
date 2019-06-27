const CONFIG = require('../config.js')

let request = function(opt) {
  let url = CONFIG.BASE_URL + opt.url
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: opt.data || '',
      header: opt.header || {},
      method: opt.method || 'GET',
      dataType: opt.dataType || 'json',
      responseType: opt.responseType || 'text',
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
      complete: function(res) {},
    })
  })
}

module.exports = request