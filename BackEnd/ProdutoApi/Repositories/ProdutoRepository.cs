using Microsoft.EntityFrameworkCore;
using ProdutoApi.Context;
using ProdutoApi.Models;
using ProdutoApi.Repositories.Interfaces;

namespace ProdutoApi.Repositories
{
    public class ProdutoRepository : IProdutoRepository
    {
        private readonly AppDbContext _context;
        public ProdutoRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Produto>> GetAll()
        {
            var produto = await _context.Produtos.Include(c => c.Categoria).ToListAsync();
            return produto;
        }

        public async Task<Produto> GetById(int id)
        {
            return await _context.Produtos.Include(c => c.Categoria).Where(p => p.ProdutoId == id).FirstOrDefaultAsync();
        }

        public async Task<Produto> Create(Produto produto)
        {
            _context.Produtos.Add(produto);
            await _context.SaveChangesAsync();
            return produto;
        }

        public async Task<Produto> Update(Produto produto)
        {
            _context.Entry(produto).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return produto;
        }

        public async Task<Produto> Delete(int id)
        {
            var produto = await GetById(id);
            _context.Produtos.Remove(produto);
            await _context.SaveChangesAsync();
            return produto;
        }
    }
}
