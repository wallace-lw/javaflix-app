import { useState } from 'react'

const CommentSubmition = () => {
  const [comment, setComment] = useState<string>('')

  function submitComment(e: React.FormEvent) {
    e.preventDefault()
    console.log(comment)
    setComment('')
  }

  return (
    <div className="flex flex-col">
      <span className="text-zinc-100 font-bold font-bebas text-xl tracking-wide">
        Insira um comentário...
      </span>
      <form className="w-full flex flex-col">
        <textarea
          className="w-full resize-none border rounded-md p-2 border-gray-500 bg-zinc-900 text-zinc-100"
          cols={20}
          rows={7}
          value={comment}
          placeholder="Escreva seu comentário aqui..."
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          type="submit"
          onClick={submitComment}
          className="self-end bg-red-600 text-zinc-100 p-2 w-60 mt-4 rounded-lg uppercase font-bebas text-lg tracking-wider cursor-pointer"
        >
          Enviar
        </button>
      </form>
    </div>
  )
}

export default CommentSubmition
