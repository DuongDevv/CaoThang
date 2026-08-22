using Microsoft.EntityFrameworkCore;
using SportsStore.Domain;
using SportsStore.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

// 1. Register Controllers with Views
builder.Services.AddControllersWithViews();

// 2. Configure Entity Framework Core DbContext with SQLite
builder.Services.AddDbContext<SportsStoreDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("SportsStoreConnection")));

// 3. Register EFProductRepository for IProductRepository DI
builder.Services.AddScoped<IProductRepository, EFProductRepository>();

// 4. Configure Session State
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

var app = builder.Build();

// 5. Configure HTTP request pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseAuthorization();
app.UseSession();

// 6. Custom SEO Routing rules
app.MapControllerRoute(
    name: "catpage",
    pattern: "{category}/Page{productPage:int}",
    defaults: new { Controller = "Home", action = "Index" });

app.MapControllerRoute(
    name: "page",
    pattern: "Page{productPage:int}",
    defaults: new { Controller = "Home", action = "Index", productPage = 1 });

app.MapControllerRoute(
    name: "category",
    pattern: "{category}",
    defaults: new { Controller = "Home", action = "Index", productPage = 1 });

app.MapControllerRoute(
    name: "pagination",
    pattern: "Products/Page{productPage}",
    defaults: new { Controller = "Home", action = "Index", productPage = 1 });

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// 7. Seed Database Migration & Initial Data
SeedData.EnsurePopulated(app.Services);

app.Run();
