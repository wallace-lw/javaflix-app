import axios, { AxiosError } from 'axios'
import { User } from '../types/User'
import { BASE_URL } from './baseUrl'
import { toast } from 'react-toastify'

export const userRegistration = async (data: User) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      ...data,
    })
    return response.data
  } catch (error) {
    const axiosError = error as AxiosError
    if (axiosError.response?.status === 401) {
      toast.error(
        `${axiosError.response.status}: Não autorizado a registrar o usuário.`,
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
