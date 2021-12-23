/*
 * @Author: zhao - 🍉
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: zhao - 🍉
 * @LastEditTime: 2021-12-23 15:03:43
 * @Descripttion: 
 */
import '../styles/globals.scss'
import Layout from "@/layout";
import { fetchArticleTags } from '../services/article';
function MyApp({ Component, pageProps, router, tags }) {
  const noLayoutRouteList = ['/']
  if (noLayoutRouteList.includes(router.route) ) {
    return <Component {...pageProps} />
  }
  return <Layout tags={tags}><Component {...pageProps} /></Layout> 
}
MyApp.getInitialProps = async ({  pageProps }) => {
  const {data} = await fetchArticleTags()
  return { pageProps, tags: data }
}


export default MyApp
