using SportsStore.Domain;
using SportsStore.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// Đăng ký dịch vụ với DI Container.
// Khi có một yêu cầu cho IProductRepository, hãy tạo một instance của FakeProductRepository.
// AddScoped: Một instance mới sẽ được tạo cho mỗi HTTP request.
builder.Services.AddScoped<IProductRepository, FakeProductRepository>();

// Đăng ký bộ nhớ đệm RAM để cất dữ liệu Session
builder.Services.AddDistributedMemoryCache();

// Đăng ký dịch vụ Session với các cấu hình về thời gian và bảo mật
builder.Services.AddSession(options =>
{
    // Giỏ hàng sẽ tự xóa nếu người dùng không thao tác gì trong 30 phút
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

var app = builder.Build();

//Kích hoạt tính năng Session cho toàn bộ ứng dụng
app.UseSession();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
