/*
 * @Author: zhao - 🍉
 * @Date: 2021-03-30 21:25:29
 * @LastEditors: zhao - 🍉
 * @LastEditTime: 2021-03-30 21:26:41
 * @Descripttion: 
 */
import dayjs from "dayjs";

export const parseTime = (time, format) => {
  return dayjs(time).format(format || 'YYYY-MM-DD HH:mm')
}