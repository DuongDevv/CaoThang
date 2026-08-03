using SportsStore.Domain;

namespace SportsStore.WebUI.Models;

// Lớp đại diện cho MỘT DÒNG SẢN PHẨM trong giỏ hàng
public class CartLine
{
    public int CartLineId { get; set; }
    
    // Khởi tạo Product với các thuộc tính required để tránh lỗi CS9035
    public Product Product { get; set; } = new Product 
    { 
        Name = string.Empty, 
        Description = string.Empty, 
        Category = string.Empty 
    };
    
    public int Quantity { get; set; }
}

// Lớp đại diện cho TOÀN BỘ GIỎ HÀNG
public class Cart
{
    public List<CartLine> Lines { get; set; } = new List<CartLine>();

    // Thêm sản phẩm vào giỏ (nếu có rồi thì cộng dồn số lượng)
    public virtual void AddItem(Product product, int quantity)
    {
        CartLine? line = Lines.FirstOrDefault(p => p.Product.ProductID == product.ProductID);

        if (line == null)
        {
            Lines.Add(new CartLine { Product = product, Quantity = quantity });
        }
        else
        {
            line.Quantity += quantity;
        }
    }

    // Xóa một dòng sản phẩm khỏi giỏ dựa trên ProductID
    public virtual void RemoveLine(Product product) =>
        Lines.RemoveAll(l => l.Product.ProductID == product.ProductID);

    // Tính tổng số tiền của toàn bộ giỏ hàng
    public decimal ComputeTotalValue() =>
        Lines.Sum(e => e.Product.Price * e.Quantity);

    // Xóa sạch tất cả sản phẩm trong giỏ hàng
    public virtual void Clear() => Lines.Clear();
}