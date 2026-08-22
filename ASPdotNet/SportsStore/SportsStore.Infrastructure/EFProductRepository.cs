using SportsStore.Domain;

namespace SportsStore.Infrastructure;

public class EFProductRepository : IProductRepository
{
    private SportsStoreDbContext context;

    public EFProductRepository(SportsStoreDbContext ctx)
    {
        context = ctx;
    }

    public IQueryable<Product> Products => context.Products;

    public void SaveProduct(Product product)
    {
        if (product.ProductID == 0)
        {
            context.Products.Add(product);
        }
        else
        {
            Product? dbEntry = context.Products
                .FirstOrDefault(p => p.ProductID == product.ProductID);
            if (dbEntry != null)
            {
                dbEntry.Name = product.Name;
                dbEntry.Description = product.Description;
                dbEntry.Price = product.Price;
                dbEntry.Category = product.Category;
                if (!string.IsNullOrEmpty(product.ImageUrl))
                {
                    dbEntry.ImageUrl = product.ImageUrl;
                }
            }
        }
        context.SaveChanges();
    }

    public Product? DeleteProduct(int productID)
    {
        Product? dbEntry = context.Products
            .FirstOrDefault(p => p.ProductID == productID);
        if (dbEntry != null)
        {
            context.Products.Remove(dbEntry);
            context.SaveChanges();
        }
        return dbEntry;
    }
}
