// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: true
  },

  bindGetUserInfo(res) {
    if (res.detail.userInfo) {
      console.log("点击了同意授权");
      this.setData({
        userInfo: false
      })
    } else {
      console.log("点击了拒绝授权");
    }
  },

  pay(){
    var time = Date.parse(new Date());
    var rand = String(Math.random());

    wx.requestPayment(
      {
      'timeStamp': time,
      'nonceStr': rand,
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success':function(res){},
      'fail':function(res){},
      'complete':function(res){}
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    

    var that = this;
    wx.getStorage({
      key: 'loginInfo',
      success (res) {
        console.log(res.data)
        that.setData({
          userInfo: false
        })
      },
      fail (err) {
        console.log(err);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})