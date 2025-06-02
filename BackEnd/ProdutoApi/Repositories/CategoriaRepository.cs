using Microsoft.EntityFrameworkCore;
using ProdutoApi.Context;
using ProdutoApi.Models;

namespace ProdutoApi.Repositories
{
    public class CategoriaRepository : ICategoriaRepository
    {
        private readonly AppDbContext _context;
        public CategoriaRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Categoria>> GetAll()
        {
            return await _context.Categorias.ToListAsync();
        }

        public async Task<IEnumerable<Categoria>> GetCategoriasProdutos()
        {
            return await _context.Categorias.Include(x => x.Produtos).ToListAsync();
        }

        public async Task<Categoria> GetById(int id)
        {
            return await _context.Categorias.Where(p => p.CategoriaId == id).FirstOrDefaultAsync();
        }

        public async Task<Categoria> Create(Categoria category)
        {
            _context.Categorias.Add(category);
            await _context.SaveChangesAsync();
            return category;
        }

        public async Task<Categoria> Update(Categoria category)
        {
            _context.Entry(category).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return category;
        }

        public async Task<Categoria> Delete(int id)
        {
            var product = await GetById(id);
            _context.Categorias.Remove(product);
            await _context.SaveChangesAsync();
            return product;
        }
    }
}
