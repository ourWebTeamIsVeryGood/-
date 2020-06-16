import request from '@/utils/request'

// 登录方法
export function login(telphone, password, code, uuid) {
  const data = {
    telphone,
    password,
  }
  return request({
    url: '/login',
    method: 'post',
    headers:{
      "Content-Type":"application/json;charset=utf-8"
    },
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/user/userInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/login/logout',
    method: 'get'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/captchaImage',
    method: 'get'
  })
}