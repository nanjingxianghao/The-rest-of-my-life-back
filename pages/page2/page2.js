// pages/page2/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  nicai: function () {
    wx.showToast({
      title: '那就是有空咯',
      icon: 'success',
      duration: 2000
    })
  }, 
  yuehuiqu: function () {
    wx.showActionSheet({
      itemList: ['想约你看星星', '想约你看月亮', '还想约你吃饭饭'],
      success: function (res) {
        console.log(res.tapIndex)
        wx.navigateTo({
          url: '../page3/page3',
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },  

  actioncnt: function () {
    var that=this;
    wx.showActionSheet({
      itemList: ['没空', '你猜','有空'],
      success: function (res) {
        console.log(res.tapIndex)
        if(res.tapIndex==0){
          wx.showToast({
            title: '重选!!!!',
             icon: 'none',
            duration: 1000,
            mask: true
          }) 
        }
        if (res.tapIndex==1){
          that.nicai();
          that.yuehuiqu();
        }
        if(res.tapIndex==2){
          that.yuehuiqu();
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
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