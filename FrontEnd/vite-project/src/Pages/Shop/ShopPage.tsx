import React, { useEffect, useState } from 'react';
import type { Produto } from "../../Interface/Produto";

function ShopPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://localhost:7145/api/Produtos')
    
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        return response.json();
      })
      .then((data: Produto[]) => {
        setProdutos(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Carregando produtos...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <h1>Loja</h1>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>Preço: R$ {produto.preco}</p>
            {produto.imageURL && <img src={produto.imageURL} alt={produto.nome} width="150" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopPage;
