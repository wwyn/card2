// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 0,
    orderList: ['全部', '待付款', '待发货', '待收货', '已完成'],
    shopList: [{ name: '呵呵', money: '23', num: '1' }, { name: '哈哈', money: '50', num: '2' },],
    // 列表数据
    list: [{
      // 状态
      id: 0,
      // title
      name: "客户签收人:徐剑 已签收 感谢使用圆通快递",
      // 时间
      dates: "2016-08-30"
    }, {
      id: 1,
      name: "北京市通州区梨园公司北京市通州区梨园公司北京市通州区梨园公司北京市通州区梨园公司",
      dates: "2016-08-30"
    }, {
      id: 2,
      name: "【北京市通州区梨园公司】已收入【北京市通州区梨园公司】已收入",
      dates: "2016-08-30"
    }

      , {
      id: 3,
      name: "北京朝阳区十里堡公司】取件人：小四 已收件",
      dates: "2016-08-30"
    }
    ],
    showLogistics:false
  },
  // 查看物流
  logistics: function() {
    this.setData({
      showLogistics: true
    })
  },
  // 关闭物流
  hiddenLogistics: function() {
    this.setData({
      showLogistics: false
    })
  },
  // 订单选择
  orderClick: function (e) {
    let cur = e.currentTarget.dataset.cur;
    this.setData({
      current: cur
    })
  },
  // 订单详情
  shopDetails: function() {
    wx.navigateTo({
      url: '/pages/shopdetail/shopdetail',
    })
  },
  // 取消订单
  cancelOrder: function () {
    let _this = this
    wx.showModal({
      title: '取消订单',
      content: '取消订单后,不可恢复,是否确认取消',
      success: function (res) {
        if (res.confirm) {
         wx.navigateTo({
           url: '/pages/shopdetail/shopdetail?type='+ 0,
         })
        } else {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {
    let _cur = options.index;
    this.setData({
      current: _cur
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