/**
 * @file demo page for apiDemo
 * @author renzhonghua
 */
/* globals Page, swan */

Page({
  data: {
    Number: 0,
    carts: [
      {
        pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg",
        name: "日本资生堂洗颜",
        price: 200,
      },
      {
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg',
        name: "倩碧焕妍活力精华露",
        price: 340,
      },
      {
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
        name: "特效润肤露",
        price: 30,
      },
      {
        pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058228431.jpg',
        name: "倩碧水嫩保湿精华面霜",
        price: 490,
      },
    ],
  },
  // 删除
  delCart: function (e) {
    let index = e.currentTarget.dataset.index;
    this.data.carts.splice(index, 1)
    this.setData({
      carts: this.data.carts
    })
  },
  evt_tcoitem_start: function (e) {
    let index = e.currentTarget.dataset.index;
    if (!e.touches.length) return;
    let clientX = e.touches[0].clientX;
    this.data.carts[index]['start_clientx'] = clientX
    this.setData({
      carts: this.data.carts
    })
  },
  evt_tcoitem_move: function (e) {
    let index = e.currentTarget.dataset.index;
    if (!e.touches.length) return;
    let clientX = e.touches[0].clientX;
    let disX = this.data.carts[index].start_clientx - clientX;
    let trash_btn_width = 75;
    (disX < 0) && (disX = 0);
    if ((disX >= trash_btn_width) && (disX = trash_btn_width)) {
      this.data.carts[index]['margin_left'] = true
    } else if ((disX < trash_btn_width) && (disX = trash_btn_width)) {
      this.data.carts[index]['margin_left'] = false
    }
    this.setData({
      carts: this.data.carts
    })
  },
  evt_tcoitem_end: function (e) {
    // let trash_btn_width = 75;
    // let disX = this.data.coitem_transform_dis[e.currentTarget.dataset.ident]||0;
    // (disX >= trash_btn_width / 2) ? (disX = trash_btn_width) : (disX = 0);
    // let _set = {};
    // _set['coitem_transform_dis.' + e.currentTarget.dataset.ident] = disX;
    // this.setData(_set);
  },
  // 跳转到另一个小程序
  goCard: function () {
    console.log('11')
    // wx.navigateToMiniProgram({
    //   appId: '',
    //   path: 'page/index/index',
    //   extraData: {
    //     foo: 'bar'
    //   },
    //   envVersion: 'develop',
    //   success(res) {
    //     // 打开成功
    //   }
    // })
  },
  onLoad: function (options) {
  
  },

});
