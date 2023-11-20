/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { MovieData } from '../types/MovieData'
import { formatDate } from '../utils/formatDate'
import { Heart } from 'phosphor-react'
import { toast } from 'react-toastify'
import { SaveMovie } from '../types/SaveMovie'
import { MovieContext } from '../context/MovieContext'

const Details = () => {
  const imagePath = 'https://image.tmdb.org/t/p/w500'

  const { savedMovies, setSavedMovies } = useContext(MovieContext)

  const { id } = useParams()
  const [movie, setMovie] = useState<MovieData>({})
  const [isFavorite, setIsFavorite] = useState(false)

  const saveFavorite = async () => {
    const newFavoriteMovie: SaveMovie = {
      externalId: movie.id,
      poster_path: movie.poster_path,
      title: movie.title,
      overview: movie.overview,
      release_date: movie.release_date,
    }
    setSavedMovies([...savedMovies, newFavoriteMovie])

    toast(`${movie.title} foi para sua lista de favoritos.`)
    setIsFavorite(true)
  }

  useEffect(() => {
    try {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9bc990ba9bfb92ea95c7c11736c4c9dc&language=pt-BR&page=1`,
      )
        .then((reponse) => reponse.json())
        .then((data) => {
          setMovie(data)
        })
    } catch (error) {
      console.log(error)
    }
  }, [id])

  return (
    <>
      <div className="flex w-full justify-center items-center">
        <div className="bg-zinc-900 w-[700px] rounded-lg p-6 flex gap-8 h-fit">
          <img
            src={`${imagePath}${movie.poster_path}`}
            alt={movie.title}
            className="w-64 rounded-md max-h-[450px]"
          />
          <article className="text-zinc-100 flex gap-0 flex-col justify-between items-end">
            <div>
              <span className="mt-2 font-bold text-2xl font-bebas tracking-wider">
                {movie.title}
              </span>
              <p className="mt-4 text-lg h-fit">
                {movie.overview === '' ? 'Sem sinopse...' : movie.overview}
              </p>
              <p className="text-bold mt-4">
                Lançamento: {formatDate(movie.release_date)}
              </p>
            </div>
            <button
              className="w-fit bg-red-600 p-2 rounded-lg gap-2 uppercase transition-all flex  hover:bg-red-700"
              onClick={saveFavorite}
            >
              {isFavorite ? (
                <Heart weight="fill" size={28} />
              ) : (
                <Heart weight="bold" size={28} />
              )}
            </button>
          </article>
        </div>
      </div>
    </>
  )
}

export default Details
