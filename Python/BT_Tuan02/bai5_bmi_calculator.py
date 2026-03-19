print("Vui long nhap can nang(kg) va chieu cao(m):")
can_nang = float(input("Nhap can nang cua ban: "))
chieu_cao = float(input("Nhap chieu cao cua ban: "))
BMI = can_nang/chieu_cao**2

print(f"Chi so BMI(Body Mass Index) cua ban la: {BMI}")