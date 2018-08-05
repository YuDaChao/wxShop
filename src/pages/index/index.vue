<template>
  <div class="container">
    <div class="userinfo">
      <img class="userinfo-avatar" :src="userInfo.avatarUrl" alt="">
      <p class="userinfo-nickname">{{userInfo.nickName}}</p>
    </div>
    <div class="progress-wrapper">
      <progress-bar :precent="34" status="wrong"></progress-bar>
    </div>
    <i-button @click="handleAddBook" type="error">添加图书</i-button>
  </div>
</template>

<script>
import qcloud from 'wafer2-client-sdk'
import { QCLOUD_LOGIN_URL } from '../../config/config'
import { showToast } from '../../utils/tips'
import ProgressBar from '@/components/progress-bar'
// import request from '../../utils/request'

export default {
  data () {
    return {
      userInfo: {}
    }
  },

  components: {
    ProgressBar
  },

  methods: {
    getUserInfo () {
      qcloud.setLoginUrl(QCLOUD_LOGIN_URL)
      qcloud.login({
        success: function (userInfo) {
          console.log('登录成功 ', userInfo)
          this.userInfo = userInfo
          wx.setStorageSync('userInfo', userInfo)
          showToast('登录成功')
        },
        fail: function (error) {
          console.log('登录失败 ', error)
          showToast('登录失败', 'none')
        }
      })
    },
    handleAddBook () {
      // 只允许从相机扫码
      wx.scanCode({
        onlyFromCamera: true,
        success: (res) => {
          console.log(res)
        }
      })
    }
  },

  created () {
    try {
      const userInfo = wx.getStorageSync('userInfo')
      console.log(userInfo)
      if (userInfo) {
        this.userInfo = userInfo
      } else {
        this.getUserInfo()
      }
    } catch (e) {
      // Do something when catch error
      console.log(e)
    }
  }
}
</script>

<style scoped lang="stylus">
.userinfo
  display: flex
  flex-direction: column
  align-items: center
  .userinfo-avatar
    width: 100px
    height: 100px
    margin: 10px
    border-radius: 50%
  .userinfo-nickname
    color: #000;
.add-book
  width 100%
  padding 0 20px
  margin-top 20px
  box-sizing border-box
.progress-wrapper
  padding: 10px
</style>
