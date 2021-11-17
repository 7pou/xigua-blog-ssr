/*
 * @Author: zhao - 🍉
 * @Date: 2021-03-28 14:04:34
 * @LastEditors: zhao - 🍉
 * @LastEditTime: 2021-04-16 19:11:40
 * @Descripttion: 
 */
import Watermelon from "../../components/Watermelon";

import styles from "./home.module.scss";
import Link from 'next/link';
const Home = (props) => {

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

export default Home