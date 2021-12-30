import React from 'react'

const Footer = (props) => {
  const style= {
    position: 'fixed',
    bottom: '20px',
    width: '100%',
    textAlign: 'center',
    fontSize: '12px',
  }
  return (
    <footer style={style}>
      <a href="https://icp.gov.moe/?keyword=20212102" target="_blank">萌ICP备20212102号</a>
      <a href="http://beian.miit.gov.cn" target="_blank"  >粤ICP备18096562号</a>
    </footer>
  )
}

export default Footer