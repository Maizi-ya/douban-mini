// pages/login/login.js
Page({
    wechat(){
        console.log('微信登录按钮被点击');
        wx.navigateTo({
          url: '/pages/mine/mine',
        })
    },
    sms(){
        console.log('短信验证码登录按钮被点击');
    },
})
