import { fetchArticleList } from '../../services/article';
import { parseTime } from '@/utils/date';
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Head from "next/head";
import styles from './article.module.scss'
const renderArticleItem = (props) => {

  


  return (
    <Link href={'/article/info?id=' + props.id } key={props.id}>
      <div className={styles['article-item']}>
        <div className={styles['title']}>{props.title}</div>
        <div className={styles['content'] + ' app-ellipsis-multi'}>{props.content}</div>
        <div className={styles['tags']}>
          <span className={styles['tag-item']}>react</span>
          <span className={styles['tag-item']}>vue</span>
          <span className={styles['tag-item']}>Array实现</span>
          <span className={styles['tag-item']}>webpack</span>
        </div>
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
      </div>
    </Link>
  )
}

const ArticleList = (props) => {
  return (
    <div>
      <Head>
        <title>文章</title>
        <meta http-equiv="description" content="西瓜博客" />
        <meta  name="description" content="西瓜的生活,西瓜的技术,古代诗人" />
        <meta  name="keywords" content="西瓜,前端,JavaScript,Vue.js,React.js" />
      </Head>
      <main className={styles['article-list']}>
        {(props.articleList || []).map(e => renderArticleItem(e))}
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetchArticleList()
 
  return { props: {articleList: res.data.list, articleTotal: res.data.total}  }
}


export default ArticleList