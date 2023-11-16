import { toast } from 'react-toastify'
import api from './api'
import { AxiosError } from 'axios'

export const findFavoritesMovies = async () => {
  try {
    const { data } = await api.get('/movies')
    return data
  } catch (error) {
    const axiosError = error as AxiosError
    toast.error(axiosError.message)
  }
}
