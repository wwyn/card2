// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageTab: ['消息', '通讯录'],
    current: 1,
    messageList: [{ name: 'kelly', text: '我穿越了河山，如痴如梦幻', time: '12.30' }, { name: 'amy', text: '我穿越了河山，如痴如梦幻', time: '12.34' }],
    searchVal:'',
    messageCard: [{
      type: 'a', children: [{ name: 'kelly', text: '我穿越了河山，如痴如梦幻', time: '12.30' }, { name: 'vv', text: '我穿越了河山，如痴如梦幻', time: '12.34' }]}, {
        type: 'b', children: [{ name: 'qq', text: '我穿越了河山，如痴如梦幻', time: '12.30' }, { name: 'coco', text: '我穿越了河山，如痴如梦幻', time: '12.34' }]
      }, {
        type: 'c', children: [{ name: 'ww', text: '我穿越了河山，如痴如梦幻', time: '12.30' }, { name: 'make', text: '我穿越了河山，如痴如梦幻', time: '12.34' }]
      }],
    showmyCards:false,
  },
  // 切换
  toggleTab: function (e) {
    let cur = e.currentTarget.dataset.cur;
    this.setData({
      current: cur,
    })
  },
  // 搜索名片
  searchInput: function(e) {
    console.log(e.detail.value);
  },
  // 清除搜索
  delSearch: function() {
    this.setData({
      searchVal: ''
    })
  },
  // 查看我的名片组
  go_myCards: function() {
    this.setData({
      showmyCards: true,
    })
  },
  // 创建名片
  card_establish: function() {
    wx.navigateTo({
      url: '/pages/establish/establish',
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