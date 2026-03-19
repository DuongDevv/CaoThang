"""
Mục tiêu: Thực hành sử dụng f-string và .format() để tạo đầu ra có cấu trúc.
Bài tập: Tạo file formatted_output.py.
1. Tạo các biến đại diện cho thông tin sản phẩm: product_name, price, stock_quantity.
2. Sử dụng f-string để in thông tin sản phẩm với định dạng rõ ràng, căn chỉnh đẹp mắt (ví dụ: giá có 2 chữ số thập phân, số lượng căn lề phải).
3. Tạo các biến cho thông tin khách hàng: customer_name, order_id, order_total.
4. Sử dụng phương thức .format() để in một hóa đơn đơn giản, cũng có định dạng rõ ràng. 
"""

product_name = "Laptop Gaming X"
price = 1299.99
stock_quantity = 50
print("\n--- Bao cao san pham (F-string) ---")
print(f"Ten san pham: {product_name:<25}") 
customer_name = "Nguyen Van A"
order_id = "ORD-2025-001"
order_total = 2599.985
print("\n--- Hoa don mua hang (.format()) ---")
invoice_template = """
Hoa don so: {0}
Khach hang: {1:<20}
----------------------------------
Tong tien: ${2:,.2f}
Ngay: {3}
"""
from datetime import date
today = date.today().strftime("%Y-%m-%d")
print(invoice_template.format(order_id, customer_name, order_total, today)) 