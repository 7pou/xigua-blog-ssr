import React from 'react'
// import styles from '../../styles/Home.mudule.scss'
import styles from './Watermelon.module.scss'
// console.log(styless)
// const styles = {}
const Watermelon = (props) => {

  return (
    <div className={styles.watermelon}>
      <div className={styles['deep-0']}></div>
      <div className={styles['deep-1']}></div>
      <div className={styles['deep-2']}></div>
      <div className={styles['deep-3']}></div>
      <div className={styles['dot-list']}>
        <div className={styles.wrap}>
          <div className={styles['dot-item']}></div>
          <div className={styles['dot-item']}></div>
          <div className={styles['dot-item']}></div>
          <div className={styles['dot-item']}></div>
          <div className={styles['dot-item']}></div>
          <div className={styles['dot-item']}></div>
          <div className={styles['dot-item']}></div>
          <div className={styles['dot-item']}></div>
        </div>
      </div>
    </div>
  )
}

export default Watermelon