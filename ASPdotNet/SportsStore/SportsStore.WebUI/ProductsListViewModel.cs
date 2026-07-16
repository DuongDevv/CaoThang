using SportsStore.Domain;

namespace SportsStore.WebUI.Models
{
    public class ProductsListViewModel
    {
        // Thuộc tính chứa danh sách sản phẩm truyền xuống View
        public IQueryable<Product> Products { get; set; } = Enumerable.Empty<Product>().AsQueryable();
    }
}
