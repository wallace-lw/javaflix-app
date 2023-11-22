import { Heart } from 'phosphor-react'
import { useState } from 'react'
const Comment = () => {
  const [liked, setLiked] = useState(false)
  const username = localStorage.getItem('username')
  if (!username) return ''
  const firstLetterName = username.charAt(0)

  function handleLikedComment() {
    setLiked(!liked)
  }

  return (
    <div className="w-full h-fit border-b-[1px] border-b-gray-500 pb-4">
      {/* Avatar */}
      <div className="flex flex-col gap-2">
        <div className="flex w-fit items-center gap-2">
          <div className="w-[50px] h-[50px] bg-red-600 text-zinc-50 flex items-center justify-center rounded-[25%] text-lg font-bold mb-24">
            {firstLetterName}
          </div>
          <article className="w-fit">
            <span className="text-zinc-50 font-bold">{username}</span>
            <p className="text-zinc-100 font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              nisi error ullam vel sit, doloribus sequi quam nihil eveniet culpa
              ad iste aliquid, fugit maiores quia at nostrum libero illo?Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Atque nisi
              error ullam vel sit, doloribus sequi quam nihil eveniet culpa ad
              iste aliquid, fugit maiores quia at nostrum libero illo?
            </p>
          </article>
        </div>

        <div className="w-full flex items-center justify-end">
          <Heart
            className={liked ? 'text-red-500' : 'text-zinc-400'}
            onClick={handleLikedComment}
            size={24}
            weight={liked ? 'fill' : 'light'}
          />
        </div>
      </div>
    </div>
  )
}

export default Comment
