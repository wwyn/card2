// pages/cards/cards.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageCard: [{
      type: 'a', children: [{ name: 'kelly', job: '前端攻城狮', phone: '13333333333' }, { name: 'vv', job: '前端攻城狮', phone: '13333333333'}]
    }, {
        type: 'b', children: [{ name: 'qq', job: '前端攻城狮', phone: '13333333333' }, { name: 'coco', job: '前端攻城狮', phone: '13333333333' }]
    }, {
        type: 'c', children: [{ name: 'ww', job: '前端攻城狮', phone: '13333333333' }, { name: 'make', job: '前端攻城狮', phone: '13333333333' }]
    }],
  },
  // 拨打电话
  makingCall: function(e) {
    let number = e.currentTarget.dataset.number;
    wx.makePhoneCall({
      phoneNumber: 'number',
    })
  },
  // 跳转小程序
  go_card: function() {
    wx.navigateToMiniProgram({
      appId: 'wx09b406638b3946c1',
      path: 'page/index/index?id=123',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'develop',
      success(res) {
        // 打开成功
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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