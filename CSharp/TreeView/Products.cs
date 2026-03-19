using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bai01
{
    public class Product
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public string ImageFileName { get; set; } 
        public string Category {  get; set; }

        public Product(string name, decimal price, string desc, string imgName, string category)
        {
            Name = name;
            Price = price;
            Description = desc;
            ImageFileName = imgName;
            Category = category;
        }
    }
}
