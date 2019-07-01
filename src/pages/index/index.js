//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '东军的小玩意',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    imgUrls: [
        'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
        'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
        'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    navList: [
        {
            img: '',
            name: 'aaa'
        },
        {
            img: '',
            name: 'bbb'
        },
        {
            img: '',
            name: 'ccc'
        },
        {
            img: '',
            name: 'ddd'
        },
    ],
    flowList: [
        {
            img: 'https://s11.mogucdn.com/mlcdn/55cf19/190522_86hd8e76ld9b8e86a9h02cb44113d_640x960.jpg_640x854.v1cAC.40.jpg',
            name: '图片1',
            count: 40
        },
        {
            img: 'https://s11.mogucdn.com/mlcdn/c45406/190611_1abe30fb9ha844c1f58i3hkd71d05_640x960.jpg_640x854.v1cAC.40.jpg',
            name: '图片1',
            count: 40
        },
        {
            img: 'https://s11.mogucdn.com/mlcdn/55cf19/190522_86hd8e76ld9b8e86a9h02cb44113d_640x960.jpg_640x854.v1cAC.40.jpg',
            name: '图片1',
            count: 40
        },
        {
            img: 'https://s11.mogucdn.com/mlcdn/c45406/190530_36ljl03e0dl66kdida6b4hc903c6f_640x960.jpg_640x854.v1cAC.40.jpg',
            name: '图片1',
            count: 40
        },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },


  handleLocation(){
      console.log('change location')
  },
})
