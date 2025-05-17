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
    <div>
      {/* 作成日 */}
      <div>
        <time dateTime={formattedDate.attribute}>
          {formattedDate.innerText}
        </time>
      </div>

      {/* タグ */}
      <Tags post={post} />

      {/* タイトル */}
      {/* note: 既存のマージンを打ち消す */}
      <h1 className="my-2">{post.title}</h1>
    </div>
  )
}

export default Header
