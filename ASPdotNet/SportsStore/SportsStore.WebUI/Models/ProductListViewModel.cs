using System.Collections.Generic;
using SportsStore.Domain;

namespace SportsStore.WebUI.Models
{
    public class ProductListViewModel
    {
        public IEnumerable<Product> Products { get; set; } = new List<Product>();
        public PagingInfo PagingInfo { get; set; } = new PagingInfo();
        public int? CurrentCategory { get; set; }
    }
}
