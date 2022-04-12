// pages/morePage/morePage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        try {
            const jsonData = JSON.parse(options.data);
            this.setData(jsonData);
        } catch (error) {
            console.log(error);
        }
    },

    popAction: function (event) {
        console.log(event);
    },

    homeAction: function (event) {
        console.log(event);
    }


})