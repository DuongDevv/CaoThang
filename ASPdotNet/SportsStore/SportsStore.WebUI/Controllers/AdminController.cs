using Microsoft.AspNetCore.Mvc;
using SportsStore.Domain;
using SportsStore.WebUI.Models;

namespace SportsStore.WebUI.Controllers;

public class AdminController : Controller
{
    private IProductRepository repository;
    private IWebHostEnvironment environment;

    public AdminController(IProductRepository repo, IWebHostEnvironment env)
    {
        repository = repo;
        environment = env;
    }

    public IActionResult Index() => View(repository.Products.OrderBy(p => p.ProductID));

    public IActionResult Edit(int productId)
    {
        Product? product = repository.Products.FirstOrDefault(p => p.ProductID == productId);
        if (product == null)
        {
            return NotFound();
        }

        var viewModel = new ProductEditViewModel
        {
            ProductID = product.ProductID,
            Name = product.Name,
            Description = product.Description,
            Price = product.Price,
            Category = product.Category,
            ExistingImageUrl = product.ImageUrl
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
            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".webp", ".gif" };
            var extension = Path.GetExtension(imageFile.FileName).ToLowerInvariant();

            if (!allowedExtensions.Contains(extension))
            {
                ModelState.AddModelError("imageFile", "Chỉ chấp nhận các định dạng ảnh (.jpg, .jpeg, .png, .webp, .gif)");
            }

            if (imageFile.Length > 5 * 1024 * 1024) // 5MB
            {
                ModelState.AddModelError("imageFile", "Kích thước ảnh đại diện không được vượt quá 5MB");
            }
        }

        if (ModelState.IsValid)
        {
            string? imageUrl = viewModel.ExistingImageUrl;

            if (imageFile != null && imageFile.Length > 0)
            {
                string uploadsFolder = Path.Combine(environment.WebRootPath, "images", "products");
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }

                string uniqueFileName = Guid.NewGuid().ToString() + "_" + Path.GetFileName(imageFile.FileName);
                string filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await imageFile.CopyToAsync(fileStream);
                }

                imageUrl = "/images/products/" + uniqueFileName;
            }

            Product product = new Product
            {
                ProductID = viewModel.ProductID,
                Name = viewModel.Name,
                Description = viewModel.Description,
                Price = viewModel.Price,
                Category = viewModel.Category,
                ImageUrl = imageUrl
            };

            repository.SaveProduct(product);
            TempData["message"] = $"Đã lưu sản phẩm {product.Name} thành công!";
            return RedirectToAction("Index");
        }

        return View("Edit", viewModel);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult Delete(int productId)
    {
        Product? deletedProduct = repository.DeleteProduct(productId);
        if (deletedProduct != null)
        {
            if (!string.IsNullOrEmpty(deletedProduct.ImageUrl) && deletedProduct.ImageUrl.StartsWith("/images/products/"))
            {
                string fullPath = Path.Combine(environment.WebRootPath, deletedProduct.ImageUrl.TrimStart('/'));
                if (System.IO.File.Exists(fullPath))
                {
                    System.IO.File.Delete(fullPath);
                }
            }
            TempData["message"] = $"Đã xóa sản phẩm {deletedProduct.Name}!";
        }
        return RedirectToAction("Index");
    }
}
