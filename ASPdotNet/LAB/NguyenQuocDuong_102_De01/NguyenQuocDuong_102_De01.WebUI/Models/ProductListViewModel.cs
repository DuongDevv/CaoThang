using System.Collections.Generic;
using NguyenQuocDuong_102_De01.Domain;

namespace NguyenQuocDuong_102_De01.WebUI.Models
{
    public class ProductListViewModel
    {
        public IEnumerable<Product> Products { get; set; } = new List<Product>();
        public PagingInfo PagingInfo { get; set; } = new PagingInfo();
        public int? CurrentCategory { get; set; }
    }
}
