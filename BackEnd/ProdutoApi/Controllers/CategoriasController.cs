using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProdutoApi.DTOs;
using ProdutoApi.Services.Interfaces;

namespace ProdutoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriasController : ControllerBase
    {
        private readonly ICategoriaService _categoriaService;

        public CategoriasController(ICategoriaService categoriaService)
        {
            _categoriaService = categoriaService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoriaDTO>>> Get()
        {
            var categoriasDto = await _categoriaService.GetCategorias();

            if (categoriasDto == null)
                return NotFound("Categoria not found");

            return Ok(categoriasDto);
        }


        [HttpGet("produtos")]
        public async Task<ActionResult<IEnumerable<CategoriaDTO>>> GetCategoriasProdutos()
        {
            var categoriasDto = await _categoriaService.GetCategoriasProdutos();

            if (categoriasDto == null)
                return NotFound("Categoria not found");

            return Ok(categoriasDto);
        }

        [HttpGet("{id:int}", Name = "GetCategoria")]
        public async Task<ActionResult<IEnumerable<CategoriaDTO>>> GetById(int id)
        {
            var categoriasDto = await _categoriaService.GetCategoriaById(id);

            if (categoriasDto == null)
                return NotFound("Categoria not found");

            return Ok(categoriasDto);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] CategoriaDTO categoriaDto)
        {

            if (categoriaDto == null)
                return BadRequest("Invalid Data");

            await _categoriaService.AddCategoria(categoriaDto);

            return new CreatedAtRouteResult("GetCategoria", new { id = categoriaDto.CategoriaId },
                categoriaDto);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] CategoriaDTO categoriaDto)
        {
            if (id != categoriaDto.CategoriaId)
                return BadRequest();

            if (categoriaDto == null)
                    return BadRequest();

            await _categoriaService.UpdateCategoria(categoriaDto);

            return Ok(categoriaDto);
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<CategoriaDTO>> Delete(int id)
        {
            var categoriaDto = await _categoriaService.GetCategoriaById(id);
            if(categoriaDto == null)
            {
                return NotFound("Categoria not found");
            }

            await _categoriaService.RemoveCategoria(id);

            return Ok(categoriaDto);
        }




    }
}
