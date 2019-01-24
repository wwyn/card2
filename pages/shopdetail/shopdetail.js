// pages/shopdetail/shopdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList: [{ name: '呵呵', money: '23', num: '1' }, { name: '哈哈', money: '50', num: '2' },],
    cancel: false,
    array: ['请选择配送方式', '自配送', '第三方物流快递'],
    index: 0,
    showModal: false
  },
 
// 取消订单
  cancelOrder: function() {
    let _this = this
    wx.showModal({
      title: '取消订单',
      content: '取消订单后,不可恢复,是否确认取消',
      success: function (res) {
        if (res.confirm) {
          _this.setData({
            cancel: true
          })
        } else {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 选择快递
  expressModal: function() {
    this.setData({
      showModal: true
    })
  },
  // 确认选择方式
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      showModal: false
    })
  },
  // 取消选择方式
  hiddenModal: function() {
    this.setData({
      showModal: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type==0) {
      this.setData({
        cancel: true
      })
    }
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