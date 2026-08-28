using Microsoft.AspNetCore.Mvc;
using SportsStore.Domain;

namespace SportsStore.WebUI.Components
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
