import Image from 'next/image'
import { Link } from '@/components/Link'
import { Twemoji } from '@/components/Twemoji'

export default function FourZeroFour() {
  return (
    <div className="flex flex-col items-center justify-center pt-4 md:pt-10 xl:pt-20">
      <div>
        <Image src={'/static/404.png'} alt="404" width={500} height={500} />
      </div>
      <div className="space-x-2 pt-8 md:space-y-5 md:pt-12 xl:pt-16">
        <div className="max-w-md text-center">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            en.. 上哪了？？ <Twemoji emoji={'face-with-monocle'} />
          </p>
          <p className="mb-8">没关系, 可以点击上面导航查看其他或返回博客首页</p>
          <Link href="/">
            <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500">
              返回
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
