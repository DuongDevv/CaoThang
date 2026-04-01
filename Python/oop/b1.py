class Book:
    def __init__(self, title, author, price, discount_rate=0.1):
        self.title = title
        self.author = author
        self.price = price
        # Thuộc tính private: tỷ lệ giảm giá
        self.__discount_rate = discount_rate

    def get_discounted_price(self):
        """Tính giá sau khi giảm"""
        return self.price * (1 - self.__discount_rate)

    def display_info(self):
        print(f"Sách: {self.title:<20} | Tác giả: {self.author:<15}")
        print(f"  + Giá gốc: {self.price:,} VNĐ")
        print(f"  + Giá sau giảm ({self.__discount_rate*100}%): {self.get_discounted_price():,} VNĐ")

    def __str__(self):
        return f"{self.title} - {self.author} ({self.get_discounted_price():,} VNĐ)"

class Ebook(Book):
    def __init__(self, title, author, price, file_size, discount_rate=0.1):
        # Gọi hàm khởi tạo của lớp cha Book
        super().__init__(title, author, price, discount_rate)
        self.file_size = file_size

    def display_info(self):
        # Ghi đè phương thức: dùng lại của cha và thêm đặc thù Ebook
        super().display_info()
        print(f"  + Định dạng: Ebook | Dung lượng: {self.file_size} MB")

class Library:
    def __init__(self):
        self.books = []

    def add_book(self, book):
        if isinstance(book, Book):
            self.books.append(book)
        else:
            print("Chỉ có thể thêm đối tượng Book hoặc Ebook!")

    def list_books(self):
        print("\n--- DANH SÁCH THƯ VIỆN ---")
        for i, b in enumerate(self.books, 1):
            print(f"{i}. {b}")


# 1. Tạo đối tượng
b1 = Book("Đắc Nhân Tâm", "Dale Carnegie", 120000, 0.2) # Giảm 20%
e1 = Ebook("Lập trình Python", "Guido", 200000, 15.5, 0.1) # Giảm 10%

# 2. Hiển thị chi tiết (Dùng display_info)
print("CHI TIẾT TỪNG CUỐN:")
b1.display_info()
e1.display_info()

# 3. Quản lý bằng Library
my_lib = Library()
my_lib.add_book(b1)
my_lib.add_book(e1)
my_lib.list_books()
