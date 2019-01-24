// pages/extract/extract.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yanzhengma: "获取验证码",
    mobile: '',
    countdown: 60,
    disabled: false,
    verification: '',
    hasUserInfo: false,
    recharge: false
  },
  // 获取手机号
  mobileInput: function (e) {
    this.setData({
      mobile: e.detail.value,
      disabled: false,
      countdown: 60,
    })
  },
  // 获取验证码
  getMobile: function (val) {
    let mobile = this.data.mobile;
    if (!this.validatemobile(mobile)) {
      this.setData({
        disabled: true,
      })
      return;
    }
    let that = this;
    if (this.data.countdown == 0) {
      this.setData({
        disabled: false,
        yanzhengma: "获取验证码",
        countdown: 60
      })
      return false;
    } else {
      this.data.countdown--;
      this.setData({
        disabled: true,
        yanzhengma: "重新获取" + this.data.countdown,
        countdown: this.data.countdown
      })
    }
    setTimeout(function () {
      that.getMobile(val);
    }, 1000);

  },
  // 手机验证
  validatemobile: function (mobile) {
    if (mobile.length == 0) {
      wx.showToast({
        title: '请输入手机号！',
        icon: 'none',
        duration: 1500
      })
      return false;
    }
    if (mobile.length != 11) {
      wx.showToast({
        title: '手机号长度有误！',
        icon: 'none',
        duration: 1500
      })
      return false;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(mobile)) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'none',
        duration: 1500
      })
      return false;
    }
    return true;
  },
  // 确认提现
  formSubmit:function(e) {
    console.log(e.detail.value)
  },
  // 确认充值
  affirmRecharge: function(e) {
    console.log(e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.type == 'recharge') {
      this.setData({
        recharge: true,
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