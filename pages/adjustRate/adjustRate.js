// pages/adjustRate/adjustRate.js
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
    areaIndex: 0,
    area: ['1%', '2%', '3%', '4%']
  },

  /**
   * 组件的方法列表
   */
  methods: {

    bindPickerChange: function (e) {
      this.setData({
        areaIndex: e.detail.value
      })
    },

  }
})
