import Head from 'next/head'
import Layout from '~/components/layout/layout'
import PostList from '~/components/list/list'
import { getAllPosts } from '~/lib/api'
import { createBreadcrumbSchemaObject } from '~/lib/schema/breadcrumb'
import Breadcrumb from '~/types/breadcrumb'
import Post from '~/types/post'

type Props = {
  allPosts: Post[]
}

const IndexPage = ({ allPosts }: Props) => {
  const breadcrumbs: Breadcrumb[] = [{ name: 'トップページ', path: '/' }]

  return (
    <Layout>
      <Head>
        <title>トップページ | {process.env.NEXT_PUBLIC_SITE_NAME}</title>
        <meta name="description" content={`技術ブログです。`} />
        <meta
          property="og:title"
          content={`トップページ | ${process.env.NEXT_PUBLIC_SITE_NAME}`}
        />
        <meta property="og:description" content={`技術ブログです。`} />
        <meta property="og:type" content="blog" />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_FRONT_URL}/`}
        />
        {/* 構造化マークアップ */}
        <script type="application/ld+json">
          {JSON.stringify(createBreadcrumbSchemaObject(breadcrumbs))}
        </script>
      </Head>
      <PostList posts={allPosts} />
    </Layout>
  )
}

export default IndexPage

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'slug',
    'title',
    'date',
    'excerpt',
    'tags',
    'published',
  ])

  return {
    props: { allPosts },
  }
}
