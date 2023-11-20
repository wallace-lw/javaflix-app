/* eslint-disable prefer-const */
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const user = localStorage.getItem('token')
  return user ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRoutes
