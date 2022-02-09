import { fetchArticleList } from '../../services/article';
import { parseTime } from '@/utils/date';
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Head from "next/head";
import styles from './article.module.scss'
import Spin from '../../components/Spin';
const renderArticleItem = (props) => {

  const [page, setPage] = useState(1)
  


  return (
  
    <Link href={'/article/info?id=' + props.id } key={props.id}>
      <a className={styles['article-item']}>
        <div className={styles['title']}>{props.title}</div>
        <div className={styles['content'] + ' app-ellipsis-multi'}>{props.content}</div>
        {props.tagNames && (
          <div className="app-tag">
            {props.tagNames.map(e => (
              <span className="app-tag-item">{e.name}</span>
            ))}
          </div>
        )}
        <div className={'app-flex ' + styles['statistic']}>
          <div className={'app-flex ' + styles['item']}>
            <span className={'iconfont icon-browse'}></span>
            <span>{props.view_count || 0}</span>
          </div>
          <div className={'app-flex ' + styles['item']}>
            <span className={'iconfont icon-time'}></span>
            <span>{parseTime(props.create_time)}</span>
          </div>
        </div>
      </a>
    </Link>
  )
}

const ArticleList = (props) => {
  return (
    <div>
      <Head>
        <title>文章</title>
      </Head>
      <Spin spinning={!props.loaded}>
        <main className={styles['article-list']}>
          {(props.articleList || []).map(e => renderArticleItem(e))}
        </main>
      </Spin>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetchArticleList()
 
  return { props: {articleList: res.data.list, articleTotal: res.data.total, loaded: true}  }
}


export default ArticleList