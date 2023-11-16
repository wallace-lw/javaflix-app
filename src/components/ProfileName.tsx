import { SignOut } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

const ProfileContainer = () => {
  const navigate = useNavigate()

  const userName = localStorage.getItem('username')

  function Logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    navigate('/')
  }

  return (
    <div className="py-10 w-full flex gap-5 justify-center items-center">
      <button
        className="  bg-red-600 text-start text-zinc-100 font-bold tracking-wide text-lg px-10 py-3 gap-3 rounded-xl transition-all hover:scale-105 xl:w-[600px] md:w-[350px] "
        onClick={() => navigate('/profile')}
      >
        {userName}
      </button>
      <button
        className="w-fit bg-red-600 text-zinc-100 p-3 text-lg rounded-xl transition-all hover:scale-105"
        onClick={Logout}
      >
        <SignOut size={24} weight="bold" />
      </button>
    </div>
  )
}

export default ProfileContainer
