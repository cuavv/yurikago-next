import Date from '~/components/post/date'
import Tags from '~/components/post/tags'
import Post from '~/types/post'

type Props = {
  post: Post
}

const Header = ({ post }: Props) => {
  return (
    <div>
      {/* 作成日 */}
      <Date post={post} />

      {/* タグ */}
      <Tags post={post} />

      {/* タイトル */}
      {/* note: 既存のマージンを打ち消す */}
      <h1 className="my-4">{post.title}</h1>
    </div>
  )
}

export default Header
