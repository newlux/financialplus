// pages/yearCalculation/yearCalculation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaIndex: 0,
    area: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       var newArea=[];
        for(var i=1960;i<2018;i++){
          newArea.push(i);
        } 
    this.setData({
      area: newArea
    })

  },
  
  goFree: function () {
    wx.navigateTo({
      url: '../financialFree/financialFree'
    })
  }, 

  bindPickerChange: function (e) {

    this.setData({
      areaIndex: e.detail.value
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

