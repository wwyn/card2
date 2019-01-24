// pages/wallet/wallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radarTab: ['全部', '收入','支出'],
    current: 0,
    detailList: [{ name: '商城支付', time: '2019 01-20 12:30', money: '-10' }, { name: '收红包', time: '2019 01-20 12:30', money: '+210' }]
  },
  // 切换
  toggleTab: function (e) {
    let cur = e.currentTarget.dataset.cur;
    this.setData({
      current: cur,
    })
  },
  // 提现
  extractMoney: function(e) {
    let _type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '/pages/extract/extract?type=' + _type,
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