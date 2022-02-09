/*
 * @Author: zhao - 🍉
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: zhao - 🍉
 * @LastEditTime: 2022-02-09 12:27:21
 * @Descripttion: 
 */
import '../styles/globals.scss'
import Layout from "@/layout";
import { fetchArticleTags } from '../services/article';
function MyApp({ Component, pageProps, router, tags }) {
 
  return <Layout tags={tags} router={router}><Component {...pageProps} /></Layout> 
}
MyApp.getInitialProps = async ({  pageProps }) => {
  const {data} = await fetchArticleTags()
  return { pageProps, tags: data }
}


export default MyApp
