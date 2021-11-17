import { fetchArticleInfo } from '@/services/article';
import { parseTime } from '@/utils/date';
import React from 'react'
import styles from "./article.module.scss";
const ArticleInfo = (props) => {

  return (
    <div className={styles['article-info']}>
      <div className={styles.title}>{props.articleData.title}</div>
      <div className={styles.time}>
        <span>{parseTime(props.articleData.create_time)}</span>
        <span >阅读 {props.articleData.view_count || 0}</span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.content}>
        <pre style={{overflowX:'auto'}}>
          <code>
            {props.articleData.content}
          </code>
        </pre>
      </div>
    </div>
  )
}

export const getServerSideProps = async function(props) {
  const res = await fetchArticleInfo({id: props.query.id})
  return { props: { articleData: res.data || {} } }
}

export default ArticleInfo