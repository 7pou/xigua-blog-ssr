import React from 'react'
import styles from './layout.module.scss'
import Tags from "@/containers/Tags";
const Layout = (props) => {
  return (
    <div className={styles['layout']}>
      <div className={styles['header']}></div>
      <div className={styles['container']}>
        <div className={styles['content']}>{props.children}</div>
        <aside className={styles['slide-block']}>
          <Tags />
          <Tags />
          <Tags value={props.tags}/>
        </aside>
      </div>
     
    </div>
  )
}

export default Layout