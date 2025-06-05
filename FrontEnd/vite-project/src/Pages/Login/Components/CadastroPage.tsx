import LogoPizza from '../../../assets/LogoPizza.png'

interface CadastroComponenteProps {
  onBackToLogin: () => void
}

export default function CadastroComponente({ onBackToLogin }: CadastroComponenteProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className=" h-[100px] mb-6 pr-8">
        <img
          src={LogoPizza}
          alt="Logo Pizza"
          className="w-[230px] h-[80px]"
        />
      </div>
      <h2 className="text-2xl font-semibold text-center text-gray-800 mt-[-30px] mb-2.5">Cadastro</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nome"
          className="w-85 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          placeholder="Telefone"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Confirmar senha"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-[var(--cor-bege)] text-white py-2 rounded-md hover:bg-[var(--cor-bege-claro)] transition"
        >
          Cadastrar
        </button>
      </form>
      <button
        onClick={onBackToLogin}
        className="mt-6 text-sm text-blue-600 underline text-center"
        type="button"
      >
        Voltar ao Login
      </button>
    </div>
  )
}
