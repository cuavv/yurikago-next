import Post from '~/types/post'

type Props = {
  post: Post
}

const Tags = ({ post }: Props) => {
  return (
    <div>
      {post.tags?.map((tag, i) => (
        <span key={i} className="badge me-2 text-bg-info bg-opacity-25">
          #{tag}
        </span>
      ))}
    </div>
  )
}

export default Tags
