/*
 * @Author: zhao - 🍉
 * @Date: 2021-04-15 16:53:58
 * @LastEditors: zhao - 🍉
 * @LastEditTime: 2021-12-05 17:23:14
 * @Descripttion: 
 */
import request from "../utils/request";



export function fetchArticleList (data) {
  return request({ url: '/article/list' , data})
}


export function fetchArticleInfo (data) {
  return request({ url: '/article/detail', data })
}

export function fetchArticleView (data) {
  return request({ url: '/article/view', data })
}


export function fetchArticleTags(data) {
  return request({ url: '/article/tags', data })
}