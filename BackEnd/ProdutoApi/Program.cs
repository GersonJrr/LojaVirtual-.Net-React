using ProdutoApi.Repositories.Interfaces;
using ProdutoApi.Repositories;
using ProdutoApi.Services.Interfaces;
using ProdutoApi.Services;
using Microsoft.EntityFrameworkCore;
using ProdutoApi.Context;
using ProdutoApi.DTOs.Mappings;

var builder = WebApplication.CreateBuilder(args);

// 🔥 Corrigindo para pegar a Connection String do appsettings.json
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAutoMapper(typeof(MappingProfile));
builder.Services.AddScoped<IProdutoRepository, ProdutoRepository>();
builder.Services.AddScoped<ICategoriaRepository, CategoriaRepository>();
builder.Services.AddScoped<IProdutoService, ProdutoService>();
builder.Services.AddScoped<ICategoriaService, CategoriaService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
