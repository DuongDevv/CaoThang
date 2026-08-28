using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using NguyenQuocDuong_102_De01.Domain;
using NguyenQuocDuong_102_De01.WebUI.Models;

namespace NguyenQuocDuong_102_De01.WebUI.Controllers
{
    public class ProductController : Controller
    {
        private readonly IProductRepository _repository;
        public int PageSize = 6;

        public ProductController(IProductRepository repository)
        {
            _repository = repository;
        }

        // Action List: Phân trang & Lọc sản phẩm
        public IActionResult List(int? categoryId, int page = 1)
        {
            var query = _repository.Products
                .Where(p => categoryId == null || p.CategoryId == categoryId);

            var model = new ProductListViewModel
            {
                Products = query
                    .OrderBy(p => p.ProductID)
                    .Skip((page - 1) * PageSize)
                    .Take(PageSize),
                PagingInfo = new PagingInfo
                {
                    CurrentPage = page,
                    ItemsPerPage = PageSize,
                    TotalItems = query.Count()
                },
                CurrentCategory = categoryId
            };

            return View(model);
        }

        // Action AddToCart: Thêm sản phẩm vào giỏ
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult AddToCart(int productId, int quantity = 1)
        {
            _repository.AddToCart(productId, quantity);
            return RedirectToAction(nameof(List));
        }

        // Action Edit: GET
        [HttpGet]
        public IActionResult Edit(int id)
        {
            ViewBag.Categories = new SelectList(_repository.Categories, "CategoryId", "Name");
            if (id == 0)
            {
                return View(new Product());
            }

            var product = _repository.Products.FirstOrDefault(p => p.ProductID == id);
            if (product == null)
            {
                return NotFound();
            }
            return View(product);
        }

        // Action Edit: POST
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(Product product)
        {
            if (ModelState.IsValid)
            {
                _repository.SaveProduct(product);
                TempData["message"] = $"Đã lưu sản phẩm {product.Name} thành công!";
                return RedirectToAction(nameof(List));
            }
            ViewBag.Categories = new SelectList(_repository.Categories, "CategoryId", "Name");
            return View(product);
        }
    }
}
