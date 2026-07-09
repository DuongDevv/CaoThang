// SportsStore.Infrastructure/FakeProductRepository.cs
// Cần using để có thể thấy được Product và IProductRepository
using SportsStore.Domain;
namespace SportsStore.Infrastructure;
/// <summary>
/// Một triển khai "giả" của IProductRepository.
/// Dùng để phát triển và kiểm thử mà không cần kết nối database thật.
/// </summary>
public class FakeProductRepository : IProductRepository // Ký vào "hợp đồng"
{
// Triển khai thuộc tính Products mà hợp đồng yêu cầu.
public IQueryable<Product> Products => new List<Product>
{
new Product {
    Name = "Football", Description = "FIFA-approved size and weight",Price = 25, Category = "Soccer", ImageUrl ="/images/football.png"
},
new Product {
    Name = "Surf Board", Description = "A board for riding the waves", Price = 179, Category = "Surfing", ImageUrl ="/images/surfboard.png"
},
new Product {
    Name = "Running Shoes", Description = "Comfortable and stylishrunning shoes",Price = 95, Category = "Running", ImageUrl ="/images/runningshoes.png"
},
new Product {
    Name = "Kayak", Description = "A boat for one person",Price = 275, Category = "Watersports", ImageUrl ="/images/kayak.png"
}
,new Product {
    Name = "Corner Flags", Description = "Give your playing field aprofessional touch",Price = 34.95m, Category = "Soccer", ImageUrl ="/images/cornerflags.png"
}
}.AsQueryable<Product>(); // Chuyển List thành IQueryable
}