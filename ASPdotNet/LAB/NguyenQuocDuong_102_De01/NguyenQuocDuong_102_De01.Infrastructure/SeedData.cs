using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NguyenQuocDuong_102_De01.Domain;

namespace NguyenQuocDuong_102_De01.Infrastructure
{
    public static class SeedData
    {
        public static void EnsurePopulated(IServiceProvider services)
        {
            using (var scope = services.CreateScope())
            {
                NguyenQuocDuongDbContext context = scope.ServiceProvider.GetRequiredService<NguyenQuocDuongDbContext>();

                context.Database.EnsureCreated();

                if (!context.Categories.Any())
                {
                    context.Categories.AddRange(
                        new Category { CategoryId = 1, Name = "Bóng đá" },
                        new Category { CategoryId = 2, Name = "Cầu lông" }
                    );
                    context.SaveChanges();
                }

                if (!context.Products.Any())
                {
                    context.Products.AddRange(
                        new Product { ProductID = 1, Name = "Bóng A", Price = 450000, CategoryId = 1, ImageUrl = "/images/wukong.jpg", Description = "Mô tả sản phẩm Bóng A" },
                        new Product { ProductID = 2, Name = "Bóng B", Price = 290000, CategoryId = 1, ImageUrl = "/images/guts.jpg", Description = "Mô tả sản phẩm Bóng B" },
                        new Product { ProductID = 3, Name = "Giày A", Price = 850000, CategoryId = 2, ImageUrl = "/images/zoro.jpg", Description = "Mô tả sản phẩm Giày A" },
                        new Product { ProductID = 4, Name = "Giày B", Price = 1200000, CategoryId = 2, ImageUrl = "/images/toji.jpg", Description = "Mô tả sản phẩm Giày B" }
                    );
                    context.SaveChanges();
                }
            }
        }
    }
}
