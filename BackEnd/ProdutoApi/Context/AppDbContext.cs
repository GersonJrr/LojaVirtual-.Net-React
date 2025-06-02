using Microsoft.EntityFrameworkCore;
using ProdutoApi.Models;

namespace ProdutoApi.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Categoria>? Categorias { get; set; } 
        public DbSet<Produto>? Produtos { get; set; }

        protected override void OnModelCreating(ModelBuilder mb)
        {
            //category
            mb.Entity<Categoria>().HasKey(c => c.CategoriaId);

            mb.Entity<Categoria>().
                 Property(c => c.Nome).
                   HasMaxLength(100).
                        IsRequired();

            //Product
            mb.Entity<Produto>().
               Property(c => c.Nome).
                 HasMaxLength(100).
                   IsRequired();

            mb.Entity<Produto>().
              Property(c => c.Descricao).
                   HasMaxLength(255).
                       IsRequired();

            mb.Entity<Produto>().
              Property(c => c.ImageURL).
                  HasMaxLength(255).
                      IsRequired();

            mb.Entity<Produto>().
               Property(c => c.Preco).
                 HasPrecision(12, 2);

            mb.Entity<Categoria>()
              .HasMany(g => g.Produtos)
                .WithOne(c => c.Categoria)
                .IsRequired()
                  .OnDelete(DeleteBehavior.Cascade);

            mb.Entity<Categoria>().HasData(
                new Categoria
                {
                    CategoriaId = 1,
                    Nome = "Material Escolar",
                },
                new Categoria
                {
                    CategoriaId = 2,
                    Nome = "Acessórios",
                }
            );
        }
    }
}
