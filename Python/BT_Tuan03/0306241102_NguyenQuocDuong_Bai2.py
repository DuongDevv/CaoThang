"""Xây dựng máy tính đơn giản 4 phép toán.
 Dùng if/elif/else để thực hiện phép tính dựa trên toán tử nhập vào."""


a = float(input("Nhap vao so thu nhat: "))
b = float(input("Nhap vao so thu hai: "))
operator = input("Nhap phep tinh (+, -, *, /): ")
if operator("+"):print (f"tong la: {a+b}")
elif operator("-"):print(f"hieu la: {a-b}")
elif operator("*"):print(f"tich la: {a*b}")
elif operator("/"):print(f"thuong la: {a/b}")