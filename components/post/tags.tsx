import Post from '~/types/post'

type Props = {
  post: Post
}

const Tags = ({ post }: Props) => {
  return (
    <div className="py-1">
      {post.tags?.map((tag, i) => (
        <span key={i} className="badge text-bg-info bg-opacity-25 me-2">
          #{tag}
        </span>
      ))}
    </div>
  )
}

export default Tags
