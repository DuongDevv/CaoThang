// Bài 1: Khai báo biến và in giá trị
const shopName = "TechsStore"
let totalProduct = 120;

console.log(`Tên cửa hàng là: ${shopName}`)
console.log(`Số sản phẩm của cửa hâng là: ${totalProduct}`)

// Bài 2: Hàm mũi tên (Arrow Function)
const calculatePrice = (price, quantity) => price * quantity;

console.log(calculatePrice(15000000, 2));


// Bài 3: Template Literals (Chuỗi bọc trong dấu ` `)
const nameProduct = "Laptop Dell"; 
const priceProduct = 18000000;

console.log(`${nameProduct} co gia ${priceProduct} VND.`);


// Bài 4: Destructuring Object (Phá vỡ cấu trúc)
const product = {
  id: 1,
  name: "iPhone 16",
  price: 24000000,
  brand: "Apple"
};

const { name, price } = product;
console.log(`Name: ${name}`);
console.log(`Price: ${price}`);


// Bài 5: Spread Operator (...) để sao chép và thêm thuộc tính
const phone = {
  name: "Galaxy S25",
  price: 25000000
};

// Tạo object mới kết hợp dữ liệu cũ và thuộc tính mới
const updatedPhone = {
  ...phone,
  category: "Smartphone",
  stock: 10
};

console.log(updatedPhone);


// Bài 6: Phương thức map() với Index
const productsList = ["iPhone", "Galaxy", "Xiaomi", "OPPO"];

productsList.map((item, index) => {
  console.log(`${index + 1}. ${item}`);
});


// Bài 7: Phương thức filter()
const prices = [12000000, 8000000, 35000000, 9000000, 25000000];

const highPrices = prices.filter(p => p >= 10000000);
highPrices.forEach(p => console.log(p));


// Bài 8: Phương thức find()
const productsFind = [
  { id: 1, name: "Macbook Air" },
  { id: 2, name: "ThinkPad" },
  { id: 3, name: "ROG" }
];

const foundProduct = productsFind.find(item => item.id === 2);
console.log(foundProduct);


// Bài 9: Kết hợp Destructuring và map()
const laptops = [
  { id: 1, name: "Dell", price: 20000000 },
  { id: 2, name: "HP", price: 18000000 }
];

laptops.map(({ name, price }) => {
  console.log(name);
  console.log(price.toLocaleString('vi-VN')); 
});


// Bài 10: Tổng hợp các phương thức xử lý mảng
const products = [
  { id: 1, name: "iPhone 16", price: 24000000, brand: "Apple" },
  { id: 2, name: "Galaxy S25", price: 22000000, brand: "Samsung" },
  { id: 3, name: "Xiaomi 15", price: 15000000, brand: "Xiaomi" }
];

// 1. Hiển thị toàn bộ danh sách
console.log("1. Toàn bộ danh sách:");
console.log(products);

// 2. Tìm các sản phẩm của Samsung
console.log("\n2. Sản phẩm của Samsung:");
const samsungProducts = products.filter(p => p.brand === "Samsung");
console.log(samsungProducts);

// 3. Lấy các sản phẩm có giá trên 20 triệu
console.log("\n3. Sản phẩm giá trên 20 triệu:");
const expensiveProducts = products.filter(p => p.price > 20000000);
console.log(expensiveProducts);

// 4. Tạo mảng mới chỉ gồm tên sản phẩm
console.log("\n4. Mảng chỉ gồm tên sản phẩm:");
const productNames = products.map(p => p.name);
console.log(productNames);

// 5. Thêm thuộc tính discount: 10 cho tất cả sản phẩm
console.log("\n5. Thêm thuộc tính discount bằng Spread Operator:");
const discountedProducts = products.map(p => ({
  ...p,
  discount: 10
}));
console.log(discountedProducts);