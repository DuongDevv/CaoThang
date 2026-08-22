using Microsoft.AspNetCore.Mvc;
using SportsStore.Domain;

namespace SportsStore.WebUI.Components;

public class NavigationMenuViewComponent : ViewComponent
{
    private IProductRepository _repository;

    public NavigationMenuViewComponent(IProductRepository repo)
    {
        _repository = repo;
    }

    public IViewComponentResult Invoke()
    {
        ViewBag.SelectedCategory = RouteData?.Values["category"];
        var categories = _repository.Products
            .Select(p => p.Category)
            .Distinct()
            .OrderBy(c => c);

        return View(categories);
    }
}
