"""
Mục tiêu: Kết hợp nhiều phương thức chuỗi để làm sạch và định dạng dữ liệu.
Bài tập: Tạo file string_normalizer.py.
1. Yêu cầu người dùng nhập một chuỗi có thể có khoảng trắng thừa ở đầu/cuối hoặc
giữa, và chữ hoa/thường lộn xộn.
2. Viết hàm normalize_string(input_str): 
– Xóa tất cả các khoảng trắng thừa ở đầu, cuối và giữa các từ (ví dụ: " hello world "
thành "hello world"). 
– Chuyển đổi chuỗi thành dạng "title case" (chữ cái đầu mỗi từ viết hoa, các chữ còn lại
viết thường). 
– Trả về chuỗi đã chuẩn hóa.
3. Gọi hàm và in ra chuỗi đã chuẩn hóa. 
"""

print("--- CHUẨN HÓA CHUỖI ---")
def normalize_string(input_str):
    words = input_str.strip().split()

    cleaned_string = " ".join(words)

    normalized = cleaned_string.title()
    return normalized
test_string = " hELLO pythON PROGRAMMING "
normalized_result = normalize_string(test_string)
print(f"Chuoi goc: '{test_string}'")
print(f"Chuoi sau khi chuan hoa chuan hoa: '{normalized_result}'") 
