import { PageSeo } from '@/components/SEO'
import { BlogLinks } from '@/components/homepage/BlogLinks'
import { Greeting } from '@/components/homepage/Greeting'
import { Heading } from '@/components/homepage/Heading'
import { ShortDescription } from '@/components/homepage/ShortDescription'
import { TypedBios } from '@/components/homepage/TypedBios'
// import { ProfileCard } from '@/components/ProfileCard'
import { Twemoji } from '@/components/Twemoji'
import { siteMetadata } from 'data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mt-8 divide-y divide-gray-200 dark:divide-gray-700 md:mt-16">
        <div className="space-y-2">
          <div className="m-auto md:w-2/3">
            <Greeting />
            <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
              <Heading />
              <TypedBios />
              <ShortDescription />
              <BlogLinks />
              <p className="my-8 flex">
                <span className="mr-2">～得闲饮茶～</span>
                <Twemoji emoji="clinking-beer-mugs" />
              </p>
            </div>
          </div>
          {/* <div className="hidden xl:block">
            <ProfileCard />
          </div> */}
        </div>
      </div>
    </>
  )
}
