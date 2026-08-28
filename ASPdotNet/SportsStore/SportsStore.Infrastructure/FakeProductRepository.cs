using System.Collections.Generic;
using System.Linq;
using SportsStore.Domain;

namespace SportsStore.Infrastructure
{
    public class FakeProductRepository : IProductRepository
    {
        private static readonly List<Category> _categories = new List<Category>
        {
            new Category { CategoryId = 1, Name = "Bóng đá" },
            new Category { CategoryId = 2, Name = "Cầu lông" }
        };

        private static readonly List<Product> _products = new List<Product>
        {
            new Product { ProductID = 1, Name = "Bóng A", Price = 450000, CategoryId = 1, ImageUrl = "/images/wukong.jpg", Description = "Mô tả sản phẩm Bóng A" },
            new Product { ProductID = 2, Name = "Bóng B", Price = 290000, CategoryId = 1, ImageUrl = "/images/guts.jpg", Description = "Mô tả sản phẩm Bóng B" },
            new Product { ProductID = 3, Name = "Giày A", Price = 850000, CategoryId = 2, ImageUrl = "/images/zoro.jpg", Description = "Mô tả sản phẩm Giày A" },
            new Product { ProductID = 4, Name = "Giày B", Price = 1200000, CategoryId = 2, ImageUrl = "/images/toji.jpg", Description = "Mô tả sản phẩm Giày B" }
        };

        private static int _cartItemCount = 0;

        public IQueryable<Product> Products => _products.AsQueryable();
        public IQueryable<Category> Categories => _categories.AsQueryable();

        public int GetCartItemCount() => _cartItemCount;

        public void AddToCart(int productId, int quantity)
        {
            _cartItemCount += quantity;
        }

        public void SaveProduct(Product product)
        {
            if (product.ProductID == 0)
            {
                product.ProductID = _products.Any() ? _products.Max(p => p.ProductID) + 1 : 1;
                _products.Add(product);
            }
            else
            {
                var dbEntry = _products.FirstOrDefault(p => p.ProductID == product.ProductID);
                if (dbEntry != null)
                {
                    dbEntry.Name = product.Name;
                    dbEntry.Price = product.Price;
                    dbEntry.Description = product.Description;
                    dbEntry.CategoryId = product.CategoryId;
                    dbEntry.ImageUrl = product.ImageUrl;
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
}
