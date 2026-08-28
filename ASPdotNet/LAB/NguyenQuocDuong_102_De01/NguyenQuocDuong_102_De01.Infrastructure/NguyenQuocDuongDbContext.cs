using Microsoft.EntityFrameworkCore;
using NguyenQuocDuong_102_De01.Domain;

namespace NguyenQuocDuong_102_De01.Infrastructure
{
    public class NguyenQuocDuongDbContext : DbContext
    {
        public NguyenQuocDuongDbContext(DbContextOptions<NguyenQuocDuongDbContext> options)
            : base(options) { }

        public DbSet<Product> Products => Set<Product>();
        public DbSet<Category> Categories => Set<Category>();
    }
}
