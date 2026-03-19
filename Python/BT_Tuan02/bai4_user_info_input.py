from datetime import datetime
now = datetime.now()
current_year = now.year
print("=====NHAP THONG TIN CA NHAN=====")
ho_ten = str(input("Nhap ho ten: "))
so_tuoi = int(input("Nhap so tuoi: "))
chieu_cao= float(input("Nhap chieu cao(m): "))

print("===THONG TIN CUA BAN===")
print(f"Ho ten: {ho_ten}, kieu du lieu = {type(ho_ten)}")
print(f"So tuoi: {so_tuoi}, kieu du lieu = {type(so_tuoi)}")
print(f"Chieu cao: {chieu_cao}, kieu du lieu = {type(chieu_cao)}")
print(f"Nam sinh la: {current_year - so_tuoi}")