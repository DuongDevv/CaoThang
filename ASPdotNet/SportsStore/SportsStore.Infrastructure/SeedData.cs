using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SportsStore.Domain;

namespace SportsStore.Infrastructure
{
    public static class SeedData
    {
        public static void EnsurePopulated(IServiceProvider services)
        {
            using (var scope = services.CreateScope())
            {
                var provider = scope.ServiceProvider;
                SportsStoreDbContext context = provider.GetRequiredService<SportsStoreDbContext>();

                context.Database.Migrate();

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

                // Seed Identity Roles and Admin User (Bài 10)
                SeedIdentityAsync(provider).GetAwaiter().GetResult();
            }
        }

        private static async Task SeedIdentityAsync(IServiceProvider provider)
        {
            var roleManager = provider.GetRequiredService<RoleManager<IdentityRole>>();
            var userManager = provider.GetRequiredService<UserManager<IdentityUser>>();

            string[] roles = new[] { "Admin", "Customer" };
            foreach (var role in roles)
            {
                if (!await roleManager.RoleExistsAsync(role))
                {
                    await roleManager.CreateAsync(new IdentityRole(role));
                }
            }

            string adminEmail = "admin@sportsstore.com";
            var adminUser = await userManager.FindByEmailAsync(adminEmail);
            if (adminUser == null)
            {
                adminUser = new IdentityUser
                {
                    UserName = "admin",
                    Email = adminEmail,
                    EmailConfirmed = true
                };
                var result = await userManager.CreateAsync(adminUser, "Admin@123");
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(adminUser, "Admin");
                }
            }
        }
    }
}
