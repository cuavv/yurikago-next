import dayjs from 'dayjs'
import Tags from '~/components/post/tags'
import Post from '~/types/post'

type Props = {
  post: Post
}

const Header = ({ post }: Props) => {
  const formattedDate = {
    attribute: dayjs(post.date).format('YYYY-MM-DD'),
    innerText: dayjs(post.date).format('YYYY/MM/DD'),
  }
  return (
    <div className="py-3">
      {/* 作成日 */}
      <div>
        <time dateTime={formattedDate.attribute}>
          {formattedDate.innerText}
        </time>
      </div>

      {/* タグ */}
      <Tags post={post} />

      {/* タイトル */}
      <h1 className="my-0 py-1">{post.title}</h1>
    </div>
  )
}

export default Header
