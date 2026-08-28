using System.Linq;

namespace SportsStore.Domain
{
    public interface IProductRepository
    {
        IQueryable<Product> Products { get; }
        IQueryable<Category> Categories { get; }
        void SaveProduct(Product product);
        Product? DeleteProduct(int productID);
        int GetCartItemCount();
        void AddToCart(int productId, int quantity);
    }
}
