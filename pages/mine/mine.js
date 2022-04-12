// pages/mine/mine.js
Page({
    data: {
        items: [
            {
                icon:'add_file.png',
                text:'观影分析',
                mark:'标记10部影片\n开启观影分析',
                count: 10,
                subtitle: '看过'
            },
            {
                icon:'add_file.png',
                text:'读书分析',
                mark:'标记10本书\n开启读书分析',
                count: 10,
                subtitle: '读过'
            },
            {
                icon:'add_file.png',
                text:'音乐分析',
                mark:'标记10张唱片\n开启音乐分析',
                count: 10,
                subtitle: '听过'
            }
        ],
    },

    loginTap(){
        wx.navigateTo({
          url: '/pages/login/login',
        })
    },

    openDetailPage(event) {
        const index = event.currentTarget.dataset.index
        console.log('当前点击index:' + index);
    }
})