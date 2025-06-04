using AutoMapper;
using ProdutoApi.Models;

namespace ProdutoApi.DTOs.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Categoria, CategoriaDTO>().ReverseMap();

            CreateMap<ProdutoDTO, Produto>();
            CreateMap<Produto, ProdutoDTO>()
                .ForMember(x => x.CategoriaNome, opt => opt.MapFrom(src => src.Categoria.Nome));
        }
    }
}
