import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DetailsPage from './pages/DetailsPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import PrivateRoutes from './utils/PrivateRoute'
import RegistrationPage from './pages/RegistrationPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<HomePage />} path="/home" />
            <Route element={<ProfilePage />} path="/profile" />
            <Route element={<DetailsPage />} path="/details/:id" />
          </Route>
          <Route element={<LoginPage />} path="/" />
          <Route element={<RegistrationPage />} path="/register" />
        </Routes>
      </Router>
    </>
  )
}

export default App
