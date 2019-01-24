// pages/editorShop/editorShop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImg:'http://wx3.sinaimg.cn/large/006qBWBXly1fcgwhjfbjtj30ci08a0ux.jpg',
    adress:''
  },
// 上传图片
  uploadImage: function() {
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'], 
      success: function (res) {
        var tempFilesSize = res.tempFiles[0].size; 
        if (tempFilesSize <= 1000000) { 
          var tempFilePaths = res.tempFilePaths[0];
          that.setData({
            headImg: tempFilePaths,
          })
        } else {
          wx.showToast({
            title: '上传图片不能大于1M!',
            icon: 'none' 
          })
        }
      }
    })
  },
  // 保存
  formSubmit: function(e) {
    wx.showModal({
      title: '',
      content: '保存后商品名称不可修改,是否确认保存',
      success() {
        console.log('确认保存')
      }
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  // 打开地图
  openMap: function() {
    let _this = this;
    //  获取当前的地理位置、速度。  
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 15,
          success: function(res){
            wx.chooseLocation({
              success: function(res) {
                console.log(res)
                _this.setData({
                  adress: res.name
                })
              },
            })
          }
        })
      }
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