import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userRegistration } from '../services/userRegistration'
import { toast } from 'react-toastify'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleRegistration(e: React.FormEvent) {
    try {
      e.preventDefault()
      const data = { username, password }
      await userRegistration(data)
      toast.success('Usuário criado!!')
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="w-full bg-slate-950">
      <form
        onSubmit={handleRegistration}
        className="bg-slate-950 flex items-center justify-center flex-col gap-2 pt-20 md:pt-48"
      >
        <div className="flex flex-col gap-1">
          <label className="text-zinc-300 text-lg font-medium text-start">
            Usuário
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-[300px] p-2 border-slate-500 rounded-sm outline-none md:w-96 sm:w-80"
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

        <button className=" w-[300px] bg-red-600 text-zinc-50 p-3 rounded-sm mt-6 uppercase text-lg font-bold tracking-wide transition-all hover:bg-red-700  md:w-96 sm:w-80">
          Cadastrar
        </button>
      </form>
    </div>
  )
}

export default Register
