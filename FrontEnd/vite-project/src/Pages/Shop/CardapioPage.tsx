import Footer from '../../Components/Footer';
import PizzaShop from './Components/PizzaShop';
import NavBarCardapio from './Components/NavBarCardapio';
import EsfihaShop from './Components/EsfihaShop';
import AcompanhamentosShop from './Components/AcompanhamentosShop';
import SobremesasShop from './Components/SobremesasShop';
import BebidasShop from './Components/BebidasShop';

function CardapioPage() {
  return (
    <>
      <NavBarCardapio />

      <h1 id="Pizzas" className="scroll-mt-24">Pizzas</h1>
      <PizzaShop />
      <div className="w-full h-px bg-gray-200" />

      <h1 id="Esfihas" className="scroll-mt-24">Esfihas</h1>
      <EsfihaShop />
      <div className="w-full h-px bg-gray-200" />

      <h1 id="Bebidas" className="scroll-mt-24">Bebidas</h1>
      <BebidasShop />
      <div className="w-full h-px bg-gray-200" />

      <h1 id="Acompanhamentos" className="scroll-mt-24">Acompanhamentos</h1>
      <AcompanhamentosShop />
      <div className="w-full h-px bg-gray-200" />

      <h1 id="Sobremesas" className="scroll-mt-24">Sobremesas</h1>
      <SobremesasShop />
      <div className="w-full h-px bg-gray-200" />

      <Footer />
    </>
  );
}

export default CardapioPage;