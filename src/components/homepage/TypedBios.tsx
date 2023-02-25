import React from 'react'
import Typed from 'typed.js'

export function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden" style={{ minHeight: 40 }}>
        <li>
          平时爱好 <span className="ml-1">🎱、 🏸️、 🏀、 🧗‍♀️ </span>，有志同道合之人可骚扰。
        </li>
        <li>
          平时 <b className="font-medium">只想工作，不想上班</b> 。
        </li>
        <li>道理都懂，不喝鸡汤，只想...</li>
        <li>
          早日实现 <b className="font-medium text-blue-500">财富自由</b>、
        </li>
        <li>
          早日走向 <b className="font-medium text-green-500">人生巅峰</b>、
        </li>
        <li>
          早日迎娶 <b className="font-medium text-red-500">白富美</b>。
        </li>
        <li>......</li>
        <li>以上几句都是不切实际的，这句才是真的...</li>
        <li>
          <b className="font-medium text-blue-500">做好自己，好好生活，天天向上。</b>
        </li>
        <li>......</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
