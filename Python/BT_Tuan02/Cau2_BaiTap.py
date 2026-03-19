password = input("Nhập mật khẩu: ")
do_dai_mat_khau = len(password) > 8
co_so = any(char.isdigit() for char in password)
co_chu_cai = any(char.isalpha() for char in password)
if do_dai_mat_khau and co_so and co_chu_cai:
    print("Mật khẩu hợp lệ! ")
else:
    print("Mật khẩu không hợp lệ!")
    if not do_dai_mat_khau: print("- Cần dài hơn 8 ký tự.")
    if not co_so: print("- Cần ít nhất 1 chữ số.")
    if not co_chu_cai: print("- Cần ít nhất 1 chữ cái.")