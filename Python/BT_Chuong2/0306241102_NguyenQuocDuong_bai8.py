import math
a = int(input("nhap vao bieu thuc a: "))
b = int(input("nhap vao bieu thuc b: "))
c = int(input("nhap vao bieu thuc c: "))

tt= (-b+math.sqrt(pow(b,2)-(4*a*c)))/(2*a)

print(f"Ket qua cua bieu thuc toan hoc la: {tt}") 