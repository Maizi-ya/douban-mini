// app.js
App({
    onLaunch() {
        //挂载全局数据
        wx.db = {};
        const wxInfo = wx.getSystemInfoSync();
        console.log(wxInfo)
        wx.db.statusBarHeight = wxInfo.statusBarHeight;
        if (wxInfo.platform == 'android') {
            wx.db.navBarHeight = 48;
        }else {
            wx.db.navBarHeight = 44;
        }
        wx.db.navHeight = wx.db.statusBarHeight + wx.db.navBarHeight;
    },
    globalData: {
        userInfo: null
    }
})
