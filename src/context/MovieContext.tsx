import React, { createContext, useState, useEffect } from 'react'
import { MovieData } from '../types/MovieData'

interface IProvider {
  children: JSX.Element
}

interface IContext {
  savedMovies: MovieData[]
  setSavedMovies: React.Dispatch<React.SetStateAction<MovieData[]>>
}

export const MovieContext = createContext<IContext>({} as IContext)

export const MovieProvider = ({ children }: IProvider) => {
  const [savedMovies, setSavedMovies] = useState<MovieData[]>(() => {
    const localData = localStorage.getItem('savedMovies')
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    localStorage.setItem('savedMovies', JSON.stringify(savedMovies))
  }, [savedMovies])

  return (
    <MovieContext.Provider value={{ savedMovies, setSavedMovies }}>
      {children}
    </MovieContext.Provider>
  )
}
