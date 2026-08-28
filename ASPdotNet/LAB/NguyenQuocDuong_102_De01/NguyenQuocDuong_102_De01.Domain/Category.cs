using System.ComponentModel.DataAnnotations;

namespace NguyenQuocDuong_102_De01.Domain
{
    public class Category
    {
        [Key]
        public int CategoryId { get; set; }

        [Required(ErrorMessage = "Tên danh mục là bắt buộc.")]
        [StringLength(50, ErrorMessage = "Tên danh mục tối đa 50 ký tự.")]
        public string Name { get; set; } = string.Empty;
    }
}
