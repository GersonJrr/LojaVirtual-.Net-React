import LogoPizza from "../assets/LogoPizza.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full h-[69px] bg-[var(--cor-bege-bg)] flex items-center px-8">

      <div className="w-[149px] h-[40px] flex items-center">
        <img src={LogoPizza} alt="Logo pizzaria" className="h-full object-contain" />
      </div>

      <div className="flex items-center ml-auto space-x-12">
        <div className="flex space-x-8 font-medium">
          <span>Menu</span>
          <span>Promoções</span>
          <span>Localização</span>
          <span>Contato</span>
        </div>
      <div className="flex space-x-4 font-medium">
        <span className="bg-[var(--cor-bege)] px-4 py-2         rounded-md cursor-pointer hover:bg-[var(--cor-vermelho-bg)] transition-colors">
          <Link to="/login">Entrar</Link>
        </span>
        <span className="bg-[var(--cor-bege)] px-4 py-2 rounded-md cursor-pointer flex items-center justify-center hover:bg-[var(--cor-vermelho-bg)] transition-colors">
          <AiOutlineShoppingCart size={20} />
        </span>
      </div>

      </div>

    </div>
  );
}

export default NavBar;
