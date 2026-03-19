"""Viết chương trình đọc một file. 
Sử dụng try/except FileNotFoundError để xử lý nếu file không tồn tại. """

path_to_file = input("Nhap duong den file ban muon: ")

try:
    with open (path_to_file, "r",encoding="utf-8") as file:
        noi_dung = file.read()
        print("Noi dung file: ")
        print(noi_dung)
except FileNotFoundError:
    print(f"Loi! Khong tim thay file'{path_to_file}'. Vui long kiem tra lai duong dan.")
except Exception as e:
    print(f"Da xay ra loi khac: {e}")
