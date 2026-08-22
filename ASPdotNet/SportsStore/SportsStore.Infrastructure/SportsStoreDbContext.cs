using Microsoft.EntityFrameworkCore;
using SportsStore.Domain;

namespace SportsStore.Infrastructure;

public class SportsStoreDbContext : DbContext
{
    public SportsStoreDbContext(DbContextOptions<SportsStoreDbContext> options)
        : base(options) { }

    public DbSet<Product> Products => Set<Product>();
}
