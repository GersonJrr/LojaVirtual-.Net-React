using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.Text.Json.Serialization;
using ProdutoApi.Models;

namespace ProdutoApi.DTOs
{
    public class ProdutoDTO
    {
        public int ProdutoId { get; set; }

        [Required(ErrorMessage = "The Name is Required")]
        [MinLength(3)]
        [MaxLength(100)]
        public string? Nome { get; set; }

        [Required(ErrorMessage = "The Description is Required")]
        [MinLength(5)]
        [MaxLength(200)]
        public string? Descricao { get; set; }

        [Required(ErrorMessage = "The Price is Required")]
        [Column(TypeName = "decimal(12,2)")]
        public decimal Preco { get; set; }

        [Required(ErrorMessage = "The Stock is Required")]
        [Range(1, 9999)]
        public long Estoque { get; set; }

        [MaxLength(250)]
        [DisplayName("Product Image")]
        public string? ImageURL { get; set; }

        public string? CategoriaNome { get; set; }
       
        [JsonIgnore]
        public Categoria? Categoria { get; set; }
        public int CategoriaId { get; set; }
    }
}
