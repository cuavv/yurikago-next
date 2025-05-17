import Post from '~/types/post'
import 'github-markdown-css'

type Props = {
  post: Post
}

const Content = ({ post }: Props) => {
  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: post.content || '' }}
    ></div>
  )
}

export default Content
