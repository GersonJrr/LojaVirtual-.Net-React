using Microsoft.EntityFrameworkCore;
using ProdutoApi.Context;
using ProdutoApi.Repositories.Interfaces;
using ProdutoApi.Repositories;
using ProdutoApi.Services.Interfaces;
using ProdutoApi.Services;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(connectionString));

builder.Services.AddControllers().AddJsonOptions(x =>
                 x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddScoped<IProdutoRepository, ProdutoRepository>();
builder.Services.AddScoped<ICategoriaRepository, CategoriaRepository>();
builder.Services.AddScoped<IProdutoService, ProdutoService>();
builder.Services.AddScoped<ICategoriaService, CategoriaService>();

// 1. Configurar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy
            .WithOrigins("http://localhost:5173")  
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// 2. Usar CORS antes de MapControllers
app.UseCors("AllowFrontend");

app.UseAuthorization();
app.MapControllers();

app.Run();
