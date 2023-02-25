import { PageSeo } from '@/components/SEO'
import { POSTS_PER_PAGE } from '@/constant'
import { siteMetadata } from 'data/siteMetadata'
import { ListLayout } from '@/layouts/ListLayout'
import { getAllFilesFrontMatter } from '@/libs/mdx'
import type { BlogListProps } from '@/types'

export function getStaticProps() {
  let posts = getAllFilesFrontMatter('blog')
  let initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  let pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return { props: { posts, initialDisplayPosts, pagination } }
}

export default function Blog({ posts, initialDisplayPosts, pagination }: BlogListProps) {
  return (
    <>
      <PageSeo title={`笔记 - ${siteMetadata.author}`} description={siteMetadata.description} />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="笔记"
      />
    </>
  )
}
