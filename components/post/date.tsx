import dayjs from 'dayjs'
import Post from '~/types/post'

type Props = {
  post: Post
}

const Date = ({ post }: Props) => {
  const formattedDate = {
    attribute: dayjs(post.date).format('YYYY-MM-DD'),
    innerText: dayjs(post.date).format('YYYY/MM/DD'),
  }
  return (
    <div>
      <time dateTime={formattedDate.attribute}>{formattedDate.innerText}</time>
    </div>
  )
}

export default Date
