import { Link } from 'react-router-dom'
import Movie from './Movie'
import { useEffect, useState } from 'react'
import { MovieData } from '../types/MovieData'

const FavoriteMovies = () => {
  const imagePath = 'https://image.tmdb.org/t/p/w500'

  const [movies, setMovies] = useState<MovieData[]>([])

  useEffect(() => {
    const movies = localStorage.getItem('savedMovies')
    if (movies) {
      setMovies(JSON.parse(movies))
    }
  }, [])

  return (
    <>
      <h2 className="font-bebas uppercase text-red-600 text-5xl tracking-wider w-full px-36 py-16">
        Favoritos
      </h2>

      <div className="w-full grid gap-8 mt-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-5">
        {movies.map((movie) => {
          return (
            <Link
              to={`/favorite-details/${movie.externalId}`}
              key={movie.externalId}
            >
              <Movie
                key={movie.externalId}
                title={movie.title}
                image={`${imagePath}${movie.poster_path}`}
                id={movie.id}
              />
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default FavoriteMovies
