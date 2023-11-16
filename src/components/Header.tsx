import { Link } from 'react-router-dom'

const Header = () => {
  const token = localStorage.getItem('token')

  return (
    <header className="flex justify-center items-center p-12 bg-slate-950">
      <Link to={token ? '/home' : '/'}>
        <h1 className="text-red-600 text-6xl font-bebas tracking-wider text-center uppercase skew-y-2 2xl:text-8xl xl:text-7x">
          JAVAFLIX
        </h1>
      </Link>
    </header>
  )
}

export default Header
