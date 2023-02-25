import { siteMetadata } from 'data/siteMetadata'

export function Heading() {
  return (
    <h1 className="text-neutral-900 dark:text-neutral-200">
      我是 <span className="font-medium">{siteMetadata.author}</span> - 一名{' '}
      <span className="font-medium">专注于 Node 全栈开发 </span>的 90后。
    </h1>
  )
}
