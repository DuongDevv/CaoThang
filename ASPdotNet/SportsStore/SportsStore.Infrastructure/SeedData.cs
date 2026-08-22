using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SportsStore.Domain;

namespace SportsStore.Infrastructure;

public static class SeedData
{
    public static void EnsurePopulated(IServiceProvider services)
    {
        using (var scope = services.CreateScope())
        {
            SportsStoreDbContext context = scope.ServiceProvider.GetRequiredService<SportsStoreDbContext>();

            context.Database.Migrate();

            // Nếu chưa có sản phẩm hoặc nâng cấp ảnh wallpaper
            if (!context.Products.Any())
            {
                context.Products.AddRange(
                    new Product { Name = "Wukong Kayak", Description = "Thuyền Kayak phiên bản Ngộ Không Đấu Chiến Thắng Phật", Category = "Watersports", Price = 275, ImageUrl = "/images/wukong.jpg" },
                    new Product { Name = "Guts Armor Lifejacket", Description = "Áo giáp phao cứu sinh phong cách Berserk Guts", Category = "Watersports", Price = 148.95m, ImageUrl = "/images/guts.jpg" },
                    new Product { Name = "Zoro Soccer Ball", Description = "Quả bóng đá đao kiếm Santoryu Roronoa Zoro", Category = "Soccer", Price = 49.50m, ImageUrl = "/images/zoro.jpg" },
                    new Product { Name = "Toji Corner Flags", Description = "Bộ cờ góc sân bóng đá phong cách Fushiguro Toji", Category = "Soccer", Price = 89.95m, ImageUrl = "/images/toji.jpg" },
                    new Product { Name = "Mercedes AMG Stadium", Description = "Supercar Mercedes AMG GT-R phiên bản Sân vận động", Category = "Soccer", Price = 79500, ImageUrl = "/images/mercedes.jpg" },
                    new Product { Name = "Gojo Thinking Cap", Description = "Mũ Vô Lập Xử tư duy cờ vua Satoru Gojo", Category = "Chess", Price = 160, ImageUrl = "/images/gojo.jpg" },
                    new Product { Name = "Saitama One Punch Chair", Description = "Ghế đấu cờ vua Nhất Kích Tất Sát Saitama OK", Category = "Chess", Price = 299.95m, ImageUrl = "/images/saitama.jpg" },
                    new Product { Name = "Musashi Chess Board", Description = "Bàn cờ vua Thập Nhị Kiếm Miyamoto Musashi", Category = "Chess", Price = 375, ImageUrl = "/images/musashi.jpg" },
                    new Product { Name = "Hello Kitty King", Description = "Quân vua Hello Kitty mạ vàng nạm kim cương", Category = "Chess", Price = 1200, ImageUrl = "/images/hellokitty.png" }
                );
                context.SaveChanges();
            }
            else
            {
                // Cập nhật lại ImageUrl của các sản phẩm hiện có sang wallpaper
                var products = context.Products.ToList();
                var wallpapers = new Dictionary<string, string>
                {
                    { "Kayak", "/images/wukong.jpg" },
                    { "Lifejacket", "/images/guts.jpg" },
                    { "Soccer Ball", "/images/zoro.jpg" },
                    { "Corner Flags", "/images/toji.jpg" },
                    { "Stadium", "/images/mercedes.jpg" },
                    { "Thinking Cap", "/images/gojo.jpg" },
                    { "Unsteady Chair", "/images/saitama.jpg" },
                    { "Human Chess Board", "/images/musashi.jpg" },
                    { "Bling-Bling King", "/images/hellokitty.png" }
                };

                foreach (var p in products)
                {
                    if (wallpapers.ContainsKey(p.Name))
                    {
                        p.ImageUrl = wallpapers[p.Name];
                    }
                    else if (p.ProductID % 9 == 1) p.ImageUrl = "/images/wukong.jpg";
                    else if (p.ProductID % 9 == 2) p.ImageUrl = "/images/guts.jpg";
                    else if (p.ProductID % 9 == 3) p.ImageUrl = "/images/zoro.jpg";
                    else if (p.ProductID % 9 == 4) p.ImageUrl = "/images/toji.jpg";
                    else if (p.ProductID % 9 == 5) p.ImageUrl = "/images/mercedes.jpg";
                    else if (p.ProductID % 9 == 6) p.ImageUrl = "/images/gojo.jpg";
                    else if (p.ProductID % 9 == 7) p.ImageUrl = "/images/saitama.jpg";
                    else if (p.ProductID % 9 == 8) p.ImageUrl = "/images/musashi.jpg";
                    else p.ImageUrl = "/images/hellokitty.png";
                }
                context.SaveChanges();
            }
        }
    }
}
