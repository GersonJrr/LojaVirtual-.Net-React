using ProdutoApi.Models;

namespace ProdutoApi.Repositories.Interfaces
{
    public interface IProdutoRepository
    {
        Task<IEnumerable<Produto>> GetAll();
        Task<Produto> GetById(int id);
        Task<Produto> Create(Produto produto);
        Task<Produto> Update(Produto produto);
        Task<Produto> Delete(int id);
    }
}
