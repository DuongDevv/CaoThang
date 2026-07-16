using Microsoft.AspNetCore.Mvc;
using SportsStore.Domain; // Cần thiết để nhận diện IProductRepository và Product

namespace SportsStore.WebUI.Controllers;

public class HomeController : Controller
{
    // 1. Khai báo biến lưu trữ repository
    private IProductRepository _repository;

    // 2. Nhận repository được "tiêm" vào từ DI Container
    public HomeController(IProductRepository repo)
    {
        _repository = repo;
    }

    // 3. Lấy dữ liệu và truyền sang View
    public IActionResult Index()
    {
        // Sử dụng _repository (có dấu gạch dưới) để lấy danh sách sản phẩm
        var products = _repository.Products; 
        
        // Trả về View kèm theo danh sách sản phẩm
        return View(products);
    }
}