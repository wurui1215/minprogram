//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: []
  },

  onLoad(){
    var that = this;
    wx.getStorage({
      key: 'loginInfo',
      success (res) {
        console.log(res);
      },
      fail (err) {
        that.getUserInfo();
        console.log(err);
      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    } else {
      app.userInfoReadyCallback = res => {
        that.setData({
          userInfo: res.userInfo
        })
      }
    }
  },

  getUserInfo(){
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://localhost/http/http.php',
            data: {
              code: res.code
            },
            method: 'GET',
            success (login) {
              wx.setStorage({
                key:"loginInfo",
                data: login.data
              })
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }

})

