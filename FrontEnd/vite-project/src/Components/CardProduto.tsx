import type { Produto } from "../Interface/Produto";

export default function CardProduto({ nome, descricao, imageURL, preco }: Produto) {
  return (
    <div className="w-[301px] p-4 text-center rounded-md hover:shadow-lg transition">
      <img
        src={imageURL}
        alt={`Imagem de ${nome}`}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <p className="font-bold text-lg">{nome}</p>
      {descricao && <span className="text-sm text-gray-600 block">{descricao}</span>}
      {preco !== undefined && (
        <p className="text-sm text-green-600 font-semibold mt-1">R$ {preco.toFixed(2)}</p>
      )}
    </div>
  );
}