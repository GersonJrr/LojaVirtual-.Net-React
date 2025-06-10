import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import LogoPizza from "../assets/LogoPizza.png";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToLocalizacao = () => {
    const locationSection = document.getElementById("localizacao");
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
    const scrollToContato = () => {
    const locationSection = document.getElementById("contato");
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <section className="w-full h-[69px] bg-[var(--cor-bege-bg)] flex items-center px-8 relative">
      <div className="w-[149px] h-[40px] flex items-center">
        <img src={LogoPizza} alt="Logo pizzaria" className="h-full object-contain" />
      </div>

      <div className="hidden md:flex items-center ml-auto space-x-12">
        <div className="flex space-x-8 font-medium">
          <button className="border-b-2 border-transparent hover:border-[var(--cor-vermelho-bg)] transition-colors duration-300
        ">
            Menu
          </button>

          <button className="border-b-2 border-transparent hover:border-[var(--cor-vermelho-bg)] transition-colors duration-300
        ">
            Promoções
          </button>

          <button className="border-b-2 border-transparent hover:border-[var(--cor-vermelho-bg)] transition-colors duration-300
        "
          onClick={scrollToLocalizacao}>
            Localização
          </button>

          <button className="border-b-2 border-transparent hover:border-[var(--cor-vermelho-bg)] transition-colors duration-300
        "
          onClick={scrollToContato}>
            Contato
          </button>
        </div>
        <div className="flex space-x-4 font-medium">
          <button className="bg-[var(--cor-bege)] text-black px-4 py-2 rounded-md cursor-pointer hover:bg-[var(--cor-vermelho-bg)] hover:text-white transition-colors">
            <Link to="/login">Entrar</Link>
          </button>
          <button className="bg-[var(--cor-bege)] px-4 py-2 rounded-md cursor-pointer flex items-center justify-center hover:bg-[var(--cor-vermelho-bg)] transition-colors hover:text-white">
            <AiOutlineShoppingCart size={20} />
          </button>
        </div>
      </div>
      <button
        className="ml-auto md:hidden text-2xl"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <HiX /> : <HiOutlineMenu />}
      </button>
      {isMobileMenuOpen && (
        <div className="absolute top-[69px] left-0 w-full bg-[var(--cor-bege-bg)] flex flex-col items-start p-6 space-y-4 md:hidden z-50 shadow-md">
          <button>Menu</button>
          <button>Promoções</button>
          <button onClick={scrollToLocalizacao}>Localização</button>
          <button onClick={scrollToContato}>Contato</button>
          <Link
            to="/login"
            className="bg-[var(--cor-bege)] px-4 py-2 rounded-md hover:bg-[var(--cor-vermelho-bg)] transition-colors w-full text-center"
          >
            Entrar
          </Link>
          <span className="bg-[var(--cor-bege)] px-4 py-2 rounded-md flex items-center justify-center hover:bg-[var(--cor-vermelho-bg)] transition-colors w-full">
            <AiOutlineShoppingCart size={20} />
          </span>
        </div>
      )}
    </section>
  );
}

export default NavBar;