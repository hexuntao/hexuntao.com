import { Link } from '../Link'
import { Twemoji } from '../Twemoji'

export function BlogLinks() {
  return (
    <div className="flex flex-col items-start space-y-1.5">
      <Link href="/blog" className="hover:underline">
        <Twemoji emoji="memo" />
        <span className="umami--click--home-link-blog ml-1.5">代码笔记</span>
      </Link>
      {/* <Link href="/life" className="hover:underline">
        <Twemoji emoji="dna" />
        <span className="umami--click--home-link-snippets ml-1.5">分享生活</span>
      </Link> */}
      <Link href="/about" className="hover:underline">
        <Twemoji emoji="face-with-monocle" />
        <span className="umami--click--home-link-about ml-1.5">更多关于我的</span>
      </Link>
    </div>
  )
}
