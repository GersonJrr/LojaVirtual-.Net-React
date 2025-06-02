using AutoMapper;
using ProdutoApi.Models;

namespace ProdutoApi.DTOs.Mappings
{
    public class MappingProfile:Profile
    {
        CreateMap<Categoria, CategoriaDTO>().ReverseMap();

        CreateMap<ProdutoDTO, Produto>();
        CreateMap<Produto, ProdutoDTO>()
         .ForMember(x => x.CategoryName, opt => opt.MapFrom(src => src.Category.Name));
        
    }
}
