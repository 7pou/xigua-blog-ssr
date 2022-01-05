/*
 * @Author: zhao - 🍉
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: zhao - 🍉
 * @LastEditTime: 2022-01-05 13:49:57
 * @Descripttion: 
 */
import styles from "../styles/Home.module.scss";
import Watermelon from "../components/Watermelon";

import Link from 'next/link';
import Head from "next/head";
import Footer from "../containers/Footer";

const Index = (props) => {

  return (
    <div>
      <Head>
        <title>西瓜</title>
        <meta name="baidu-site-verification" content="code-dJgvz1vM0Y" />
        <meta name="google-site-verification" content="-DKnUf8bFR1MaIoAgT8BV58Dk31nVAieg2aFmi0Vd-c" />
        <meta http-equiv="description" content="西瓜博客" />
        <meta  name="description" content="西瓜的生活,西瓜的技术,古代诗人" />
        <meta  name="keywords" content="西瓜,前端,JavaScript,Vue.js,React.js" />
      </Head>
      <main className={styles['home-page']}>
        <div className={styles['container']+ ' app-flex'}>
          <div className={styles['avatar-block']}>
            <Watermelon/>
          </div>
          <div className={styles['desc-block']}>
            你好
          </div>
          <div className={styles['connect-block']}>
            <div className={styles['connect-item']}>
              <i className="iconfont icon-github"></i>
            </div>
            <div className={styles['connect-item']}>
              <i className="iconfont icon-codepen"></i>
            </div>
            <div className={styles['connect-item']}>
              <i className="iconfont icon-telegram"></i>
            </div>
          </div>
          <div className={styles['menu-block']}>
            <div className={styles['menu-list']}>
              <Link href="/article">
                <div className={styles['menu-item']}>文章</div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Index
