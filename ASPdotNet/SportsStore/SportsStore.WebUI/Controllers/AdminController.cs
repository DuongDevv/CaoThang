using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;
using SportsStore.Domain;
using SportsStore.WebUI.Models;

namespace SportsStore.WebUI.Controllers
{
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
                Description = product?.Description ?? string.Empty,
                Price = product?.Price ?? 0,
                Category = product?.CategoryId.ToString() ?? string.Empty,
                ImageUrl = product?.ImageUrl
            };

            return View(viewModel);
        }

        public IActionResult Create() => View("Edit", new ProductEditViewModel());

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Save(ProductEditViewModel viewModel, IFormFile? imageFile)
        {
            if (imageFile != null && imageFile.Length > 0)
            {
                var uploadsFolder = Path.Combine(_environment.WebRootPath, "images");
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }

                var uniqueFileName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(imageFile.FileName);
                var filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await imageFile.CopyToAsync(fileStream);
                }

                viewModel.ImageUrl = "/images/" + uniqueFileName;
            }

            if (ModelState.IsValid)
            {
                int catId = 1;
                int.TryParse(viewModel.Category, out catId);

                Product product = new Product
                {
                    ProductID = viewModel.ProductID,
                    Name = viewModel.Name,
                    Description = viewModel.Description,
                    Price = viewModel.Price,
                    CategoryId = catId == 0 ? 1 : catId,
                    ImageUrl = viewModel.ImageUrl
                };

                _repository.SaveProduct(product);
                TempData["message"] = $"Đã lưu sản phẩm {product.Name}!";
                return RedirectToAction(nameof(Index));
            }

            return View("Edit", viewModel);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Delete(int productId)
        {
            Product? deletedProduct = _repository.DeleteProduct(productId);
            if (deletedProduct != null)
            {
                TempData["message"] = $"Đã xóa sản phẩm {deletedProduct.Name}!";
            }
            return RedirectToAction(nameof(Index));
        }
    }
}
