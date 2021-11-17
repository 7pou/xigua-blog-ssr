import React from 'react'
import styles from './card.module.scss';
const Card = (props) => {

  return (
    <div className={styles["card-component"]}>
      <div className={styles["title"] + ' app-ellipsis'}>{props.title}</div>
      <div className={styles['content']}>{props.children}</div>
    </div>
  )
}

export default Card