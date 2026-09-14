using System;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using SportsStore.Domain;
using SportsStore.Infrastructure;
using SportsStore.Infrastructure.Services;

var builder = WebApplication.CreateBuilder(args);

// 1. Register Controllers with Views & API Controllers
builder.Services.AddControllersWithViews();
builder.Services.AddEndpointsApiExplorer();

// 2. Configure Swagger OpenAPI with Bearer Auth Support (Bài 11)
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "SportsStore API", Version = "v1" });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "Nhập JWT Token theo định dạng: Bearer {token}",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

// 3. Configure EF Core DbContext with SQLite
builder.Services.AddDbContext<SportsStoreDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("SportsStoreConnection")));

// 4. Configure ASP.NET Core Identity (Bài 10)
builder.Services.AddIdentity<IdentityUser, IdentityRole>(options =>
{
    options.Password.RequireDigit = true;
    options.Password.RequiredLength = 6;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = false;
})
.AddEntityFrameworkStores<SportsStoreDbContext>()
.AddDefaultTokenProviders();

// 5. Configure Authentication (Cookie for MVC + JWT Bearer for API - Bài 10 & 11)
string jwtSecret = builder.Configuration["Jwt:SecretKey"] ?? "SuperSecretKeyForJWTAuthentication1234567890!@#$";
builder.Services.AddAuthentication()
    .AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = false;
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret)),
            ValidateIssuer = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"] ?? "SportsStoreAPI",
            ValidateAudience = true,
            ValidAudience = builder.Configuration["Jwt:Audience"] ?? "SportsStoreClients",
            ValidateLifetime = true,
            ClockSkew = TimeSpan.Zero
        };
    });

// Cấu hình LoginPath cho MVC Cookie Auth
builder.Services.ConfigureApplicationCookie(options =>
{
    options.LoginPath = "/Account/Login";
    options.AccessDeniedPath = "/Account/Login";
});

// 6. Register Application Services
builder.Services.AddScoped<IProductRepository, EFProductRepository>();
builder.Services.AddScoped<IJwtTokenService, JwtTokenService>();

// 7. Configure Session State (Bài 05)
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

var app = builder.Build();

// 8. Pipeline configuration
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SportsStore API v1"));
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication(); // BÀI 10 & 11: Authentication trước Authorization
app.UseAuthorization();
app.UseSession();

// Routing
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

// 9. Seed Database Migration & Initial Identity Admin User
SeedData.EnsurePopulated(app.Services);

app.Run();
