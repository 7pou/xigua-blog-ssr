/*
 * @Author: zhao - 🍉
 * @Date: 2021-04-15 16:56:53
 * @LastEditTime: 2022-02-09 13:41:05
 * @LastEditors: zhao - 🍉
 * @Description: 
 * @FilePath: /xigua-blog-ssr/layout/index.jsx
 */
import React from 'react'
import Head from 'next/head';
import styles from './layout.module.scss'
import Tags from "@/containers/Tags";
import { BAIDU_TONGJI_SRC } from '../common/config';
const Layout = (props) => {
  const noLayoutRouteList = ['/']
 
  const renderLayout = (children) => {
    return (
      <div className={styles['layout']}>
        <div className={styles['header']}></div>
        <div className={styles['container']}>
          <div className={styles['content']}>{children}</div>
          <aside className={styles['slide-block']}>
            <Tags />
            <Tags />
            <Tags value={props.tags}/>
          </aside>
        </div>
      </div>
    )
  }

  const renderGhost = (children) => {
    return children
  }

  const renderMain = () => {
    return (
      <div>
        <Head>
          <title>西瓜</title>
          <meta name="baidu-site-verification" content="code-dJgvz1vM0Y" />
          <meta name="google-site-verification" content="-DKnUf8bFR1MaIoAgT8BV58Dk31nVAieg2aFmi0Vd-c" />
          <meta http-equiv="description" content="西瓜博客" />
          <meta  name="description" content="西瓜的生活,西瓜的技术,古代诗人" />
          <meta  name="keywords" content="西瓜,前端,JavaScript,Vue.js,React.js" />
          <script id='baidu_tongji' src={BAIDU_TONGJI_SRC}></script>
        </Head>
        {
          noLayoutRouteList.includes(props.router.route) ?
          renderGhost(props.children) :
          renderLayout(props.children)
        }
      </div>
    )
  }



  return renderMain()



}

export default Layout