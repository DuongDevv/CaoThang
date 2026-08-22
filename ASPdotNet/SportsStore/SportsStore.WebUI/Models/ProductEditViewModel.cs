using System.ComponentModel.DataAnnotations;

namespace SportsStore.WebUI.Models;

public class ProductEditViewModel
{
    public int ProductID { get; set; }

    [Required(ErrorMessage = "Vui lòng nhập tên sản phẩm")]
    [Display(Name = "Tên sản phẩm")]
    public string Name { get; set; } = string.Empty;

    [Required(ErrorMessage = "Vui lòng nhập mô tả")]
    [Display(Name = "Mô tả sản phẩm")]
    public string Description { get; set; } = string.Empty;

    [Required(ErrorMessage = "Vui lòng nhập giá sản phẩm")]
    [Range(0.01, double.MaxValue, ErrorMessage = "Giá phải lớn hơn 0")]
    [Display(Name = "Giá bán")]
    public decimal Price { get; set; }

    [Required(ErrorMessage = "Vui lòng chọn hoặc nhập danh mục")]
    [Display(Name = "Danh mục")]
    public string Category { get; set; } = string.Empty;

    [Display(Name = "Ảnh hiện tại")]
    public string? ExistingImageUrl { get; set; }
}
