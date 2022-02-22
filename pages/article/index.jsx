import { fetchArticleList } from '../../services/article';
import { parseTime } from '@/utils/date';
import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Head from "next/head";
import styles from './article.module.scss'
import ScrollView from '../../components/ScrollView';

const PAGE_SIZE = 10

const renderArticleItem = (props) => { 

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
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false);
  const [concat, setConcat] = useState([]);
  const mergeList = [...(props.articleList || []),...concat ]
  const handleScrollBottom = () => {
    if (loading) return
    if (props.articleTotal <= mergeList.length) return
    setPage(page+1)
  }
  useEffect(() => {
    page !== 1 && postList(page)
  }, [page]);

  const postList = async (page) => {
    setLoading(true)
    const res = await fetchArticleList({ page,  pageSize: PAGE_SIZE })
    setConcat([...concat, ...res.data.list])
    setLoading(false)
  }
  
  return (
    <div>
      <Head>
        <title>文章</title>
      </Head>
      
      <main className={styles['article-list']}>
        <ScrollView height="calc(100vh - 100px)" onScrollBottom={handleScrollBottom}>
          {mergeList.map(e => renderArticleItem(e))}
        </ScrollView>
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetchArticleList({ pageSize: PAGE_SIZE })
 
  return { props: {articleList: res.data.list, articleTotal: res.data.total}  }
}


export default ArticleList