using ProdutoApi.Models;
using System.ComponentModel.DataAnnotations;

namespace ProdutoApi.DTOs
{
    public class CategoriaDTO
    {
        public int CategoriaId { get; set; }

        [Required(ErrorMessage = "The Name is Required")]
        [MinLength(3)]
        [MaxLength(100)]
        public string? Name { get; set; }

        public ICollection<Produto>? Produtos { get; set; }
    }
}
