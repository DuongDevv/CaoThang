using System.Linq;
using Microsoft.AspNetCore.Mvc;
using NguyenQuocDuong_102_De01.Domain;

namespace NguyenQuocDuong_102_De01.WebUI.Components
{
    public class NavigationMenuViewComponent : ViewComponent
    {
        private readonly IProductRepository _repository;

        public NavigationMenuViewComponent(IProductRepository repository)
        {
            _repository = repository;
        }

        public IViewComponentResult Invoke()
        {
            ViewBag.SelectedCategory = RouteData?.Values["categoryId"];
            var categories = _repository.Categories.OrderBy(c => c.Name);
            return View(categories);
        }
    }
}
