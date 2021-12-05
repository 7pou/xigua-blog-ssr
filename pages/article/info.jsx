import React from 'react'
import Head from "next/head";
import { fetchArticleInfo } from '@/services/article';
import { parseTime } from '@/utils/date';
import styles from "./article.module.scss";
import { Viewer } from '@bytemd/react';
import highlight from "@bytemd/plugin-highlight-ssr";
import gfm from "@bytemd/plugin-gfm";
import Spin from '../../components/Spin';
const ArticleInfo = (props) => {
  const plugins = [highlight(), gfm()]
  const keyword = props.articleData.tagNames ? props.articleData.tagNames.map(e=> e.name).join(',') : ''
  return (
    <div>
      <Head>
        <title>{props.articleData.title}</title>
        <meta name="keywords" content={keyword} />
        <meta name="description" content={props.articleData.title} />
      </Head>
      <Spin spinning={!props.loaded}>
        <div className={styles['article-info']}>
          <h1 className={styles.title}>{props.articleData.title}</h1>
          <div className={styles.time}>
            <span>{parseTime(props.articleData.create_time)}</span>
            <span >阅读 {props.articleData.view_count || 0}</span>
          </div>
          <div className={styles.line}></div>
          <article className={styles.content}>
            <Viewer plugins={plugins} value={props.articleData.content}></Viewer>
          </article>
        </div>
      </Spin>

    </div>
  )
}

export const getServerSideProps = async function(props) {
  const res = await fetchArticleInfo({id: props.query.id})
  return { props: { loaded: true, articleData: res.data || {} } }
}

export default ArticleInfo