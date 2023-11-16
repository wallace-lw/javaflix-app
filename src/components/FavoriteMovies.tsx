/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MovieData } from '../types/MovieData'
import Movie from './Movie'
import axios, { AxiosError } from 'axios'
import { toast } from 'react-toastify'

const FavoriteMovies = () => {
  const [movies, setMovies] = useState<MovieData[]>([])

  const imagePath = 'https://image.tmdb.org/t/p/w500'

  // substituir pela requisição da api de java

  const fetchMovies = () => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=9bc990ba9bfb92ea95c7c11736c4c9dc&language=pt-BR&page=1`,
        )
        setMovies(data.results)
      } catch (error) {
        const axiosError = error as AxiosError
        toast.error(axiosError.message)
      }
    })()
  }

  useEffect(fetchMovies, [])

  return (
    <>
      <h2 className="font-bebas uppercase text-red-600 text-5xl tracking-wider w-full px-36 py-16">
        Favoritos
      </h2>

      <div className="w-full grid gap-8 mt-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-5">
        {movies.map((movie) => {
          return (
            <Link to={`/details/${movie.id}`} key={movie.id}>
              <Movie
                key={movie.id}
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
