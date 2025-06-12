import { useEffect, useState } from "react";
import CardProduto from "../../../Components/CardProduto";
import type { Produto } from "../../../Interface/Produto";

export default function PizzaShop() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [limite, setLimite] = useState(6);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const response = await fetch("https://localhost:7145/api/Produtos");
        if (!response.ok) throw new Error("Erro ao buscar produtos");

        const data = await response.json();

        const pizzas = data.filter((p: Produto) =>
          p.nome.toLowerCase().includes("pizza")
        );

        setProdutos(pizzas);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    carregarProdutos();
  }, []);

  return (
    <div className="px-4 py-8">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-40 gap-6">
          {produtos.slice(0, limite).map((pizza) => (
            <CardProduto
              key={pizza.id}
              id={pizza.id}
              nome={pizza.nome}
              preco={pizza.preco}
              descricao={pizza.descricao}
              imageURL={pizza.imageURL}
            />
          ))}
        </div>
      </div>

      {limite < produtos.length && (
        <div className="flex justify-center mt-6">
          <button
            className="bg-[var(--cor-vermelho-bg)] text-white px-6 py-2 rounded hover:opacity-50 transition-opacity"
            onClick={() => setLimite((prev) => prev + 6)}
          >
            Ver mais
          </button>
        </div>
      )}
    </div>

  );
}
