import Link from 'next/link'
import Date from '~/components/post/date'
import Tags from '~/components/post/tags'
import Post from '~/types/post'

type Props = {
  post: Post
}

const ListItem = ({ post }: Props) => {
  return (
    <div className="py-3">
      <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
        <a className="text-decoration-none text-reset">
          {/* 作成日 */}
          <Date post={post} />

          {/* タグ */}
          <Tags post={post} />

          {/* タイトル */}
          {/* note: 既存のマージンを打ち消す */}
          <h2 className="my-2">{post.title}</h2>

          {/* 概要 */}
          <div className="text-muted">{post.excerpt}</div>
        </a>
      </Link>
    </div>
  )
}

export default ListItem
