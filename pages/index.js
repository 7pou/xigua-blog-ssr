/*
 * @Author: zhao - 🍉
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: zhao - 🍉
 * @LastEditTime: 2022-02-09 13:43:55
 * @Descripttion: 
 */
import styles from "../styles/Home.module.scss";
import Watermelon from "../components/Watermelon";

import Link from 'next/link';
import Footer from "../containers/Footer";

const Index = (props) => {

  return (
    <div>
      <main className={styles['home-page']}>
        <div className={styles['container']+ ' app-flex'}>
          <div className={styles['avatar-block']}>
            <Watermelon/>
          </div>
          <div className={styles['desc-block']}>
            你好
          </div>
          <div className={styles['menu-block']}>
            <div className={styles['menu-list']}>
              <Link href="/article" >
                <a className={styles['menu-item']}>文章</a>
              </Link>
            </div>
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
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Index
