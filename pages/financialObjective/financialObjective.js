// pages/financialObjective/financialObjective.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goHome:function(){
      wx.navigateBack({
        url: '../index/index'
      })
    },
    goYearCal: function () {
      wx.navigateTo({
        url: '../yearCalculation/yearCalculation'
      })
    },
    onShareAppMessage: function (res) {
      withShareTicket: true
      return {
        title: '财富自由计算器',
        desc:'',
        path: '/page/user?id=123',
        success: function (res) {
          console.log('转发成功');
        },
        fail: function (res) {
          // 转发失败
        }
      }
    }
  }
})
