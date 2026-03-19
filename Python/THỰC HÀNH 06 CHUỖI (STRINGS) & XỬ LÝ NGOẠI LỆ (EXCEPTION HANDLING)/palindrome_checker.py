"""
Mục tiêu: Áp dụng kỹ thuật đảo ngược chuỗi và so sánh chuỗi.
Bài tập: Tạo file palindrome_checker.py.
1. Yêu cầu người dùng nhập một chuỗi.
2. Kiểm tra xem chuỗi đó có phải là Palindrome không (đọc xuôi hay đọc ngược đều
giống nhau, ví dụ: "madam", "level", "radar"). • Bỏ qua khoảng trắng và không phân biệt chữ hoa/thường khi kiểm tra.
3. In ra thông báo "Đây là Palindrome" hoặc "Đây không phải là Palindrome". 
"""

original_string = input("Nhap 1 chuoi de kiem tra Palindrome: ") 

normalized_string = original_string.lower().replace(" ", "") 
reversed_string = normalized_string[::-1]
if normalized_string == reversed_string:
 print(f"'{original_string}' la Palindrome.")
else:
 print(f"'{original_string}' khong phai la Palindrome.")