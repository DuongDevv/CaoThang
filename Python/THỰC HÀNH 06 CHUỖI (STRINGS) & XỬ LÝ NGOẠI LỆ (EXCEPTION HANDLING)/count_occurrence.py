"""
Mục tiêu: Kết hợp vòng lặp (for), điều kiện và các phương thức chuỗi (lower(), split()).
Bài tập: Tạo file count_occurrence.py.
1. Yêu cầu người dùng nhập một chuỗi văn bản.
2. Yêu cầu người dùng nhập một ký tự hoặc một từ cần đếm.
3. Đếm số lần xuất hiện của ký tự/từ đó trong chuỗi (không phân biệt chữ hoa/thường). 4. In ra kết quả.
"""

text = input("Nhap 1 chuoi/ tu bat ki: ")
text_Search = input("Nhap ky tu ma ban muon dem: ")

if(text==""):
    while(text==""):
        text = input("Nhap 1 chuoi/ tu bat ki (Khong duoc de trong): ")
        text_Search = input("Nhap ky tu ma ban muon dem (Khong duoc de trong): ")

text_lower = text.lower()
text_Search_lower = text_Search.lower()

count = 0
if len(text_Search_lower)==1:
    for char in text_lower:
        if char == text_Search_lower:
            count+=1
    print(f"ky tu `{text_Search}` xuat hien {count} lan trong chuoi `{text}`")
else:
    words = text_lower.split()
    for word in words:
        if word == text_Search_lower:
            count+=1
        print(f"ky tu `{text_Search}` xuat hien {count} lan trong chuoi `{text}`")

