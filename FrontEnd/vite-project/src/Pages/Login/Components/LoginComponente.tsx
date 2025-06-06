import LogoPizza from '../../../assets/LogoPizza.png'
import googleIcon from '../../../assets/googleIcon.svg'
import appleLogo from '../../../assets/appleLogo.svg'
import { Link } from "react-router-dom";

interface LoginComponenteProps {
  onRegister: () => void
}

export default function LoginComponente({ onRegister }: LoginComponenteProps) {
  return (
    <div className="w-full flex flex-col justify-center px-4 overflow-y-auto items-center">
      <div className="w-full h-[100px] flex justify-center mb-6 pr-8">
        <Link to="/">
          <img src={LogoPizza} alt="Logo Pizza" className="w-[230px] h-[80px]" />
        </Link>
      </div>

      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-5">Login</h2>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="w-85 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-[var(--cor-vermelho-bg)] text-white py-2 rounded-md hover:bg-[var(--cor-bege-claro)] transition"
        >
          Entrar
        </button>
      </form>
      <p className="text-center text-sm text-gray-500 mt-4 cursor-pointer">Esqueceu a senha?</p>
      <div className="flex flex-col items-center mt-3">
        <span className="text-sm text-gray-500 mb-4">Ou entre com</span>
        <div className="flex items-center space-x-6">
          <img src={googleIcon} alt="Google Icon" className="w-8 h-8 cursor-pointer" />
          <img src={appleLogo} alt="Apple Icon" className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
      <button
        onClick={onRegister}
        className="mt-6 text-sm text-blue-600 underline text-center"
        type="button"
      >
        Cadastrar-se
      </button>
    </div>
  )
}
