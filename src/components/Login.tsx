import { useState } from 'react'
import { userLogin } from '../services/userLogin'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleLogin(e: React.FormEvent) {
    try {
      e.preventDefault()
      const data = { username, password }
      const response = await userLogin(data)
      const decodedName = jwtDecode(response)
      const decodedUsername = decodedName.sub?.toString()

      if (!decodedUsername) return ''

      localStorage.setItem('token', response)
      localStorage.setItem('username', decodedUsername)

      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full bg-slate-950">
      <form
        onSubmit={handleLogin}
        className="bg-slate-950 flex items-center flex-col gap-2 pt-48"
      >
        <div className="flex flex-col gap-1">
          <label className="text-zinc-300 text-lg font-medium">Usuário</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-[300px] p-2 border-slate-500 rounded-sm outline-none focus:border-red-600 md:w-96 sm:w-80"
            required
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-zinc-300 text-lg font-medium">Senha</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-[300px] p-2 border-slate-500 rounded-sm outline-none focus:border-red-600 md:w-96 sm:w-80"
            required
            type="password"
          />
        </div>

        <button
          className="w-[300px] bg-red-600 text-zinc-50 p-3 rounded-sm mt-6 uppercase text-lg font-bold tracking-wide transition-all hover:bg-red-700  md:w-96 sm:w-80"
          type="submit"
        >
          Entrar
        </button>
        <a
          href="/register"
          className="w-[300px] bg-transparent text-red-500 hover:underline text-sm mt-2 md:w-96 sm:w-80"
        >
          Crie sua conta...
        </a>
      </form>
    </div>
  )
}

export default Login
