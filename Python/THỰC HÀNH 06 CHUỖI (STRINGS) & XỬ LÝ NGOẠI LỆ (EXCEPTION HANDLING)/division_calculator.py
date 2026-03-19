"""
Mục tiêu: Thực hành try-except với các lỗi phổ biến.
Bài tập: Tạo file division_calculator.py.
1. Yêu cầu người dùng nhập tử số và mẫu số.
2. Sử dụng khối try-except để: 
• Bắt lỗi ValueError nếu người dùng nhập chữ thay vì số. 
• Bắt lỗi ZeroDivisionError nếu người dùng nhập mẫu số là 0. 
• Trong trường hợp không có lỗi, in kết quả phép chia. 
• Sử dụng một except chung để bắt các lỗi không mong muốn khác. 
"""

try:
 numerator_str = input("Nhap tu so: ")
 numerator = float(numerator_str)   
 denominator_str = input("Nhap mau so: ")
 denominator = float(denominator_str)
 result = numerator / denominator
 print(f"Ket Qua phep chia: {result}")
except ValueError:
 print("Loi! Du lieu nhap khong hop le. Hay nhap lai!") 
except ZeroDivisionError:
 print("Loi! Khong the chia cho 0.")
except Exception as e: 
 print(f"Da xay ra loi: {e}") 