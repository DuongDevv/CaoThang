using Microsoft.AspNetCore.Mvc;
using SportsStore.WebUI.Models;
using SportsStore.Domain;

namespace SportsStore.WebUI.Controllers;

public class HomeController : Controller
{
    private IProductRepository _repository;
    public int PageSize = 4;

    public HomeController(IProductRepository repo)
    {
        _repository = repo;
    }

    public IActionResult Index(string? category, int productPage = 1)
    {
        return View(new ProductsListViewModel
        {
            Products = _repository.Products
                .Where(p => category == null || p.Category == category)
                .OrderBy(p => p.ProductID)
                .Skip((productPage - 1) * PageSize)
                .Take(PageSize),

            PagingInfo = new PagingInfo
            {
                CurrentPage = productPage,
                ItemsPerPage = PageSize,
                TotalItems = category == null 
                    ? _repository.Products.Count() 
                    : _repository.Products.Where(e => e.Category == category).Count()
            },

            CurrentCategory = category
        });
    }
}
