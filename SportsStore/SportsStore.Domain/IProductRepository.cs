// SportsStore.Domain/IProductRepository.cs
namespace SportsStore.Domain;
/// <summary>
/// Interface (hợp đồng) định nghĩa các hoạt động liên quan đến kho sản phẩm.
/// Bất kỳ lớp nào muốn làm việc với dữ liệu sản phẩm đều phải tuân thủ hợp đồng này.
/// </summary>
public interface IProductRepository
{
// IQueryable cho phép xây dựng các truy vấn phức tạp hơn (sắp xếp, lọc)
// trước khi thực sự lấy dữ liệu. Nó linh hoạt hơn IEnumerable.
IQueryable<Product> Products { get; }
}