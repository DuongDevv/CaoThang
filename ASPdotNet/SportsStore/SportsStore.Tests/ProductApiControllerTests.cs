using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Moq;
using SportsStore.Domain;
using SportsStore.WebUI.Controllers.Api;
using Xunit;

namespace SportsStore.Tests
{
    public class ProductApiControllerTests
    {
        [Fact]
        public void Can_Paginate_Products_Via_Api()
        {
            // Arrange (Giả lập Repository với Moq)
            Mock<IProductRepository> mockRepo = new Mock<IProductRepository>();
            mockRepo.Setup(m => m.Products).Returns(new Product[]
            {
                new Product { ProductID = 1, Name = "P1", CategoryId = 1, Price = 100 },
                new Product { ProductID = 2, Name = "P2", CategoryId = 1, Price = 200 },
                new Product { ProductID = 3, Name = "P3", CategoryId = 2, Price = 300 },
                new Product { ProductID = 4, Name = "P4", CategoryId = 2, Price = 400 },
                new Product { ProductID = 5, Name = "P5", CategoryId = 1, Price = 500 }
            }.AsQueryable());

            ProductsApiController controller = new ProductsApiController(mockRepo.Object);

            // Act: Lấy trang 1 với pageSize = 3
            var result = controller.GetProducts(categoryId: null, page: 1, pageSize: 3) as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
        }

        [Fact]
        public void Can_Filter_Products_By_Category_Via_Api()
        {
            // Arrange
            Mock<IProductRepository> mockRepo = new Mock<IProductRepository>();
            mockRepo.Setup(m => m.Products).Returns(new Product[]
            {
                new Product { ProductID = 1, Name = "Bóng đá A", CategoryId = 1, Price = 100 },
                new Product { ProductID = 2, Name = "Giày cầu lông B", CategoryId = 2, Price = 200 }
            }.AsQueryable());

            ProductsApiController controller = new ProductsApiController(mockRepo.Object);

            // Act
            var result = controller.GetProducts(categoryId: 1, page: 1, pageSize: 10) as OkObjectResult;

            // Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
        }
    }
}
