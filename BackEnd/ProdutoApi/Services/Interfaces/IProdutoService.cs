using ProdutoApi.DTOs;

namespace ProdutoApi.Services.Interfaces
{
    public interface IProdutoService
    {
        Task<IEnumerable<ProdutoDTO>> GetProdutos();
        Task<ProdutoDTO> GetProdutoById(int id);
        Task AddProduto(ProdutoDTO productDto);
        Task UpdateProduto(ProdutoDTO produtoDto);
        Task RemoveProduto(int id);
    }
}
