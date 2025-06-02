using AutoMapper;
using ProdutoApi.DTOs;
using ProdutoApi.Models;
using ProdutoApi.Repositories.Interfaces;
using ProdutoApi.Services.Interfaces;

namespace ProdutoApi.Services
{
    public class ProdutoService : IProdutoService
    {
        private IProdutoRepository _produtoRepository;
        private readonly IMapper _mapper;
        public ProdutoService(IProdutoRepository produtoRepository, IMapper mapper)
        {
            _produtoRepository = produtoRepository;
            _mapper = mapper;
        }
        public async Task<IEnumerable<ProdutoDTO>> GetProdutos()
        {  
            var produtoEntity = await _produtoRepository.GetAll();
            return _mapper.Map<IEnumerable<ProdutoDTO>>(produtoEntity);
        }
        public async Task<ProdutoDTO> GetProdutoById(int id)
        {
            var produtoEntity = await _produtoRepository.GetById(id);
            return _mapper.Map<ProdutoDTO>(produtoEntity);
        }
        public async Task AddProduto(ProdutoDTO productDto)
        {
            var produtoEntity = _mapper.Map<Produto>(productDto);
            await _produtoRepository.Create(produtoEntity);
            productDto.ProdutoId = productDto.ProdutoId;
        }
        public async Task UpdateProduto(ProdutoDTO produtoDto)
        {
            var produtoEntity = _mapper.Map<Produto>(produtoDto);
            await _produtoRepository.Update(produtoEntity);
        }

        public async Task RemoveProduto(int id)
        {
            var productEntity = await _produtoRepository.GetById(id);
            await _produtoRepository.Delete(productEntity.ProdutoId);
        }
    }
}
