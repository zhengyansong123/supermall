import { request } from "./request.js"

// 首页中获取轮播图等数据
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}