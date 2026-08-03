using Microsoft.AspNetCore.Mvc;
using SportsStore.Domain;
using SportsStore.WebUI.Infrastructure;
using SportsStore.WebUI.Models;

namespace SportsStore.WebUI.Controllers;

public class CartController : Controller
{
    private IProductRepository _repository;

    public CartController(IProductRepository repo)
    {
        _repository = repo;
    }

    // Hàm phụ trợ: Lấy giỏ hàng từ Session ra (nếu chưa có thì khởi tạo mới)
    private Cart GetCart()
    {
        return HttpContext.Session.GetJson<Cart>("Cart") ?? new Cart();
    }

    // Hiển thị giao diện giỏ hàng
    public IActionResult Index(string returnUrl)
    {
        ViewBag.ReturnUrl = returnUrl;
        return View(GetCart());
    }

    // Xử lý thêm sản phẩm vào giỏ
    [HttpPost]
    public IActionResult AddToCart(int productId, string returnUrl)
    {
        Product? product = _repository.Products
            .FirstOrDefault(p => p.ProductID == productId);

        if (product != null)
        {
            Cart cart = GetCart();
            cart.AddItem(product, 1);
            HttpContext.Session.SetJson("Cart", cart);
        }

        if (!string.IsNullOrEmpty(returnUrl))
        {
            return LocalRedirect(returnUrl);
        }

        return RedirectToAction("Index");
    }

    // Xử lý xóa sản phẩm khỏi giỏ
    [HttpPost]
    public IActionResult RemoveFromCart(int productId, string returnUrl)
    {
        Product? product = _repository.Products
            .FirstOrDefault(p => p.ProductID == productId);

        if (product != null)
        {
            Cart cart = GetCart();
            cart.RemoveLine(product);
            HttpContext.Session.SetJson("Cart", cart);
        }

        return RedirectToAction("Index", new { returnUrl });
    }
}