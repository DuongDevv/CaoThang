using Microsoft.AspNetCore.Mvc;
using SportsStore.WebUI.Models;
using SportsStore.Domain; // Cần thiết để nhận diện IProductRepository và Product

namespace SportsStore.WebUI.Controllers;

public class HomeController : Controller
{
    // 1. Khai báo biến lưu trữ repository
    private IProductRepository _repository;
    public int PageSize = 4;

    // 2. Nhận repository được "tiêm" vào từ DI Container
    public HomeController(IProductRepository repo)
    {
        _repository = repo;
    }

    // 3. Lấy dữ liệu và truyền sang View
    public IActionResult Index(string? category, int productPage = 1)
    {
        return View(new ProductsListViewModel
        {
            // 1. Dùng LINQ để lọc theo danh mục, sắp xếp và lấy phân đoạn dữ liệu sản phẩm tương ứng
            Products = _repository.Products
                .Where(p => category == null || p.Category == category)
                .OrderBy(p => p.ProductID)
                .Skip((productPage - 1) * PageSize)
                .Take(PageSize),

            // 2. Tính toán thông tin phân trang dựa trên số lượng sản phẩm thực tế
            PagingInfo = new PagingInfo
            {
                CurrentPage = productPage,
                ItemsPerPage = PageSize,
                TotalItems = category == null 
                    ? _repository.Products.Count() 
                    : _repository.Products.Where(e => e.Category == category).Count()
            }
        });
    }
}