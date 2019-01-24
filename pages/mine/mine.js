//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    saleForm: [
      { name: '待支付', src: '../../statics/image/tabbar/home_fill.png' },
      { name: '待发货', src: '../../statics/image/tabbar/home_fill.png' },
      { name: '待签收', src: '../../statics/image/tabbar/home_fill.png' },
      { name: '已完成', src: '../../statics/image/tabbar/home_fill.png' },
      { name: '售后', src: '../../statics/image/tabbar/home_fill.png' },
    ],
    buyForm: [
      { name: '待支付', src: '../../statics/image/tabbar/home_fill.png' },
      { name: '待发货', src: '../../statics/image/tabbar/home_fill.png' },
      { name: '待签收', src: '../../statics/image/tabbar/home_fill.png' },
      { name: '待评价', src: '../../statics/image/tabbar/home_fill.png' },
      { name: '售后', src: '../../statics/image/tabbar/home_fill.png' },
    ],
    userCenter: [{ name: '名片模板', type: 'template' }, { name: '商城管理', type: 'shop' }, { name: '动态管理', type: 'dynamic' }, { name: '我的收货地址', type: 'adress' }, { name: '我的收藏', type:'collect' },]

  },
  //查看全部
  go_sale: function (e) {
    let _idx = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/orderForm/orderForm?index=' + _idx,
    })
  },
  // 查看钱包
  go_wallet: function(e) {
    wx.navigateTo({
      url: '/pages/wallet/wallet',
    })
  },
  // 跳转详情
  skipDetail: function(e) {
    let _type = e.currentTarget.dataset.type;
    switch (_type) {
      case 'template':
        wx.navigateTo({
          url: '/pages/template/template',
        })
        break;
      case 'adress':
        wx.navigateTo({
          url: '/pages/adress/adress',
        })
        break;
      case 'dynamic':
        wx.navigateTo({
          url: '/pages/dynamic/dynamic',
        })
        break;
      case 'shop':
        wx.navigateTo({
          url: '/pages/shop/shop',
        })
        break;
      case 'collect':
        wx.navigateTo({
          url: '/pages/collect/collect',
        })
        break;
      default:
        
    }
    wx.navigateTo({
      url: '/pages/adress/adress',
    })
  },
  onLoad: function () {
    let userInfo = app.globalData.userInfo;
    console.log(app.globalData.userInfo)
    if (userInfo) {
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      });
    } else {
      this.setData({
        hasUserInfo: false
      });
    };
  },
})
