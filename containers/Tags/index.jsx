/*
 * @Author: zhao - 🍉
 * @Date: 2021-04-15 16:56:21
 * @LastEditTime: 2022-02-09 15:51:42
 * @LastEditors: zhao - 🍉
 * @Description: Tags
 * @FilePath: /xigua-blog-ssr/containers/Tags/index.jsx
 */
import React from 'react'
import Link from "next/link";
import Card from "@/components/Card";
import { fetchArticleTags } from '@/services/article';
const Tags = (props) => {
  const list = props.value?.list || []

  const renerItem = (tag) => {
    return <Link href={''}><span className='app-tag-item' key={tag.id}>{tag.name}</span></Link>
  }

  return (
    <Card title="标签">
      <div className="app-tag">
        { list.map(e => renerItem(e))}
      </div>
    </Card>
  )
}
// Tags.getInitialProps = async function(props) {
//   const res = await fetchArticleTags()
//   return { props: { loaded: true, tagsData: res.data.list || [] } }
// }
export default Tags