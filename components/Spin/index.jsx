/*
 * @Author: zhao - 🍉
 * @Date: 2021-11-20 18:51:59
 * @LastEditTime: 2021-11-20 19:01:34
 * @LastEditors: zhao - 🍉
 * @Description: 
 * @FilePath: /xigua-blog-ssr/components/Spin/index.jsx
 */
import React from 'react'
import styles from "./spin.module.scss";
class Spin extends React.Component{
  render(){
    return (
      <div className={styles['loading-container']}>
        {
          this.props.spinning &&
          <div className={styles["loading-block"]}>
            <div className={styles["loading-box"]}></div>
          </div>
        }
        {this.props.children}
      </div>
    )
  }
}
export default Spin