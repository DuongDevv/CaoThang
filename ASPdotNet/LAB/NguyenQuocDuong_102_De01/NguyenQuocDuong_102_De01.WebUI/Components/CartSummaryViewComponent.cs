using Microsoft.AspNetCore.Mvc;
using NguyenQuocDuong_102_De01.Domain;

namespace NguyenQuocDuong_102_De01.WebUI.Components
{
    public class CartSummaryViewComponent : ViewComponent
    {
        private readonly IProductRepository _repository;

        public CartSummaryViewComponent(IProductRepository repository)
        {
            _repository = repository;
        }

        public IViewComponentResult Invoke()
        {
            int itemCount = _repository.GetCartItemCount();
            return View(itemCount);
        }
    }
}
