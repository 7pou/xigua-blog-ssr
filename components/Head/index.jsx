import React from 'react'
import Head from "next/head";

class HeadConfig extends React.Component{

  parseJoin(content, fill) {
    if (!content) {
      return fill
    }
    if (typeof content === 'string') {
      return content
    }
    return content.join('')
  }

  getKeywords() {
    const defaults = '掘金官网,前端,前端面试题,JavaScript,Vue.js,React.js,Node.js,CSS,Webpack,微信小程序'
    return this.parseJoin(this.props.keywords, defaults)
  }
  getDescription() {
    const defaults = '掘金是一个帮助开发者成长的社区,技术大牛和极客共同编辑为你筛选出最优质的前端干货,包括：JavaScript,Vue.js,React.js,Node.js,CSS,Webpack,微信小程序,面试,TypeScript,Flutter,浏览器,GitHub,Promise,前端架构（等前端技术大全'
    return this.parseJoin(this.props.keywords, defaults) + '。'
  }

  render(){
 
    return (
      <Head>
        {this.props.children}
        <meta name="keywords" content={this.getKeywords()} />
        <meta name="description" content={this.getDescription()} />
      </Head>
    )
  }
}

export default HeadConfig