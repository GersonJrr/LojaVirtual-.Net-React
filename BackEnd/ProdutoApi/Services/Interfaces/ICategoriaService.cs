using ProdutoApi.DTOs;

namespace ProdutoApi.Services.Interfaces
{
    public interface ICategoriaService
    {
        Task<IEnumerable<CategoriaDTO>> GetCategorias();
        Task<IEnumerable<CategoriaDTO>> GetCategoriasProdutos();
        Task<CategoriaDTO> GetCategoriaById(int id);
        Task AddCategoria(CategoriaDTO categoriaDto);
        Task UpdateCategoria(CategoriaDTO categoriaDto);
        Task RemoveCategoria(int id);

    }
}
