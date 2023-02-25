import React from 'react'
import Typed from 'typed.js'

export function ShortDescription() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed('#intro', {
      strings: [
        '从2017年开始第一份编码工作，距今已有6年工作经验。<br/> 从原先的前端开发到之后开始学习Node全栈。 <br/> 目前主要技术栈 NestJs、ReactJs、VueJs、NextJs ... <br/> 该博客主要分享知识和编码经验，以及记录平时生活点滴。',
      ],
      typeSpeed: 60,
      backSpeed: 20,
      loop: false,
      showCursor: false,
      backDelay: 3000,
    })
    return () => typed.current.destroy()
  }, [])

  return <div id="intro" style={{ minHeight: 128 }} className="mt-4 mb-8"></div>
}
