"""
1. Yêu cầu người dùng nhập một chuỗi.
2. Sử dụng kỹ thuật cắt chuỗi (slicing) để đảo ngược chuỗi đó.
3. In ra chuỗi đã đảo ngược. 
"""

print("===Dao nguoc chuoi===")
input_string = input("Nhap 1 chuoi bat ki: ")

reverse_string = input_string[::-1]

print(f"Chuoi ban dau: {input_string}")
print(f"Chuoi sau khi dao nguoc: {reverse_string}")
