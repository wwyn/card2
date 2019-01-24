// pages/establish/establish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardsList:[],
    establishCard: false
  },
  // 创建按钮
  formSubmit: function(e) {
    let obj = e.detail.value;
    this.data.cardsList.push(obj)
    this.setData({
      establishCard: true,
      cardsList:this.data.cardsList
    })
  },
  // 创建名片
  editorCard: function() {
    this.setData({
      establishCard: false,
    })
  },
  // 名片的分组
  go_namecard: function(e) {
    let _idx = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/cards/cards?id=' + _idx,
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