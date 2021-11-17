/*
 * @Author: zhao - 🍉
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: zhao - 🍉
 * @LastEditTime: 2021-11-17 11:22:05
 * @Descripttion: 
 */
import styles from "../styles/Home.module.scss";
import Watermelon from "../components/Watermelon";

import Link from 'next/link';
const Index = (props) => {

  return (
    <div className={styles['home-page']}>
      <div className={styles['container']+ ' app-flex'}>
        <div className={styles['avatar-block']}>
          <Watermelon/>
        </div>
        <div className={styles['desc-block']}>
          你好
        </div>
        <div className={styles['menu-block']}>
          <div className={styles['menu-list']}>
            <Link href="/article">
              <div className={styles['menu-item']}>文章</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
