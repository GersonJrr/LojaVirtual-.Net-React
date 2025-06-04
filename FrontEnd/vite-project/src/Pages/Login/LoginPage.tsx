import LogoPizza from '../../assets/LogoPizza.svg'
import appleLogo from '../../assets/appleLogo.svg'
import googleIcon from '../../assets/googleIcon.svg'

function LoginPage() {

  return (
   <>
      <div className="w-full min-h-screen flex items-center justify-center bg-[var(--cor-bege-claro)] overflow-x-hidden ">
        <div className="w-[90vw] max-w-[400px] h-auto sm:w-[350px] sm:h-[500px] md:w-[400px] md:h-[520px] bg-white shadow-xl rounded-2xl p-6 flex flex-col justify-center">
          <div className="w-full h-[100px] flex justify-center mb-6">
            <img src={LogoPizza} alt="Logo Pizza" className="max-w-full max-h-full object-contain ml-45" />
          </div>
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Senha"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-[var(--cor-bege)] text-white py-2 rounded-md hover:bg-[var(--cor-bege-claro)] transition"
            >
              Entrar
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">Esqueceu a senha?</p>
          <div className="w-[32px] h-[] flex space-x-7 ml-32 mt-9">
            <img src={googleIcon} alt="Google Icon"/>
            <img src={appleLogo} alt="Apple Icon"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage;
