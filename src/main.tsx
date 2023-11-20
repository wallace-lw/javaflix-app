import 'react-toastify/dist/ReactToastify.css'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import App from './App.tsx'
import { MovieProvider } from './context/MovieContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
    <ToastContainer />
  </React.StrictMode>,
)
