namespace SportsStore.Domain;

/// <summary>
/// Interface (hợp đồng) định nghĩa các hoạt động liên quan đến kho sản phẩm.
/// </summary>
public interface IProductRepository
{
    IQueryable<Product> Products { get; }
    void SaveProduct(Product product);
    Product? DeleteProduct(int productID);
}
