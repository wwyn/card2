// pages/adress/adress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addAdress: true,
    addressList:[]
  },
  // 添加收货地址
  addAdress: function() {
    this.setData({
      addAdress: false
    })
    // wx.navigateTo({
    //   url: '/pages/addAdress/addAdress',
    // })
  },
  // 保存收货地址
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let obj = e.detail.value;
    this.data.addressList.unshift(obj)
    this.setData({
      addressList: this.data.addressList,
      addAdress: true,
    })
  },
  // 删除收货地址
  delAdress: function(e) {
    let _idx = e.currentTarget.dataset.index;
    this.data.addressList.splice(_idx,1)
    this.setData({
      addressList: this.data.addressList
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