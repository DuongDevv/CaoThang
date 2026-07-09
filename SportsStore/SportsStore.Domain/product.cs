namespace SportsStore.Domain;
/// <summary>
/// Lớp POCO đại diện cho một sản phẩm trong cửa hàng.
/// </summary>
public class Product
{
// Dấu ? cho biết thuộc tính này có thể là null (nullable).
public int ProductID { get; set; }
public required string Name { get; set; } // required đảm bảo thuộc tính này phải được khởi tạo
public required string Description { get; set; }
public decimal Price { get; set; }
public required string Category { get; set; }
// Thêm thuộc tính ImageUrl để lưu đường dẫn ảnh
public string? ImageUrl { get; set; }
}