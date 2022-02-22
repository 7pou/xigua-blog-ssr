/*
 * @Author: zhao - 🍉
 * @Date: 2022-02-22 10:51:32
 * @LastEditTime: 2022-02-22 15:54:54
 * @LastEditors: zhao - 🍉
 * @Description: 
 * @FilePath: /xigua-blog-ssr/components/ScrollView/index.jsx
 */

import { useRef, useState } from "react"

const ScrollView = (props) => {
  const [prevScrollTop, setPrevScrollTop] = useState(0);
  const defaultProps = {
    onScroll: () => {},
    onScrollBottom: () => {},
    scrollBottomthreshold: 50,
    height: '100%'
  }
  const mergeProps = {...defaultProps, ...props}
  const ref = useRef()
  const handleScroll = (e) => {
    mergeProps.onScroll(e)

    const bottom = ref.current.scrollHeight - ref.current.scrollTop - ref.current.clientHeight
    if (bottom < mergeProps.scrollBottomthreshold && ref.current.scrollTop > prevScrollTop) {
      mergeProps.onScrollBottom()
    }
    setPrevScrollTop(ref.current.scrollTop)
  }

  const style = {
    overflowY: 'auto',
    height: mergeProps.height,
    ...mergeProps.style
  }
  return (
    <div ref={ref} style={style} onScroll={handleScroll}>
      {props.children}
    </div>
  )
}

export default ScrollView