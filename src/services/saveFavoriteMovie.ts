import api from './api'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'
import { SaveMovie } from '../types/SaveMovie'

export const saveFavoriteMovie = async (data: SaveMovie) => {
  try {
    const response = await api.post('/save', {
      ...data,
    })
    console.log(response)
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.response?.status === 401) {
      toast.error(
        `${axiosError.response.status}: Não autorizado a favoritar o filme.`,
      )
    }

    if (axiosError.response?.status === 500) {
      toast.error(
        `${axiosError.response.status}: Algo de errado com o servidor, contate o suporte técnico.`,
      )
    }
    if (axiosError.response?.status === 400) {
      toast.error(
        `${axiosError.response.status}: Verifique se está enviando os dados corretamente.`,
      )
    }
  }
}
