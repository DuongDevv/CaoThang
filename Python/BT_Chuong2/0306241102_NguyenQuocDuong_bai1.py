import decimal
PI = 3.14
r = float(input("Nhap vao ban kinh hinh tron: "))

chuVi = decimal.Decimal(2*PI*r)
dienTich = decimal.Decimal(PI*(r**2))

print(f"Chu vi hinh tron la: {chuVi}")
print(f"Dien tich hinh tron la: {dienTich}")