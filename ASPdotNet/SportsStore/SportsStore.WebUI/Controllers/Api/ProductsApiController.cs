using System.Linq;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SportsStore.Domain;
using SportsStore.WebUI.Models.Api;

namespace SportsStore.WebUI.Controllers.Api
{
    [ApiController]
    [Route("api/v1/products")]
    public class ProductsApiController : ControllerBase
    {
        private readonly IProductRepository _repository;

        public ProductsApiController(IProductRepository repository)
        {
            _repository = repository;
        }

        // GET: api/v1/products
        [HttpGet]
        public IActionResult GetProducts([FromQuery] int? categoryId, [FromQuery] int page = 1, [FromQuery] int pageSize = 6)
        {
            var query = _repository.Products
                .Where(p => categoryId == null || p.CategoryId == categoryId);

            int totalItems = query.Count();
            var products = query
                .OrderBy(p => p.ProductID)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .Select(p => new ProductDto
                {
                    ProductID = p.ProductID,
                    Name = p.Name,
                    Price = p.Price,
                    Description = p.Description,
                    ImageUrl = p.ImageUrl,
                    CategoryId = p.CategoryId,
                    CategoryName = p.Category != null ? p.Category.Name : null
                })
                .ToList();

            return Ok(new
            {
                currentPage = page,
                pageSize = pageSize,
                totalItems = totalItems,
                totalPages = (int)System.Math.Ceiling((double)totalItems / pageSize),
                data = products
            });
        }

        // GET: api/v1/products/5
        [HttpGet("{id:int}")]
        public IActionResult GetProduct(int id)
        {
            var p = _repository.Products.FirstOrDefault(prod => prod.ProductID == id);
            if (p == null)
            {
                return NotFound(new { message = $"Không tìm thấy sản phẩm có ID = {id}" });
            }

            return Ok(new ProductDto
            {
                ProductID = p.ProductID,
                Name = p.Name,
                Price = p.Price,
                Description = p.Description,
                ImageUrl = p.ImageUrl,
                CategoryId = p.CategoryId,
                CategoryName = p.Category?.Name
            });
        }

        // POST: api/v1/products (Bảo vệ bằng JWT Authentication & Admin Role - Bài 11)
        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        public IActionResult CreateProduct([FromBody] CreateUpdateProductDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var product = new Product
            {
                Name = dto.Name,
                Price = dto.Price,
                Description = dto.Description,
                ImageUrl = dto.ImageUrl,
                CategoryId = dto.CategoryId
            };

            _repository.SaveProduct(product);

            return CreatedAtAction(nameof(GetProduct), new { id = product.ProductID }, product);
        }

        // DELETE: api/v1/products/5
        [HttpDelete("{id:int}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles = "Admin")]
        public IActionResult DeleteProduct(int id)
        {
            var deleted = _repository.DeleteProduct(id);
            if (deleted == null)
            {
                return NotFound(new { message = $"Không tìm thấy sản phẩm ID = {id}" });
            }
            return Ok(new { message = $"Đã xóa sản phẩm '{deleted.Name}'" });
        }
    }
}
