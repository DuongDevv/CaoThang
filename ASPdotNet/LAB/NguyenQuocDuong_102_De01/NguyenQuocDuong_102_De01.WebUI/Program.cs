using Microsoft.EntityFrameworkCore;
using NguyenQuocDuong_102_De01.Domain;
using NguyenQuocDuong_102_De01.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<NguyenQuocDuongDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection") ?? "Data Source=NguyenQuocDuong_102_De01.db"));

builder.Services.AddScoped<IProductRepository, EFProductRepository>();

var app = builder.Build();

// 4. Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseAuthorization();

// 5. Custom Routing Rules for Category & Pagination
app.MapControllerRoute(
    name: "catpage",
    pattern: "{categoryId}/Page{page:int}",
    defaults: new { Controller = "Product", action = "List" });

app.MapControllerRoute(
    name: "page",
    pattern: "Page{page:int}",
    defaults: new { Controller = "Product", action = "List", page = 1 });

app.MapControllerRoute(
    name: "category",
    pattern: "{categoryId}",
    defaults: new { Controller = "Product", action = "List", page = 1 });

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Product}/{action=List}/{id?}");

// 6. Seed Database Initial Data
SeedData.EnsurePopulated(app.Services);

app.Run();
