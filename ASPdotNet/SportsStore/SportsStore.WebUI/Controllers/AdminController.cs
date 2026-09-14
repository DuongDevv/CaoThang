using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Rendering;
using SportsStore.Domain;
using SportsStore.WebUI.Models;

namespace SportsStore.WebUI.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminController : Controller
    {
        private readonly IProductRepository _repository;
        private readonly IWebHostEnvironment _environment;

        public AdminController(IProductRepository repo, IWebHostEnvironment env)
        {
            _repository = repo;
            _environment = env;
        }

        public IActionResult Index() => View(_repository.Products.OrderBy(p => p.ProductID));

        public IActionResult Edit(int productId)
        {
            Product? product = _repository.Products.FirstOrDefault(p => p.ProductID == productId);
            if (product == null && productId != 0)
            {
                return NotFound();
            }

            var viewModel = new ProductEditViewModel
            {
                ProductID = product?.ProductID ?? 0,
                Name = product?.Name ?? string.Empty,
                Description = product?.Description,
                Price = product?.Price ?? 0,
                CategoryId = product?.CategoryId ?? 0,
                ImageUrl = product?.ImageUrl,
                Categories = _repository.Categories
                    .Select(c => new SelectListItem { Value = c.CategoryId.ToString(), Text = c.Name })
                    .ToList()
            };

            return View(viewModel);
        }

        public IActionResult Create() => View("Edit", new ProductEditViewModel
        {
            Categories = _repository.Categories
                .Select(c => new SelectListItem { Value = c.CategoryId.ToString(), Text = c.Name })
                .ToList()
        });

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Save(ProductEditViewModel viewModel, IFormFile? imageFile)
        {
            if (ModelState.IsValid)
            {
                if (imageFile != null && imageFile.Length > 0)
                {
                    string uploadsFolder = Path.Combine(_environment.WebRootPath, "images");
                    if (!Directory.Exists(uploadsFolder))
                    {
                        Directory.CreateDirectory(uploadsFolder);
                    }
                    string uniqueFileName = Guid.NewGuid().ToString() + "_" + imageFile.FileName;
                    string filePath = Path.Combine(uploadsFolder, uniqueFileName);
                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        await imageFile.CopyToAsync(fileStream);
                    }
                    viewModel.ImageUrl = "/images/" + uniqueFileName;
                }

                Product product = new Product
                {
                    ProductID = viewModel.ProductID,
                    Name = viewModel.Name,
                    Description = viewModel.Description,
                    Price = viewModel.Price,
                    CategoryId = viewModel.CategoryId,
                    ImageUrl = viewModel.ImageUrl
                };

                _repository.SaveProduct(product);
                TempData["message"] = $"Đã lưu sản phẩm {product.Name} thành công!";
                return RedirectToAction(nameof(Index));
            }

            viewModel.Categories = _repository.Categories
                .Select(c => new SelectListItem { Value = c.CategoryId.ToString(), Text = c.Name })
                .ToList();
            return View("Edit", viewModel);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Delete(int productId)
        {
            Product? deletedProduct = _repository.DeleteProduct(productId);
            if (deletedProduct != null)
            {
                TempData["message"] = $"Sản phẩm {deletedProduct.Name} đã bị xóa!";
            }
            return RedirectToAction(nameof(Index));
        }
    }
}
