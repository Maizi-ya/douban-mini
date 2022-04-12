// module/db-nav/db-nav.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: ''
        },
        titleColor: {
            type: String,
            value: '#000'
        },
        statusbarColor: {
            type: String,
            value: '#fff'
        },
        navbarColor: {
            type: String,
            value: '#fff'
        },
        pop: {
            type: String,
            value: 'true'
        },
        home: {
            type: String,
            value: 'true'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        navHeight: wx.db.navHeight,
        statusBarStyle: '',
        navBarStyle: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        popAction: function () {
            var myEventDetail = { 'id': '123' } // detail对象，提供给事件监听函数
            var myEventOption = { 'touch': '123' } // 触发事件的选项
            this.triggerEvent('pop', myEventDetail, myEventOption)
            wx.navigateBack({
                delta: 0,
            });
        },
        popHome: function () {
            var myEventDetail = { 'id': '123' } // detail对象，提供给事件监听函数
            var myEventOption = { 'touch': '123' } // 触发事件的选项
            this.triggerEvent('home', myEventDetail, myEventOption)
            wx.navigateBack({
                delta: 10,
            });
        }
    },

    lifetimes: {
        attached: function () {
            const statusBarStyle = `
            height: ${wx.db.statusBarHeight}px;
            background-color: ${this.properties.statusbarColor};
            `;
            const navBarStyle = `
            height: ${wx.db.navBarHeight}px;
            color: ${this.properties.titleColor};
            background-color: ${this.properties.navbarColor};
            `;
            this.setData({ statusBarStyle, navBarStyle });
        }
    },
})
