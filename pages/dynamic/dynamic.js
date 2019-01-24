// pages/dynamic/dynamic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dynamicList:[{title:'标题标题标题',content:'这里是内容展示区域',adress:'上海市闵行区漕宝路'}],
    dynamicImage: ['http://wx3.sinaimg.cn/large/006qBWBXly1fcgwhjfbjtj30ci08a0ux.jpg', 'http://wx3.sinaimg.cn/large/006qBWBXly1fcgwhjfbjtj30ci08a0ux.jpg', 'http://wx3.sinaimg.cn/large/006qBWBXly1fcgwhjfbjtj30ci08a0ux.jpg'],
    showInput: false,
    inputVal: '',
    commentList: [{ name: '张三', content: '赞' }],
  },
  // 添加动态
  addDynamic: function() {
    wx.navigateTo({
      url: '/pages/addDynamic/addDynamic',
    })
  },
  // 删除动态
  delDynamic: function(e) {
    let _idx = e.currentTarget.dataset.index;
    let _this = this;
    wx.showModal({
      title: '确认删除？',
      success(res) {
        if (res.confirm) {
          _this.data.dynamicList.splice(_idx, 1)
          _this.setData({
            dynamicList: _this.data.dynamicList
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 转发动态
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  // 评论动态
  commentDynamic: function() {
    this.setData({
      showInput: true,
    })
  },
  // 发送
  send: function () {
    let obj = { name: '李四', content: this.data.inputVal }
    this.data.commentList.unshift(obj);
    this.setData({
      commentList: this.data.commentList,
      showInput: false,
      inputVal: ''
    })
  },
  onBlur: function (e) {
    let val = e.detail.value;
    this.setData({
      inputVal: val,
    })
  },
  inputVal: function (e) {
    let val = e.detail.value;
    this.data.commentList.unshift(val);
    this.setData({
      commentList: this.data.commentList,
      showInput: false,
      inputVal: ''
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