import Comment from './Comment'
import CommentSubmition from './CommentSubmition'

const FeedbackSession = () => {
  /*   const [comments, setComments] = useState<Comments[]>([]) */

  return (
    <div className=" bg-zinc-900 w-[700px] rounded-lg p-6">
      <CommentSubmition />
      <h2 className="text-zinc-100 uppercase font-bebas text-3xl mb-4">
        Comentários
      </h2>

      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4].map((_comment, index) => {
          return <Comment key={index} />
        })}
      </div>
    </div>
  )
}

export default FeedbackSession
