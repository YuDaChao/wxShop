import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main',
      'pages/books/main',
      'pages/comments/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#EA5149',
      navigationBarTitleText: 'happyu图书',
      navigationBarTextStyle: 'light'
    },
    usingComponents: {
      "i-progress": "/iview/progress/index",
      "i-button": "/iview/button/index"
    },
    tabBar: {
      selectedColor: '#EA5149',
      list: [{
        pagePath: 'pages/books/main',
        iconPath: 'static/images/book.png',
        selectedIconPath: 'static/images/book-active.png',
        text: '图书'
      }, {
        pagePath: 'pages/comments/main',
        iconPath: 'static/images/todo.png',
        selectedIconPath: 'static/images/todo-active.png',
        text: '评论'
      }, {
        pagePath: 'pages/index/main',
        iconPath: 'static/images/me.png',
        selectedIconPath: 'static/images/me-active.png',
        text: '我的'
      }]
    }
  }
}
