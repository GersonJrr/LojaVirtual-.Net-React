import Pizza1 from "../../../assets/pizza1.png";
import Pizza2 from "../../../assets/pizza2.png";
import Pizza3 from "../../../assets/pizza3.png";

function SecondSection() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-left text-[22px] font-bold mb-6">Nossas pizzas</h1>

      <div className="flex flex-wrap gap-25 justify-center sm:justify-start">
        <div className="w-[301px] h-[169px] p-4 text-center">
          <img src={Pizza1} alt="Pizza img" className="w-full h-40 object-cover rounded-md mb-4" />
          <p className="font-bold text-lg">Pizza Calabresa</p>
          <span className="text-sm text-gray-600">
            Deliciosa pizza com calabresa, cebola e azeitonas.
          </span>
        </div>

        <div className="w-[301px] h-[169px]  p-4 text-center">
          <img src={Pizza2} alt="Pizza img" className="w-full h-40 object-cover rounded-md mb-4" />
          <p className="font-bold text-lg">Pizza de Frango com Catupiry</p>
          <span className="text-sm text-gray-600">
            Pizza tradicional com tomate, mussarela e manjericão.
          </span>
        </div>

       <div className="w-[301px] h-[169px]  p-4 text-center">
          <img src={Pizza3} alt="Pizza img" className="w-full h-40 object-cover rounded-md mb-4" />
          <p className="font-bold text-lg">Pizza de Margherita</p>
          <span className="text-sm text-gray-600">
            Deliciosa pizza com calabresa, cebola e azeitonas.
          </span>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;

