const app = getApp();
Page({
  data: {
    isRedact: true,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    myImageList:[],
    onScroll: true,
    labelList: [{
      name: 'jt',
      value: '精通业务'
    },
    {
      name: 'xl',
      value: '值得信赖',
      checked: true
    },
    {
      name: 'kk',
      value: '专业可靠'
    },
    {
      name: 'dn',
      value: '行业大牛'
    },
    ],
    hiddenmodalput: true,  
    tag: '',
  },
  // 添加标签内容
  inputVal: function (e) {
    this.setData({
      tag: e.detail.value
    })
  },
  //取消按钮  
  cancel: function () {
    this.setData({
      tag: '',
      hiddenmodalput: true
    });
  },
  //确认  
  confirm: function () {
    let labelList = this.data.labelList;
    labelList.push({ name: this.data.tag, value: this.data.tag })
    this.setData({
      labelList,
      tag: '',
      hiddenmodalput: true,
    })
  },
  // 选择标签
  checkboxChange: function (e) {
    let checkeds = e.detail.value;
    let list = this.data.labelList;
    list.forEach((item, index) => {
      let click = checkeds.some(v => v === item.name);
      if (click) {
        list[index].checked = true;
      } else {
        list[index].checked = false;
      }
    })
    this.setData({
      labelList: list
    })
  },
  // 添加标签
  addTitle: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
 
// 编辑名片
  editorCard: function() {
    this.setData({
      isRedact: false,
      onScroll: false,
    })
  },
  // 上传图片
  uploadImage: function() {
    let _this = this
    wx.chooseImage({
      count: 9,
      sizeType: ['compressed'],
      success: function (re) {
        if (re.tempFilePaths && re.tempFilePaths.length) {
          var upload_toast_title = (re.tempFilePaths.length + '张图片上传中');
          wx.showToast({
            title: upload_toast_title,
            icon: "loading",
            mask: true,
            duration: 10000
          });
          let newmyImageList = _this.data.myImageList.concat(re.tempFilePaths)
          _this.setData({
            myImageList: newmyImageList
          })
          wx.hideToast();
          // var upload_task = function (tmp_file) {
          //   util.wxUpload({
          //     url: config.BASE_URL + '/m/comment-upload_image.html',
          //     filePath: tmp_file,
          //     name: 'comment_image',
          //     success: function (res) {
          //       var res_data = JSON.parse(res.data);
          //       if (!res_data || res_data.error || !res_data.data) {
          //         //return;
          //       }
          //       var img_obj = {
          //         "tmp_file": tmp_file,
          //         "image_id": res_data.data
          //       };
          //       comment_images[product_id].push(img_obj);
          //       _this.setData({
          //         "comment_images": comment_images
          //       });
          //       if (re.tempFilePaths.length) {
          //         upload_task(re.tempFilePaths.shift());
          //       } else {
          //         wx.hideToast();
          //       }
          //     }
          //   });
          // };
          // upload_task(re.tempFilePaths.shift());
        }
      }
    });
  },
  // 删除图片
  delImage: function(e) {
    let _idx = e.currentTarget.dataset.index;
    this.data.myImageList.splice(_idx,1)
    this.setData({
      myImageList: this.data.myImageList
    })
  },
  // 保存个人信息
  formSubmit: function(e) {
    console.log(e.detail.value)
  },
  // 滚动事件
  onPageScroll: function() {
    this.setData({
      onScroll: true,
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
    startHandel: function (e) {
    var that = this;
    var startTime = e.timeStamp;
    var recordStatus = that.data.recordStatus;
    if (!recordStatus) {
      wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.record']) {
            wx.authorize({
              scope: 'scope.record',
              success() {
                recordStatus = true;
                that.setData({
                  recordStatus: recordStatus
                })
              }
            })
          }
        }
      })
    } else {
      //记录开始录音时间
      that.setData({
        startTime: startTime
      })
      wx.showLoading({
        title: '开始录音',
        mask: true
      })
      recorderManager.onStart(() => {
        console.log('recorder start')
      })
      const options = {
        duration: 10000,
        sampleRate: 44100,
        numberOfChannels: 1,
        encodeBitRate: 96000,
        format: 'mp3',
        frameSize: 50
      }
      recorderManager.start(options);
    }

  },
  //松开按钮
  endHandle: function (e) {
    var that = this;
    var recordStatus = that.data.recordStatus;
    console.log(recordStatus);
    if (recordStatus) {
      var endTime = e.timeStamp;
      var speakTime = endTime - that.data.startTime;
      //如果录音时间太短，提示
      if (speakTime < 350) {
        wx.showToast({
          title: '说话时间太短',
          icon: 'none',
        })
        recorderManager.stop();
      } else {
        wx.hideLoading();
        wx.showToast({
          title: '正在努力搜索',
          icon: 'loading',
          duration: 6000,
          mask: true
        })
        recorderManager.onStop((res) => {
          const { tempFilePath } = res;
          //上传录制的音频
          wx.uploadFile({
            url: 'https://cookbook.cityshop.com.cn/index.php?r=product/tune',
            filePath: tempFilePath,
            name: 'viceo',
            success: function (res) {
              wx.hideToast();
              //如果为空
              if (res.statusCode != 500) {
                that.wxSearchAddHisKey(res.data);
              }
              if (speakTime >= 350) {
                wx.navigateTo({
                  url: '../result/result?searchValue=' + res.data
                })
              }
            }
          })
        })
        //触发录音停止
        recorderManager.stop();
      }
    }
  },
})
