//lấy danh sách danh mục duy nhất

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

    // Phương thức chính tự động chạy khi component được gọi
    public IViewComponentResult Invoke(){
        var categories = _repository.Products
            .Select(p=>p.Category)
            .Distinct()
            .OrderBy(c => c);

        // Truyền danh sách categories này qua giao diện hiển thị
        return View(categories);
    }
}