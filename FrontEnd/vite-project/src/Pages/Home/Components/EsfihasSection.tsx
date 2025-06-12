import Esfiha1 from "../../../assets/Esfiha1.png";
import Esfiha2 from "../../../assets/Esfiha2.png";
import Esfiha3 from "../../../assets/Esfiha3.png";

function EsfihasSection() {
  return (
    <section className="px-4 py-8">
      <h1 className="text-left text-[22px] font-bold mb-6">Esfihas</h1>

      <div className="flex flex-wrap gap-25 justify-center sm:justify-start">
        <div className="w-[301px] h-[169px] p-4 text-center">
          <img src={Esfiha1} alt="Pizza img" className="w-full h-40 object-cover rounded-md mb-4" />
          <p className="font-bold text-lg">Esfiha Calabresa</p>
          <span className="text-sm text-gray-600">
            Deliciosa Esfiha com calabresa, cebola e azeitonas.
          </span>
        </div>

        <div className="w-[301px] h-[169px]  p-4 text-center">
          <img src={Esfiha2} alt="Pizza img" className="w-full h-40 object-cover rounded-md mb-4" />
          <p className="font-bold text-lg">Esfiha de Frango com Catupiry</p>
          <span className="text-sm text-gray-600">
            Esfiha tradicional com tomate, mussarela e manjericão.
          </span>
        </div>

       <div className="w-[301px] h-[169px]  p-4 text-center">
          <img src={Esfiha3} alt="Pizza img" className="w-full h-40 object-cover rounded-md mb-4" />
          <p className="font-bold text-lg">Esfiha de Margherita</p>
          <span className="text-sm text-gray-600">
            Deliciosa Esfiha com calabresa, cebola e azeitonas.
          </span>
        </div>
      </div>
    </section>
  );
}

export default EsfihasSection;

