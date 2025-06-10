import Bebidas from "../assets/Bebidas.png";
import acompanhamentos from "../assets/acompanhamentos.png";
import sobremesas from "../assets/sobremesas.png";

function RecomendadoSection() {
  return (
    <section className="px-4 py-8 mt-20">
      <h1 className="text-left text-[22px] font-bold mb-6">Recomendados</h1>

      <div className="flex flex-wrap gap-25 justify-center sm:justify-start">
        <div className="w-[301px] text-center">
          <img src={Bebidas} alt="Pizza img" className="w-full h-70 object-cover rounded-md mb-4" />
          <p className="font-bold text-lg">Bebidas</p>
          <span className="text-sm text-gray-600">
            Refrigerantes, sucos e cervejas para acompanhar sua pizza.
          </span>
        </div>

        <div className="w-[301px] text-center">
          <img src={acompanhamentos} alt="Pizza img" className="w-full h-70 object-cover rounded-md mb-4" />
          <p className="font-bold text-lg">Sobremesas</p>
          <span className="text-sm text-gray-600">
            Doces e sobremesas para finalizar sua refeição.
          </span>
        </div>

       <div className="w-[301px] text-center">
          <img src={sobremesas} alt="Pizza img" className="w-full h-70 object-cover rounded-md mb-4" />
          <p className="font-bold text-lg">Acompanhamentos</p>
          <span className="text-sm text-gray-600">
            Pão de alho, batata frita e outros acompanhamentos.
          </span>
        </div>
      </div>
    </section>
  );
}

export default RecomendadoSection;

