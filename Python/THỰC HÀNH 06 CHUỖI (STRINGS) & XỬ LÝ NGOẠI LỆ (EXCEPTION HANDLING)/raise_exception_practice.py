"""
1. Viết hàm check_password(password): 
– Nếu mật khẩu rỗng, raise ValueError("Mật khẩu không được để trống."). 
– Nếu mật khẩu dưới 8 ký tự, raise ValueError("Mật khẩu phải có ít nhất 8 ký tự."). 
– Nếu mật khẩu không chứa ít nhất một chữ số, raise ValueError("Mật khẩu phải chứa ít nhất một chữ số."). 
– Nếu mật khẩu hợp lệ, in ra "Mật khẩu hợp lệ."
2. Sử dụng try-except để gọi hàm check_password với các mật khẩu khác nhau và bắt các ValueError tương ứng.
"""

def check_password(password):
 if not password:
    raise ValueError("Mat khau khong duoc de trong.")  
 if len(password) < 8:
    raise ValueError("Mat khau phai >= 8 ky tu.")  
 has_digit = False
 for char in password:
    if char.isdigit():
        has_digit = True
        break
 if not has_digit:
    raise ValueError("Mat khau phai chua it nhat 1 chu so.")
print("Mat khau hop le.")  

print("\n---Neu mat khau trong---")
try:
 check_password("")
except ValueError as e:
 print(f"Loi mat khau: {e}")

print("\n---Neu mat khau ngan---")
try:
 check_password("abc12")
except ValueError as e:
 print(f"Loi mat khau: {e}")

print("\n---Neu mat khau khong co chu so---")
try:
 check_password("abcdefgh")
except ValueError as e:
 print(f"loi mat khau: {e}")

print("\n---Neu mat khau hop le---")
try:
 check_password("MySecurePass123")
except ValueError as e:
 print(f"Loi mat khau: {e}") 