import { MovieData } from '../types/MovieData'

const Movie = ({ image, title }: MovieData) => {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-56 rounded-md transition-all hover:shadow-[5px_5px_0px_0px_#E50914] hover:scale-105"
      />
      <span className="text-zinc-100  text-lg font-semibold mt-3 w-56 text-center pb-2">
        {title}
      </span>
    </div>
  )
}

export default Movie
