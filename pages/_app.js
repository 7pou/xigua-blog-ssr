/*
 * @Author: zhao - 🍉
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: zhao - 🍉
 * @LastEditTime: 2021-11-17 10:37:41
 * @Descripttion: 
 */
import '../styles/globals.scss'
import Layout from "@/layout";
function MyApp({ Component, pageProps, router }) {
  const noLayoutRouteList = ['/']
  if (noLayoutRouteList.includes(router.route) ) {
    return <Component {...pageProps} />
  }
  return <Layout><Component {...pageProps} /></Layout> 
}


export default MyApp
