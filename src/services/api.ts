import axios, { AxiosInstance } from 'axios'
import { BASE_URL } from './baseUrl'

const token = localStorage.getItem('token')

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})

export default api
