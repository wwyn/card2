// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopTab: [{ name: '全部商品', num: 2 }, { name: '出售中', num: 1 }, { name: '已经下架', num: 2 }, { name: '草稿箱', num: 0 },],
    shopList: [{ name: '活动管理',type:'hdgl' }, { name: '商城收益',type:'scsy' }, { name: '商城推广广告',type:'gg' }]
  },
  // 编辑商城
  editorShop: function() {
    wx.navigateTo({
      url: '/pages/editorShop/editorShop',
    })
  },
// 点击进入详情
  go_detail: function(e) {
    let _type = e.currentTarget.dataset.type;
    if(_type == 'scsy') {
      wx.navigateTo({
        url: '/pages/earnings/earnings',
      })
    }
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