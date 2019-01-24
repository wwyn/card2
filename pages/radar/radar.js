// pages/radar/radar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radarTab: ['时间', '行为'],
    current: 1,
    isdata: false,
    timeList:[{time:'2019 01-01',name:'张三',content:'查看了你的名片'}],
    behaviorList: [{ content: '查看名片', num: 0 }, { content: '转发名片', num: 0 }, { content: '查看商品', num: 0 }, { content: '咨询商品', num: 0 },],
    dynamicList: [{ content: '查看名片', num: 0 }, { content: '转发名片', num: 0 }, { content: '查看商品', num: 0 }, { content: '咨询商品', num: 0 },],
    dateStart: '2019-01-01',
    dateEnd: '2019-01-07',
    showData: false
  },
  // 查看日期
  lookData: function() {
    this.setData({
      showData: true
    })
  },
  // 日期开始
  bindDateChangeStart(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateStart: e.detail.value
    })
  },
  // 日期结束
  bindDateChangeEnd(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateEnd: e.detail.value
    })
  },
  // 取消
  cancel: function() {
    this.setData({
      showData: false
    })
  }, 
  // 确认
  affirm: function() {
    console.log(this.data.dateStart, this.data.dateEnd)
    this.setData({
      showData: false
    })
  },
  // 切换
  toggleTab: function (e) {
    let cur = e.currentTarget.dataset.cur;
    this.setData({
      current: cur,
    })
  },
  // 行为统计
  go_behavior: function() {
    wx.navigateTo({
      url: '/pages/behavior/behavior',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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