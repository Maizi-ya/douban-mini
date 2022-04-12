// module/movie-item/movie-item.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        movie: {
            type: Object,
            value: {}
        }
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
        itemAction: function (event) {
            const jsonString = JSON.stringify(this.properties.movie);
            wx.navigateTo({
              url: `/pages/detail/detail?movie=${ jsonString }`,
            })
        }
    }
})
