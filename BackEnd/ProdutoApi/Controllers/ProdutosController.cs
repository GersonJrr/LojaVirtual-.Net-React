using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProdutoApi.DTOs;
using ProdutoApi.Services;
using ProdutoApi.Services.Interfaces;

namespace ProdutoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        private readonly IProdutoService _produtoService;

        public ProdutosController(IProdutoService produtoService)
        {
            _produtoService = produtoService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProdutoDTO>>> GetProdutos()
        {
            var produtoDto = await _produtoService.GetProdutos();

            if (produtoDto == null)
                return NotFound("Produto not found");

            return Ok(produtoDto);
        }

        [HttpGet("{id:int}", Name = "GetProdutos")]
        public async Task<ActionResult<IEnumerable<ProdutoDTO>>> GetProdutoById(int id)
        {
            var produtoDto = await _produtoService.GetProdutoById(id);

            if (produtoDto == null)
                return NotFound("Produto not found");

            return Ok(produtoDto);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] ProdutoDTO produtoDto)
        {

            if (produtoDto == null)
                return BadRequest("Invalid Data");

            await _produtoService.AddProduto(produtoDto);

            return new CreatedAtRouteResult("GetProdutos", new { id = produtoDto.ProdutoId },
                produtoDto);
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] ProdutoDTO produtoDto)
        {
            if (id != produtoDto.ProdutoId)
                return BadRequest();

            if (produtoDto == null)
                return BadRequest();

            await _produtoService.UpdateProduto(produtoDto);

            return Ok(produtoDto);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<CategoriaDTO>> Delete(int id)
        {
            var produtoDto = await _produtoService.GetProdutoById(id);
            if (produtoDto == null)
            {
                return NotFound("Produto not found") ;
            }
            await _produtoService.RemoveProduto(id);

            return Ok(new
            {
                message = "Produto deletado com sucesso.",
                produto = produtoDto
            });
        }




    }
}
