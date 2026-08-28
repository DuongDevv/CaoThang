using System.Linq;
using SportsStore.Domain;

namespace SportsStore.Infrastructure
{
    public class EFProductRepository : IProductRepository
    {
        private readonly SportsStoreDbContext _context;
        private static int _cartCount = 0;

        public EFProductRepository(SportsStoreDbContext ctx)
        {
            _context = ctx;
        }

        public IQueryable<Product> Products => _context.Products;
        public IQueryable<Category> Categories => _context.Categories;

        public int GetCartItemCount() => _cartCount;

        public void AddToCart(int productId, int quantity)
        {
            _cartCount += quantity;
        }

        public void SaveProduct(Product product)
        {
            if (product.ProductID == 0)
            {
                _context.Products.Add(product);
            }
            else
            {
                Product? dbEntry = _context.Products
                    .FirstOrDefault(p => p.ProductID == product.ProductID);
                if (dbEntry != null)
                {
                    dbEntry.Name = product.Name;
                    dbEntry.Description = product.Description;
                    dbEntry.Price = product.Price;
                    dbEntry.CategoryId = product.CategoryId;
                    if (!string.IsNullOrEmpty(product.ImageUrl))
                    {
                        dbEntry.ImageUrl = product.ImageUrl;
                    }
                }
            }
            _context.SaveChanges();
        }

        public Product? DeleteProduct(int productID)
        {
            Product? dbEntry = _context.Products
                .FirstOrDefault(p => p.ProductID == productID);
            if (dbEntry != null)
            {
                _context.Products.Remove(dbEntry);
                _context.SaveChanges();
            }
            return dbEntry;
        }
    }
}
