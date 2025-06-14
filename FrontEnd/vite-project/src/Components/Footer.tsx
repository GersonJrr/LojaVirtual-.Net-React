
function Footer() {
  return (
    <div className="w-full h-[250px] mx-auto flex flex-col items-center justify-center space-y-6 items overflow-hidden text-[var(--cor-bege-Letra)] bg-[var(--cor-bege-bg)]">
      
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 md:space-x-16 lg:space-x-60 mr-0 sm:mr-26 text-center sm:text-left">
        <span>Política de Privacidade</span>
        <span>Termo de Serviço</span>
        <span>Contato</span>
      </div>

      <div className="flex space-x-10">
        <img src="https://mysitefotos.s3.us-east-1.amazonaws.com/xIcon.svg" alt="X Icon" className="w-6 h-6" />
        <img src="https://mysitefotos.s3.us-east-1.amazonaws.com/facebook.svg" alt="Facebook Icon" className="w-6 h-6" />
        <img src="https://mysitefotos.s3.us-east-1.amazonaws.com/instagram.svg" alt="Instagram Icon" className="w-6 h-6" />
      </div>

      <div>
        <span className="text-sm">© 2025 Pizza Palace. Todos os direitos reservados.</span>
      </div>

    </div>
  );
}

export default Footer;
