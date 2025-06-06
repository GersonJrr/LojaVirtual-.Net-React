import { useState } from 'react'
import LoginComponente from '../Login/Components/LoginComponente'
import CadastroComponente from '../Login/Components/CadastroPage'

function LoginPage() {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[var(--cor-vermelho-bg)] overflow-hidden px-2">
      <div className="w-full max-w-md h-[560px] bg-white shadow-xl rounded-2xl p-4 sm:p-6 relative overflow-hidden ">
        <div
          className="flex w-[205%] h-full transition-transform duration-500 ease-in-out"
          style={{ transform: isRegister ? 'translateX(-50%)' : 'translateX(0)' }}
        >
          <div className="w-full">
            <LoginComponente onRegister={() => setIsRegister(true)} />
          </div>
          <div className="w-full">
            <CadastroComponente onBackToLogin={() => setIsRegister(false)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
