"""Tạo một Package có tên là math_package chứa hai Module (geometry.py và algebra.py).
 geometry.py chứa hàm tính diện tích, algebra.py chứa hàm giải phương trình bậc nhất.
 Import và sử dụng chúng trong file chính. """


from math_package.algebra import tinh_dien_tich_hcn
from math_package.geometry import giai_pt_bac_nhat
print("Nhap vao cac so de tinh PT: ax + b = 0 va dien tich hcn: S = a * b")
a = float(input("Nhap vao a:"))
b = float(input("nhap vao b:"))
print(f"Dien tich hinh chu nhat la: {tinh_dien_tich_hcn(a,b)}")
print(f"Dap an phuong trinh bac nhat la: {giai_pt_bac_nhat(a,b)}")


