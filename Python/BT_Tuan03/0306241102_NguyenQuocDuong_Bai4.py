"""Viết hàm tính căn bậc hai. 
Dùng try/except để bắt lỗi nếu người dùng nhập số âm, sau đó dùng raise ValueError để báo lỗi tùy chỉnh. """


import math 
so = float(input("Nhap vao 1 so: "))
def tinh_can_bac_hai(so):
    try:
        so_nhap = float(so)      
        if so_nhap < 0:
            raise ValueError("Không thể tính căn bậc hai của số âm trong tập hợp số thực. Vui long nhap lai.")
        ket_qua = math.sqrt(so_nhap) 
        return ket_qua  
    except ValueError as e:
        print(f"Lỗi: {e}")
        return None
    except Exception as e:
        print(f"Đã xảy ra một lỗi không xác định: {e}")
        return None

print(f"Can bac 2 cua {so} la: {tinh_can_bac_hai(so)}")

