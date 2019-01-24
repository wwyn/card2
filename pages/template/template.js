// pages/template/template.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      name: '知否',
      value: '前端',
      type:'经典（默认）',
      phone:'1111111111',
      checked: true
    },
    {
      name: '哈哈',
      value: '前端',
      phone: '12222222',
      type: '科技（即将上线）',
    },
    ],
  },
  checkboxChange: function (e) {
    let checkeds = e.detail.value;
    let list = this.data.items;
    list.forEach((item, index) => {
      if (checkeds == item.name) {
        list[index].checked = true;
      } else {
        list[index].checked = false;
      }
    })
    this.setData({
      items: list
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