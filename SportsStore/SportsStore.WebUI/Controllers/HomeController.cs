// SportsStore.WebUI/Controllers/HomeController.cs
using Microsoft.AspNetCore.Mvc;
using SportsStore.WebUI.Models;
using SportsStore.Domain; // Cần using để biết IProductRepository
namespace SportsStore.WebUI.Controllers;
public class HomeController : Controller
{
    // 1. Khai báo một biến private để lưu trữ repository
    private IProductRepository _repository;
    // 2. Tạo constructor nhận vào một IProductRepository
    // Đây là nơi DI Container sẽ "tiêm" FakeProductRepository vào.
    public HomeController(IProductRepository repo)
    {
        _repository = repo;
    }
    // 3. Sửa lại Action Index để lấy dữ liệu và truyền sang View
    public IActionResult Index()
    {
        // Lấy danh sách sản phẩm từ repository
        var viewModel = new ProductsListViewModel
        {
            Products = _repository.Products
        };
    // Trả về View, kèm theo danh sách sản phẩm
        return View(viewModel);
    }
}