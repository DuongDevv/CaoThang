using SportsStore.Domain;

namespace SportsStore.Infrastructure;

public class FakeProductRepository : IProductRepository
{
    private List<Product> _products = new List<Product>
    {
        new Product { ProductID = 1, Name = "Football", Description = "FIFA-approved size and weight", Price = 25, Category = "Soccer", ImageUrl = "/images/football.png" },
        new Product { ProductID = 2, Name = "Surf Board", Description = "A board for riding the waves", Price = 179, Category = "Surfing", ImageUrl = "/images/surfboard.png" },
        new Product { ProductID = 3, Name = "Running Shoes", Description = "Comfortable and stylish running shoes", Price = 95, Category = "Running", ImageUrl = "/images/runningshoes.png" },
        new Product { ProductID = 4, Name = "Kayak", Description = "A boat for one person", Price = 275, Category = "Watersports", ImageUrl = "/images/kayak.png" },
        new Product { ProductID = 5, Name = "Corner Flags", Description = "Give your playing field a professional touch", Price = 34.95m, Category = "Soccer", ImageUrl = "/images/cornerflags.png" }
    };

    public IQueryable<Product> Products => _products.AsQueryable();

    public void SaveProduct(Product product)
    {
        if (product.ProductID == 0)
        {
            product.ProductID = _products.Count > 0 ? _products.Max(p => p.ProductID) + 1 : 1;
            _products.Add(product);
        }
        else
        {
            Product? dbEntry = _products.FirstOrDefault(p => p.ProductID == product.ProductID);
            if (dbEntry != null)
            {
                dbEntry.Name = product.Name;
                dbEntry.Description = product.Description;
                dbEntry.Price = product.Price;
                dbEntry.Category = product.Category;
                if (product.ImageUrl != null)
                {
                    dbEntry.ImageUrl = product.ImageUrl;
                }
            }
        }
    }

    public Product? DeleteProduct(int productID)
    {
        Product? dbEntry = _products.FirstOrDefault(p => p.ProductID == productID);
        if (dbEntry != null)
        {
            _products.Remove(dbEntry);
        }
        return dbEntry;
    }
}
