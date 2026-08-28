using Microsoft.AspNetCore.Mvc;

namespace SportsStore.WebUI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index(int? categoryId, int page = 1)
        {
            return RedirectToAction("List", "Product", new { categoryId, page });
        }
    }
}
