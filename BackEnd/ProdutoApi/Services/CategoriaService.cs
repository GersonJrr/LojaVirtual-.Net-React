using AutoMapper;
using ProdutoApi.DTOs;
using ProdutoApi.Models;
using ProdutoApi.Repositories;
using ProdutoApi.Services.Interfaces;

namespace ProdutoApi.Services
{
    public class CategoriaService : ICategoriaService
    {
        private ICategoriaRepository _categoriaRepository;
        private readonly IMapper _mapper;
        public CategoriaService(ICategoriaRepository categoriaRepository, IMapper mapper )
        {
            _categoriaRepository = categoriaRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CategoriaDTO>> GetCategorias()
        {
            var categoriasEntity = await _categoriaRepository.GetAll();
            return _mapper.Map<IEnumerable<CategoriaDTO>>(categoriasEntity);
        }
        public async Task<IEnumerable<CategoriaDTO>> GetCategoriasProdutos()
        {
            var categoriasEntity = await _categoriaRepository.GetCategoriasProdutos();
            return _mapper.Map<IEnumerable<CategoriaDTO>>(categoriasEntity);
        }

        public async Task<CategoriaDTO> GetCategoriaById(int id)
        {
            var categoriasEntity = await _categoriaRepository.GetCategoriaById(id);
            return _mapper.Map<CategoriaDTO>(categoriasEntity);
        }

        public async Task AddCategoria(CategoriaDTO categoriaDto)
        {
            var categoriasEntity = _mapper.Map<Categoria>(categoriaDto);
            await _categoriaRepository.Create(categoriasEntity);
            categoriaDto.CategoriaId = categoriasEntity.CategoriaId;
        }


        public async Task UpdateCategoria(CategoriaDTO categoriaDto)
        {
            var categoriaEntity = _mapper.Map<Categoria>(categoriaDto);
            await _categoriaRepository.Update(categoriaEntity);
        }



        public async Task RemoveCategoria(int id)
        {
            var categoriaEntity = _categoriaRepository.GetCategoriaById(id).Result;
            await _categoriaRepository.Delete(categoriaEntity.CategoriaId);
        }
    }
}
